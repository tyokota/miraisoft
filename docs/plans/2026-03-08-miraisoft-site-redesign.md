# Mirai Software Site Redesign

**Date:** 2026-03-08
**Status:** Approved
**Author:** Thomas Yokota + Claude

---

## Overview

Redesign miraisoft.io from a single-app SpotMeter page into a multi-app portfolio site for Mirai Software's iOS apps. Modern "zine terminal" aesthetic — 90s alt/skate culture meets hacker terminal meets beautifully typeset code.

## Requirements

- **Site:** miraisoft.io — portfolio hub for iOS apps
- **Pages:** Home, SpotMeter, StockRoom, Privacy (SpotMeter), Privacy (StockRoom)
- **Tech:** Static HTML/CSS/JS, no framework, hosted on Dreamhost
- **Aesthetic:** Strong retro-modern fusion — terminal typography, ASCII art accents, DIY zine energy, 90s skater alt-culture vibe

## Apps

### SpotMeter
A precision light meter for film photographers. Features: spot metering, zone system visualization, 30+ film stocks with latitude/reciprocity, manual/aperture/shutter priority modes, bellows & reciprocity compensation, metering journal with photos/voice memos/GPS/PDF export.

### StockRoom
Film simulations for your photos. Applies film stock looks (Portra warmth, Tri-X grain, etc.) to photos from the camera roll.

## Design Direction: "Zine Terminal"

**Vibe:** 90s skate zine meets hacker terminal. Monospace typeset code as the structural backbone, with ASCII art splashes, irreverent copy, and DIY "I made this in my garage" energy. Dark, amber-lit, a little rough around the edges on purpose. Fun but not silly.

### Typography
- **Primary font:** Terminal/monospace font (Commit Mono, Fira Code, or Berkeley Mono)
- Everything in monospace — size and weight variation does the heavy lifting
- Lowercase bias throughout — casual, anti-corporate

### Color System
- `#0a0a0a` — base black background
- `#e5e5e5` — primary text
- `#d4a24e` — amber/gold (SpotMeter accent)
- `#5eead4` — teal (StockRoom accent)
- `#333` — subtle borders, box edges
- `#888` — secondary/muted text

### Site Structure

```
miraisoft.io/
├── index.html              ← Home (app hub)
├── spotmeter/index.html    ← SpotMeter app page
├── stockroom/index.html    ← StockRoom app page
├── spotmeter/privacy/index.html  ← SpotMeter privacy
├── stockroom/privacy/index.html  ← StockRoom privacy
├── css/style.css           ← Shared styles
└── js/main.js              ← Minimal JS (animations)
```

### Home Page Layout

- Sticky nav: `mirai.software` left, `[apps] [info]` right — all monospace
- ASCII art "MIRAI" logo using box-drawing characters — typed out on load
- Tagline: "software by thomas yokota / ios apps for photographers and other creative weirdos."
- Two app cards with numbered sections (`[ 01 ] ── spotmeter`, `[ 02 ] ── stockroom`)
  - Each card has a small ASCII art icon, description, tags in brackets, and `[ view ──→ ]` link
  - SpotMeter card: camera/lens ASCII icon, amber accent on hover
  - StockRoom card: gradient block ASCII icon (░▒▓█), teal accent on hover
- `$ whoami` section — terminal-style about blurb
- Footer: copyright, email, casual tagline ("made with ░▒▓ and too much coffee")

### App Page Layout (SpotMeter / StockRoom)

- ASCII art app name using box-drawing characters
- Description and App Store download button
- `// features` section with 2-column grid of numbered feature cards using box-drawing borders
- `// privacy` summary with link to full policy
- Each app page uses its own accent color (amber / teal)

### Privacy Policy Pages — "Man Page" Style

- Styled like a Unix man page: `SPOTMETER(1)  PRIVACY POLICY  SPOTMETER(1)`
- Section headers as man page fields: `NAME`, `LAST UPDATED`, `DESCRIPTION`, `DATA COLLECTION`, `ON-DEVICE STORAGE`, `CAMERA`, `ANALYTICS`, `CONTACT`
- All monospace, clean, no-nonsense
- Separate URLs per app (Apple requires app-specific privacy policy links)
- Content is nearly identical — neither app collects data

### SpotMeter Privacy Details
- Does not collect, transmit, or share any personal data
- On-device storage: journal entries, reference photos, voice memos, location data (with permission), preferences
- Camera used solely for metering light — frames never stored/uploaded
- No analytics, no ads, no tracking
- In-app purchases handled by Apple
- No third-party services
- Contact: hello@miraisoft.io

### StockRoom Privacy Details
- Does not collect, transmit, or share any personal data
- Photo library access used only to apply film simulations — photos processed on-device
- No analytics, no ads, no tracking
- In-app purchases handled by Apple (if applicable)
- No third-party services
- Contact: hello@miraisoft.io

### Animations
- Staggered character-by-character reveal on ASCII art logo
- Feature cards fade in with slight upward drift on scroll
- Hover: subtle amber/teal glow on card borders
- `$ whoami` section types out line by line
- No CRT scanlines — too gimmicky

### Key Principles
- No device mockup images or screenshots — typography and ASCII art ARE the visual identity
- Fun but professional — copy has personality without being cringey
- DIY zine energy — box-drawing characters, numbered sections, manual feel
- Anti-corporate lowercase casual tone
- Fast — entire site under 100KB, no heavy assets
- Responsive — layout adapts, ASCII art simplifies on mobile
