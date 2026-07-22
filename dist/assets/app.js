const ICONS = {
  notebook: '<path d="M6 3h13a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z"/><path d="M8 3v18M3 8h5M3 13h5M3 18h5M12 8h5M12 12h5M12 16h3"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.34-5.66L20 8"/><path d="M20 3v5h-5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-2.83 2.83-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21h-4v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06-2.83-2.83.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3v-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06 2.83-2.83.06.06A1.65 1.65 0 0 0 8.92 4a1.65 1.65 0 0 0 1-1.51V2h4v.49A1.65 1.65 0 0 0 15 4a1.65 1.65 0 0 0 1.82-.33l.06-.06 2.83 2.83-.06.06A1.65 1.65 0 0 0 19.4 9c.12.61.65 1.05 1.27 1.05H21v4h-.33c-.62 0-1.15.44-1.27 1.05Z"/>',
  server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
  check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  sort: '<path d="m7 15 3 3 3-3M10 18V6M17 9l-3-3-3 3M14 6v12"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  memory: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9v6M11 9v6M15 9v6M19 9v6M7 2v3M11 2v3M15 2v3M19 2v3M7 19v3M11 19v3M15 19v3M19 19v3"/>',
  disk: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>',
  network: '<path d="M5 12h14M12 5l7 7-7 7M12 5l-7 7 7 7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>',
  gauge: '<path d="M20.38 8.53a9 9 0 1 1-16.76 0"/><path d="M12 12 16 8M4 12h2M18 12h2M12 4v2M6.34 6.34l1.42 1.42M16.24 7.76l1.42-1.42"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  tag: '<path d="M20.59 13.41 11 3.83V3H4v7h.83l9.58 9.59a2 2 0 0 0 2.82 0l3.36-3.36a2 2 0 0 0 0-2.82Z"/><circle cx="7.5" cy="6.5" r="1"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  upload: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  download: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
  signal: '<path d="M4 17h.01M8 17v-3M12 17v-6M16 17V8M20 17V5"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>'
};

function icon(name, size = 20) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.notebook}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((element) => {
    element.innerHTML = icon(element.dataset.icon, Number(element.dataset.iconSize || 20));
  });
}

const MESSAGES = {
  'zh-CN': {
    connecting: '正在连接实时数据',
    live: '实时连接正常',
    reconnecting: '实时连接重试中',
    fallback: '使用兼容数据模式',
    offlineConnection: '实时连接不可用',
    refresh: '刷新',
    language: '语言',
    appearance: '外观',
    admin: '管理后台',
    nodeStatus: '节点状态',
    onlineOfTotal: '在线 / 全部',
    liveRate: '实时速率',
    rateCaption: '上行 / 下行',
    cumulativeTraffic: '累计流量',
    cumulativeCaption: '上行 / 下行累计',
    assetOverview: '资产概览',
    monthlyCost: '月均费用',
    checklist: '节点检查清单',
    reading: '正在读取节点……',
    shown: '显示 {shown} / {total} 台节点',
    search: '搜索节点',
    searchPlaceholder: '搜索名称、分组、标签或系统',
    sort: '排序方式',
    sortWeight: '默认顺序',
    sortOnline: '在线优先',
    sortName: '名称',
    sortCpu: 'CPU 使用率',
    sortRam: '内存使用率',
    sortNetwork: '实时网速',
    sortRemaining: '剩余流量',
    sortLatency: '延迟',
    cards: '卡片',
    table: '表格',
    all: '全部',
    ungrouped: '未分组',
    online: '在线',
    offline: '离线',
    waiting: '等待状态',
    node: '节点',
    status: '状态',
    cpu: 'CPU',
    memory: '内存',
    swap: 'Swap',
    disk: '硬盘',
    network: '网络',
    uptime: '运行时间',
    details: '查看详情',
    expandDetails: '展开详情',
    noMatches: '没有找到符合条件的节点',
    tryAgain: '换个关键词或分组再试试。',
    clear: '清除筛选',
    loadFailed: '读取 Komari 数据失败',
    retry: '重新加载',
    refreshed: '数据已刷新',
    refreshFailed: '刷新失败，请检查网络或登录状态。',
    emptyNodes: '当前没有可展示的节点',
    emptyNodesDescription: '请先在 Komari 管理后台添加节点，或检查私有站点登录状态。',
    systemPanel: '系统详情',
    resourcePanel: '资源详情',
    networkPanel: '网络详情',
    billing: '账单与期限',
    charts: '负载趋势',
    historyWindow: '近 {hours} 小时',
    loadRangeLabel: '负载趋势时间范围',
    pingRangeLabel: 'Ping 监测时间范围',
    loadingHistory: '正在读取历史负载……',
    noHistory: '暂无历史记录',
    noHistoryDescription: '可能尚未开启历史记录，或当前节点还没有足够数据。',
    cpuChart: 'CPU',
    memoryChart: '内存',
    diskChart: '硬盘',
    networkChart: '网络',
    connectionsChart: '连接数',
    processChart: '进程',
    pingChart: 'Ping',
    pingMonitoring: 'Ping 监测',
    pingTasks: '监测线路',
    allTasks: '全部线路',
    noPingTasks: '暂无 Ping 监测线路',
    selectPingTasks: '点击选择要显示的线路，默认全部显示。',
    os: '操作系统',
    kernel: '内核版本',
    architecture: '系统架构',
    virtualization: '虚拟化',
    cpuModel: 'CPU 型号',
    cpuCores: 'CPU 核心',
    physicalCores: '物理核心',
    memoryTotal: '内存总量',
    swapTotal: 'Swap 总量',
    diskTotal: '硬盘总量',
    gpu: 'GPU',
    price: '价格',
    billingCycle: '计费周期',
    expiry: '到期时间',
    autoRenew: '自动续费',
    enabled: '已开启',
    disabled: '未开启',
    free: '免费',
    unset: '未设置',
    days: '{days} 天',
    daysRemaining: '剩余 {days} 天',
    cores: '{count} 核',
    trafficLimit: '流量限额',
    usedTraffic: '已用流量',
    remainingTraffic: '剩余流量',
    unlimited: '不限流量',
    upload: '上行',
    download: '下行',
    uploadRate: '上行速度',
    downloadRate: '下行速度',
    uploadTotal: '上行累计',
    downloadTotal: '下行累计',
    totalUpload: '累计上行',
    totalDownload: '累计下行',
    publicRemark: '公开备注',
    connections: '连接数',
    tcp: 'TCP',
    udp: 'UDP',
    processes: '进程数',
    load: '平均负载',
    latency: '延迟',
    packetLoss: '丢包率',
    region: '地区',
    group: '分组',
    close: '关闭',
    unknown: '未知',
    min: '最低',
    max: '最高',
    average: '平均',
    current: '当前',
    time: '时间',
    trafficOverview: '累计流量明细',
    totalTraffic: '总流量',
    trafficRanking: '设备流量排行',
    topTraffic: '最高流量设备',
    limitedNodes: '设置限额',
    quotaUsage: '限额使用',
    assetDetails: '资产明细',
    cnySummary: '人民币汇总',
    exchangeConverted: '费用已统一折算为人民币',
    monthlyAverage: '月均',
    annualized: '年化',
    remainingValue: '估算剩余价值',
    billableNodes: '计费设备',
    currencyKinds: '币种',
    capacityOverview: '资源容量',
    totalCores: 'CPU 总核心',
    totalMemory: '内存总量',
    totalDisk: '硬盘总量',
    expiringSoon: '30 天内到期',
    deviceBreakdown: '设备明细',
    noBillingData: '暂无可计算的付费资产',
    estimatedNote: '费用按 30 天折算；剩余价值按当前计费周期估算。',
    themeSystem: '已切换为跟随系统',
    themeLight: '已切换为浅色外观',
    themeDark: '已切换为深色外观'
  },
  en: {
    connecting: 'Connecting to live data',
    live: 'Live connection active',
    reconnecting: 'Reconnecting live data',
    fallback: 'Using compatibility mode',
    offlineConnection: 'Live connection unavailable',
    refresh: 'Refresh',
    language: 'Language',
    appearance: 'Appearance',
    admin: 'Admin panel',
    nodeStatus: 'Node status',
    onlineOfTotal: 'Online / total',
    liveRate: 'Live throughput',
    rateCaption: 'Upload / download',
    cumulativeTraffic: 'Total traffic',
    cumulativeCaption: 'Uploaded / downloaded',
    assetOverview: 'Asset overview',
    monthlyCost: 'Monthly average',
    checklist: 'Node checklist',
    reading: 'Reading nodes…',
    shown: 'Showing {shown} of {total} nodes',
    search: 'Search nodes',
    searchPlaceholder: 'Search name, group, tag, or system',
    sort: 'Sort nodes',
    sortWeight: 'Default order',
    sortOnline: 'Online first',
    sortName: 'Name',
    sortCpu: 'CPU usage',
    sortRam: 'Memory usage',
    sortNetwork: 'Network speed',
    sortRemaining: 'Traffic remaining',
    sortLatency: 'Latency',
    cards: 'Cards',
    table: 'Table',
    all: 'All',
    ungrouped: 'Ungrouped',
    online: 'Online',
    offline: 'Offline',
    waiting: 'Waiting',
    node: 'Node',
    status: 'Status',
    cpu: 'CPU',
    memory: 'Memory',
    swap: 'Swap',
    disk: 'Disk',
    network: 'Network',
    uptime: 'Uptime',
    details: 'View details',
    expandDetails: 'Expand details',
    noMatches: 'No matching nodes',
    tryAgain: 'Try another keyword or group.',
    clear: 'Clear filters',
    loadFailed: 'Unable to load Komari data',
    retry: 'Reload',
    refreshed: 'Data refreshed',
    refreshFailed: 'Refresh failed. Check your network or login state.',
    emptyNodes: 'No visible nodes',
    emptyNodesDescription: 'Add nodes in the Komari admin panel or check your private-site login.',
    systemPanel: 'System details',
    resourcePanel: 'Resource details',
    networkPanel: 'Network details',
    billing: 'Billing and expiry',
    charts: 'Load trends',
    historyWindow: 'Last {hours} hours',
    loadRangeLabel: 'Load trend time range',
    pingRangeLabel: 'Ping monitoring time range',
    loadingHistory: 'Loading historical metrics…',
    noHistory: 'No historical records',
    noHistoryDescription: 'History may be disabled, or this node does not have enough data yet.',
    cpuChart: 'CPU',
    memoryChart: 'Memory',
    diskChart: 'Disk',
    networkChart: 'Network',
    connectionsChart: 'Connections',
    processChart: 'Processes',
    pingChart: 'Ping',
    pingMonitoring: 'Ping monitoring',
    pingTasks: 'Monitoring routes',
    allTasks: 'All routes',
    noPingTasks: 'No Ping monitoring routes',
    selectPingTasks: 'Select the routes to display. All are shown by default.',
    os: 'Operating system',
    kernel: 'Kernel',
    architecture: 'Architecture',
    virtualization: 'Virtualization',
    cpuModel: 'CPU model',
    cpuCores: 'CPU cores',
    physicalCores: 'Physical cores',
    memoryTotal: 'Total memory',
    swapTotal: 'Total swap',
    diskTotal: 'Total disk',
    gpu: 'GPU',
    price: 'Price',
    billingCycle: 'Billing cycle',
    expiry: 'Expiry',
    autoRenew: 'Auto renewal',
    enabled: 'Enabled',
    disabled: 'Disabled',
    free: 'Free',
    unset: 'Not set',
    days: '{days} days',
    daysRemaining: '{days} days remaining',
    cores: '{count} cores',
    trafficLimit: 'Traffic limit',
    usedTraffic: 'Traffic used',
    remainingTraffic: 'Traffic remaining',
    unlimited: 'Unlimited',
    upload: 'Upload',
    download: 'Download',
    uploadRate: 'Upload rate',
    downloadRate: 'Download rate',
    uploadTotal: 'Uploaded total',
    downloadTotal: 'Downloaded total',
    totalUpload: 'Total uploaded',
    totalDownload: 'Total downloaded',
    publicRemark: 'Public note',
    connections: 'Connections',
    tcp: 'TCP',
    udp: 'UDP',
    processes: 'Processes',
    load: 'Load average',
    latency: 'Latency',
    packetLoss: 'Packet loss',
    region: 'Region',
    group: 'Group',
    close: 'Close',
    unknown: 'Unknown',
    min: 'Min',
    max: 'Max',
    average: 'Average',
    current: 'Current',
    time: 'Time',
    trafficOverview: 'Traffic breakdown',
    totalTraffic: 'Total traffic',
    trafficRanking: 'Traffic by device',
    topTraffic: 'Highest-traffic device',
    limitedNodes: 'Limited nodes',
    quotaUsage: 'Quota usage',
    assetDetails: 'Asset details',
    cnySummary: 'CNY summary',
    exchangeConverted: 'Costs converted to Chinese yuan',
    monthlyAverage: 'Monthly',
    annualized: 'Annualized',
    remainingValue: 'Estimated remaining value',
    billableNodes: 'Billable devices',
    currencyKinds: 'Currencies',
    capacityOverview: 'Capacity overview',
    totalCores: 'Total CPU cores',
    totalMemory: 'Total memory',
    totalDisk: 'Total disk',
    expiringSoon: 'Expiring in 30 days',
    deviceBreakdown: 'Device breakdown',
    noBillingData: 'No billable assets to calculate',
    estimatedNote: 'Costs are normalized to 30 days; remaining value is estimated within the current billing cycle.',
    themeSystem: 'Appearance follows the system',
    themeLight: 'Light appearance enabled',
    themeDark: 'Dark appearance enabled'
  }
};

