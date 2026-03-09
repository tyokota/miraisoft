# Mirai Software Website

## Dev Server
- `npx serve -l 3000` — static site, no build step
- Deployed to Dreamhost via `.github/workflows/deploy.yml`
- Dreamhost server: pdx1-shared-a4-04.dreamhost.com, user: dh_imzukg
- Push to `main` triggers auto-deploy via GitHub Actions (uses appleboy/ssh-action)

## Structure
- Static HTML/CSS/JS site — no framework
- Pages: `/`, `/spotmeter/`, `/stockroom/`, `/spotmeter/privacy/`, `/stockroom/privacy/`
- ASCII art reference: `docs/ascii-icons.txt` (all wordmarks and icon variants)
- CSS: `css/style.css` (single file, all styles)
- JS: `js/main.js` (scroll reveal via IntersectionObserver)

## Design Tokens
- SpotMeter accent: `--amber: #d4a24e`
- StockRoom accent: `--teal: #5eead4`
- PhotoBook accent: `#f5e0bd` (cream gold) — new app, not yet on site
- Background: `--bg: #0a0a0a`
- Fonts: Fira Code (mono/structure), Plus Jakarta Sans (descriptions)

## ASCII Art Rendering (Critical)
- Box-drawing characters (╔═╗║╦╩) require `letter-spacing: 0` — any positive value creates gaps
- `line-height` must be ~0.75 for vertical connectors to touch — `1.0` leaves visible black stripes between rows
- Always use `white-space: pre` on ASCII art containers
- Fira Code renders box-drawing chars within the middle of the em square, so sub-1.0 line-height is necessary
- Font size for hero logo: `clamp(1.4rem, 5vw, 2.4rem)` — smaller sizes make box-drawing strokes illegible

## Design Aesthetic
- "Zine Terminal" — 90s skate zine meets hacker terminal
- Dark theme, monospace-first, ASCII art icons for each app
- App cards on homepage use mini ASCII icons (viewfinder for SpotMeter, film strip for StockRoom)
- Product accent colors glow on hover (amber for SpotMeter, teal for StockRoom)
- Plus Jakarta Sans for readable body text, Fira Code for everything structural
- No images of devices/screens — the ASCII art IS the visual identity
- Tagline: "no tracking · no ads · no bs"

## Deployment Notes
- GitHub repo: tyokota/miraisoft
- SSH deploy key stored in GitHub secrets (DREAMHOST_HOST, DREAMHOST_USER, DREAMHOST_SSH_KEY)
- After push, allow ~30-60s for deploy, then hard refresh (Safari: ⌘+Option+R or Develop → Empty Caches)
- Safari caches CSS aggressively — users may need cache clear to see CSS changes

## Known Issues / Next Steps
- PhotoBook is a third app being added — ASCII icons exist in `docs/ascii-icons.txt` but no page built yet
- Privacy pages use man-page styling (Unix manual format)
- App screenshots are placeholders (`app-screenshot-placeholder` class)
