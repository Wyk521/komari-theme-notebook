(() => {
  const root = document.documentElement;
  root.dataset.notebookVersion = '0.9.2';

  for (const href of [
    '/themes/KomariNotebook/dist/assets/release.091.css',
    '/themes/KomariNotebook/dist/assets/release.092.css'
  ]) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.append(link);
  }

  const legacySelector = '#notebook-loader,.notebook-loader,[data-notebook-loader],[data-startup-overlay]';
  const removeLegacyLoader = () => {
    document.querySelectorAll(legacySelector).forEach((node) => node.remove());
    document.querySelectorAll('body > div, body > section').forEach((node) => {
      const text = node.textContent || '';
      if (text.includes('Komari Notebook v0.9.0') && /正在(?:翻开|铺开|整理)/.test(text)) node.remove();
    });
  };
  const guard = document.createElement('style');
  guard.textContent = `${legacySelector}{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important}`;
  document.head.append(guard);
  removeLegacyLoader();
  const observer = new MutationObserver(removeLegacyLoader);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  addEventListener('DOMContentLoaded', removeLegacyLoader, { once: true });
  setTimeout(() => observer.disconnect(), 10000);

  const validPaperTones = new Set(['warm', 'white', 'blue']);
  const validAccents = new Set(['blue', 'green', 'purple', 'orange', 'red']);
  try {
    let cachedSettings = {};
    try {
      const parsed = JSON.parse(localStorage.getItem('komari-notebook-settings') || '{}');
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) cachedSettings = parsed;
    } catch {
      cachedSettings = {};
    }

    const cachedPaperTone = validPaperTones.has(cachedSettings.paper_tone)
      ? cachedSettings.paper_tone
      : localStorage.getItem('komari-notebook-paper-tone');
    root.dataset.paper = validPaperTones.has(cachedPaperTone) ? cachedPaperTone : 'warm';
    root.dataset.cardColumns = String(cachedSettings.card_columns) === '3' ? '3' : '4';
    root.dataset.accent = validAccents.has(cachedSettings.accent_color) ? cachedSettings.accent_color : 'blue';

    const appearance = localStorage.getItem('appearance') || 'system';
    root.dataset.theme = appearance === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : appearance === 'dark' ? 'dark' : 'light';
  } catch {
    root.dataset.paper = 'warm';
    root.dataset.cardColumns = '4';
    root.dataset.accent = 'blue';
  }
})();