function normalizeLanguage(value) {
  return String(value || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
}

let language = normalizeLanguage(localStorage.getItem('language') || navigator.language);

function t(key, values = {}) {
  let text = MESSAGES[language][key] ?? MESSAGES['zh-CN'][key] ?? key;
  for (const [name, value] of Object.entries(values)) {
    text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}

const DEFAULTS = {
  notebook_title: '服务器作业本',
  notebook_subtitle: '每一台节点，都是今天要认真检查的一页。',
  footer_note: '今日也要认真检查服务器。',
  accent_color: 'blue',
  paper_tone: 'warm',
  default_view: 'cards',
  card_columns: '4',
  show_summary: true,
  show_search: true,
  show_group_filter: true,
  show_tags: true,
  show_hardware: true,
  refresh_seconds: 5
};

const QUERY = new URLSearchParams(location.search);
const DEMO = QUERY.get('demo') === '1';
const STATIC_DEMO = DEMO && QUERY.get('static') === '1';
const DEMO_REFRESH = QUERY.get('refresh');
const DEMO_TAGS = QUERY.get('tags');
const DEMO_PAPER = QUERY.get('paper');
const PAPER_TONE_CACHE_KEY = 'komari-notebook-paper-tone';

const DEFAULT_EXCHANGE_RATES_CNY = {
  CNY: 1,
  USD: 0.1425,
  HKD: 1.1084,
  EUR: 0.121,
  GBP: 0.1056,
  JPY: 22.23,
  SGD: 0.182,
  CAD: 0.194,
  AUD: 0.216,
  KRW: 198.4
};

const CURRENCY_ALIASES = {
  '¥': 'CNY', '￥': 'CNY', RMB: 'CNY', 'CN¥': 'CNY',
  '$': 'USD', 'US$': 'USD',
  'HK$': 'HKD', '€': 'EUR', '£': 'GBP',
  'JP¥': 'JPY', 'S$': 'SGD', 'C$': 'CAD', 'A$': 'AUD', '₩': 'KRW'
};

const LOAD_HISTORY_RANGES = [1, 4, 12, 24];
const PING_HISTORY_RANGES = [1, 2, 4, 12, 24];

const state = {
  publicInfo: null,
  settings: { ...DEFAULTS },
  exchangeRates: { ...DEFAULT_EXCHANGE_RATES_CNY },
  nodes: [],
  live: {},
  online: new Set(),
  ping: {},
  pingLoading: false,
  pingReady: false,
  history: new Map(),
  historyHours: 4,
  pingHours: 4,
  pingSelection: new Map(),
  liveReady: false,
  liveState: DEMO ? 'open' : 'connecting',
  search: '',
  group: '__all__',
  sort: 'weight',
  view: 'cards',
  appearance: localStorage.getItem('appearance') || 'system',
  socket: null,
  socketTimer: null,
  reconnectTimer: null,
  retry: 0,
  fallbackTimer: null,
  fallbackInterval: null,
  pingTimer: null,
  lastLive: 0,
  loaded: false,
  refreshing: false,
  selected: null,
  overviewType: null,
  renderQueued: false,
  demoTimer: null
};

const $ = (id) => document.getElementById(id);
const dom = {
  app: $('app'),
  siteName: $('site-name'),
  connection: $('connection-label'),
  refresh: $('refresh-button'),
  lang: $('language-button'),
  appearance: $('appearance-button'),
  title: $('notebook-title'),
  subtitle: $('notebook-subtitle'),
  footerNote: $('footer-note'),
  summary: $('summary-section'),
  summaryNodeValue: $('summary-node-value'),
  summaryNodeCaption: $('summary-node-caption'),
  summaryUp: $('summary-up'),
  summaryDown: $('summary-down'),
  summaryTotalUp: $('summary-total-up'),
  summaryTotalDown: $('summary-total-down'),
  summaryAssetPrimary: $('summary-asset-primary'),
  summaryAssetSecondary: $('summary-asset-secondary'),
  trafficOverviewButton: $('traffic-overview-button'),
  assetOverviewButton: $('asset-overview-button'),
  count: $('node-count-text'),
  searchBox: $('search-box'),
  search: $('search-input'),
  sortControl: $('sort-control'),
  sortButton: $('sort-button'),
  sortCurrent: $('sort-current'),
  sortMenu: $('sort-menu'),
  tabs: $('group-tabs'),
  grid: $('node-grid'),
  tableWrap: $('node-table-wrap'),
  skeleton: $('skeleton-grid'),
  empty: $('empty-state'),
  emptyTitle: $('empty-title'),
  emptyDesc: $('empty-description'),
  clear: $('clear-filter-button'),
  notice: $('notice'),
  dialog: $('node-dialog'),
  dialogClose: $('dialog-close'),
  dialogContent: $('dialog-content'),
  overviewDialog: $('overview-dialog'),
  overviewClose: $('overview-close'),
  overviewContent: $('overview-content'),
  hoverTip: $('hover-tip'),
  toasts: $('toast-region'),
  viewButtons: [...document.querySelectorAll('.view-button')]
};

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function clamp(value, min = 0, max = 100) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(max, Math.max(min, number)) : min;
}

function safe(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function hasNumber(value) {
  return value !== null
    && value !== undefined
    && value !== ''
    && Number.isFinite(Number(value));
}

function ratio(used, total) {
  const usedNumber = Number(used);
  const totalNumber = Number(total);
  return Number.isFinite(usedNumber) && Number.isFinite(totalNumber) && totalNumber > 0
    ? clamp((usedNumber / totalNumber) * 100)
    : 0;
}

function formatBytes(value, decimals = 1) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return '—';
  if (number === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const index = Math.min(Math.floor(Math.log(number) / Math.log(1024)), units.length - 1);
  return `${(number / (1024 ** index)).toFixed(index ? decimals : 0)} ${units[index]}`;
}

function formatRate(value) {
  const formatted = formatBytes(value);
  return formatted === '—' ? formatted : `${formatted}/s`;
}

function formatPercent(value, decimals = 0) {
  return hasNumber(value) ? `${clamp(value).toFixed(decimals)}%` : '—';
}

function formatDuration(value) {
  const seconds = Number(value);
  if (!Number.isFinite(seconds) || seconds < 0) return '—';
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (language === 'en') {
    if (days) return `${days}d ${hours}h`;
    if (hours) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }
  if (days) return `${days}天 ${hours}小时`;
  if (hours) return `${hours}小时 ${minutes}分`;
  return `${minutes}分钟`;
}

function formatDate(value, dateOnly = false) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: dateOnly ? undefined : '2-digit',
    minute: dateOnly ? undefined : '2-digit',
    hour12: false
  }).format(date);
}

function formatShortTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date);
}

function formatMilliseconds(value) {
  return hasNumber(value) && Number(value) >= 0 ? `${Number(value).toFixed(0)} ms` : '—';
}

function formatCount(value) {
  return hasNumber(value) ? Math.round(Number(value)).toLocaleString(language === 'en' ? 'en-US' : 'zh-CN') : '—';
}

function splitTags(value) {
  return String(value || '').split(';').map((item) => item.trim()).filter(Boolean);
}

function tilt(value) {
  let hash = 0;
  for (const character of String(value)) hash = ((hash * 31) + character.charCodeAt(0)) | 0;
  return [-0.45, -0.22, 0, 0.18, 0.38][Math.abs(hash) % 5];
}

function metricTone(value) {
  return value >= 90 ? 'danger' : value >= 72 ? 'warn' : '';
}

function cleanText(value) {
  const text = String(value || '').trim();
  return !text || /^(none|null|undefined|unknown)$/i.test(text) ? '' : text;
}

function formatResourcePair(used, total) {
  return `${formatBytes(used)} / ${formatBytes(total)}`;
}

function api(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  const fetchOptions = {
    ...options,
    credentials: 'same-origin',
    cache: 'no-store',
    headers: { Accept: 'application/json', ...(options.headers || {}) },
    signal: controller.signal
  };
  return fetch(path, fetchOptions)
    .then(async (response) => {
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.message || `${response.status} ${response.statusText}`);
      if (payload?.status && payload.status !== 'success') throw new Error(payload.message || 'Komari API error');
      return payload?.data ?? payload;
    })
    .finally(() => clearTimeout(timer));
}

function trafficUsed(node, live) {
  const outbound = safe(live?.network?.totalUp);
  const inbound = safe(live?.network?.totalDown);
  switch (node.traffic_limit_type) {
    case 'sum': return outbound + inbound;
    case 'up': return outbound;
    case 'down': return inbound;
    case 'min': return Math.min(outbound, inbound);
    default: return Math.max(outbound, inbound);
  }
}

function trafficInfo(node, live) {
  const limit = safe(node.traffic_limit);
  const hasLiveTraffic = hasNumber(live?.network?.totalUp) || hasNumber(live?.network?.totalDown);
  const used = hasLiveTraffic
    ? (limit <= 0 ? safe(live?.network?.totalUp) + safe(live?.network?.totalDown) : trafficUsed(node, live))
    : null;
  const remaining = limit > 0 && used !== null ? Math.max(0, limit - used) : null;
  const percent = limit > 0 && used !== null ? clamp((used / limit) * 100) : 0;
  return { limit, used, remaining, percent, unlimited: limit <= 0 };
}

function formatMoney(value, currency = '') {
  const number = Number(value);
  if (!Number.isFinite(number)) return '—';
  const digits = Math.abs(number) >= 100 ? 0 : Math.abs(number) >= 10 ? 1 : 2;
  return `${currency || ''}${number.toLocaleString(language === 'en' ? 'en-US' : 'zh-CN', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })}`;
}

function normalizeCurrency(value) {
  const raw = String(value || 'CNY').trim();
  const upper = raw.toUpperCase();
  return CURRENCY_ALIASES[raw] || CURRENCY_ALIASES[upper] || upper || 'CNY';
}

function convertToCny(value, currency) {
  const amount = Number(value);
  const code = normalizeCurrency(currency);
  const rate = Number(state.exchangeRates[code]);
  if (!Number.isFinite(amount) || !Number.isFinite(rate) || rate <= 0) return null;
  return amount / rate;
}

function sanitizeExchangeRates(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const next = { ...DEFAULT_EXCHANGE_RATES_CNY };
  let valid = 0;
  for (const [code, value] of Object.entries(raw)) {
    const rate = Number(value);
    if (Number.isFinite(rate) && rate > 0) {
      next[String(code).toUpperCase()] = rate;
      valid += 1;
    }
  }
  return valid >= 2 ? next : null;
}

async function loadExchangeRates() {
  const cacheKey = 'komari-notebook-cny-rates-v1';
  const dateKey = new Date().toISOString().slice(0, 10);
  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
    const cachedRates = sanitizeExchangeRates(cached?.rates);
    if (cached?.date === dateKey && cachedRates) {
      state.exchangeRates = cachedRates;
      return;
    }
  } catch {
    cached = null;
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const response = await fetch('https://open.er-api.com/v6/latest/CNY', { signal: controller.signal, cache: 'no-store' });
    clearTimeout(timer);
    const rates = response.ok ? sanitizeExchangeRates((await response.json())?.rates) : null;
    if (rates) {
      state.exchangeRates = rates;
      try { localStorage.setItem(cacheKey, JSON.stringify({ date: dateKey, rates })); } catch { /* storage unavailable */ }
      if (state.loaded) render();
      return;
    }
  } catch {
    // Keep the last known or built-in rates so the asset summary remains available offline.
  }

  const staleRates = sanitizeExchangeRates(cached?.rates);
  if (staleRates) state.exchangeRates = staleRates;
}

function daysUntil(value) {
  if (!value) return null;
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) return null;
  return Math.ceil((timestamp - Date.now()) / 86400000);
}

function nodeBilling(node) {
  const price = Number(node.price);
  const cycle = Number(node.billing_cycle);
  const currency = cleanText(node.currency) || '';
  if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(cycle) || cycle <= 0) return null;
  const monthly = price * (30 / cycle);
  const annual = monthly * 12;
  const remainingDays = daysUntil(node.expired_at);
  const cycleFraction = remainingDays === null ? null : clamp(remainingDays / cycle, 0, 1);
  const remaining = cycleFraction === null ? null : price * cycleFraction;
  return { price, cycle, currency, monthly, annual, remaining, remainingDays };
}

function assetOverviewData() {
  const groups = new Map();
  const devices = [];
  let cores = 0;
  let memory = 0;
  let disk = 0;
  let expiringSoon = 0;
  let monthlyCny = 0;
  let annualCny = 0;
  let remainingCny = 0;
  let convertedNodes = 0;
  for (const node of state.nodes) {
    cores += safe(node.cpu_cores);
    memory += safe(node.mem_total || state.live[node.uuid]?.ram?.total);
    disk += safe(node.disk_total || state.live[node.uuid]?.disk?.total);
    const billing = nodeBilling(node);
    if (billing) {
      const key = normalizeCurrency(billing.currency);
      const group = groups.get(key) || { currency: key, monthly: 0, annual: 0, remaining: 0, nodes: 0 };
      group.monthly += billing.monthly;
      group.annual += billing.annual;
      group.remaining += safe(billing.remaining);
      group.nodes += 1;
      groups.set(key, group);
      const convertedMonthly = convertToCny(billing.monthly, billing.currency);
      const convertedAnnual = convertToCny(billing.annual, billing.currency);
      const convertedRemaining = convertToCny(billing.remaining, billing.currency);
      if (convertedMonthly !== null) {
        monthlyCny += convertedMonthly;
        annualCny += convertedAnnual ?? 0;
        remainingCny += convertedRemaining ?? 0;
        convertedNodes += 1;
      }
      devices.push({ node, billing, convertedMonthly, convertedAnnual, convertedRemaining });
    }
    const remainingDays = daysUntil(node.expired_at);
    if (remainingDays !== null && remainingDays >= 0 && remainingDays <= 30) expiringSoon += 1;
  }
  return {
    groups: [...groups.values()].sort((a, b) => b.monthly - a.monthly),
    devices: devices.sort((a, b) => b.billing.monthly - a.billing.monthly),
    cores,
    memory,
    disk,
    expiringSoon,
    monthlyCny,
    annualCny,
    remainingCny,
    convertedNodes
  };
}

function trafficOverviewData() {
  const devices = state.nodes.map((node) => {
    const live = state.live[node.uuid];
    const upload = safe(live?.network?.totalUp);
    const download = safe(live?.network?.totalDown);
    const traffic = trafficInfo(node, live);
    return { node, upload, download, total: upload + download, traffic };
  }).sort((a, b) => b.total - a.total);
  return {
    upload: devices.reduce((sum, item) => sum + item.upload, 0),
    download: devices.reduce((sum, item) => sum + item.download, 0),
    total: devices.reduce((sum, item) => sum + item.total, 0),
    limited: devices.filter((item) => !item.traffic.unlimited).length,
    devices
  };
}

function qualityTone(value, type = 'latency') {
  if (!hasNumber(value)) return 'empty';
  const number = Number(value);
  if (type === 'loss') return number < 1 ? 'good' : number < 5 ? 'fair' : number < 15 ? 'warn' : 'bad';
  return number < 80 ? 'good' : number < 160 ? 'fair' : number < 260 ? 'warn' : 'bad';
}

function buildPingSegments(records, count = 18, hours = 1) {
  const sorted = [...(records || [])]
    .filter((record) => record && record.time)
    .sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
  const latest = sorted.length ? Date.parse(sorted.at(-1).time) : Date.now();
  const end = Number.isFinite(latest) ? latest : Date.now();
  const start = end - (hours * 3600000);
  const width = (end - start) / count;
  return Array.from({ length: count }, (_, index) => {
    const from = start + (index * width);
    const to = index === count - 1 ? end + 1 : from + width;
    const bucket = sorted.filter((record) => {
      const timestamp = Date.parse(record.time);
      return Number.isFinite(timestamp) && timestamp >= from && timestamp < to;
    });
    const values = bucket.map((record) => Number(record.value)).filter((value) => Number.isFinite(value) && value >= 0);
    const lost = bucket.filter((record) => Number(record.value) < 0).length;
    return {
      from: new Date(from).toISOString(),
      to: new Date(Math.max(from, to - 1)).toISOString(),
      count: bucket.length,
      avg: values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null,
      min: values.length ? Math.min(...values) : null,
      max: values.length ? Math.max(...values) : null,
      loss: bucket.length ? (lost / bucket.length) * 100 : null
    };
  });
}

const nowIso = () => new Date().toISOString();

