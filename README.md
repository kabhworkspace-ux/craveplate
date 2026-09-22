# Crave Plate — stable Cloudflare Pages baseline

Crave Plate is a food-decision and food-intelligence platform concept launching in Hyderabad and designed for global expansion.

## What this version fixes

- Pinned React/Vite/tooling versions instead of `latest`.
- Pins Cloudflare Pages to Node 22.16.0 through `.node-version`.
- Uses the Rollup WebAssembly build through an npm override to avoid the platform-specific native Rollup binding failure seen in the previous Cloudflare build.
- Keeps the project as a React + Vite SPA with Cloudflare's `dist` output.
- Removes unused heavy animation packages from the initial deployment dependency graph. Advanced WebGL/motion libraries should be added back one at a time after the baseline deployment is green.
- Keeps Supabase integration ready without requiring Supabase credentials for the public demo.
- Keeps partner adapters server-facing and does not fabricate live Zomato/Swiggy data.
- Adds stronger security headers and removes the hard-coded, potentially incorrect sitemap URL.
- Adds an explicit no-results state and accessible mobile navigation labels.

## Cloudflare Pages settings

Use the existing Pages project:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: the repository `.node-version` file pins `22.16.0`

Cloudflare Pages automatically rebuilds after a new commit to the connected branch.

## Environment variables

Only add these when Supabase is actually configured:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Do **not** put Zomato/Swiggy private credentials in `VITE_*` variables. Browser-exposed Vite variables are public. Partner credentials belong in server-side functions/API infrastructure.

## Demo-data rule

The restaurant cards in this baseline are explicitly illustrative. They are not live restaurant availability, live prices, live offers, or verified partner responses.

## Product areas

- Discover
- Health Directory
- Food Science Lab
- Bioavailability Board concept
- Business Collaboration Wing
- Global Cuisine Atlas concept

## Next implementation layer

After the baseline deploys successfully, add the immersive animation stack in isolated/lazy-loaded modules: Lenis, GSAP/ScrollTrigger, React Three Fiber, ShaderGradient, liquid glass, liquid logo, Vanta and React Bits. This sequencing keeps the production deployment stable while the visual layer is expanded.
