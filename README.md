# ELKO Fyrirtækjaráðgjöf

A responsive Icelandic landing page with an animated green gradient, reduced-motion support, and links to https://elko.is/b2b. No dependencies or build step.

## Run

Use Node.js 18 or newer:

```sh
npm run dev
```

The server listens on port 3000 (override with `PORT`). Static production files are in `public/` and can also be hosted on any static web host.

## Brand assets

The page uses the supplied white-and-green ELKO logo in the main heading, copied unchanged to `public/logos/elko-white.png`. The palette follows the supplied brand reference: Sushi green `#6AA334`, white `#FFFFFF`, and Deep Cove blue `#0F054D`. Original logo assets remain in `logos/`.

The main “Fyrirtækjaráðgjöf” heading uses Arial for consistent Icelandic character support. Smaller text uses the supplied Elkjøp font, with Arial fallback for its missing Þ, þ, Ð, and ð characters. Original font files and license information remain in `font/`.
