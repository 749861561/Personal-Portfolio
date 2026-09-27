# 个人设计作品集

视觉、运营及 UI 设计个人站，包含个人介绍、项目经历、首页精选和完整作品展示。当前共有 10 个公开展示作品、5 个首页精选，包含 JYQuants。

采用原生 HTML、CSS 和 JavaScript，源码即可直接部署，无需安装依赖、运行构建或配置数据库。

## 本地预览

安装 Python 3 后，在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

浏览器打开 <http://127.0.0.1:8000/>。Windows 可使用 `py -m http.server 8000 --bind 127.0.0.1`。按 Ctrl+C 结束预览。

## 部署

将仓库根目录作为静态网站发布目录，入口为 `index.html`，无需构建命令。保留所有 HTML、CSS、JavaScript、`assets/` 及 `featured-assets/` 文件及其相对路径。

不要启用“所有地址重写到 index.html”的单页应用规则；本站包含三个独立 HTML 页面。图片和字体已随仓库提供，无远程 CDN 资源依赖。

- [部署说明](docs/部署说明.md)
- [作品维护说明](docs/作品维护说明.md)

## 文件结构

| 文件 | 用途 |
| --- | --- |
| `index.html` | 首页、个人介绍和经历 |
| `work.html` | 全部作品列表 |
| `project.html` | 共用作品详情模板 |
| `projects.js` | 全部作品内容、封面和详情图配置 |
| `featured.js` | 首页精选 ID 及展示顺序 |
| `project-cards.js` | 共用作品卡片逻辑 |
| `styles.css` / `script.js` | 首页样式和交互 |
| `work.css` / `work.js` | 列表样式、筛选和搜索 |
| `project.css` / `project.js` | 详情页样式和交互 |
| `assets/` | 详情图、字体、图标等 |
| `featured-assets/` | 作品封面 |

## 当前状态

- 首页精选：广发易淘金国际版、十寸中控屏、JYQuants、T home APP、运营 2025 年作品集。
- 广发易淘金 PC 端保持隐藏，其配置和引用素材保留。
- 详情页“简历”按钮暂未接入可下载文件，保持禁用。
- 2026-09-27：通过本地静态服务浏览器检查，覆盖首页、列表、10 个公开作品详情、无效/隐藏作品入口、搜索筛选和手机菜单；网站文件已与部署包逐项校验一致。
- 本次交付源码，不包含托管平台设置或域名配置。

字体许可证位于 `assets/fonts/Anton-OFL.txt`，图标来源记录位于 `assets/tool-logos/sources.json`。