const MOCK_NODES = [
  {
    uuid: 'tokyo-note-01', name: 'Tokyo Classroom', region: '🇯🇵', group: '亚洲节点', tags: '主力;低延迟',
    cpu_name: 'AMD EPYC 7B13', cpu_cores: 4, cpu_physical_cores: 2, arch: 'amd64', virtualization: 'kvm',
    os: 'Debian GNU/Linux 12', kernel_version: '6.1.0-18-amd64', mem_total: 8589934592, swap_total: 2147483648,
    disk_total: 171798691840, weight: 100, price: 8.5, currency: '$', billing_cycle: 30, auto_renewal: true,
    expired_at: '2027-03-18T00:00:00Z', traffic_limit: 2199023255552, traffic_limit_type: 'sum',
    public_remark: '东京主力入口，晚高峰重点检查。'
  },
  {
    uuid: 'singapore-note-02', name: 'Singapore Homework', region: '🇸🇬', group: '亚洲节点', tags: '落地;IPv6',
    cpu_name: 'Intel Xeon Platinum', cpu_cores: 2, cpu_physical_cores: 1, arch: 'amd64', virtualization: 'kvm',
    os: 'Ubuntu 24.04 LTS', kernel_version: '6.8.0-44-generic', mem_total: 4294967296, swap_total: 1073741824,
    disk_total: 85899345920, weight: 90, price: 5, currency: '$', billing_cycle: 30, auto_renewal: false,
    expired_at: '2026-11-08T00:00:00Z', traffic_limit: 1099511627776, traffic_limit_type: 'sum', public_remark: '东南亚中转。'
  },
  {
    uuid: 'frankfurt-note-03', name: 'Frankfurt Notes', region: '🇩🇪', group: '欧洲节点', tags: '备份;大盘',
    cpu_name: 'AMD EPYC 7763', cpu_cores: 8, cpu_physical_cores: 4, arch: 'amd64', virtualization: 'kvm',
    os: 'AlmaLinux 9.4', kernel_version: '5.14.0-427.el9', mem_total: 17179869184, swap_total: 0,
    disk_total: 536870912000, weight: 70, price: 12, currency: '€', billing_cycle: 30, auto_renewal: true,
    expired_at: '2027-01-20T00:00:00Z', traffic_limit: 0, traffic_limit_type: 'max', public_remark: '备份与对象存储。'
  },
  {
    uuid: 'los-angeles-note-04', name: 'LA Exercise Book', region: '🇺🇸', group: '美洲节点', tags: '流媒体;入口',
    cpu_name: 'Intel Xeon Gold 6148', cpu_cores: 4, cpu_physical_cores: 2, arch: 'amd64', virtualization: 'kvm',
    os: 'Rocky Linux 9.3', kernel_version: '5.14.0-362.el9', mem_total: 8589934592, swap_total: 0,
    disk_total: 128849018880, weight: 80, price: 9.9, currency: '$', billing_cycle: 30, auto_renewal: true,
    expired_at: '2026-10-02T00:00:00Z', traffic_limit: 3298534883328, traffic_limit_type: 'sum', public_remark: '美国西海岸入口。'
  },
  {
    uuid: 'home-lab-note-05', name: 'Home Lab', region: '🏠', group: '家庭实验室', tags: 'NAS;离线测试',
    cpu_name: 'Intel N100', cpu_cores: 4, cpu_physical_cores: 4, arch: 'amd64', virtualization: 'bare-metal',
    os: 'Proxmox VE 8', kernel_version: '6.8.12-4-pve', mem_total: 17179869184, swap_total: 8589934592,
    disk_total: 1099511627776, weight: 20, price: -1, currency: '¥', billing_cycle: 0, auto_renewal: false,
    expired_at: null, traffic_limit: 0, traffic_limit_type: 'max', public_remark: '维护中，暂时离线。'
  },
  {
    uuid: 'sydney-note-06', name: 'Sydney Assignment', region: '🇦🇺', group: '大洋洲节点', tags: '边缘;备用',
    cpu_name: 'Ampere Altra', cpu_cores: 4, cpu_physical_cores: 4, arch: 'arm64', virtualization: 'kvm',
    os: 'Ubuntu 22.04 LTS', kernel_version: '5.15.0-116-generic', mem_total: 6442450944, swap_total: 1073741824,
    disk_total: 107374182400, weight: 50, price: 0, currency: '$', billing_cycle: 30, auto_renewal: false,
    expired_at: null, traffic_limit: 1099511627776, traffic_limit_type: 'sum', public_remark: ''
  }
];

function mockLive(cpu, ramUsed, ramTotal, diskUsed, diskTotal, up, down, uptime, totalUp, totalDown) {
  return {
    cpu: { usage: cpu },
    ram: { used: ramUsed, total: ramTotal },
    swap: { used: 134217728, total: 2147483648 },
    load: { load1: cpu / 18, load5: cpu / 21, load15: cpu / 24 },
    disk: { used: diskUsed, total: diskTotal },
    network: { up, down, totalUp, totalDown },
    connections: { tcp: 42 + Math.round(cpu), udp: 5 },
    uptime,
    process: 96 + Math.round(cpu),
    updated_at: nowIso()
  };
}

const MOCK_LIVE = {
  'tokyo-note-01': mockLive(18.4, 3221225472, 8589934592, 64424509440, 171798691840, 1835008, 6291456, 5382412, 440234147840, 702317920256),
  'singapore-note-02': mockLive(32.7, 2684354560, 4294967296, 42949672960, 85899345920, 917504, 3145728, 2298821, 128849018880, 310311387136),
  'frankfurt-note-03': mockLive(9.2, 5368709120, 17179869184, 193273528320, 536870912000, 524288, 1572864, 9321441, 1181116006400, 2748779069440),
  'los-angeles-note-04': mockLive(46.1, 4939212390, 8589934592, 75161927680, 128849018880, 3670016, 8388608, 3820932, 665719930880, 1105954078720),
  'sydney-note-06': mockLive(14.9, 2415919104, 6442450944, 35433480192, 107374182400, 393216, 1048576, 1274920, 96636764160, 214748364800)
};

const MOCK_PING = {
  'tokyo-note-01': { avg: 32, loss: 0, min: 27, max: 41, taskName: 'Tokyo ICMP' },
  'singapore-note-02': { avg: 48, loss: 0.4, min: 42, max: 68, taskName: 'Singapore ICMP' },
  'frankfurt-note-03': { avg: 172, loss: 1.2, min: 164, max: 211, taskName: 'Global ICMP' },
  'los-angeles-note-04': { avg: 138, loss: 0.8, min: 129, max: 182, taskName: 'Global ICMP' },
  'sydney-note-06': { avg: 212, loss: 2.5, min: 201, max: 264, taskName: 'Global ICMP' }
};

function makeMockHistory(node, nodeIndex) {
  const live = MOCK_LIVE[node.uuid];
  const records = [];
  const pingRecords = [];
  const end = Date.now();
  const count = 144;
  const baseCpu = live?.cpu?.usage ?? 10;
  const baseRam = live?.ram?.used ?? node.mem_total * 0.35;
  const baseDisk = live?.disk?.used ?? node.disk_total * 0.4;
  const pingBase = MOCK_PING[node.uuid]?.avg ?? 80;
  const tasks = [
    { id: 1, name: language === 'en' ? 'China Unicom' : '广州联通', default_on: true },
    { id: 2, name: language === 'en' ? 'China Mobile' : '上海移动', default_on: false },
    { id: 3, name: 'Cloudflare', default_on: false }
  ];

  for (let index = 0; index < count; index += 1) {
    const wave = Math.sin((index + nodeIndex * 4) / 7);
    const ripple = Math.cos((index + nodeIndex) / 3.7);
    const time = new Date(end - ((count - 1 - index) * 600000)).toISOString();
    const cpu = clamp(baseCpu + wave * 9 + ripple * 3, 1, 96);
    const ram = clamp(baseRam + wave * node.mem_total * 0.035, 0, node.mem_total);
    const disk = clamp(baseDisk + index * node.disk_total * 0.00008, 0, node.disk_total);
    const netIn = Math.max(0, (live?.network?.down ?? 1048576) * (0.75 + wave * 0.28 + ripple * 0.12));
    const netOut = Math.max(0, (live?.network?.up ?? 524288) * (0.78 + wave * 0.24 - ripple * 0.09));
    records.push({
      client: node.uuid,
      time,
      cpu,
      ram,
      ram_total: node.mem_total,
      disk,
      disk_total: node.disk_total,
      net_in: netIn,
      net_out: netOut,
      process: Math.max(20, Math.round((live?.process ?? 90) + wave * 8)),
      connections: Math.max(2, Math.round((live?.connections?.tcp ?? 40) + wave * 13)),
      connections_udp: Math.max(0, Math.round((live?.connections?.udp ?? 4) + ripple * 2))
    });

    tasks.forEach((task, taskIndex) => {
      const taskWave = Math.sin((index + (taskIndex * 5) + nodeIndex) / (5.8 + taskIndex));
      const base = pingBase + (taskIndex * 24) + (nodeIndex * taskIndex * 3);
      const lossModulo = Math.max(17, 43 - (nodeIndex * 3) - (taskIndex * 4));
      const lost = (index + nodeIndex + (taskIndex * 2)) % lossModulo === 0;
      pingRecords.push({
        task_id: task.id,
        time,
        value: lost ? -1 : Math.max(1, base + (taskWave * (7 + taskIndex * 2)) + (ripple * 2.5)),
        client: node.uuid
      });
    });
  }

  const basicInfo = tasks.map((task) => {
    const taskRecords = pingRecords.filter((record) => record.task_id === task.id);
    const values = taskRecords.map((record) => Number(record.value)).filter((value) => value >= 0);
    const losses = taskRecords.filter((record) => Number(record.value) < 0).length;
    return {
      client: node.uuid,
      task_id: task.id,
      loss: taskRecords.length ? (losses / taskRecords.length) * 100 : 0,
      min: values.length ? Math.min(...values) : null,
      max: values.length ? Math.max(...values) : null
    };
  });

  return {
    loadedAt: Date.now(),
    hours: 24,
    loadHours: 24,
    pingHours: 24,
    loadLoadedAt: Date.now(),
    pingLoadedAt: Date.now(),
    loading: false,
    load: { records, count: records.length },
    ping: { records: pingRecords, count: pingRecords.length, tasks, basic_info: basicInfo },
    error: null
  };
}

function bool(value, fallback) {
  if (typeof value === 'boolean') return value;
  if (String(value).toLowerCase() === 'true') return true;
  if (String(value).toLowerCase() === 'false') return false;
  return fallback;
}

function normalizeSettings(raw = {}) {
  const settings = { ...DEFAULTS, ...(raw && typeof raw === 'object' ? raw : {}) };
  settings.notebook_title = String(settings.notebook_title || DEFAULTS.notebook_title).slice(0, 80);
  settings.notebook_subtitle = String(settings.notebook_subtitle || DEFAULTS.notebook_subtitle).slice(0, 180);
  settings.footer_note = String(settings.footer_note || DEFAULTS.footer_note).slice(0, 120);
  settings.accent_color = ['blue', 'green', 'purple', 'orange', 'red'].includes(settings.accent_color) ? settings.accent_color : 'blue';
  settings.paper_tone = ['warm', 'white', 'blue'].includes(settings.paper_tone) ? settings.paper_tone : 'warm';
  settings.default_view = settings.default_view === 'table' ? 'table' : 'cards';
  settings.card_columns = String(settings.card_columns) === '3' ? '3' : '4';
  for (const key of ['show_summary', 'show_search', 'show_group_filter', 'show_tags', 'show_hardware']) {
    settings[key] = bool(settings[key], DEFAULTS[key]);
  }
  settings.refresh_seconds = clamp(Number(settings.refresh_seconds) || 5, 1, 60);
  return settings;
}

function applySettings() {
  const remoteSettings = state.publicInfo?.theme_settings;
  let cachedPaperTone = null;
  try {
    const value = localStorage.getItem(PAPER_TONE_CACHE_KEY);
    if (['warm', 'white', 'blue'].includes(value)) cachedPaperTone = value;
  } catch {
    cachedPaperTone = null;
  }
  const initialSettings = remoteSettings || (cachedPaperTone ? { paper_tone: cachedPaperTone } : {});
  state.settings = normalizeSettings(initialSettings);
  document.documentElement.dataset.accent = state.settings.accent_color;
  document.documentElement.dataset.paper = state.settings.paper_tone;
  document.documentElement.dataset.cardColumns = state.settings.card_columns;
  document.documentElement.dataset.refreshSeconds = String(state.settings.refresh_seconds);
  dom.title.textContent = state.settings.notebook_title;
  dom.subtitle.textContent = state.settings.notebook_subtitle;
  dom.footerNote.textContent = state.settings.footer_note;
  dom.summary.classList.toggle('is-hidden', !state.settings.show_summary);
  dom.searchBox.classList.toggle('is-hidden', !state.settings.show_search);
  if (!state.settings.show_group_filter) dom.tabs.classList.add('is-hidden');
  const storedView = localStorage.getItem('notebook-view');
  state.view = storedView === 'table' || storedView === 'cards' ? storedView : state.settings.default_view;
  if (innerWidth <= 760) state.view = 'cards';
  updateViewButtons();
  if (state.publicInfo) {
    try {
      localStorage.setItem(PAPER_TONE_CACHE_KEY, state.settings.paper_tone);
    } catch {
      // Storage may be unavailable in privacy-restricted contexts.
    }
    delete document.documentElement.dataset.settingsPending;
  }
}

const darkQuery = matchMedia('(prefers-color-scheme: dark)');

function resolvedAppearance() {
  return state.appearance === 'system' ? (darkQuery.matches ? 'dark' : 'light') : state.appearance;
}

function applyAppearance(showToast = false) {
  const mode = resolvedAppearance();
  document.documentElement.dataset.theme = mode;
  document.querySelector('meta[name="theme-color"]').content = mode === 'dark' ? '#202733' : '#f4edda';
  const target = dom.appearance.querySelector('[data-icon]');
  target.dataset.icon = mode === 'dark' ? 'moon' : 'sun';
  hydrateIcons(dom.appearance);
  if (showToast) {
    const name = state.appearance[0].toUpperCase() + state.appearance.slice(1);
    toast(t(`theme${name}`));
  }
}

function cycleAppearance() {
  const order = ['system', 'light', 'dark'];
  state.appearance = order[(order.indexOf(state.appearance) + 1) % order.length];
  localStorage.setItem('appearance', state.appearance);
  applyAppearance(true);
}

function sortMessageKey(value = state.sort) {
  return {
    weight: 'sortWeight',
    online: 'sortOnline',
    name: 'sortName',
    cpu: 'sortCpu',
    ram: 'sortRam',
    network: 'sortNetwork',
    remaining: 'sortRemaining',
    latency: 'sortLatency'
  }[value] || 'sortWeight';
}

function syncSortMenu() {
  dom.sortCurrent.textContent = t(sortMessageKey());
  dom.sortMenu.querySelectorAll('[data-sort]').forEach((button) => {
    const active = button.dataset.sort === state.sort;
    button.setAttribute('aria-checked', String(active));
    button.classList.toggle('is-active', active);
  });
}

