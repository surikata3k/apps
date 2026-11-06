# Surikata3K apps

Source of **[apps.surikata3k.com](https://apps.surikata3k.com)**: small web apps that run entirely in the browser, with nothing to install, no server and no data leaving your device. Part of [surikata3k.com](https://surikata3k.com).

## The apps

- *tools*: [Learning outcome hours planner](https://apps.surikata3k.com/learning-outcome-hours/) (and [Dits Màgics](https://surikata3k.com/ditsmagics/en/), which lives in its own repository)
- *passwords*: [PassForge](https://apps.surikata3k.com/passforge/), [Password generator](https://apps.surikata3k.com/password-generator/), [Password strength checker](https://apps.surikata3k.com/password-strength-checker/), [Entropy calculator](https://apps.surikata3k.com/password-entropy-calculator/)
- *cryptography and security*: [Asymmetric key simulator](https://apps.surikata3k.com/asymmetric-key-simulator/) (with [the maths of RSA](https://apps.surikata3k.com/asymmetric-key-simulator/rsa-math.html)), [Blockchain simulator](https://apps.surikata3k.com/blockchain-simulator/)

## Repository layout

```
index.html     landing page with every app
<app>/         one folder per app (index.html, plus extra pages if needed)
assets/        shared files: compiled Tailwind CSS, Lucide icons and site.css (site bar, footer and fonts)
img/           logo, favicon and social images (og-image.png and og/<app>.png)
tools/         build for the Tailwind CSS and the Lucide icons
404.html       error page
sitemap.xml    sitemap for search engines
robots.txt     instructions for search engines
CNAME          custom domain for GitHub Pages (apps.surikata3k.com)
LICENSE        CC BY-NC-SA 4.0
```

The old URLs (`surikata3k.com/apps/...` and `surikata3k.com/web-apps/...`) redirect here from the [surikata3k.github.io](https://github.com/surikata3k/surikata3k.github.io) repository.

## Design

The apps share the look of [surikata3k.com](https://surikata3k.com): Instrument Serif for titles, IBM Plex Sans and IBM Plex Mono for text, the rust accent (`#B23A0A`) and the warm neutral background (`#FBFBF9`). In Tailwind, the `indigo` scale is the accent and `slate` is the neutral palette (see `tools/tailwind.config.js`).

Every app starts with the shared site bar (`.s3k-bar`) and ends with the shared footer (`.s3k-foot`), both styled in `assets/site.css`. The bar links back to surikata3k.com, docs, YouTube, GitHub, the app list and the contact address.

## Adding a new app

1. Create `<english-name>/index.html`.
2. In the `<head>`: `<title>`, `meta description`, `canonical` (`https://apps.surikata3k.com/<english-name>/`), Open Graph and the JSON-LD block (copy them from another app). Put its social image in `img/og/<english-name>.png`.
3. Load `/assets/tailwind.min.css`, `/assets/site.css` and `/assets/lucide.min.js` (not the Tailwind or Lucide CDNs).
4. Copy the site bar (`<header class="s3k-bar">`) to the top of `<body>` and the footer (`<footer class="s3k-foot">`) to the end.
5. Add the about section before the footer (what it is, how to use it, FAQ and related apps).
6. Add its card to `index.html` (and to the `ItemList` in its JSON-LD) and its URL to `sitemap.xml`.
7. Rebuild the CSS and icons (see below).

## Rebuilding the CSS and icons

The apps use a compiled Tailwind stylesheet and a bundle with only the Lucide icons they need. If you add new classes or icons, rebuild them:

```
cd tools
npm install
npm run build
```

## Publishing

Published with GitHub Pages from the `main` branch at `apps.surikata3k.com`. The domain is managed in Cloudflare with a `CNAME` record `apps → surikata3k.github.io`.

To preview locally:

```
python3 -m http.server
```

## Contact

[hello@surikata3k.com](mailto:hello@surikata3k.com)

## License

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en) (see [LICENSE](LICENSE)).
