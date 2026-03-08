# Mirai Software Website

## Dev Server
- `npx serve -l 3000` — static site, no build step
- Deployed to Dreamhost via `.github/workflows/deploy.yml`

## Structure
- Static HTML/CSS/JS site — no framework
- Pages: `/`, `/spotmeter/`, `/stockroom/`, `/spotmeter/privacy/`, `/stockroom/privacy/`
- ASCII art reference: `docs/ascii-icons.txt` (all wordmarks and icon variants)

## Design Tokens
- SpotMeter accent: `--amber: #d4a24e`
- StockRoom accent: `--teal: #5eead4`
- Background: `--bg: #0a0a0a`
- Fonts: Fira Code (mono/structure), Plus Jakarta Sans (descriptions)

## ASCII Art Rendering (Critical)
- Box-drawing characters (╔═╗║╦╩) require `letter-spacing: 0` — any positive value creates gaps
- `line-height` must be ~0.75 for vertical connectors to touch — `1.0` leaves visible black stripes between rows
- Always use `white-space: pre` on ASCII art containers
- Fira Code renders box-drawing chars within the middle of the em square, so sub-1.0 line-height is necessary