function applyTranslations() {
  document.documentElement.lang = language;
  $('summary-node-label').textContent = t('nodeStatus');
  $('summary-node-caption').textContent = t('onlineOfTotal');
  $('summary-speed-label').textContent = t('liveRate');
  $('summary-rate-caption').textContent = t('rateCaption');
  $('summary-traffic-label').textContent = t('cumulativeTraffic');
  $('summary-traffic-caption').textContent = t('cumulativeCaption');
  $('summary-assets-label').textContent = t('assetOverview');
  $('node-list-title').textContent = t('checklist');
  $('search-label').textContent = t('search');
  dom.search.placeholder = t('searchPlaceholder');
  $('sort-label').textContent = t('sort');
  $('cards-view-label').textContent = t('cards');
  $('table-view-label').textContent = t('table');
  dom.emptyTitle.textContent = t('noMatches');
  dom.emptyDesc.textContent = t('tryAgain');
  dom.clear.textContent = t('clear');
  dom.dialogClose.setAttribute('aria-label', t('close'));
  dom.overviewClose.setAttribute('aria-label', t('close'));
  dom.lang.querySelector('.language-mark').textContent = language === 'zh-CN' ? '中' : 'EN';

  dom.sortMenu.querySelectorAll('[data-sort-label]').forEach((label) => {
    label.textContent = t(label.dataset.sortLabel);
  });
  syncSortMenu();

  for (const [element, key] of [[dom.refresh, 'refresh'], [dom.lang, 'language'], [dom.appearance, 'appearance']]) {
    element.dataset.tooltip = t(key);
    element.setAttribute('aria-label', t(key));
    element.title = t(key);
  }
  for (const button of [dom.trafficOverviewButton, dom.assetOverviewButton]) {
    button.dataset.tooltip = t('expandDetails');
    button.setAttribute('aria-label', t('expandDetails'));
  }
  const admin = document.querySelector('a[href="/admin"]');
  admin.dataset.tooltip = t('admin');
  admin.setAttribute('aria-label', t('admin'));
  admin.title = t('admin');
  updateConnection();
}

function toggleLanguage() {
  language = language === 'zh-CN' ? 'en' : 'zh-CN';
  localStorage.setItem('language', language);
  applyTranslations();
  render();
  if (state.selected && dom.dialog.open) renderDialog(state.selected);
  if (state.overviewType && dom.overviewDialog.open) renderOverview(state.overviewType);
  toast(language === 'zh-CN' ? '界面语言已切换为中文' : 'Interface language switched to English');
}

function setLiveState(value) {
  state.liveState = value;
  document.documentElement.dataset.liveState = value === 'open' ? 'open' : value === 'offline' ? 'offline' : 'reconnecting';
  updateConnection();
}

function updateConnection() {
  const messageKey = {
    connecting: 'connecting',
    open: 'live',
    reconnecting: 'reconnecting',
    fallback: 'fallback',
    offline: 'offlineConnection'
  }[state.liveState] || 'connecting';
  dom.connection.textContent = t(messageKey);
}

async function mapLimit(items, limit, handler) {
  const output = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      try {
        output[index] = await handler(items[index]);
      } catch {
        output[index] = null;
      }
    }
  }));
  return output;
}

async function load() {
  if (DEMO) {
    await new Promise((resolve) => setTimeout(resolve, 220));
    state.publicInfo = {
      sitename: 'Komari Lab',
      theme_settings: {
        ...DEFAULTS,
        ...(DEMO_REFRESH ? { refresh_seconds: DEMO_REFRESH } : {}),
        ...(DEMO_TAGS === '0' ? { show_tags: false } : {}),
        ...(['warm', 'white', 'blue'].includes(DEMO_PAPER) ? { paper_tone: DEMO_PAPER } : {})
      }
    };
    state.nodes = structuredClone(MOCK_NODES);
    state.live = structuredClone(MOCK_LIVE);
    state.online = new Set(Object.keys(MOCK_LIVE));
    state.ping = {};
    state.pingReady = true;
    state.liveReady = true;
    state.lastLive = Date.now();
    state.loaded = true;
    state.nodes.forEach((node, index) => {
      const history = makeMockHistory(node, index);
      state.history.set(node.uuid, history);
      const summary = summarizeNodePing(history.ping, node.uuid);
      if (summary.avg !== null || summary.loss !== null) state.ping[node.uuid] = summary;
    });
    applySettings();
    finishLoading();
    setLiveState('open');
    render();
    if (!STATIC_DEMO) startDemo();
    return;
  }

  const [publicResult, nodesResult] = await Promise.allSettled([api('/api/public'), api('/api/nodes')]);
  state.publicInfo = publicResult.status === 'fulfilled' ? (publicResult.value || {}) : { sitename: 'Komari', theme_settings: {} };
  if (nodesResult.status !== 'fulfilled') throw nodesResult.reason || new Error('Unable to load nodes');
  state.nodes = Array.isArray(nodesResult.value) ? nodesResult.value.filter((node) => node?.uuid) : [];
  state.loaded = true;
  applySettings();
  finishLoading();
  render();
  connectLive();
  void refreshPingSummaries();
  clearInterval(state.pingTimer);
  state.pingTimer = setInterval(() => void refreshPingSummaries(true), 90000);
}

function finishLoading() {
  dom.app.classList.remove('is-loading');
  dom.app.setAttribute('aria-busy', 'false');
  dom.skeleton.classList.add('is-hidden');
  hideNotice();
}

function connectLive() {
  closeSocket();
  setLiveState(state.retry ? 'reconnecting' : 'connecting');
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  let socket;
  try {
    socket = new WebSocket(`${protocol}//${location.host}/api/clients`);
    state.socket = socket;
  } catch {
    scheduleReconnect();
    return;
  }

  socket.addEventListener('open', () => {
    if (state.socket !== socket) return;
    state.retry = 0;
    setLiveState('open');
    requestLive();
    state.socketTimer = setInterval(requestLive, state.settings.refresh_seconds * 1000);
    scheduleFallback(9000);
  });

  socket.addEventListener('message', (event) => {
    if (state.socket !== socket) return;
    try {
      const payload = JSON.parse(event.data);
      const data = payload?.data || payload;
      state.online = new Set(Array.isArray(data?.online) ? data.online : []);
      state.live = { ...state.live, ...(data?.data && typeof data.data === 'object' ? data.data : {}) };
      state.liveReady = true;
      state.lastLive = Date.now();
      setLiveState('open');
      clearFallback();
      render();
    } catch {
      // Ignore malformed frames and wait for the next update.
    }
  });

  socket.addEventListener('close', () => {
    if (state.socket !== socket) return;
    state.socket = null;
    clearInterval(state.socketTimer);
    state.socketTimer = null;
    scheduleReconnect();
  });

  socket.addEventListener('error', () => socket.close());
}

function requestLive() {
  if (state.socket?.readyState === WebSocket.OPEN) state.socket.send('get');
}

function scheduleReconnect() {
  state.retry += 1;
  setLiveState('reconnecting');
  scheduleFallback(5000);
  clearTimeout(state.reconnectTimer);
  state.reconnectTimer = setTimeout(connectLive, Math.min(30000, 1200 * (2 ** Math.min(state.retry, 5))));
}

function closeSocket() {
  clearInterval(state.socketTimer);
  clearTimeout(state.reconnectTimer);
  state.socketTimer = null;
  state.reconnectTimer = null;
  const socket = state.socket;
  state.socket = null;
  if (socket) socket.close();
}

function scheduleFallback(milliseconds) {
  clearTimeout(state.fallbackTimer);
  state.fallbackTimer = setTimeout(() => {
    if (Date.now() - state.lastLive > 8500) void refreshRecent();
  }, milliseconds);
}

function clearFallback() {
  clearTimeout(state.fallbackTimer);
  clearInterval(state.fallbackInterval);
  state.fallbackTimer = null;
  state.fallbackInterval = null;
}

async function refreshRecent() {
  if (!state.nodes.length || DEMO) return;
  const results = await mapLimit(state.nodes, 4, async (node) => {
    const records = await api(`/api/recent/${encodeURIComponent(node.uuid)}`);
    const latest = Array.isArray(records) ? records.at(-1) : null;
    return latest ? { uuid: node.uuid, latest } : null;
  });
  const valid = results.filter(Boolean);
  if (!valid.length) {
    if (!state.liveReady) setLiveState('offline');
    return;
  }

  const live = { ...state.live };
  const online = new Set();
  for (const { uuid, latest } of valid) {
    live[uuid] = latest;
    const age = Date.now() - Date.parse(latest.updated_at || '');
    if (Number.isFinite(age) && age < 120000) online.add(uuid);
  }
  state.live = live;
  state.online = online;
  state.liveReady = true;
  state.lastLive = Date.now();
  setLiveState('fallback');
  render();
  clearInterval(state.fallbackInterval);
  state.fallbackInterval = setInterval(() => {
    if (state.liveState !== 'open') void refreshRecent();
  }, Math.max(1000, state.settings.refresh_seconds * 1000));
}

function startDemo() {
  if (state.demoTimer) return;
  state.demoTimer = setInterval(() => {
    for (const [uuid, live] of Object.entries(state.live)) {
      live.cpu.usage = clamp(live.cpu.usage + ((Math.random() - 0.48) * 9), 2, 92);
      live.ram.used = clamp(live.ram.used + ((Math.random() - 0.5) * 120000000), 0, live.ram.total);
      live.network.up = Math.max(0, live.network.up * (0.78 + (Math.random() * 0.45)));
      live.network.down = Math.max(0, live.network.down * (0.78 + (Math.random() * 0.45)));
      live.network.totalUp += live.network.up * state.settings.refresh_seconds;
      live.network.totalDown += live.network.down * state.settings.refresh_seconds;
      live.uptime += state.settings.refresh_seconds;
      live.updated_at = nowIso();
      if (state.ping[uuid]) state.ping[uuid].avg = Math.max(1, state.ping[uuid].avg + ((Math.random() - 0.5) * 3));
    }
    render();
  }, state.settings.refresh_seconds * 1000);
}

async function refreshAll() {
  if (state.refreshing) return;
  state.refreshing = true;
  dom.refresh.classList.add('is-spinning');
  try {
    if (DEMO) {
      for (const live of Object.values(state.live)) {
        live.cpu.usage = clamp(live.cpu.usage + ((Math.random() - 0.5) * 10));
        live.updated_at = nowIso();
      }
    } else {
      const [publicInfo, nodes] = await Promise.all([api('/api/public'), api('/api/nodes')]);
      state.publicInfo = publicInfo || {};
      state.nodes = Array.isArray(nodes) ? nodes.filter((node) => node?.uuid) : [];
      applySettings();
      if (state.socket?.readyState === WebSocket.OPEN) {
        clearInterval(state.socketTimer);
        state.socketTimer = setInterval(requestLive, state.settings.refresh_seconds * 1000);
      }
      requestLive();
      if (state.liveState !== 'open') await refreshRecent();
      void refreshPingSummaries(true);
    }
    hideNotice();
    render();
    toast(t('refreshed'));
  } catch (error) {
    showNotice(`${t('loadFailed')}：${error?.message || t('unknown')}`);
    toast(t('refreshFailed'));
  } finally {
    state.refreshing = false;
    dom.refresh.classList.remove('is-spinning');
  }
}

function chooseNodeTask(tasks, uuid) {
  const assigned = tasks.filter((task) => Array.isArray(task.clients) && task.clients.includes(uuid));
  return assigned.find((task) => task.default_on) || assigned[0] || null;
}

function pingBasicInfo(data, uuid, taskId = null) {
  const items = Array.isArray(data?.basic_info) ? data.basic_info : [];
  return items.find((item) => item.client === uuid && (taskId === null || item.task_id === undefined || String(item.task_id) === String(taskId)))
    || items.find((item) => item.client === uuid)
    || null;
}

function summarizePingRecords(records, basicInfo, taskName = '', taskId = null) {
  const sorted = [...(records || [])].sort((a, b) => Date.parse(a.time || '') - Date.parse(b.time || ''));
  const values = sorted.map((record) => Number(record.value)).filter((value) => Number.isFinite(value) && value >= 0);
  const losses = sorted.filter((record) => Number(record.value) < 0).length;
  const avg = values.length
    ? values.reduce((sum, value) => sum + value, 0) / values.length
    : hasNumber(basicInfo?.avg) ? Number(basicInfo.avg) : null;
  const loss = hasNumber(basicInfo?.loss)
    ? Number(basicInfo.loss)
    : sorted.length ? (losses / sorted.length) * 100 : null;
  return {
    avg,
    loss,
    min: hasNumber(basicInfo?.min) ? Number(basicInfo.min) : values.length ? Math.min(...values) : null,
    max: hasNumber(basicInfo?.max) ? Number(basicInfo.max) : values.length ? Math.max(...values) : null,
    taskName,
    taskId,
    records: sorted.slice(-360),
    segments: buildPingSegments(sorted, 18, 1)
  };
}

function pingTasksForNode(data, uuid) {
  const records = Array.isArray(data?.records) ? data.records.filter((record) => !record.client || record.client === uuid) : [];
  const declared = Array.isArray(data?.tasks) ? data.tasks : [];
  const inferredIds = [...new Set(records.map((record) => record.task_id).filter((value) => value !== undefined && value !== null))];
  const tasks = declared.length
    ? declared
    : inferredIds.map((id) => ({ id, name: `Ping ${id}`, default_on: false }));
  return tasks.map((task) => {
    const taskRecords = records.filter((record) => String(record.task_id) === String(task.id));
    const basic = pingBasicInfo(data, uuid, task.id);
    // A node-scoped Ping response may expose route statistics on each task,
    // while basic_info can be aggregated only by node. Prefer route fields when present.
    const routeInfo = {
      avg: hasNumber(task.avg) ? Number(task.avg) : basic?.avg,
      loss: hasNumber(task.loss) ? Number(task.loss) : basic?.loss,
      min: hasNumber(task.min) ? Number(task.min) : basic?.min,
      max: hasNumber(task.max) ? Number(task.max) : basic?.max
    };
    return {
      task,
      ...summarizePingRecords(taskRecords, routeInfo, task.name || `Ping ${task.id}`, task.id)
    };
  }).filter((item) => item.records.length || item.avg !== null || item.loss !== null);
}

function summarizeNodePing(data, uuid) {
  const tasks = pingTasksForNode(data, uuid);
  const selected = tasks.find((item) => item.task.default_on) || tasks[0] || null;
  if (!selected) return summarizePingRecords([], null, '', null);
  return {
    avg: selected.avg,
    loss: selected.loss,
    min: selected.min,
    max: selected.max,
    taskName: selected.taskName,
    taskId: selected.taskId,
    records: selected.records,
    segments: selected.segments
  };
}

async function refreshPingByTasks(tasks) {
  const selectedByNode = new Map();
  for (const node of state.nodes) {
    const selected = chooseNodeTask(tasks, node.uuid);
    if (selected) selectedByNode.set(node.uuid, selected);
  }
  const uniqueTasks = [...new Map([...selectedByNode.values()].map((task) => [String(task.id), task])).values()];
  if (!uniqueTasks.length) return false;

  const responses = await mapLimit(uniqueTasks, 3, async (task) => ({
    task,
    data: await api(`/api/records/ping?task_id=${encodeURIComponent(task.id)}&hours=1`)
  }));

  const next = {};
  for (const response of responses.filter(Boolean)) {
    const { task, data } = response;
    const records = Array.isArray(data?.records) ? data.records : [];
    for (const [uuid, selected] of selectedByNode.entries()) {
      if (String(selected.id) !== String(task.id)) continue;
      const nodeRecords = records.filter((record) => record.client === uuid && String(record.task_id) === String(task.id));
      const nodeBasicInfo = pingBasicInfo(data, uuid, task.id);
      if (!nodeRecords.length && !nodeBasicInfo) continue;
      next[uuid] = summarizePingRecords(nodeRecords, nodeBasicInfo, task.name || '', task.id);
    }
  }

  state.ping = { ...state.ping, ...next };
  return Object.keys(next).length > 0;
}

