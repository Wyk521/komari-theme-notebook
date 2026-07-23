(() => {
  const root = document.documentElement;
  const validPaperTones = new Set(['warm', 'white', 'blue']);
  const validAccents = new Set(['blue', 'green', 'purple', 'orange', 'red']);
  const nodeCapacity = new Map();

  const positiveNumber = (...values) => {
    for (const value of values) {
      const number = Number(value);
      if (Number.isFinite(number) && number > 0) return number;
    }
    return null;
  };

  const rememberNodes = (payload) => {
    const value = payload?.data ?? payload;
    const nodes = Array.isArray(value) ? value : value && typeof value === 'object' ? Object.values(value) : [];
    for (const node of nodes) {
      if (!node?.uuid) continue;
      nodeCapacity.set(String(node.uuid), {
        ram: positiveNumber(node.mem_total, node.ram_total),
        disk: positiveNumber(node.disk_total)
      });
    }
  };

  const patchLoadRecords = (payload, url) => {
    const value = payload?.data ?? payload;
    const records = Array.isArray(value?.records) ? value.records : null;
    if (!records) return payload;

    let uuid = '';
    try { uuid = new URL(url, location.href).searchParams.get('uuid') || ''; } catch { /* invalid URL */ }
    const capacity = nodeCapacity.get(uuid);
    if (!capacity) return payload;

    for (const record of records) {
      if (!record || typeof record !== 'object') continue;
      if (positiveNumber(record.ram_total) === null && capacity.ram) record.ram_total = capacity.ram;
      if (positiveNumber(record.disk_total) === null && capacity.disk) record.disk_total = capacity.disk;
    }
    return payload;
  };

  const nativeFetch = window.fetch?.bind(window);
  if (nativeFetch) {
    window.fetch = async (input, init) => {
      const response = await nativeFetch(input, init);
      const url = typeof input === 'string' ? input : input?.url || '';
      if (!response.ok || (!url.includes('/api/nodes') && !url.includes('/api/records/load'))) return response;

      try {
        const payload = await response.clone().json();
        if (url.includes('/api/nodes')) rememberNodes(payload);
        if (url.includes('/api/records/load')) patchLoadRecords(payload, url);
        return new Response(JSON.stringify(payload), {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } catch {
        return response;
      }
    };
  }

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