# ótomundi — Portfolio Manual

## Overview

This is the official portfolio website for ótomundi — a creative world directed by óto, an Angolan/Andalusian interdisciplinary artist (b. 2000). The circle was founded in 2020 and works across music, fashion, audiovisuals, and painting. The site is dark, minimal, and typographically led, with a red (#730623) accent throughout.

---

## Site Structure

### 1. Landing Page (`/`)

**Purpose:** Full-screen red immersive hero. First and only impression before the visitor enters the work.

**Key Elements:**
- Label: "Creative World" in small spaced caps
- Artist name: "ótomundi" in large extralight lowercase type
- Tagline beneath: *music, fashion, audiovisuals, and painting* (single line)
- Social links footer bar: Instagram, YouTube, SoundCloud, Spotify — all linked to real @otomundi accounts
- "Works →" link bottom-right

**Social link targets:**
| Platform | URL |
|----------|-----|
| Instagram | https://instagram.com/otomundi |
| YouTube | https://www.youtube.com/@otomundi |
| SoundCloud | https://soundcloud.com/otomundi |
| Spotify | https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe |

---

### 2. Bio (`/bio`)

**Purpose:** Full biographical document of ótomundi's practice and philosophy.

**Key content:**
- ótomundi (est. 2020) is a creative world, directed by óto (b. 2000)
- Origin: Angolan/Andalusian
- Practice: music, fashion, audiovisuals, painting
- Core themes: ancestral spirituality, neo-Gnosticism, universal creativity, cross-cultural surrealism
- Method: prolonged meditation under sun and full moon as creative reception
- Stats: Born 2000, Origin AO/ES, 5 disciplines, ótomundi since 2020

**How to update:**
- Edit `artifacts/portfolio/src/pages/Bio.tsx`

---

### 3. Works Gallery (`/works`)

**Purpose:** Single-thread chronological showcase of artworks, most recent first.

**Layout:** Full-width horizontal rows — each work occupies the full viewport width with image left, text right. One work at a time as you scroll, in reverse chronological order.

**Current works (most recent first):**
| # | Title | Medium | Year |
|---|-------|--------|------|
| 1 | EUVIM | Live A/V Performance | 2026 |
| 2 | TIGRE | Immersive Installation | 2025 |
| 3 | SKY | Film Score + Visuals | 2025 |
| 4 | DESNUDO | Audiovisual Performance | 2024 |

**Credits section:** Each artwork detail page now includes a Credits section listing all collaborators with their roles and Instagram profile links.

**How to add/update works:**
1. Edit `artifacts/portfolio/src/data/works.ts`
2. Each work entry supports: `id`, `title`, `medium`, `year`, `description`, `longDescription`, `image`, `credits[]`, `media`
3. The `credits` array takes objects with `{ role, name, instagram }` — set `instagram` to `"#"` for placeholder entries

---

### 4. Work Detail (`/works/:id`)

**Purpose:** Full expanded view of a single artwork.

**Key sections:**
- Full-bleed hero image with gradient
- Long description
- **Credits** — collaborator names, roles, Instagram links (red vertical bar accent)
- Video embed (click-to-play)
- Photo gallery (horizontal scroll with lightbox)
- Previous / Next work navigation

---

### 5. Music (`/music`)

**Purpose:** Drive visitors to listen to ótomundi on their preferred music service.

**Streaming platforms linked:**
| Platform | URL |
|----------|-----|
| YouTube | https://www.youtube.com/@otomundi |
| Spotify | https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe |
| Apple Music | https://music.apple.com/es/artist/ótomundi/1739394893 |
| SoundCloud | https://soundcloud.com/otomundi |

**How to update links:**
- Edit the `platforms` array in `artifacts/portfolio/src/pages/Music.tsx`

---

### 6. Contact (`/contact`)

**Purpose:** Direct line for collaborations, commissions, bookings, and press.

**Contact email:** otomundi@gmail.com

**Social links on contact page:**
| Platform | Handle | URL |
|----------|--------|-----|
| Instagram | @otomundi | https://instagram.com/otomundi |
| X | @otomundi | https://x.com/otomundi |
| TikTok | @otomundi | https://tiktok.com/@otomundi |

**Contact form:** Frontend-only (no backend). To enable real email delivery, connect a service such as Resend, Formspree, or EmailJS to the form submit handler in `src/pages/Contact.tsx`.

---

## Navigation

### Desktop
- Top bar: ótomundi logo left / BIO · WORKS · MUSIC · CONTACT right
- Active page is highlighted

### Mobile
- Hamburger menu opens full-screen dark overlay (red background)
- All page links displayed

---

## Design System

### Color Palette
| Role | Value |
|------|-------|
| Background | `#111111` |
| Text | `#f5f4f2` |
| Red accent | `#730623` |
| Landing background | `#730623` |

### Typography
- Font: System extralight sans-serif (no custom font loaded)
- Headings: large, extralight weight, wide/negative tracking depending on context
- Labels: 9px, spaced caps, low opacity
- Body: extralight, generous line-height

### Animations
| Element | Behaviour |
|---------|-----------|
| Page entrance | Fade + upward drift |
| Works rows | Staggered entrance on load |
| Image hover | Subtle scale + red tint overlay |
| Social links | Opacity transition on hover |
| Credits | Staggered entrance per collaborator |

### Texture
- Grain overlay applied site-wide via `.grain-overlay` in `index.css`

---

## File Structure

```
artifacts/portfolio/
  src/
    pages/
      Landing.tsx      — Landing hero (red full-screen)
      Bio.tsx          — Artist biography
      Works.tsx        — Single-thread works gallery
      WorkDetail.tsx   — Individual artwork view with credits
      Music.tsx        — Streaming platform links
      Contact.tsx      — Contact form + social links
    data/
      works.ts         — Artwork data including credits[]
    assets/images/     — Placeholder images (replace with real photos)
    index.css          — Global styles, grain overlay, dark theme
    App.tsx            — Router setup (Wouter)
```

---

## Customization Guide

### Replacing placeholder images
Drop real artwork photos into `src/assets/images/` and update the import paths in `works.ts` and `Bio.tsx`.

### Adding collaborator credits
In `works.ts`, update each work's `credits` array:
```ts
credits: [
  { role: "Direction", name: "óto", instagram: "https://instagram.com/otomundi" },
  { role: "Cinematography", name: "Real Name", instagram: "https://instagram.com/handle" },
]
```
Names with a real Instagram URL will render as clickable links; `"#"` placeholders render as plain text.

### Adding a new work
1. Add entry to `works` array in `src/data/works.ts` (prepend to keep most-recent-first order)
2. Import and reference the artwork image
3. Fill in `credits[]` with all collaborators

### Removing the grain texture
Remove the `.grain-overlay` div from each page component, or delete the class from `index.css`.

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Routing | Wouter |
| Animations | Framer Motion |
| Icons | React Icons (Simple Icons) |
| Language | TypeScript |

---

## Known Limitations

- Contact form does not send emails — needs backend integration (Resend / Formspree)
- Video and audio embeds use placeholder URLs — replace with real Vimeo/YouTube links per artwork in `works.ts`
- Artwork images are placeholder assets — replace with real photography

---

*Manual last reviewed: May 2026*
