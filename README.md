# Adyapragnya Technologies — Website

Static website built on the **Greva** HTML template, with Adyapragnya content and branding.

## How to run
Open `index.html` (the homepage) directly in a browser, **or** serve the `site/`
folder with any static server (e.g. VS Code **Live Server** → right-click
`index.html` → "Open with Live Server").

> The homepage is **`index.html`** (there is no `index.html`).

## Folder structure
```
site/
├── index.html        # Home
├── about.html
├── products.html       # 7 products
├── oem-products.html   # 5 OEM partners
├── services.html
├── solutions.html      # 13 solution areas
├── contact.html        # real address + Google map
├── css/
│   ├── custom.css      # template theme (unchanged)
│   └── adyapragnya.css # brand tweaks only: logo sizing, nav colour,
│                       # back-to-top button, responsive safeguards
├── js/
│   ├── includes.js     # ⭐ SINGLE SOURCE for header + nav + footer
│   └── ...             # template libraries
├── images/             # template images + adyapragnya-logo.png
└── webfonts/
```

## Header / nav / footer — edit in ONE place
All pages share the same header, navigation and footer. They are **not** written
in each page. They live once in **`js/includes.js`** and are injected into every
page wherever these placeholders appear:
```html
<div data-include="header"></div>   <!-- top of <body> -->
<div data-include="footer"></div>   <!-- bottom of <body> -->
```
To change a menu item, phone number, logo, etc. → edit `js/includes.js` only.

`includes.js` also adds the global **back-to-top** button and marks the active
nav item automatically.

## Things to replace later
- **Hero video**: currently uses the template's demo video URL as a placeholder.
  Drop your own `images/hero-bg-video.mp4` and point the `<video>` source to it
  in `index.html` (a poster image already falls back if the video fails).
- **Logo**: the source PNG is square (icon + wordmark). A horizontal logo would
  look cleaner in the header.
- **Team photos / testimonials**: template placeholders — swap for real people.
- Social links in the footer are `#` placeholders.

## Company
Adyapragnya Technologies Private Limited — *A Spatial Company*
956, Punam Mahal Rd, Subash Nagar, Kengeri Satellite Town, Bengaluru, Karnataka 560060, India
sales@adyapragnya.com · +91 80437 02595
