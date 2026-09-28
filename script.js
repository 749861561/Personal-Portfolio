document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-nav]");

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
};

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const nextState = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(nextState));
    navigation.classList.toggle("is-open", nextState);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealItems = document.querySelectorAll("[data-reveal]");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll("[data-image-frame]").forEach((frame) => {
  const image = frame.querySelector("img");
  if (!image) return;

  const markLoaded = () => frame.classList.add("is-loaded");
  const markFailed = () => frame.classList.add("has-error");

  if (image.complete) {
    image.naturalWidth > 0 ? markLoaded() : markFailed();
  } else {
    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", markFailed, { once: true });
  }
});

const partnerRail = document.querySelector("[data-partner-rail]");
const partnerFlow = document.querySelector("[data-partner-flow]");
const partnerCards = partnerRail ? [...partnerRail.querySelectorAll(".partner-logo-card")] : [];

if (partnerRail && partnerFlow && !reduceMotion) {
  let pointerFrame = 0;
  let baseShift = 0;
  let dragStartX = 0;
  let dragStartShift = 0;
  let isDragging = false;

  const setPartnerShift = (nextShift) => {
    baseShift = Math.max(-180, Math.min(180, nextShift));
    partnerFlow.style.setProperty("--partner-shift", `${baseShift}px`);
  };

  const updateLogoResponse = (clientX) => {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      partnerCards.forEach((card) => {
        const bounds = card.getBoundingClientRect();
        const distance = Math.abs(clientX - (bounds.left + bounds.width / 2));
        const influence = Math.max(0, 1 - distance / 260);
        card.style.setProperty("--logo-lift", `${influence * -14}px`);
        card.style.setProperty("--logo-scale", String(1 + influence * .045));
        card.classList.toggle("is-near", influence > .45);
      });
    });
  };

  const resetLogoResponse = () => {
    partnerCards.forEach((card) => {
      card.style.removeProperty("--logo-lift");
      card.style.removeProperty("--logo-scale");
      card.classList.remove("is-near");
    });
  };

  partnerRail.addEventListener("pointerdown", (event) => {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartShift = baseShift;
    partnerRail.classList.add("is-dragging");
    partnerRail.setPointerCapture(event.pointerId);
  });

  partnerRail.addEventListener("pointermove", (event) => {
    updateLogoResponse(event.clientX);
    if (isDragging) {
      setPartnerShift(dragStartShift + (event.clientX - dragStartX));
      return;
    }
    const bounds = partnerRail.getBoundingClientRect();
    const pointerRatio = (event.clientX - bounds.left) / bounds.width - .5;
    setPartnerShift(pointerRatio * -90);
  });

  const finishPartnerDrag = (event) => {
    if (!isDragging) return;
    isDragging = false;
    partnerRail.classList.remove("is-dragging");
    if (partnerRail.hasPointerCapture(event.pointerId)) partnerRail.releasePointerCapture(event.pointerId);
  };

  partnerRail.addEventListener("pointerup", finishPartnerDrag);
  partnerRail.addEventListener("pointercancel", finishPartnerDrag);
  partnerRail.addEventListener("pointerleave", () => {
    if (!isDragging) {
      setPartnerShift(0);
      resetLogoResponse();
    }
  });
  partnerRail.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    setPartnerShift(baseShift + (event.key === "ArrowLeft" ? 56 : -56));
  });
}