async function refreshPingByNode() {
  const results = await mapLimit(state.nodes, 4, async (node) => ({
    uuid: node.uuid,
    data: await api(`/api/records/ping?uuid=${encodeURIComponent(node.uuid)}&hours=1`)
  }));
  const next = {};
  for (const result of results.filter(Boolean)) {
    const summary = summarizeNodePing(result.data, result.uuid);
    if (summary.avg !== null || summary.loss !== null) next[result.uuid] = summary;
  }
  state.ping = { ...state.ping, ...next };
  return Object.keys(next).length > 0;
}

async function refreshPingSummaries(silent = false) {
  if (DEMO || state.pingLoading || !state.nodes.length) return;
  state.pingLoading = true;
  if (!silent) scheduleRender();
  try {
    let refreshed = false;
    try {
      const tasks = await api('/api/task/ping');
      if (Array.isArray(tasks) && tasks.length) refreshed = await refreshPingByTasks(tasks);
    } catch {
      refreshed = false;
    }
    if (!refreshed) await refreshPingByNode();
    state.pingReady = true;
  } catch {
    state.pingReady = true;
  } finally {
    state.pingLoading = false;
    render();
  }
}

function isOnline(node) {
  return state.liveReady ? state.online.has(node.uuid) : null;
}

function filteredNodes() {
  const query = state.search.trim().toLocaleLowerCase(language);
  const originalOrder = new Map(state.nodes.map((node, index) => [node.uuid, index]));
  const list = state.nodes.filter((node) => {
    const group = cleanText(node.group);
    if (state.group === '__ungrouped__' && group) return false;
    if (state.group !== '__all__' && state.group !== '__ungrouped__' && group !== state.group) return false;
    if (!query) return true;
    return [node.name, node.group, node.region, node.tags, node.os, node.cpu_name, node.virtualization, node.arch, node.public_remark]
      .filter(Boolean)
      .join(' ')
      .toLocaleLowerCase(language)
      .includes(query);
  });

  const stable = (a, b) => (originalOrder.get(a.uuid) ?? 0) - (originalOrder.get(b.uuid) ?? 0);
  return list.sort((a, b) => {
    if (state.sort === 'weight') {
      const aWeight = hasNumber(a.weight) ? Number(a.weight) : Number.POSITIVE_INFINITY;
      const bWeight = hasNumber(b.weight) ? Number(b.weight) : Number.POSITIVE_INFINITY;
      return aWeight - bWeight || stable(a, b);
    }
    if (state.sort === 'name') return String(a.name || '').localeCompare(String(b.name || ''), language) || stable(a, b);
    if (state.sort === 'online') return Number(isOnline(b) === true) - Number(isOnline(a) === true) || stable(a, b);
    if (state.sort === 'cpu') return safe(state.live[b.uuid]?.cpu?.usage, -1) - safe(state.live[a.uuid]?.cpu?.usage, -1) || stable(a, b);
    if (state.sort === 'ram') {
      return ratio(state.live[b.uuid]?.ram?.used, state.live[b.uuid]?.ram?.total || b.mem_total)
        - ratio(state.live[a.uuid]?.ram?.used, state.live[a.uuid]?.ram?.total || a.mem_total)
        || stable(a, b);
    }
    if (state.sort === 'network') {
      const bRate = safe(state.live[b.uuid]?.network?.up) + safe(state.live[b.uuid]?.network?.down);
      const aRate = safe(state.live[a.uuid]?.network?.up) + safe(state.live[a.uuid]?.network?.down);
      return bRate - aRate || stable(a, b);
    }
    if (state.sort === 'remaining') {
      const aTraffic = trafficInfo(a, state.live[a.uuid]);
      const bTraffic = trafficInfo(b, state.live[b.uuid]);
      const aRemaining = aTraffic.unlimited ? Number.POSITIVE_INFINITY : safe(aTraffic.remaining, -1);
      const bRemaining = bTraffic.unlimited ? Number.POSITIVE_INFINITY : safe(bTraffic.remaining, -1);
      return bRemaining - aRemaining || stable(a, b);
    }
    if (state.sort === 'latency') {
      const aLatency = hasNumber(state.ping[a.uuid]?.avg) ? Number(state.ping[a.uuid].avg) : Number.POSITIVE_INFINITY;
      const bLatency = hasNumber(state.ping[b.uuid]?.avg) ? Number(state.ping[b.uuid].avg) : Number.POSITIVE_INFINITY;
      return aLatency - bLatency || stable(a, b);
    }
    return stable(a, b);
  });
}

function scheduleRender() {
  if (state.renderQueued) return;
  state.renderQueued = true;
  requestAnimationFrame(() => {
    state.renderQueued = false;
    render();
  });
}

function render() {
  dom.siteName.textContent = String(state.publicInfo?.sitename || 'Komari');
  renderSummary();
  renderGroups();
  renderNodes();
  updateConnection();
  syncSortMenu();
  if (state.selected && dom.dialog.open) renderDialogOverview(state.selected);
  if (state.overviewType && dom.overviewDialog.open) renderOverview(state.overviewType);
}

function renderSummary() {
  let uploadRate = 0;
  let downloadRate = 0;
  for (const node of state.nodes) {
    if (isOnline(node) === true) {
      uploadRate += safe(state.live[node.uuid]?.network?.up);
      downloadRate += safe(state.live[node.uuid]?.network?.down);
    }
  }
  const online = state.liveReady ? state.nodes.filter((node) => isOnline(node) === true).length : null;
  const traffic = trafficOverviewData();
  const assets = assetOverviewData();

  dom.summaryNodeValue.textContent = `${online === null ? '—' : online} / ${state.nodes.length}`;
  dom.summaryNodeCaption.textContent = t('onlineOfTotal');
  dom.summaryUp.textContent = state.liveReady ? formatRate(uploadRate) : '—';
  dom.summaryDown.textContent = state.liveReady ? formatRate(downloadRate) : '—';
  dom.summaryTotalUp.textContent = formatBytes(traffic.upload);
  dom.summaryTotalDown.textContent = formatBytes(traffic.download);

  if (!assets.groups.length) {
    dom.summaryAssetPrimary.textContent = '—';
    dom.summaryAssetSecondary.textContent = t('noBillingData');
  } else {
    const nodeCount = assets.groups.reduce((sum, group) => sum + group.nodes, 0);
    dom.summaryAssetPrimary.textContent = `${formatMoney(assets.monthlyCny, '¥')}/${language === 'en' ? 'mo' : '月'}`;
    dom.summaryAssetSecondary.textContent = `${nodeCount} ${t('billableNodes')} · ${assets.groups.length} ${t('currencyKinds')}`;
  }
}

function renderGroups() {
  if (!state.settings.show_group_filter) {
    state.group = '__all__';
    dom.tabs.innerHTML = '';
    dom.tabs.classList.add('is-hidden');
    return;
  }

  const named = new Map();
  let ungrouped = 0;
  for (const node of state.nodes) {
    const group = cleanText(node.group);
    if (group) named.set(group, (named.get(group) || 0) + 1);
    else ungrouped += 1;
  }

  const useful = named.size > 1 || (named.size > 0 && ungrouped > 0);
  if (!useful) {
    state.group = '__all__';
    dom.tabs.innerHTML = '';
    dom.tabs.classList.add('is-hidden');
    return;
  }

  const validGroups = new Set(['__all__', ...named.keys()]);
  if (ungrouped) validGroups.add('__ungrouped__');
  if (!validGroups.has(state.group)) state.group = '__all__';
  const html = [
    `<button class="group-tab ${state.group === '__all__' ? 'is-active' : ''}" type="button" data-group="__all__"><span>${escapeHtml(t('all'))}</span><span class="group-tab-count">${state.nodes.length}</span></button>`
  ];
  for (const group of [...named.keys()].sort((a, b) => a.localeCompare(b, language))) {
    html.push(`<button class="group-tab ${state.group === group ? 'is-active' : ''}" type="button" data-group="${escapeHtml(group)}"><span>${escapeHtml(group)}</span><span class="group-tab-count">${named.get(group)}</span></button>`);
  }
  if (ungrouped) {
    html.push(`<button class="group-tab ${state.group === '__ungrouped__' ? 'is-active' : ''}" type="button" data-group="__ungrouped__"><span>${escapeHtml(t('ungrouped'))}</span><span class="group-tab-count">${ungrouped}</span></button>`);
  }
  dom.tabs.innerHTML = html.join('');
  dom.tabs.classList.remove('is-hidden');
}

function statusBadge(node) {
  const online = isOnline(node);
  if (online === null) return `<span class="status-badge waiting">${escapeHtml(t('waiting'))}</span>`;
  return `<span class="status-badge ${online ? '' : 'offline'}">${escapeHtml(t(online ? 'online' : 'offline'))}</span>`;
}

function metricRow(label, iconName, value, caption, options = {}) {
  const normalized = clamp(value);
  const displayValue = options.displayValue || formatPercent(normalized);
  const tone = options.tone === undefined ? metricTone(normalized) : options.tone;
  const tip = `${label} ${displayValue} · ${caption}`;
  return `<div class="metric-row ${escapeHtml(options.className || '')}">
    <div class="metric-row-head"><span>${icon(iconName, 13)}${escapeHtml(label)}</span><strong>${escapeHtml(displayValue)}</strong></div>
    <span class="metric-track" data-tip="${escapeHtml(tip)}"><span class="metric-fill ${escapeHtml(tone || '')}" style="--value:${normalized.toFixed(1)}%"></span></span>
    <span class="metric-caption" title="${escapeHtml(caption)}">${escapeHtml(caption)}</span>
  </div>`;
}

function segmentTip(segment, type) {
  if (!segment || !segment.count) {
    return `${formatShortTime(segment?.from)}–${formatShortTime(segment?.to)} · ${t('noHistory')}`;
  }
  const label = type === 'loss' ? t('packetLoss') : t('latency');
  const value = type === 'loss' ? formatPercent(segment.loss, segment.loss > 0 && segment.loss < 10 ? 1 : 0) : formatMilliseconds(segment.avg);
  const range = type === 'loss'
    ? `${t('min')} ${formatMilliseconds(segment.min)} · ${t('max')} ${formatMilliseconds(segment.max)}`
    : `${t('packetLoss')} ${formatPercent(segment.loss, segment.loss > 0 && segment.loss < 10 ? 1 : 0)}`;
  return `${formatShortTime(segment.from)}–${formatShortTime(segment.to)} · ${label} ${value} · ${range}`;
}

function qualitySegments(summary, type = 'latency', count = 18) {
  const source = Array.isArray(summary?.segments) && summary.segments.length
    ? summary.segments
    : buildPingSegments(summary?.records || [], count, 1);
  const segments = source.length === count ? source : Array.from({ length: count }, (_, index) => source[index] || null);
  return segments.map((segment) => {
    const value = type === 'loss' ? segment?.loss : segment?.avg;
    const tone = segment?.count ? qualityTone(value, type) : 'empty';
    return `<i class="quality-segment ${tone}" data-tip="${escapeHtml(segmentTip(segment, type))}" aria-hidden="true"></i>`;
  }).join('');
}

function qualityBlock(summary, compact = false) {
  const latency = summary?.avg === null || summary?.avg === undefined ? '—' : formatMilliseconds(summary.avg);
  const loss = summary?.loss === null || summary?.loss === undefined ? '—' : formatPercent(summary.loss, summary.loss > 0 && summary.loss < 10 ? 1 : 0);
  const count = compact ? 10 : 18;
  return `<div class="quality-block ${compact ? 'is-compact' : ''}">
    <div class="quality-row">
      <span class="quality-label"><b>${escapeHtml(t('latency'))}</b><small>${escapeHtml(latency)}</small></span>
      <span class="quality-strip">${qualitySegments(summary, 'latency', count)}</span>
    </div>
    <div class="quality-row">
      <span class="quality-label"><b>${escapeHtml(t('packetLoss'))}</b><small>${escapeHtml(loss)}</small></span>
      <span class="quality-strip">${qualitySegments(summary, 'loss', count)}</span>
    </div>
  </div>`;
}

function networkPanel(node, live) {
  const ping = state.ping[node.uuid];

  return `<section class="node-network-panel">
    <div class="network-panel-head">
      <span class="network-panel-title">${icon('network', 14)}${escapeHtml(t('network'))}</span>
      <span class="uptime-inline">${icon('clock', 12)}${escapeHtml(formatDuration(live?.uptime))}</span>
    </div>
    <div class="network-ledger">
      <div class="network-ledger-row upload-row">
        <span class="network-direction"><em>↑</em><b>${escapeHtml(t('upload'))}</b></span>
        <strong>${escapeHtml(formatRate(live?.network?.up))}</strong>
        <small>${escapeHtml(t('uploadTotal'))} ${escapeHtml(formatBytes(live?.network?.totalUp))}</small>
      </div>
      <div class="network-ledger-row download-row">
        <span class="network-direction"><em>↓</em><b>${escapeHtml(t('download'))}</b></span>
        <strong>${escapeHtml(formatRate(live?.network?.down))}</strong>
        <small>${escapeHtml(t('downloadTotal'))} ${escapeHtml(formatBytes(live?.network?.totalDown))}</small>
      </div>
    </div>
    ${qualityBlock(ping)}
  </section>`;
}

