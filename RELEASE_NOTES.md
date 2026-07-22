# Komari Notebook v0.8.5

本版本修复通过 GitHub 仓库导入主题后，后台“更新主题”无法获取下载来源的问题。

## 修复内容

- 在 `komari-theme.json` 中补充官方支持的 `url` 项目地址
- Komari 后台可从该地址解析 GitHub 仓库，并自动读取最新 Release 的安装包
- 保持 Release 仅包含一个可安装 ZIP，确保更新器选择正确附件

## 验证

- 清单 URL 可正确解析为 `Wyk521/komari-theme-notebook`
- GitHub Latest Release 接口可返回有效安装包地址
- 安装包根目录仍包含 `komari-theme.json`、`preview.png` 与 `dist/`

## 已安装旧版本的说明

v0.8.4 及更早版本的本地清单没有 `url`，无法依靠原有“更新”按钮取得本次修复。请重新导入仓库地址或手动上传 v0.8.5 一次；从 v0.8.5 开始，后续版本可以直接使用“更新主题”。

## 安装

下载 Release 附件 `KomariNotebook-v0.8.5-install.zip`，在 Komari 管理后台的主题管理页面上传并启用。
