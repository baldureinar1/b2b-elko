# ELKO Fyrirtækjaráðgjöf

A responsive Icelandic landing page with an animated green gradient, reduced-motion support, and links to https://elko.is/b2b. No dependencies or build step.

## Run

Use Node.js 18 or newer:

```sh
npm run dev
```

The server listens on port 3000 (override with `PORT`). Static production files are in `public/` and can also be hosted on any static web host.

## Brand assets

The page currently uses an ELKO-inspired navy/green palette and a typographic wordmark, rather than an official logo asset. The official Elkjøp font was not available. To use your licensed font, put its WOFF2 file at `public/fonts/elkjop.woff2`; the CSS loads it automatically, with Arial as the fallback. Confirm official color values and replace the wordmark with the approved logo before publishing as an official brand page.
