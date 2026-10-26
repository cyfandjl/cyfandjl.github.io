(() => {
  const buttons = [...document.querySelectorAll('[data-topic-filter]')];
  if (!buttons.length) return;
  const papers = [...document.querySelectorAll('.paper')];
  const groups = [...document.querySelectorAll('[data-publication-group]')];
  const note = document.getElementById('publication-count');
  buttons.forEach(button => button.addEventListener('click', () => {
    const topic = button.dataset.topicFilter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let visible = 0;
    papers.forEach(p => { p.hidden = topic !== 'all' && p.dataset.topic !== topic; if (!p.hidden) visible++; });
    groups.forEach(g => { g.hidden = ![...g.querySelectorAll('.paper')].some(p => !p.hidden); });
    note.textContent = `Showing ${visible} of ${papers.length} publications`;
  }));
})();