function card(node) {
  const live = state.live[node.uuid];
  const online = isOnline(node);
  const cpu = clamp(live?.cpu?.usage || 0);
  const ramTotal = live?.ram?.total || node.mem_total;
  const diskTotal = live?.disk?.total || node.disk_total;
  const ram = ratio(live?.ram?.used, ramTotal);
  const disk = ratio(live?.disk?.used, diskTotal);
  const traffic = trafficInfo(node, live);
  const remaining = traffic.unlimited ? t('unlimited') : traffic.remaining === null ? '—' : formatBytes(traffic.remaining);
  const remainingPercent = traffic.unlimited ? 100 : traffic.used === null || traffic.limit <= 0 ? 0 : clamp(100 - traffic.percent);
  const trafficCaption = traffic.unlimited
    ? `${t('usedTraffic')} ${traffic.used === null ? '—' : formatBytes(traffic.used)}`
    : `${t('usedTraffic')} ${traffic.used === null ? '—' : formatBytes(traffic.used)} / ${formatBytes(traffic.limit)}`;
  const trafficTone = traffic.unlimited || remainingPercent > 28 ? 'success' : remainingPercent <= 10 ? 'danger' : 'warn';
  const tags = state.settings.show_tags ? splitTags(node.tags).slice(0, 3) : [];
  const group = cleanText(node.group);
  const cpuCaptionParts = [node.cpu_cores ? t('cores', { count: node.cpu_cores }) : null];
  if (state.settings.show_hardware && cleanText(node.cpu_name)) cpuCaptionParts.push(cleanText(node.cpu_name));
  const cpuCaption = cpuCaptionParts.filter(Boolean).join(' · ') || '—';

  return `<article class="node-card ${online === false ? 'is-offline' : ''}" style="--tilt:${tilt(node.uuid)}deg">
    <header class="node-card-header">
      <div class="node-heading">
        <span class="region-mark">${escapeHtml(node.region || '🖥️')}</span>
        <div class="node-title-block">
          <h3 class="node-title" title="${escapeHtml(node.name)}">${escapeHtml(node.name || t('unknown'))}</h3>
          ${group ? `<span class="node-group">${escapeHtml(group)}</span>` : ''}
        </div>
      </div>
      <div class="node-header-actions">
        ${statusBadge(node)}
        <button class="detail-button" type="button" data-open-node="${escapeHtml(node.uuid)}" aria-label="${escapeHtml(t('details'))}" title="${escapeHtml(t('details'))}">${icon('chevron', 13)}<span class="detail-button-label">${escapeHtml(t('details'))}</span></button>
      </div>
    </header>
    ${tags.length ? `<div class="node-tags">${tags.map((tag) => `<span class="node-tag"># ${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
    <div class="metric-list">
      ${metricRow(t('cpu'), 'cpu', cpu, cpuCaption)}
      ${metricRow(t('memory'), 'memory', ram, formatResourcePair(live?.ram?.used, ramTotal))}
      ${metricRow(t('disk'), 'disk', disk, formatResourcePair(live?.disk?.used, diskTotal))}
      ${metricRow(t('remainingTraffic'), 'gauge', remainingPercent, trafficCaption, { displayValue: remaining, tone: trafficTone, className: 'traffic-metric' })}
    </div>
    ${networkPanel(node, live)}
  </article>`;
}

function tableMeter(value, caption) {
  const normalized = clamp(value);
  return `<div class="table-meter">
    <span class="table-meter-row"><span class="metric-track" data-tip="${escapeHtml(caption)}"><span class="metric-fill ${metricTone(normalized)}" style="--value:${normalized}%"></span></span><strong>${formatPercent(normalized)}</strong></span>
    <small>${escapeHtml(caption)}</small>
  </div>`;
}

function table(nodes) {
  return `<table class="node-table">
    <colgroup>
      <col class="col-node"><col class="col-status"><col class="col-cpu"><col class="col-memory">
      <col class="col-disk"><col class="col-network"><col class="col-quality"><col class="col-traffic">
    </colgroup>
    <thead><tr>
      <th>${escapeHtml(t('node'))}</th>
      <th>${escapeHtml(t('status'))}</th>
      <th>${escapeHtml(t('cpu'))}</th>
      <th>${escapeHtml(t('memory'))}</th>
      <th>${escapeHtml(t('disk'))}</th>
      <th>${escapeHtml(t('network'))}</th>
      <th>${escapeHtml(t('latency'))} / ${escapeHtml(t('packetLoss'))}</th>
      <th>${escapeHtml(t('remainingTraffic'))}</th>
    </tr></thead>
    <tbody>${nodes.map((node) => {
      const live = state.live[node.uuid];
      const cpu = clamp(live?.cpu?.usage || 0);
      const ramTotal = live?.ram?.total || node.mem_total;
      const diskTotal = live?.disk?.total || node.disk_total;
      const ram = ratio(live?.ram?.used, ramTotal);
      const disk = ratio(live?.disk?.used, diskTotal);
      const ping = state.ping[node.uuid];
      const traffic = trafficInfo(node, live);
      const remaining = traffic.unlimited ? t('unlimited') : traffic.remaining === null ? '—' : formatBytes(traffic.remaining);
      const group = cleanText(node.group);
      return `<tr>
        <td><div class="table-node"><span class="region-mark">${escapeHtml(node.region || '🖥️')}</span><span class="table-node-copy"><strong>${escapeHtml(node.name || t('unknown'))}</strong>${group ? `<small>${escapeHtml(group)}</small>` : ''}</span><button class="table-detail-button" type="button" data-open-node="${escapeHtml(node.uuid)}" aria-label="${escapeHtml(t('details'))}" title="${escapeHtml(t('details'))}">${icon('chevron', 13)}</button></div></td>
        <td>${statusBadge(node)}</td>
        <td>${tableMeter(cpu, node.cpu_cores ? t('cores', { count: node.cpu_cores }) : '—')}</td>
        <td>${tableMeter(ram, formatResourcePair(live?.ram?.used, ramTotal))}</td>
        <td>${tableMeter(disk, formatResourcePair(live?.disk?.used, diskTotal))}</td>
        <td class="table-network"><strong><span>↑ ${escapeHtml(formatRate(live?.network?.up))}</span><span>↓ ${escapeHtml(formatRate(live?.network?.down))}</span></strong><small>↑ ${escapeHtml(formatBytes(live?.network?.totalUp))} · ↓ ${escapeHtml(formatBytes(live?.network?.totalDown))}</small><small>${escapeHtml(t('uptime'))} ${escapeHtml(formatDuration(live?.uptime))}</small></td>
        <td class="table-quality">${qualityBlock(ping, true)}</td>
        <td class="table-traffic"><strong>${escapeHtml(remaining)}</strong><small>${escapeHtml(traffic.unlimited ? `${t('usedTraffic')} ${traffic.used === null ? '—' : formatBytes(traffic.used)}` : formatPercent(traffic.percent))}</small></td>
      </tr>`;
    }).join('')}</tbody>
  </table>`;
}

function renderNodes() {
  const nodes = filteredNodes();
  dom.count.textContent = state.loaded ? t('shown', { shown: nodes.length, total: state.nodes.length }) : t('reading');
  dom.grid.innerHTML = nodes.map(card).join('');
  dom.tableWrap.innerHTML = table(nodes);

  const none = state.loaded && state.nodes.length === 0;
  const noMatch = state.loaded && state.nodes.length > 0 && !nodes.length;
  dom.empty.classList.toggle('is-hidden', !(none || noMatch));
  if (none) {
    dom.emptyTitle.textContent = t('emptyNodes');
    dom.emptyDesc.textContent = t('emptyNodesDescription');
    dom.clear.classList.add('is-hidden');
  } else {
    dom.emptyTitle.textContent = t('noMatches');
    dom.emptyDesc.textContent = t('tryAgain');
    dom.clear.classList.remove('is-hidden');
  }

  const view = innerWidth <= 760 ? 'cards' : state.view;
  dom.grid.classList.toggle('is-hidden', !nodes.length || view !== 'cards');
  dom.tableWrap.classList.toggle('is-hidden', !nodes.length || view !== 'table');
}

function updateViewButtons() {
  for (const button of dom.viewButtons) {
    const active = button.dataset.view === state.view;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  }
}

function setView(view) {
  state.view = view === 'table' && innerWidth > 760 ? 'table' : 'cards';
  localStorage.setItem('notebook-view', state.view);
  updateViewButtons();
  renderNodes();
}

function detailRow(label, value) {
  return `<div class="detail-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value ?? '—')}</strong></div>`;
}

function detailPanel(title, iconName, rows, className = '') {
  return `<section class="detail-panel ${className}"><h3>${icon(iconName, 17)}${escapeHtml(title)}</h3><div class="detail-list">${rows.filter(Boolean).join('')}</div></section>`;
}

function priceText(node) {
  if (Number(node.price) === -1) return t('free');
  if (Number(node.price) > 0) return formatMoney(node.price, node.currency || '');
  return t('unset');
}

function renderDialogOverview(uuid) {
  const container = document.getElementById('dialog-overview');
  const node = state.nodes.find((item) => item.uuid === uuid);
  if (!container || !node) return;
  const live = state.live[uuid];
  const traffic = trafficInfo(node, live);
  const ramTotal = live?.ram?.total || node.mem_total;
  const swapTotal = live?.swap?.total || node.swap_total;
  const diskTotal = live?.disk?.total || node.disk_total;
  const load = live?.load
    ? `${safe(live.load.load1).toFixed(2)} / ${safe(live.load.load5).toFixed(2)} / ${safe(live.load.load15).toFixed(2)}`
    : '—';
  const remaining = traffic.unlimited ? t('unlimited') : traffic.remaining === null ? '—' : formatBytes(traffic.remaining);
  const gpu = cleanText(node.gpu_name) || t('unset');
  const coreText = [node.cpu_cores ? t('cores', { count: node.cpu_cores }) : null, node.cpu_physical_cores ? `${t('physicalCores')} ${node.cpu_physical_cores}` : null].filter(Boolean).join(' · ') || '—';
  const group = cleanText(node.group);

  const systemRows = [
    detailRow(t('os'), node.os || t('unknown')),
    detailRow(t('kernel'), node.kernel_version || t('unknown')),
    detailRow(t('architecture'), node.arch || t('unknown')),
    detailRow(t('virtualization'), node.virtualization || t('unknown')),
    detailRow(t('region'), node.region || t('unset')),
    group ? detailRow(t('group'), group) : '',
    detailRow(t('uptime'), formatDuration(live?.uptime))
  ];

  const resourceRows = [
    detailRow(t('cpuModel'), cleanText(node.cpu_name) || t('unknown')),
    detailRow(t('cpuCores'), coreText),
    detailRow(t('cpu'), formatPercent(live?.cpu?.usage)),
    detailRow(t('memory'), formatResourcePair(live?.ram?.used, ramTotal)),
    detailRow(t('swap'), formatResourcePair(live?.swap?.used, swapTotal)),
    detailRow(t('disk'), formatResourcePair(live?.disk?.used, diskTotal)),
    detailRow(t('load'), load),
    detailRow(t('processes'), formatCount(live?.process)),
    detailRow(t('gpu'), gpu)
  ];

  const networkRows = [
    detailRow(t('uploadRate'), formatRate(live?.network?.up)),
    detailRow(t('downloadRate'), formatRate(live?.network?.down)),
    detailRow(t('uploadTotal'), formatBytes(live?.network?.totalUp)),
    detailRow(t('downloadTotal'), formatBytes(live?.network?.totalDown)),
    detailRow(t('trafficLimit'), traffic.unlimited ? t('unlimited') : formatBytes(traffic.limit)),
    detailRow(t('usedTraffic'), traffic.used === null ? '—' : formatBytes(traffic.used)),
    detailRow(t('remainingTraffic'), remaining),
    detailRow(t('tcp'), formatCount(live?.connections?.tcp)),
    detailRow(t('udp'), formatCount(live?.connections?.udp))
  ];

  container.innerHTML = [
    detailPanel(t('systemPanel'), 'terminal', systemRows, 'system-panel'),
    detailPanel(t('resourcePanel'), 'cpu', resourceRows, 'resource-panel'),
    detailPanel(t('networkPanel'), 'network', networkRows, 'network-panel')
  ].join('');
}

function finiteValues(values) {
  return values.map((value) => Number(value)).filter((value) => Number.isFinite(value));
}

function lastFinite(values) {
  for (let index = values.length - 1; index >= 0; index -= 1) {
    if (Number.isFinite(Number(values[index]))) return Number(values[index]);
  }
  return null;
}

function chartBounds(series, options = {}) {
  const all = finiteValues(series.flatMap((item) => item.values));
  if (!all.length) return { min: 0, max: 1 };
  let min = hasNumber(options.min) ? Number(options.min) : Math.min(...all);
  let max = hasNumber(options.max) ? Number(options.max) : Math.max(...all);
  if (options.zeroFloor !== false) min = Math.min(0, min);
  if (max === min) max = min + 1;
  return { min, max };
}

function chartPath(values, width, height, min, max) {
  const count = Math.max(values.length, 2);
  let path = '';
  let drawing = false;
  values.forEach((raw, index) => {
    const value = Number(raw);
    if (!Number.isFinite(value)) {
      drawing = false;
      return;
    }
    const x = 10 + ((index / (count - 1)) * (width - 20));
    const normalized = (value - min) / (max - min || 1);
    const y = (height - 12) - (clamp(normalized, 0, 1) * (height - 24));
    path += `${drawing ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)} `;
    drawing = true;
  });
  return path.trim();
}

function chartSvg(series, options = {}) {
  const width = 620;
  const height = options.tall ? 210 : 150;
  const all = finiteValues(series.flatMap((item) => item.values));
  if (!all.length) return '';
  const { min, max } = chartBounds(series, options);
  const grid = [0.2, 0.4, 0.6, 0.8].map((fraction) => {
    const y = 12 + ((height - 24) * fraction);
    return `<line x1="10" y1="${y.toFixed(1)}" x2="610" y2="${y.toFixed(1)}" />`;
  }).join('');
  const paths = series.map((item, index) => {
    const path = chartPath(item.values, width, height, min, max);
    return path ? `<path class="chart-line series-${(index % 8) + 1}" d="${path}" />` : '';
  }).join('');
  return `<svg class="sparkline" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="${escapeHtml(options.label || '')}"><g class="chart-grid-lines">${grid}</g>${paths}</svg>`;
}

const chartRegistry = new Map();
let chartCounter = 0;

function chartCard(title, series, options = {}) {
  const allValues = finiteValues(series.flatMap((item) => item.values));
  const formatter = options.format || formatCount;
  const latest = series.map((item) => ({ name: item.name, value: lastFinite(item.values) }));
  const current = latest.map((item) => `${item.name ? `${item.name} ` : ''}${formatter(item.value)}`).join(' · ');
  const range = allValues.length
    ? `${t('min')} ${formatter(Math.min(...allValues))} · ${t('max')} ${formatter(Math.max(...allValues))}`
    : t('noHistory');
  const legend = series.length > 1
    ? `<div class="chart-legend">${series.map((item, index) => `<span><i class="series-${(index % 8) + 1}"></i>${escapeHtml(item.name)}</span>`).join('')}</div>`
    : '';
  const times = options.times || [];
  const startTime = times.find(Boolean);
  const endTime = [...times].reverse().find(Boolean);
  const id = `chart-${++chartCounter}`;
  const bounds = chartBounds(series, options);
  const count = Math.max(times.length, ...series.map((item) => item.values.length), 1);
  chartRegistry.set(id, { title, series, times, formatter, count, ...bounds });

  return `<article class="chart-card ${options.full ? 'is-full' : ''}">
    <header><div><h4>${escapeHtml(title)}</h4>${legend}</div><strong>${escapeHtml(current || '—')}</strong></header>
    ${allValues.length ? `<div class="chart-canvas interactive-chart" data-chart-id="${id}">${chartSvg(series, { ...options, label: title })}<span class="chart-cursor" aria-hidden="true"></span><span class="chart-markers" aria-hidden="true"></span><div class="chart-hover-box" hidden></div></div>` : `<div class="chart-no-data">${escapeHtml(t('noHistory'))}</div>`}
    <footer><span>${escapeHtml(range)}</span><span>${escapeHtml(startTime ? formatShortTime(startTime) : '—')} — ${escapeHtml(endTime ? formatShortTime(endTime) : '—')}</span></footer>
  </article>`;
}

function bindChartInteractions(root = document) {
  root.querySelectorAll('.interactive-chart').forEach((element) => {
    const move = (event) => {
      const meta = chartRegistry.get(element.dataset.chartId);
      if (!meta) return;
      const rect = element.getBoundingClientRect();
      const fraction = clamp((event.clientX - rect.left) / Math.max(rect.width, 1), 0, 1);
      const index = Math.round(fraction * Math.max(meta.count - 1, 0));
      const cursor = `${fraction * 100}%`;
      element.style.setProperty('--cursor-x', cursor);
      element.classList.add('is-hovering');
      const rows = meta.series.map((item, seriesIndex) => {
        const value = item.values[index];
        return `<span><i class="series-${(seriesIndex % 8) + 1}"></i><b>${escapeHtml(item.name || meta.title)}</b><strong>${escapeHtml(meta.formatter(value))}</strong></span>`;
      }).join('');
      const time = meta.times[index] ? formatDate(meta.times[index]) : '—';
      const box = element.querySelector('.chart-hover-box');
      box.innerHTML = `<time>${escapeHtml(time)}</time>${rows}`;
      box.hidden = false;
      const markers = element.querySelector('.chart-markers');
      markers.innerHTML = meta.series.map((item, seriesIndex) => {
        const value = Number(item.values[index]);
        if (!Number.isFinite(value)) return '';
        const normalized = clamp((value - meta.min) / (meta.max - meta.min || 1), 0, 1);
        return `<i class="series-${(seriesIndex % 8) + 1}" style="--marker-y:${(100 - normalized * 100).toFixed(2)}%"></i>`;
      }).join('');
    };
    element.addEventListener('pointermove', move);
    element.addEventListener('pointerenter', move);
    element.addEventListener('pointerleave', () => {
      element.classList.remove('is-hovering');
      const box = element.querySelector('.chart-hover-box');
      if (box) box.hidden = true;
    });
  });
}

function filterHistoryRecords(records, hours = state.historyHours) {
  const sorted = [...(records || [])].sort((a, b) => Date.parse(a.time || '') - Date.parse(b.time || ''));
  const latest = sorted.length ? Date.parse(sorted.at(-1).time || '') : NaN;
  if (!Number.isFinite(latest)) return sorted;
  const cutoff = latest - (hours * 3600000);
  return sorted.filter((record) => Date.parse(record.time || '') >= cutoff);
}

function ensurePingSelection(uuid, tasks) {
  const validIds = new Set(tasks.map((item) => String(item.task.id)));
  if (!state.pingSelection.has(uuid)) {
    state.pingSelection.set(uuid, new Set(validIds));
  } else {
    const selected = state.pingSelection.get(uuid);
    for (const id of [...selected]) if (!validIds.has(String(id))) selected.delete(id);
  }
  return state.pingSelection.get(uuid);
}

function alignPingSeries(tasks) {
  const times = [...new Set(tasks.flatMap((item) => item.records.map((record) => record.time)).filter(Boolean))]
    .sort((a, b) => Date.parse(a) - Date.parse(b));
  const series = tasks.map((item) => {
    const values = new Map(item.records.map((record) => [record.time, Number(record.value) >= 0 ? Number(record.value) : null]));
    return { name: item.taskName || `Ping ${item.taskId}`, values: times.map((time) => values.has(time) ? values.get(time) : null) };
  });
  return { times, series };
}

function renderPingSection(uuid, entry) {
  const container = document.getElementById('dialog-ping');
  if (!container) return;
  container.setAttribute('aria-busy', String(Boolean(entry?.loading || entry?.pingLoading)));
  if (!entry || entry.loading || (entry.pingLoading && !entry.ping)) {
    container.innerHTML = `<div class="history-state"><span class="history-loader" aria-hidden="true"></span><strong>${escapeHtml(t('loadingHistory'))}</strong></div>`;
    return;
  }
  const pingData = entry.ping || {};
  const filteredData = { ...pingData, records: filterHistoryRecords(pingData.records, state.pingHours) };
  const tasks = pingTasksForNode(filteredData, uuid);
  if (!tasks.length) {
    container.innerHTML = `<div class="history-state"><strong>${escapeHtml(t('noPingTasks'))}</strong><p>${escapeHtml(t('noHistoryDescription'))}</p></div>`;
    return;
  }

  const selected = ensurePingSelection(uuid, tasks);
  const allActive = tasks.every((item) => selected.has(String(item.task.id)));
  const selectedTasks = tasks.filter((item) => selected.has(String(item.task.id)));
  const chips = [
    `<button class="ping-task-chip ${allActive ? 'is-active' : ''}" type="button" data-ping-all="${escapeHtml(uuid)}">${escapeHtml(t('allTasks'))}</button>`,
    ...tasks.map((item, index) => `<button class="ping-task-chip ${selected.has(String(item.task.id)) ? 'is-active' : ''}" type="button" data-ping-task="${escapeHtml(String(item.task.id))}" data-ping-node="${escapeHtml(uuid)}"><i class="series-${(index % 8) + 1}"></i>${escapeHtml(item.taskName || `Ping ${item.taskId}`)}</button>`)
  ].join('');

  let chart = `<div class="history-state compact"><strong>${escapeHtml(t('selectPingTasks'))}</strong></div>`;
  if (selectedTasks.length) {
    const aligned = alignPingSeries(selectedTasks);
    chart = chartCard(t('pingChart'), aligned.series, { zeroFloor: true, format: (value) => formatMilliseconds(value), times: aligned.times, full: true, tall: true });
  }

  container.innerHTML = `<div class="ping-section-head"><div><h4>${escapeHtml(t('pingTasks'))}</h4><p>${escapeHtml(t('selectPingTasks'))}</p></div><div class="ping-task-chips">${chips}</div></div>${chart}`;
}

function renderCharts(uuid) {
  const container = document.getElementById('dialog-charts');
  const entry = state.history.get(uuid);
  if (!container) return;
  chartRegistry.clear();
  chartCounter = 0;
  if (!entry || entry.loading) {
    container.innerHTML = `<div class="history-state"><span class="history-loader" aria-hidden="true"></span><strong>${escapeHtml(t('loadingHistory'))}</strong></div>`;
    renderPingSection(uuid, entry);
    return;
  }

  const loadRecords = filterHistoryRecords(entry.load?.records, state.historyHours);
  const times = loadRecords.map((record) => record.time);
  const cards = [
    chartCard(t('cpuChart'), [{ name: '', values: loadRecords.map((record) => hasNumber(record.cpu) ? Number(record.cpu) : null) }], { min: 0, max: 100, zeroFloor: true, format: (value) => formatPercent(value), times }),
    chartCard(t('memoryChart'), [{ name: '', values: loadRecords.map((record) => hasNumber(record.ram) && hasNumber(record.ram_total) ? ratio(record.ram, record.ram_total) : null) }], { min: 0, max: 100, zeroFloor: true, format: (value) => formatPercent(value), times }),
    chartCard(t('diskChart'), [{ name: '', values: loadRecords.map((record) => hasNumber(record.disk) && hasNumber(record.disk_total) ? ratio(record.disk, record.disk_total) : null) }], { min: 0, max: 100, zeroFloor: true, format: (value) => formatPercent(value), times }),
    chartCard(t('networkChart'), [
      { name: t('upload'), values: loadRecords.map((record) => hasNumber(record.net_out) ? Number(record.net_out) : null) },
      { name: t('download'), values: loadRecords.map((record) => hasNumber(record.net_in) ? Number(record.net_in) : null) }
    ], { zeroFloor: true, format: (value) => formatRate(value), times }),
    chartCard(t('connectionsChart'), [
      { name: t('tcp'), values: loadRecords.map((record) => hasNumber(record.connections) ? Number(record.connections) : null) },
      { name: t('udp'), values: loadRecords.map((record) => hasNumber(record.connections_udp) ? Number(record.connections_udp) : null) }
    ], { zeroFloor: true, format: (value) => formatCount(value), times }),
    chartCard(t('processChart'), [{ name: '', values: loadRecords.map((record) => hasNumber(record.process) ? Number(record.process) : null) }], { zeroFloor: true, format: (value) => formatCount(value), times })
  ];

  container.innerHTML = loadRecords.length
    ? `<div class="chart-grid">${cards.join('')}</div>`
    : `<div class="history-state"><strong>${escapeHtml(t('noHistory'))}</strong><p>${escapeHtml(t('noHistoryDescription'))}</p></div>`;
  renderPingSection(uuid, entry);
  bindChartInteractions(dom.dialogContent);
}

async function loadHistory(uuid, force = false) {
  if (DEMO) {
    renderCharts(uuid);
    return;
  }
  const cached = state.history.get(uuid);
  if (cached?.loading) return;
  if (!force
    && cached
    && cached.loadHours === state.historyHours
    && cached.pingHours === state.pingHours
    && Date.now() - cached.loadedAt < 60000) {
    renderCharts(uuid);
    return;
  }

  const requestedLoadHours = state.historyHours;
  const requestedPingHours = state.pingHours;
  state.history.set(uuid, {
    ...(cached || {}),
    hours: requestedLoadHours,
    loadHours: requestedLoadHours,
    pingHours: requestedPingHours,
    loading: true,
    error: null
  });
  renderCharts(uuid);
  const [loadResult, pingResult] = await Promise.allSettled([
    api(`/api/records/load?uuid=${encodeURIComponent(uuid)}&hours=${requestedLoadHours}&load_type=all`),
    api(`/api/records/ping?uuid=${encodeURIComponent(uuid)}&hours=${requestedPingHours}`)
  ]);
  const loadedAt = Date.now();
  const entry = {
    loadedAt,
    hours: requestedLoadHours,
    loadHours: requestedLoadHours,
    pingHours: requestedPingHours,
    loadLoadedAt: loadedAt,
    pingLoadedAt: loadedAt,
    loading: false,
    pingLoading: false,
    load: loadResult.status === 'fulfilled' ? loadResult.value : null,
    ping: pingResult.status === 'fulfilled' ? pingResult.value : null,
    error: loadResult.status === 'rejected' && pingResult.status === 'rejected'
      ? (loadResult.reason?.message || pingResult.reason?.message || t('noHistory'))
      : null
  };
  state.history.set(uuid, entry);
  if (entry.ping) {
    const summary = summarizeNodePing(entry.ping, uuid);
    if (summary.avg !== null || summary.loss !== null) state.ping[uuid] = summary;
  }
  if (state.selected === uuid && dom.dialog.open) {
    renderDialogOverview(uuid);
    renderCharts(uuid);
  }
}

async function loadPingHistory(uuid, force = false) {
  const cached = state.history.get(uuid);
  const renderWithoutScrollJump = (entry) => {
    const sheet = dom.dialog.querySelector('.dialog-sheet');
    const scrollTop = sheet?.scrollTop || 0;
    renderPingSection(uuid, entry);
    if (sheet) sheet.scrollTop = scrollTop;
  };
  if (DEMO) {
    renderWithoutScrollJump(cached);
    bindChartInteractions(dom.dialogContent);
    return;
  }
  if (!cached || cached.loading || cached.pingLoading) return;
  if (!force
    && cached.ping
    && cached.pingHours === state.pingHours
    && Date.now() - (cached.pingLoadedAt || cached.loadedAt || 0) < 60000) {
    renderPingSection(uuid, cached);
    bindChartInteractions(dom.dialogContent);
    return;
  }

  const requestedHours = state.pingHours;
  const loadingEntry = {
    ...cached,
    pingHours: requestedHours,
    pingLoading: true,
    pingError: null
  };
  state.history.set(uuid, loadingEntry);
  renderWithoutScrollJump(loadingEntry);

  try {
    const ping = await api(`/api/records/ping?uuid=${encodeURIComponent(uuid)}&hours=${requestedHours}`);
    const entry = {
      ...state.history.get(uuid),
      ping,
      pingHours: requestedHours,
      pingLoadedAt: Date.now(),
      pingLoading: false,
      pingError: null
    };
    state.history.set(uuid, entry);
    const summary = summarizeNodePing(ping, uuid);
    if (summary.avg !== null || summary.loss !== null) state.ping[uuid] = summary;
  } catch (error) {
    state.history.set(uuid, {
      ...state.history.get(uuid),
      ping: null,
      pingHours: requestedHours,
      pingLoadedAt: Date.now(),
      pingLoading: false,
      pingError: error?.message || t('noHistory')
    });
  }

  if (state.selected === uuid && dom.dialog.open) {
    renderWithoutScrollJump(state.history.get(uuid));
    bindChartInteractions(dom.dialogContent);
  }
}

function renderDialog(uuid) {
  const node = state.nodes.find((item) => item.uuid === uuid);
  if (!node) return;
  state.selected = uuid;
  const online = isOnline(node);
  const tags = splitTags(node.tags);
  const group = cleanText(node.group);
  const ranges = LOAD_HISTORY_RANGES.map((hours) => `<button class="range-button ${state.historyHours === hours ? 'is-active' : ''}" type="button" data-history-hours="${hours}" aria-pressed="${state.historyHours === hours}">${hours}h</button>`).join('');
  const pingRanges = PING_HISTORY_RANGES.map((hours) => `<button class="range-button ${state.pingHours === hours ? 'is-active' : ''}" type="button" data-ping-hours="${hours}" aria-pressed="${state.pingHours === hours}">${hours}h</button>`).join('');

  dom.dialogContent.innerHTML = `<header class="dialog-header">
    <span class="region-mark">${escapeHtml(node.region || '🖥️')}</span>
    <div><h2 id="dialog-title">${escapeHtml(node.name || t('unknown'))}</h2><p>${group ? `${escapeHtml(group)} · ` : ''}${escapeHtml(t(online ? 'online' : online === false ? 'offline' : 'waiting'))}</p></div>
  </header>
  ${tags.length ? `<div class="node-tags dialog-tags">${tags.map((tag) => `<span class="node-tag"># ${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
  <div class="dialog-overview" id="dialog-overview"></div>
  ${node.public_remark ? `<section class="dialog-remark-section"><h3>${icon('tag', 17)}${escapeHtml(t('publicRemark'))}</h3><div class="dialog-remark">${escapeHtml(node.public_remark)}</div></section>` : ''}
  <section class="charts-section"><div class="section-title-row"><h3>${icon('chart', 18)}${escapeHtml(t('charts'))}<small>${escapeHtml(t('historyWindow', { hours: state.historyHours }))}</small></h3><div class="range-switcher" aria-label="${escapeHtml(t('loadRangeLabel'))}">${ranges}</div></div><div id="dialog-charts"></div></section>
  <section class="ping-monitor-section"><div class="section-title-row"><h3>${icon('signal', 18)}${escapeHtml(t('pingMonitoring'))}<small data-ping-window>${escapeHtml(t('historyWindow', { hours: state.pingHours }))}</small></h3><div class="range-switcher ping-range-switcher" aria-label="${escapeHtml(t('pingRangeLabel'))}">${pingRanges}</div></div><div id="dialog-ping"></div></section>`;
  renderDialogOverview(uuid);
  renderCharts(uuid);
}

function openDialog(uuid) {
  renderDialog(uuid);
  if (!dom.dialog.open) dom.dialog.showModal();
  const sheet = dom.dialog.querySelector('.dialog-sheet');
  if (sheet) sheet.scrollTop = 0;
  dom.dialog.scrollTop = 0;
  requestAnimationFrame(() => {
    if (sheet) sheet.scrollTop = 0;
    dom.dialog.scrollTop = 0;
  });
  void loadHistory(uuid);
}

function closeDialog() {
  state.selected = null;
  if (dom.dialog.open) dom.dialog.close();
}

function overviewMetric(label, value, caption = '') {
  return `<article class="overview-metric"><small>${escapeHtml(label)}</small><strong>${escapeHtml(value)}</strong>${caption ? `<span>${escapeHtml(caption)}</span>` : ''}</article>`;
}

function trafficQuotaMarkup(item) {
  if (item.traffic.unlimited) return `<span class="overview-unlimited">${escapeHtml(t('unlimited'))} · ${escapeHtml(t('usedTraffic'))} ${escapeHtml(item.traffic.used === null ? '—' : formatBytes(item.traffic.used))}</span>`;
  const caption = `${formatBytes(item.traffic.used)} / ${formatBytes(item.traffic.limit)}`;
  return `<span class="overview-quota"><span class="traffic-track" data-tip="${escapeHtml(caption)}"><span style="--value:${item.traffic.percent.toFixed(1)}%"></span></span><small>${escapeHtml(formatPercent(item.traffic.percent))} · ${escapeHtml(t('remainingTraffic'))} ${escapeHtml(formatBytes(item.traffic.remaining))}</small></span>`;
}

function renderTrafficOverview() {
  const data = trafficOverviewData();
  const top = data.devices[0];
  const rows = data.devices.map((item, index) => `<article class="overview-device-row">
    <span class="overview-rank">${index + 1}</span>
    <span class="overview-device-name"><b>${escapeHtml(item.node.region || '🖥️')} ${escapeHtml(item.node.name || t('unknown'))}</b><small>${escapeHtml(formatBytes(item.total))}</small></span>
    <span class="overview-traffic-pair"><b>↑ ${escapeHtml(formatBytes(item.upload))}</b><b>↓ ${escapeHtml(formatBytes(item.download))}</b></span>
    ${trafficQuotaMarkup(item)}
  </article>`).join('');
  return `<header class="overview-header"><span class="overview-header-icon">${icon('network', 24)}</span><div><h2 id="overview-title">${escapeHtml(t('trafficOverview'))}</h2><p>${escapeHtml(t('cumulativeCaption'))}</p></div></header>
    <div class="overview-metric-grid">
      ${overviewMetric(t('totalTraffic'), formatBytes(data.total))}
      ${overviewMetric(t('totalUpload'), formatBytes(data.upload))}
      ${overviewMetric(t('totalDownload'), formatBytes(data.download))}
      ${overviewMetric(t('limitedNodes'), String(data.limited), `${state.nodes.length} ${t('node')}`)}
    </div>
    <section class="overview-highlight"><span>${escapeHtml(t('topTraffic'))}</span><strong>${escapeHtml(top?.node?.name || '—')}</strong><small>${escapeHtml(top ? formatBytes(top.total) : '—')}</small></section>
    <section class="overview-list-section"><h3>${escapeHtml(t('trafficRanking'))}</h3><div class="overview-device-list">${rows || `<div class="history-state compact"><strong>${escapeHtml(t('emptyNodes'))}</strong></div>`}</div></section>`;
}

function renderAssetOverview() {
  const data = assetOverviewData();
  const devices = data.devices.map(({ node, billing, convertedMonthly, convertedAnnual, convertedRemaining }) => `<article class="asset-device-row">
    <span class="overview-device-name"><b>${escapeHtml(node.region || '🖥️')} ${escapeHtml(node.name || t('unknown'))}</b><small>${billing.remainingDays === null ? escapeHtml(t('unset')) : escapeHtml(t('daysRemaining', { days: Math.max(0, billing.remainingDays) }))}</small></span>
    <span><small>${escapeHtml(t('monthlyAverage'))}</small><strong>${escapeHtml(convertedMonthly === null ? formatMoney(billing.monthly, billing.currency) : formatMoney(convertedMonthly, '¥'))}</strong></span>
    <span><small>${escapeHtml(t('annualized'))}</small><strong>${escapeHtml(convertedAnnual === null ? formatMoney(billing.annual, billing.currency) : formatMoney(convertedAnnual, '¥'))}</strong></span>
    <span><small>${escapeHtml(t('remainingValue'))}</small><strong>${escapeHtml(billing.remaining === null ? '—' : convertedRemaining === null ? formatMoney(billing.remaining, billing.currency) : formatMoney(convertedRemaining, '¥'))}</strong></span>
  </article>`).join('');
  return `<header class="overview-header"><span class="overview-header-icon">${icon('layers', 24)}</span><div><h2 id="overview-title">${escapeHtml(t('assetDetails'))}</h2><p>${escapeHtml(t('estimatedNote'))}</p></div></header>
    <div class="overview-metric-grid">
      ${overviewMetric(t('totalCores'), formatCount(data.cores))}
      ${overviewMetric(t('totalMemory'), formatBytes(data.memory))}
      ${overviewMetric(t('totalDisk'), formatBytes(data.disk))}
      ${overviewMetric(t('expiringSoon'), formatCount(data.expiringSoon))}
    </div>
    <section class="asset-finance-summary">
      <header><div><h3>${escapeHtml(t('cnySummary'))}</h3><small>${escapeHtml(t('exchangeConverted'))}</small></div><strong>¥</strong></header>
      <div class="asset-finance-values">
        <span><small>${escapeHtml(t('billableNodes'))}</small><strong>${formatCount(data.convertedNodes)}</strong></span>
        <span><small>${escapeHtml(t('monthlyAverage'))}</small><strong>${escapeHtml(formatMoney(data.monthlyCny, '¥'))}</strong></span>
        <span><small>${escapeHtml(t('annualized'))}</small><strong>${escapeHtml(formatMoney(data.annualCny, '¥'))}</strong></span>
        <span><small>${escapeHtml(t('remainingValue'))}</small><strong>${escapeHtml(formatMoney(data.remainingCny, '¥'))}</strong></span>
      </div>
    </section>
    <section class="overview-list-section asset-list-section"><h3>${escapeHtml(t('deviceBreakdown'))}</h3>
      <div class="asset-device-columns"><span>${escapeHtml(t('node'))}</span><span>${escapeHtml(t('monthlyAverage'))}</span><span>${escapeHtml(t('annualized'))}</span><span>${escapeHtml(t('remainingValue'))}</span></div>
      <div class="asset-device-list">${devices || `<div class="history-state compact"><strong>${escapeHtml(t('noBillingData'))}</strong></div>`}</div>
    </section>`;
}

function renderOverview(type) {
  state.overviewType = type;
  dom.overviewContent.innerHTML = type === 'asset' ? renderAssetOverview() : renderTrafficOverview();
}

function positionOverview(type = state.overviewType) {
  if (!type || innerWidth <= 640) {
    dom.overviewDialog.style.removeProperty('--overview-left');
    dom.overviewDialog.style.removeProperty('--overview-top');
    return;
  }
  const trigger = type === 'asset' ? dom.assetOverviewButton : dom.trafficOverviewButton;
  const rect = trigger.getBoundingClientRect();
  const viewportGap = 12;
  const panelWidth = Math.min(440, innerWidth - viewportGap * 2);
  const left = Math.min(
    innerWidth - panelWidth - viewportGap,
    Math.max(viewportGap, rect.right - panelWidth),
  );
  const top = Math.max(viewportGap, rect.bottom + 9);
  dom.overviewDialog.style.setProperty('--overview-left', `${Math.round(left)}px`);
  dom.overviewDialog.style.setProperty('--overview-top', `${Math.round(top)}px`);
}

function openOverview(type) {
  if (dom.overviewDialog.open && state.overviewType === type) {
    closeOverview();
    return;
  }
  renderOverview(type);
  dom.overviewDialog.dataset.overviewType = type;
  dom.trafficOverviewButton.setAttribute('aria-expanded', String(type === 'traffic'));
  dom.assetOverviewButton.setAttribute('aria-expanded', String(type === 'asset'));
  positionOverview(type);
  if (!dom.overviewDialog.open) dom.overviewDialog.show();
}

function closeOverview() {
  state.overviewType = null;
  delete dom.overviewDialog.dataset.overviewType;
  dom.trafficOverviewButton.setAttribute('aria-expanded', 'false');
  dom.assetOverviewButton.setAttribute('aria-expanded', 'false');
  if (dom.overviewDialog.open) dom.overviewDialog.close();
}

function clearFilters() {
  state.search = '';
  state.group = '__all__';
  dom.search.value = '';
  render();
}

function showNotice(message) {
  dom.notice.innerHTML = `<span>${escapeHtml(message)}</span><button class="text-button" type="button" data-retry>${escapeHtml(t('retry'))}</button>`;
  dom.notice.classList.remove('is-hidden');
}

function hideNotice() {
  dom.notice.classList.add('is-hidden');
  dom.notice.innerHTML = '';
}

function toast(message) {
  const element = document.createElement('div');
  element.className = 'toast';
  element.textContent = message;
  dom.toasts.append(element);
  setTimeout(() => element.remove(), 2800);
}

function setSortMenu(open) {
  dom.sortMenu.hidden = !open;
  dom.sortButton.setAttribute('aria-expanded', String(open));
  dom.sortControl.classList.toggle('is-open', open);
}

function showHoverTip(target, event) {
  const text = target?.dataset?.tip;
  if (!text) return;
  dom.hoverTip.textContent = text;
  dom.hoverTip.hidden = false;
  moveHoverTip(event);
}

function moveHoverTip(event) {
  if (dom.hoverTip.hidden) return;
  const margin = 12;
  const rect = dom.hoverTip.getBoundingClientRect();
  let left = event.clientX + 14;
  let top = event.clientY - rect.height - 14;
  if (left + rect.width > innerWidth - margin) left = event.clientX - rect.width - 14;
  if (top < margin) top = event.clientY + 18;
  dom.hoverTip.style.left = `${Math.max(margin, left)}px`;
  dom.hoverTip.style.top = `${Math.max(margin, top)}px`;
}

function hideHoverTip() {
  dom.hoverTip.hidden = true;
}

function currentPingTasks(uuid) {
  const entry = state.history.get(uuid);
  if (!entry?.ping) return [];
  const filtered = { ...entry.ping, records: filterHistoryRecords(entry.ping.records, state.pingHours) };
  return pingTasksForNode(filtered, uuid);
}

function bind() {
  dom.refresh.addEventListener('click', refreshAll);
  dom.lang.addEventListener('click', toggleLanguage);
  dom.appearance.addEventListener('click', cycleAppearance);
  dom.search.addEventListener('input', (event) => {
    state.search = event.target.value;
    scheduleRender();
  });
  dom.sortButton.addEventListener('click', () => setSortMenu(dom.sortMenu.hidden));
  dom.sortMenu.addEventListener('click', (event) => {
    const button = event.target.closest('[data-sort]');
    if (!button) return;
    state.sort = button.dataset.sort;
    syncSortMenu();
    setSortMenu(false);
    render();
  });
  dom.tabs.addEventListener('click', (event) => {
    const button = event.target.closest('[data-group]');
    if (button) {
      state.group = button.dataset.group;
      render();
    }
  });
  for (const button of dom.viewButtons) button.addEventListener('click', () => setView(button.dataset.view));
  dom.clear.addEventListener('click', clearFilters);
  dom.trafficOverviewButton.addEventListener('click', () => openOverview('traffic'));
  dom.assetOverviewButton.addEventListener('click', () => openOverview('asset'));
  dom.dialogClose.addEventListener('click', closeDialog);
  dom.overviewClose.addEventListener('click', closeOverview);
  dom.dialog.addEventListener('click', (event) => {
    if (event.target === dom.dialog) closeDialog();
  });
  dom.overviewDialog.addEventListener('click', (event) => {
    if (event.target === dom.overviewDialog) closeOverview();
  });
  dom.dialog.addEventListener('cancel', () => { state.selected = null; });
  dom.overviewDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeOverview();
  });

  document.addEventListener('click', (event) => {
    if (dom.overviewDialog.open
      && !dom.overviewDialog.contains(event.target)
      && !dom.trafficOverviewButton.contains(event.target)
      && !dom.assetOverviewButton.contains(event.target)) {
      closeOverview();
    }

    const openButton = event.target.closest('[data-open-node]');
    if (openButton) openDialog(openButton.dataset.openNode);
    if (event.target.closest('[data-retry]')) void refreshAll();

    const range = event.target.closest('[data-history-hours]');
    if (range && state.selected) {
      const hours = Number(range.dataset.historyHours);
      if (LOAD_HISTORY_RANGES.includes(hours) && hours !== state.historyHours) {
        state.historyHours = hours;
        renderDialog(state.selected);
        void loadHistory(state.selected, true);
      }
    }

    const pingRange = event.target.closest('[data-ping-hours]');
    if (pingRange && state.selected) {
      const hours = Number(pingRange.dataset.pingHours);
      const entry = state.history.get(state.selected);
      if (PING_HISTORY_RANGES.includes(hours) && hours !== state.pingHours && !entry?.loading && !entry?.pingLoading) {
        state.pingHours = hours;
        for (const button of dom.dialogContent.querySelectorAll('[data-ping-hours]')) {
          const active = Number(button.dataset.pingHours) === hours;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-pressed', String(active));
        }
        const windowLabel = dom.dialogContent.querySelector('[data-ping-window]');
        if (windowLabel) windowLabel.textContent = t('historyWindow', { hours });
        void loadPingHistory(state.selected, true);
      }
    }

    const allTasks = event.target.closest('[data-ping-all]');
    if (allTasks) {
      const uuid = allTasks.dataset.pingAll;
      const tasks = currentPingTasks(uuid);
      state.pingSelection.set(uuid, new Set(tasks.map((item) => String(item.task.id))));
      renderCharts(uuid);
    }

    const taskButton = event.target.closest('[data-ping-task]');
    if (taskButton) {
      const uuid = taskButton.dataset.pingNode;
      const tasks = currentPingTasks(uuid);
      const selected = ensurePingSelection(uuid, tasks);
      const taskId = String(taskButton.dataset.pingTask);
      if (selected.has(taskId)) selected.delete(taskId);
      else selected.add(taskId);
      renderCharts(uuid);
    }

    if (!dom.sortControl.contains(event.target)) setSortMenu(false);
  });

  document.addEventListener('pointerover', (event) => {
    const target = event.target.closest('[data-tip]');
    if (target) showHoverTip(target, event);
  });
  document.addEventListener('pointermove', (event) => {
    if (!dom.hoverTip.hidden && event.target.closest('[data-tip]')) moveHoverTip(event);
  });
  document.addEventListener('pointerout', (event) => {
    const target = event.target.closest('[data-tip]');
    if (target && !target.contains(event.relatedTarget)) hideHoverTip();
  });

  document.addEventListener('keydown', (event) => {
    const typing = event.target instanceof HTMLInputElement
      || event.target instanceof HTMLTextAreaElement
      || event.target instanceof HTMLSelectElement
      || event.target?.isContentEditable;
    if (event.key === '/' && !typing && !dom.dialog.open && !dom.overviewDialog.open && state.settings.show_search) {
      event.preventDefault();
      dom.search.focus();
    }
    if (event.key === 'Escape' && dom.overviewDialog.open) {
      event.preventDefault();
      closeOverview();
      return;
    }
    if (event.key === 'Escape' && !dom.dialog.open && !dom.overviewDialog.open) {
      if (!dom.sortMenu.hidden) setSortMenu(false);
      else if (state.search) clearFilters();
    }
  });
  addEventListener('resize', () => {
    hideHoverTip();
    setSortMenu(false);
    if (dom.overviewDialog.open) positionOverview();
    if (innerWidth <= 760 && state.view !== 'cards') setView('cards');
    else renderNodes();
  });
  addEventListener('scroll', () => {
    if (dom.overviewDialog.open) positionOverview();
  }, { passive: true });
  addEventListener('online', () => void refreshAll());
  addEventListener('offline', () => setLiveState('offline'));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) requestLive();
  });
  darkQuery.addEventListener?.('change', () => {
    if (state.appearance === 'system') applyAppearance();
  });
  addEventListener('beforeunload', () => {
    closeSocket();
    clearFallback();
    clearInterval(state.pingTimer);
    clearInterval(state.demoTimer);
  });
}

async function boot() {
  hydrateIcons();
  bind();
  applyAppearance();
  applyTranslations();
  applySettings();
  void loadExchangeRates();
  try {
    await load();
  } catch (error) {
    state.loaded = true;
    finishLoading();
    render();
    showNotice(`${t('loadFailed')}：${error?.message || t('unknown')}`);
    setLiveState('offline');
  }
}

void boot();
