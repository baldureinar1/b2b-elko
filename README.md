# ELKO Fyrirtækjaráðgjöf

A responsive Icelandic landing page with an animated green gradient, reduced-motion support, and links to https://elko.is/b2b. No dependencies or build step.

## Run

Use Node.js 18 or newer:

```sh
npm run dev
```

The server listens on port 3000 (override with `PORT`). Static production files are in `public/` and can also be hosted on any static web host.

## Brand assets

The page uses the supplied white-and-green ELKO logo in the header and main heading, copied unchanged to `public/logos/elko-white.png`. The palette is sampled from the supplied artwork: deep blue `#000653`, light green `#7FC24C`, and dark green `#006B43`. Original logo assets remain in `logos/`.

The supplied Elkjøp font is included at `public/fonts/elkjop.woff2` and loads automatically, with Arial as the fallback. Original font files and license information remain in `font/`.
