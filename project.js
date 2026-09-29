(() => {
  const projects = (window.FOLIO_PROJECTS || []).filter(project => !project.hidden);
  const requestedId = new URLSearchParams(window.location.search).get("project");
  const currentIndex = requestedId === null ? 0 : projects.findIndex((item) => item.id === requestedId);
  const project = projects[currentIndex];
  if (!project) {
    document.title = "Project not found | Folio";
    document.getElementById("project-message").hidden = false;
    return;
  }

  const hasSunpowerIntro = project.id === "southbank-signals" && project.contentMode !== "image";
  const root = document.getElementById("project");
  const title = document.getElementById("project-title");
  const scroller = document.getElementById("project-scroll");
  document.getElementById("viewer-title").textContent = project.name;
  document.getElementById("viewer-category").textContent = project.category;
  document.querySelector(".viewer-heading").hidden = false;
  const actions = document.querySelector(".project-actions");
  const menuToggle = document.querySelector(".viewer-menu-toggle");
  const contactAction = document.querySelector(".contact-action");
  const contactTooltip = document.getElementById("contact-tooltip");
  const mobileActions = window.matchMedia("(max-width: 767px)");
  let menuOpen = false;

  const setContactOpen = (open) => {
    contactAction.classList.toggle("is-contact-open", open);
    if (mobileActions.matches) contactAction.setAttribute("aria-expanded", String(open));
  };
  const setMenuOpen = (open, restoreFocus = false) => {
    menuOpen = mobileActions.matches && open;
    actions.hidden = mobileActions.matches && !menuOpen;
    menuToggle.setAttribute("aria-expanded", String(menuOpen));
    menuToggle.setAttribute("aria-label", menuOpen ? "收起作品菜单" : "打开作品菜单");
    if (!menuOpen) {
      setContactOpen(false);
      contactAction.classList.remove("is-tooltip-dismissed");
    }
    if (restoreFocus) menuToggle.focus({ preventScroll: true });
  };
  const syncActionLayout = () => {
    const mobile = mobileActions.matches;
    const focusWasInActions = actions.contains(document.activeElement);
    const focusWasOnToggle = document.activeElement === menuToggle;
    menuToggle.hidden = !mobile;
    contactTooltip.setAttribute("role", mobile ? "region" : "tooltip");
    contactTooltip.setAttribute("aria-label", "联系方式");
    if (mobile) {
      contactAction.setAttribute("role", "button");
      contactAction.setAttribute("aria-label", "查看联系方式");
    } else {
      contactAction.removeAttribute("role");
      contactAction.removeAttribute("aria-expanded");
      contactAction.setAttribute("aria-label", "通过邮件联系我");
    }
    setMenuOpen(false);
    if (mobile && focusWasInActions) menuToggle.focus({ preventScroll: true });
    if (!mobile && focusWasOnToggle) actions.querySelector("a").focus({ preventScroll: true });
  };
  syncActionLayout();
  mobileActions.addEventListener("change", syncActionLayout);
  menuToggle.addEventListener("click", (event) => {
    setMenuOpen(!menuOpen);
    if (menuOpen && event.detail === 0) actions.querySelector("a").focus({ preventScroll: true });
  });
  document.addEventListener("click", (event) => {
    if (menuOpen && !actions.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
  });
  actions.addEventListener("focusout", () => {
    requestAnimationFrame(() => {
      if (menuOpen && !actions.contains(document.activeElement) && document.activeElement !== menuToggle) setMenuOpen(false);
    });
  });
  contactAction.addEventListener("click", (event) => {
    if (!mobileActions.matches) return;
    event.preventDefault();
    setContactOpen(!contactAction.classList.contains("is-contact-open"));
  });
  contactAction.addEventListener("keydown", (event) => {
    if (mobileActions.matches && event.key === " ") {
      event.preventDefault();
      contactAction.click();
    }
  });
  const resetContactTooltip = () => contactAction.classList.remove("is-tooltip-dismissed");
  contactAction.addEventListener("mouseleave", resetContactTooltip);
  contactAction.addEventListener("blur", resetContactTooltip);
  title.tabIndex = -1;
  document.querySelector(".back-to-top").addEventListener("click", () => {
    setMenuOpen(false);
    scroller.focus({ preventScroll: true });
    scroller.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || event.defaultPrevented) return;
    if (mobileActions.matches && contactAction.classList.contains("is-contact-open")) {
      setContactOpen(false);
      event.preventDefault();
      return;
    }
    if (!mobileActions.matches && !contactAction.classList.contains("is-tooltip-dismissed") && contactAction.matches(":hover, :focus-visible")) {
      contactAction.classList.add("is-tooltip-dismissed");
      event.preventDefault();
      return;
    }
    if (menuOpen) {
      setMenuOpen(false, true);
      event.preventDefault();
      return;
    }
    // Escape dismisses menus and tooltips only; leaving the project requires Close.
  });
  const hero = document.querySelector(".hero-art");
  document.title = `${project.name} | Folio`;
  document.querySelector('meta[name="description"]').content = project.description || project.name;
  document.getElementById("project-category").textContent = project.category;
  document.getElementById("project-description").textContent = project.description || "";

  // Only known CSS tokens are accepted; no HTML is injected from project content.
  for (const key of ["background", "text", "accent", "glow"]) {
    if (project.theme?.[key]) document.body.style.setProperty(`--project-${key}`, project.theme[key]);
  }
  for (const [key, value] of Object.entries(project.title?.css || {})) {
    if (["font-family", "font-weight", "font-size", "letter-spacing", "line-height", "text-transform", "color", "max-width"].includes(key)) title.style.setProperty(key, value);
  }
  title.dataset.style = project.title?.style || "clean";

  const addImage = (container, media, eager = false) => {
    const img = document.createElement("img");
    img.alt = media.alt || project.name;
    img.loading = eager ? "eager" : "lazy";
    img.decoding = "async";
    if (eager) img.fetchPriority = "high";
    if (media.width && media.height) { img.width = media.width; img.height = media.height; }
    if (media.position) img.style.objectPosition = media.position;
    img.addEventListener("error", () => {
      img.hidden = true;
      container.classList.add("has-error");
      const fallback = document.createElement("p");
      fallback.className = "image-fallback";
      fallback.textContent = media.alt || "Project image unavailable";
      container.append(fallback);
    }, { once: true });
    img.src = media.src;
    container.append(img);
  };

  if (project.title?.image?.src) {
    title.classList.add("is-image-title");
    addImage(title, project.title.image, true);
  } else {
    (project.title?.lines || [project.name]).forEach((line) => {
      const span = document.createElement("span");
      span.textContent = line;
      title.append(span);
    });
  }
  if (hasSunpowerIntro) {
    document.body.dataset.intro = "sunpower";
    document.documentElement.lang = "zh-CN";
    const section = document.querySelector(".project-hero");
    const intro = document.getElementById("sunpower-intro-template").content.cloneNode(true);
    intro.querySelector("[data-intro-title]").prepend(title);
    section.replaceChildren(intro);
    document.querySelector(".project-overview").hidden = true;
  } else if (project.hero?.src) {
    hero.dataset.mode = project.hero.mode || "cutout";
    document.querySelector(".project-hero").dataset.media = hero.dataset.mode;
    addImage(hero, project.hero, true);
  }

  // Image-only case studies already include their introduction and description.
  if (project.contentMode === "image") {
    document.querySelector(".project-overview").hidden = true;
    hero.style.marginTop = "0";
  }

  const gallery = document.getElementById("project-gallery");
  const galleryMedia = hasSunpowerIntro ? [project.hero, ...(project.gallery || [])] : (project.gallery || []);
  galleryMedia.forEach((media) => {
    const figure = document.createElement("figure");
    figure.className = `project-image ${media.layout === "half" ? "is-half" : "is-full"}`;
    if (media.heading || media.description) {
      const intro = document.createElement("figcaption");
      intro.className = "project-image-intro";
      intro.lang = "zh-CN";
      if (media.heading) {
        const heading = document.createElement("h2");
        heading.textContent = media.heading;
        intro.append(heading);
      }
      if (media.description) {
        const description = document.createElement("p");
        description.textContent = media.description;
        intro.append(description);
      }
      figure.append(intro);
    }
    addImage(figure, media);
    if (media.caption && !media.heading && !media.description) {
      const caption = document.createElement("figcaption");
      caption.textContent = media.caption;
      figure.append(caption);
    }
    gallery.append(figure);
  });
  gallery.hidden = !gallery.children.length;

  if (project.layout === "focused") {
    document.body.dataset.layout = "focused";
    document.querySelector(".project-wordmark")?.remove();
    document.querySelector(".project-navigation")?.remove();
    document.querySelector(".project-footer")?.remove();
  } else {
    const next = projects[(currentIndex + 1) % projects.length];
    document.getElementById("next-project").href = `project.html?project=${encodeURIComponent(next.id)}`;
    document.getElementById("next-project-title").textContent = next.name;
  }
  const returnLinks = document.querySelectorAll('a[href="work.html"]');
  const listingURL = value => {
    if (!value) return null;
    try {
      const url = new URL(value, location.href);
      const allowedPaths = ['.', 'index.html', 'work.html'].map(path => new URL(path, location.href).pathname);
      return url.origin === location.origin && allowedPaths.includes(url.pathname) ? url : null;
    } catch {
      return null;
    }
  };
  const referrer = listingURL(document.referrer);
  const entry = listingURL(new URLSearchParams(location.search).get('from')) || referrer;
  const destination = entry || new URL(`work.html#${encodeURIComponent(project.id)}`, location.href);
  const canGoBack = referrer && entry && history.length > 1
    && referrer.pathname === entry.pathname && referrer.search === entry.search;
  returnLinks.forEach((link) => {
    link.href = `${destination.pathname}${destination.search}${destination.hash}`;
    if (link.classList.contains('viewer-action')) {
      link.setAttribute('aria-label', entry ? '关闭作品，返回进入前的页面' : '关闭作品，返回全部作品');
    }
    link.addEventListener('click', event => {
      // A detail-page anchor can create another history entry; use the explicit destination then.
      if (!canGoBack || location.hash || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      history.back();
    });
  });
  root.hidden = false;

  const progress = document.querySelector(".reading-progress");
  const ticks = Array.from({ length: 33 }, (_, index) => {
    const tick = document.createElement("span");
    tick.className = `reading-progress-tick${index % 4 === 0 ? " is-major" : ""}`;
    tick.setAttribute("aria-hidden", "true");
    progress.append(tick);
    return tick;
  });
  let activeTick = -1;
  let scheduledFrame = 0;
  let lastPercent = -1;
  const updateReadingPosition = () => {
    scheduledFrame = 0;
    const distance = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    const ratio = distance > 1 ? Math.max(0, Math.min(1, scroller.scrollTop / distance)) : 0;
    progress.hidden = distance <= 1;
    const nextTick = Math.round(ratio * (ticks.length - 1));
    if (nextTick !== activeTick) {
      ticks[activeTick]?.classList.remove("is-active");
      ticks[nextTick].classList.add("is-active");
      activeTick = nextTick;
    }
    const percent = Math.round(ratio * 100);
    if (percent !== lastPercent) {
      progress.setAttribute("aria-valuenow", String(percent));
      lastPercent = percent;
    }
  };
  const scheduleReadingPosition = () => {
    if (!scheduledFrame) scheduledFrame = requestAnimationFrame(updateReadingPosition);
  };
  // Share one passive, frame-batched update with the existing return-to-top button.
  scroller.addEventListener("scroll", scheduleReadingPosition, { passive: true });
  window.addEventListener("resize", scheduleReadingPosition, { passive: true });
  window.addEventListener("pageshow", scheduleReadingPosition);
  root.addEventListener("load", scheduleReadingPosition, true);
  root.addEventListener("error", scheduleReadingPosition, true);
  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(scheduleReadingPosition);
    resizeObserver.observe(root);
    resizeObserver.observe(scroller);
  }
  document.fonts?.ready.then(scheduleReadingPosition);
  updateReadingPosition();
})();
