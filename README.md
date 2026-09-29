# Anna Gao · Portfolio

个人作品集网站与配套物料。

- `index.html` — 作品集网站（单页，静态，图片为占位）。直接双击打开，或部署到 GitHub Pages / Vercel。
- `collateral/anna-card.html` → `anna-card.png` — 个人名片长图（微信直发）
- `collateral/andlight-onepager.html` → `andlight-onepager.pdf` — 和光科技产品一页纸
- `collateral/render.mjs` — 用 Playwright 把上面两个 HTML 出图/出 PDF：`node collateral/render.mjs collateral`
- `assets/` — 字体与品牌图形
- `CHECKLIST.md` / `works.csv` — 素材整理清单与作品总表

## 替换占位图

`index.html` 里每个 `.ph` 占位块换成 `<img src="images/xxx.jpg" alt="...">` 即可，尺寸建议写在占位文字里。

## 部署

仓库 Settings → Pages → Source 选 `main` / root，几分钟后可在 `https://annagaogao.github.io/portfolio/` 访问。
