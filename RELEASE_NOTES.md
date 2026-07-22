# Komari Notebook v0.8.3

本版本修复了 [Issue #2](https://github.com/Wyk521/komari-theme-notebook/issues/2) 报告的 Ping 检测无法切换时间区间问题。

## 修复内容

- 在 Ping 监测标题右侧新增 `1h / 2h / 4h / 12h / 24h` 区间按钮
- Ping 区间与负载趋势区间互相独立
- 切换时仅请求 `/api/records/ping`，不会刷新整张详情页
- 区间文字、选中状态及 `aria-pressed` 同步更新
- 桌面端和移动端均保持作业本纸张风格，且不产生横向溢出

## 验证

- 桌面端与 390px 移动端均完整显示五个区间按钮
- 点击 `2h` 后实际请求携带 `hours=2`
- 切换后 Ping 图表正常重绘
- 桌面端横向溢出为 0，详情滚动位置不跳回顶部

## 安装

下载 Release 附件 `KomariNotebook-v0.8.3-install.zip`，在 Komari 管理后台的主题管理页面上传并启用。
