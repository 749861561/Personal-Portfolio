// 首页与全部作品共用作品卡片数据；详情内容仍由 projects.js 维护。
(() => {
  const projects = (window.FOLIO_PROJECTS || []).filter(project => !project.hidden);
  const detailHref = id => {
    const from = `${location.pathname}${location.search}${location.hash}`;
    return `project.html?${new URLSearchParams({ project: id, from })}`;
  };
  const savePosition = () => {
    history.replaceState({ ...history.state, folioListingPosition: {
      x: window.scrollX,
      y: window.scrollY,
      galleryX: document.getElementById('selected-gallery')?.scrollLeft || 0
    } }, '');
  };
  // Keep the entry URL current even when the visitor navigates between homepage sections.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const target = new URL(link.href, location.href);
    if (target.origin !== location.origin || target.pathname !== new URL('project.html', location.href).pathname) return;
    link.href = detailHref(target.searchParams.get('project'));
    savePosition();
  });
  window.addEventListener('pagehide', savePosition);
  window.addEventListener('pageshow', () => {
    const position = history.state?.folioListingPosition;
    if (!position) return;
    requestAnimationFrame(() => {
      window.scrollTo({ left: position.x, top: position.y, behavior: 'instant' });
      document.getElementById('selected-gallery')?.scrollTo({ left: position.galleryX, behavior: 'instant' });
    });
  });
  const language = text => /[\u3400-\u9fff]/u.test(text) ? 'zh-CN' : 'en';
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const cards = projects.map(project => {
    const card = project.card || {};
    return {
      id: project.id,
      title: card.title || project.name,
      summary: card.summary ?? project.description ?? '',
      category: card.category || project.category || '其他',
      tag: card.tag || project.category || '作品',
      meta: card.meta || project.category || '',
      cover: card.cover || project.hero,
      order: card.order ?? Number.MAX_SAFE_INTEGER,
      preserveCase: Boolean(card.preserveCase),
      href: detailHref(project.id)
    };
  });
  const byId = new Map(cards.map(card => [card.id, card]));
  const image = (card, list = false) => {
    const img = element('img');
    const cover = card.cover;
    img.src = cover.src;
    img.alt = cover.alt || `${card.title}作品封面`;
    if (cover.width) img.width = cover.width;
    if (cover.height) img.height = cover.height;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.style.objectPosition = cover.position || 'center';
    if (list) img.style.objectFit = cover.listFit || 'cover';
    else if (cover.scale) img.style.transform = `scale(${cover.scale})`;
    return img;
  };
  window.FOLIO_CATALOG = { cards, byId, element, image };
  const gallery = document.getElementById('selected-gallery');
  if (!gallery) return;
  const selected = [...new Set(window.FOLIO_FEATURED_IDS || [])].map(id => byId.get(id)).filter(Boolean);
  gallery.replaceChildren(...selected.map((card, index) => {
    const link = element('a', 'selected-card');
    link.href = card.href;
    link.setAttribute('aria-label', `查看${card.title}：${card.summary}`);
    link.setAttribute('data-image-frame', '');
    link.style.setProperty('--image-position', card.cover.position || 'center');
    const fallback = element('p', 'media-fallback', '作品预览暂时无法加载');
    fallback.setAttribute('aria-hidden', 'true');
    const top = element('div', 'selected-card-top');
    top.setAttribute('aria-hidden', 'true');
    const tag = element('span', 'selected-card-tag', card.category);
    tag.lang = language(card.category);
    const number = element('span', 'selected-card-index', String(index + 1).padStart(2, '0'));
    number.append(element('i'));
    top.append(tag, number);
    const bottom = element('div', 'selected-card-bottom');
    const copy = element('div', 'selected-card-copy');
    const title = element('h3', '', card.title);
    title.lang = language(card.title);
    if (card.preserveCase) title.style.textTransform = 'none';
    copy.append(title, element('p', '', card.summary));
    bottom.append(copy);
    link.append(image(card), fallback, top, bottom);
    return link;
  }));
})();
