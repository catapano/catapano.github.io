# rhiacatapano.com

Personal website, built with [Eleventy](https://www.11ty.dev/) and published to GitHub Pages
by the workflow in `.github/workflows/deploy.yml` whenever `master` changes.

## Where things live

| What | File |
|---|---|
| Bio text and photo | `src/index.md` |
| Site title, description, nav links (Research, CV) | `src/_data/site.json` |
| Page structure (header, footer, meta tags) | `src/_includes/layout.njk` |
| Colors, fonts, spacing, mobile layout | `src/css/style.css` |
| Profile photo (full-size original) | `src/img/rhia_pro.jpg` |
| CV, favicon, custom domain | `src/Catapano_CV_*.pdf`, `src/rhia_favicon.ico`, `src/CNAME` |

The photo is automatically resized and compressed (AVIF/WebP/JPEG) on every build, so
to change it just replace `src/img/rhia_pro.jpg` with any large photo.
The footer year updates itself.

## Previewing locally

Requires Node.js 22+.

```
npm install
npm start
```

Then open http://localhost:8080. `npm run build` writes the finished site to `_site/`
(which is not committed).