const initTargetCursor = () => {
  const canUseTargetCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion;
  if (!canUseTargetCursor) return;

  const targetSelectors = [
    "a",
    "button",
    ".hero-tags li",
    ".showcase-card",
    ".work-index-card",
    ".partner-logo-card",
    "[data-partner-rail]",
    ".end-mascot",
  ];

  document.querySelectorAll(targetSelectors.join(",")).forEach((target) => {
    target.classList.add("cursor-target");
  });

  const cursor = document.createElement("div");
  cursor.className = "target-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `
    <span class="target-cursor-dot"></span>
    <span class="target-cursor-spinner">
      <i class="target-cursor-corner is-top-left"></i>
      <i class="target-cursor-corner is-top-right"></i>
      <i class="target-cursor-corner is-bottom-right"></i>
      <i class="target-cursor-corner is-bottom-left"></i>
    </span>
  `;
  document.body.append(cursor);
  document.documentElement.classList.add("has-target-cursor");

  const corners = [...cursor.querySelectorAll(".target-cursor-corner")];
  const targetSelector = ".cursor-target";
  const cornerSize = 12;
  const borderOffset = 4;
  const hoverDuration = 200;
  const parallaxStrength = 2.5;
  const defaultCorners = [
    { x: -18, y: -18 },
    { x: 6, y: -18 },
    { x: 6, y: 6 },
    { x: -18, y: 6 },
  ];

  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let activeTarget = null;
  let moveFrame = 0;
  let targetFrame = 0;

  const setCornerPosition = (corner, x, y) => {
    corner.style.setProperty("--corner-x", `${x}px`);
    corner.style.setProperty("--corner-y", `${y}px`);
  };

  const resetCorners = () => {
    defaultCorners.forEach((position, index) => {
      setCornerPosition(corners[index], position.x, position.y);
    });
  };

  const clearTarget = () => {
    activeTarget = null;
    cursor.classList.remove("is-targeting");
    resetCorners();
    cancelAnimationFrame(targetFrame);
  };

  const updateTargetCorners = () => {
    if (!activeTarget) return;

    const elementUnderPointer = document.elementFromPoint(pointerX, pointerY);
    if (!elementUnderPointer || !activeTarget.contains(elementUnderPointer)) {
      clearTarget();
      return;
    }

    const rect = activeTarget.getBoundingClientRect();
    const relativeX = rect.width ? (pointerX - rect.left) / rect.width - 0.5 : 0;
    const relativeY = rect.height ? (pointerY - rect.top) / rect.height - 0.5 : 0;
    const parallaxX = relativeX * parallaxStrength;
    const parallaxY = relativeY * parallaxStrength;
    const positions = [
      { x: rect.left - borderOffset + parallaxX, y: rect.top - borderOffset + parallaxY },
      { x: rect.right + borderOffset - cornerSize + parallaxX, y: rect.top - borderOffset + parallaxY },
      { x: rect.right + borderOffset - cornerSize + parallaxX, y: rect.bottom + borderOffset - cornerSize + parallaxY },
      { x: rect.left - borderOffset + parallaxX, y: rect.bottom + borderOffset - cornerSize + parallaxY },
    ];

    positions.forEach((position, index) => {
      setCornerPosition(corners[index], position.x - pointerX, position.y - pointerY);
    });
    targetFrame = requestAnimationFrame(updateTargetCorners);
  };

  const setTarget = (target) => {
    if (!target || target === activeTarget) return;
    activeTarget = target;
    cursor.classList.add("is-targeting");
    corners.forEach((corner) => {
      corner.style.transitionDuration = `${hoverDuration}ms`;
    });
    cancelAnimationFrame(targetFrame);
    updateTargetCorners();
  };

  resetCorners();

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    const hoveredTarget = event.target instanceof Element ? event.target.closest(targetSelector) : null;
    if (hoveredTarget) setTarget(hoveredTarget);
    else if (activeTarget) clearTarget();
    cancelAnimationFrame(moveFrame);
    moveFrame = requestAnimationFrame(() => {
      cursor.style.setProperty("--cursor-x", `${pointerX}px`);
      cursor.style.setProperty("--cursor-y", `${pointerY}px`);
      cursor.classList.add("is-visible");
    });
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    setTarget(event.target.closest(targetSelector));
  }, { passive: true });

  document.addEventListener("pointerout", (event) => {
    if (!activeTarget) return;
    const nextTarget = event.relatedTarget;
    if (nextTarget && activeTarget.contains(nextTarget)) return;
    if (!nextTarget || !activeTarget.contains(nextTarget)) clearTarget();
  }, { passive: true });

  window.addEventListener("pointerdown", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    cursor.classList.add("is-pressed");
  }, { passive: true });

  window.addEventListener("pointerup", () => cursor.classList.remove("is-pressed"), { passive: true });
  document.documentElement.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
  document.documentElement.addEventListener("mouseenter", () => cursor.classList.add("is-visible"));
};

initTargetCursor();

// Work experience: native reading surface with optional, visible-only autoplay.
const experienceViewport = document.querySelector('[data-experience-viewport]');
if (experienceViewport) {
  const section = experienceViewport.closest('.experience-timeline');
  const entries = [...experienceViewport.querySelectorAll('.experience-entry')];
  const steps = [...section.querySelectorAll('[data-experience-step]')];
  const toggle = section.querySelector('[data-experience-toggle]');
  const count = section.querySelector('[data-experience-count]');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileExperience = window.matchMedia('(max-width: 767px)');
  let paused = motionPreference.matches;
  let visible = false;
  let frame = 0;
  let previousTime = 0;
  let waitUntil = performance.now() + 5000;
  let position = 0;
  let maximum = 0;
  let offsets = [];
  let current = 0;

  const updateProgress = () => {
    const top = experienceViewport.scrollTop;
    current = Math.max(0, offsets.findLastIndex((offset) => top >= offset - 1));
    steps.forEach((step, index) => {
      const end = index === steps.length - 1 ? maximum : offsets[index + 1];
      const progress = Math.max(0, Math.min(1, (top - offsets[index]) / Math.max(1, end - offsets[index])));
      step.style.setProperty('--progress', String(progress));
      if (index === current) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
    count.textContent = String(current + 1).padStart(2, '0');
  };
  const measure = () => {
    offsets = entries.map((entry) => entry.offsetTop);
    maximum = Math.max(0, experienceViewport.scrollHeight - experienceViewport.clientHeight);
    position = experienceViewport.scrollTop;
    updateProgress();
  };
  const renderToggle = () => {
    toggle.dataset.paused = String(paused);
    toggle.setAttribute('aria-label', paused ? '开始自动播放' : '暂停自动播放');
  };
  const canPlay = () => !mobileExperience.matches && !paused && visible && !document.hidden;
  const tick = (now) => {
    frame = 0;
    if (!canPlay()) { previousTime = 0; return; }
    const elapsed = previousTime ? Math.min(now - previousTime, 64) : 0;
    previousTime = now;
    if (now >= waitUntil && maximum > 0) {
      if (position >= maximum - .5) {
        position = 0;
        experienceViewport.scrollTop = 0;
        waitUntil = now + 5000;
      } else {
        const next = Math.min(maximum, position + elapsed * .022);
        const nextChapter = offsets.find((offset) => offset > position + .5 && offset <= next);
        position = nextChapter ?? next;
        experienceViewport.scrollTop = position;
        if (nextChapter !== undefined || position >= maximum - .5) waitUntil = now + 6500;
      }
    }
    frame = requestAnimationFrame(tick);
  };
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    if (canPlay()) frame = requestAnimationFrame(tick);
  };
  const pause = () => { paused = true; renderToggle(); schedule(); };

  const syncExperienceLayout = () => {
    const mobile = mobileExperience.matches;
    experienceViewport.scrollTop = 0;
    if (mobile) experienceViewport.removeAttribute('tabindex');
    else experienceViewport.setAttribute('tabindex', '0');
    experienceViewport.setAttribute('aria-label', mobile ? '工作经历，点击查看更多展开详情' : '工作经历，可上下滚动浏览');
    entries.forEach(entry => {
      const button = entry.querySelector('.experience-expand');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      entry.querySelector('.experience-content').hidden = mobile && !expanded;
    });
    measure();
    schedule();
  };
  entries.forEach(entry => {
    const button = entry.querySelector('.experience-expand');
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      button.innerHTML = `${expanded ? '收起详情' : '查看更多'} <span aria-hidden="true">${expanded ? '−' : '＋'}</span>`;
      entry.querySelector('.experience-content').hidden = !expanded;
    });
  });
  mobileExperience.addEventListener('change', syncExperienceLayout);
  syncExperienceLayout();

  experienceViewport.addEventListener('scroll', updateProgress, { passive: true });
  experienceViewport.addEventListener('wheel', pause, { passive: true });
  experienceViewport.addEventListener('touchstart', pause, { passive: true });
  experienceViewport.addEventListener('focusin', pause);
  experienceViewport.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) pause();
  });
  steps.forEach((step, index) => step.addEventListener('click', () => {
    pause();
    experienceViewport.scrollTo({ top: offsets[index], behavior: motionPreference.matches ? 'instant' : 'smooth' });
  }));
  toggle.addEventListener('click', () => {
    paused = !paused;
    position = experienceViewport.scrollTop;
    waitUntil = performance.now() + 1500;
    renderToggle();
    schedule();
  });
  new IntersectionObserver(([entry]) => {
    const wasVisible = visible;
    visible = entry.isIntersecting && entry.intersectionRatio >= .6;
    if (visible && !wasVisible) waitUntil = performance.now() + 5000;
    schedule();
  }, { threshold: [0, .6] }).observe(section);
  new ResizeObserver(measure).observe(experienceViewport);
  new ResizeObserver(measure).observe(experienceViewport.querySelector('.experience-flow'));
  document.addEventListener('visibilitychange', schedule);
  motionPreference.addEventListener('change', () => { if (motionPreference.matches) pause(); });
  document.fonts.ready.then(measure);
  measure();
  renderToggle();
}

// Featured work: native scrolling and explicit browsing controls.
(() => {
  const section = document.querySelector('.home-selected');
  if (!section) return;
  const gallery = section.querySelector('.selected-grid');
  const cards = [...gallery.querySelectorAll('.selected-card')];
  if (!cards.length) { section.hidden = true; return; }
  const previous = section.querySelector('[data-selected-prev]');
  const next = section.querySelector('[data-selected-next]');
  const range = section.querySelector('.selected-range');
  const controls = section.querySelector('.selected-controls');
  const mobileLayout = window.matchMedia('(max-width: 767px)');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const measure = () => {
    const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    const count = Math.max(1, Math.round((gallery.clientWidth - 12 + gap) / step));
    const first = Math.min(cards.length - 1, Math.max(0, Math.round(gallery.scrollLeft / step)));
    return { step, count, first };
  };
  const updateControls = () => {
    controls.hidden = mobileLayout.matches;
    gallery.setAttribute('aria-label', mobileLayout.matches ? '精选作品' : '精选作品，可横向滚动浏览');
    if (mobileLayout.matches) return;
    const { count, first } = measure();
    previous.disabled = gallery.scrollLeft <= 2;
    next.disabled = gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 2;
    const start = String(first + 1).padStart(2, '0');
    const end = String(Math.min(first + count, cards.length)).padStart(2, '0');
    const label = `${count === 1 ? start : `${start}–${end}`} / ${String(cards.length).padStart(2, '0')}`;
    if (range.textContent !== label) range.textContent = label;
  };
  const browse = direction => {
    const { step, count, first } = measure();
    gallery.scrollTo({ left: (first + direction * count) * step, behavior: motion.matches ? 'instant' : 'smooth' });
  };
  previous.addEventListener('click', () => browse(-1));
  next.addEventListener('click', () => browse(1));
  gallery.addEventListener('scroll', updateControls, { passive: true });
  new ResizeObserver(updateControls).observe(gallery);
  mobileLayout.addEventListener('change', () => {
    gallery.scrollTo({ left: 0, behavior: 'instant' });
    updateControls();
  });
  updateControls();
})();
