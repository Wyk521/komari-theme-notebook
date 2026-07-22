# Komari Notebook v0.8.2

本版本修复了 [Issue #1](https://github.com/Wyk521/komari-theme-notebook/issues/1) 报告的纸张底色闪烁问题。

## 修复内容

- 非 `warm` 纸张设置刷新时不再短暂显示暖色底色
- 在样式表加载前同步恢复上次确认的纸张色调
- 首次访问没有缓存时，等待 Komari 设置返回后再显示纸面
- 同步提前应用明暗外观，减少页面加载阶段的视觉跳变

## 验证

- 首次访问无缓存：错误的默认纸张保持隐藏
- Komari 设置返回：直接显示配置的纸张色调
- 后续刷新：首屏立即使用缓存色调，不经过 `warm`

## 安装

下载 Release 附件 `KomariNotebook-v0.8.2-install.zip`，在 Komari 管理后台的主题管理页面上传并启用。
