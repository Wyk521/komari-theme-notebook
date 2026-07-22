(() => {
  const root = document.documentElement;
  const validPaperTones = new Set(['warm', 'white', 'blue']);
  try {
    const cachedPaperTone = localStorage.getItem('komari-notebook-paper-tone');
    if (validPaperTones.has(cachedPaperTone)) root.dataset.paper = cachedPaperTone;
    else root.dataset.settingsPending = 'true';

    const appearance = localStorage.getItem('appearance') || 'system';
    root.dataset.theme = appearance === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : appearance === 'dark' ? 'dark' : 'light';
  } catch {
    root.dataset.settingsPending = 'true';
  }
})();
