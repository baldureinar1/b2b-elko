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

## GitHub Pages

The workflow at `.github/workflows/pages.yml` publishes only `public/` on each push to `main`. No Node server, build step, or credentials in the source are required. Asset paths work under the GitHub Pages repository subdirectory.

In the GitHub repository, open **Settings → Pages → Build and deployment**, then select **GitHub Actions** as the source. After enabling it, open **Actions → Deploy website to GitHub Pages → Run workflow** if the initial deployment did not run successfully. Future pushes deploy automatically.

Expected address after successful deployment: https://baldureinar1.github.io/b2b-elko/

Pages availability for a private repository depends on the GitHub plan. Configure the repository's Pages settings before claiming that the site is live.

### If Pages shows this README

Branch-based Pages publishing from `main` → `/ (root)` uses the root `index.html`, which forwards to `public/`. The `.nojekyll` file keeps this a static site. This also works without the Actions workflow. With GitHub Actions as the Pages source, the workflow publishes `public/` directly and the website loads at the repository URL without a redirect.

## QR panel

The phone panel links to `https://elko.is/minar/fyrirtaeki` so visitors can sign in to their business account on their own phone. Its QR code is stored locally at `public/images/b2b-qr.svg`, uses medium error correction, and includes a four-module white quiet zone. There is no QR service, tracking redirect, or runtime dependency. Keep the QR stationary and high contrast when restyling it. If the destination changes, regenerate the SVG and update the panel link, visible URL, and accessible label together.
