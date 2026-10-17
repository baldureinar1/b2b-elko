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

The main “Fyrirtækjaráðgjöf” heading uses locally hosted Barlow Semi Condensed SemiBold, with full Icelandic character coverage. Its SIL Open Font License is included at `public/fonts/Barlow-OFL.txt`; the font comes from the Google Fonts repository. Smaller text uses the supplied Elkjøp font, with Arial fallback for its missing Þ, þ, Ð, and ð characters. Original font files and license information remain in `font/`.

## Touchscreen display

The page is designed for a landscape touchscreen, including 1080p and 4K displays. Typography, the logo, and service cards scale with viewport width. The three bottom cards are large touch targets; existing ELKO destinations still open in the same tab. Use the browser's Back control to return after browsing ELKO.

The top-right fullscreen control appears when the browser supports fullscreen. Touching empty background space produces a brief ripple; interactive links keep their normal behavior. All motion respects the operating system's reduced-motion preference. Touch effects clean themselves up and do not use a continuous JavaScript rendering loop.

Fullscreen is a browser view mode, not operating-system kiosk configuration. Configure the display's browser separately if automatic launch or return to the landing page is required.
