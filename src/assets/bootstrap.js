(() => {
  const root = document.documentElement;
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
    if (validPaperTones.has(cachedPaperTone)) root.dataset.paper = cachedPaperTone;
    else root.dataset.settingsPending = 'true';
    root.dataset.cardColumns = String(cachedSettings.card_columns) === '3' ? '3' : '4';
    root.dataset.accent = validAccents.has(cachedSettings.accent_color) ? cachedSettings.accent_color : 'blue';
    const appearance = localStorage.getItem('appearance') || 'system';
    root.dataset.theme = appearance === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : appearance === 'dark' ? 'dark' : 'light';
  } catch {
    root.dataset.settingsPending = 'true';
    root.dataset.cardColumns = '4';
    root.dataset.accent = 'blue';
  }
})();
