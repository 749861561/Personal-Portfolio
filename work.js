(() => {
  const { cards: catalog, element, image } = window.FOLIO_CATALOG;
  const grid = document.querySelector('.work-grid');
  const filterBar = document.querySelector('.work-filters');
  const input = document.querySelector('#work-search');
  const status = document.querySelector('#result-status');
  const empty = document.querySelector('.empty-state');
  let category = '全部';
  const ordered = [...catalog].sort((a, b) => a.order - b.order);
  const counts = new Map([['全部', ordered.length]]);
  ordered.forEach(card => counts.set(card.category, (counts.get(card.category) || 0) + 1));
  const filters = [...counts].map(([name, count]) => {
    const button = element('button', 'filter-button', name);
    button.type = 'button';
    button.dataset.category = name;
    button.setAttribute('aria-pressed', String(name === category));
    button.append(element('span', '', count));
    return button;
  });
  filterBar.replaceChildren(...filters);
  const cards = ordered.map(card => {
    const article = element('article', 'work-card');
    article.id = card.id;
    article.dataset.category = card.category;
    article.dataset.search = `${card.title} ${card.summary} ${card.meta} ${card.category}`.toLocaleLowerCase();
    const link = element('a');
    link.href = card.href;
    link.setAttribute('aria-label', `查看${card.title}`);
    const figure = element('figure');
    figure.append(image(card, true));
    const copy = element('div', 'card-copy');
    copy.append(element('h2', '', card.title), element('p', 'card-description', card.summary), element('p', 'card-meta', card.meta));
    link.append(figure, copy);
    article.append(link);
    return article;
  });
  grid.replaceChildren(...cards);
  function update() {
    const query = input.value.trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach(card => {
      const matches = (category === '全部' || card.dataset.category === category) && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) count++;
    });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    empty.hidden = count !== 0;
    status.textContent = `找到 ${count} 件作品`;
  }
  filters.forEach(button => button.addEventListener('click', () => { category = button.dataset.category; update(); }));
  input.addEventListener('input', update);
  document.querySelector('.work-search').addEventListener('submit', event => { event.preventDefault(); update(); });
  document.querySelector('#reset-filters').addEventListener('click', () => { category = '全部'; input.value = ''; update(); input.focus(); });
  update();
})();
