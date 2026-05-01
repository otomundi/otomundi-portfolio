# Audiovisual Artist Portfolio — User Manual

## Overview

This website is a full portfolio for an audiovisual artist. It features a cosmic navigation interface where clickable planets represent individual artworks, a project gallery, a bio, a music page with streaming platform links, and a contact section. The design is minimal and dark, evoking the feeling of drifting through deep space.

---

## Site Structure

### 1. Landing Page (`/`)

**Purpose:** The first impression. Full-screen immersive hero with the artist's name and the cosmic navigation.

**Key Elements:**
- **Artist Name & Tagline:** Displayed large and centered on load, with a subtle fade-in entrance animation.
- **Cosmic Navigation (Planet System):** A birds-eye view of a planetary system. Each planet represents one audiovisual artwork:
  - Planets orbit slowly and continuously around a central star (artist logo/name)
  - Each planet has a unique size, color glow, and orbital radius
  - Hovering a planet reveals its title label
  - Clicking a planet navigates to the full artwork detail view
  - On mobile, this falls back to a clean vertical list of works

**How to interact:**
- Move your cursor over the planets to see artwork titles appear
- Click any planet to open its detail page
- The orbital animation plays on loop automatically — no interaction needed

---

### 2. Bio (`/bio`)

**Purpose:** An intimate space for the artist's written identity and portrait.

**Key Elements:**
- Artist portrait image (cinematic / atmospheric)
- Artist name and short title/discipline
- 2–4 paragraphs of biographical text
- Minimal layout with generous spacing

**How to customize:**
- Replace the placeholder portrait image with your own photo in the project files
- Edit the text content in `src/pages/Bio.tsx`

---

### 3. Project Gallery (`/works`)

**Purpose:** A curated showcase of 5 audiovisual artworks.

**Key Elements:**
- Grid of artwork cards (responsive: 2 columns on desktop, 1 column on mobile)
- Each card shows: thumbnail image, artwork title, year, medium, and short description
- Clicking a card expands into a full detail view with larger image and extended description

**Artworks included (placeholder data):**
| # | Title | Medium | Year |
|---|-------|--------|------|
| 1 | Void Signal | Audiovisual Installation | 2024 |
| 2 | Chromatic Drift | Live A/V Performance | 2023 |
| 3 | Event Horizon | Film Score + Visuals | 2023 |
| 4 | Liminal Frequencies | Generative Soundscape + Video | 2022 |
| 5 | Dark Matter | Immersive Dome Experience | 2021 |

**How to customize:**
- Edit the works data array in `src/data/works.ts` (or equivalent data file)
- Replace thumbnail images with your own artwork stills

---

### 4. Music (`/music`)

**Purpose:** Direct visitors to your music across all major streaming platforms.

**Key Elements:**
- Artist name and music tagline
- Streaming platform buttons/badges — each links to the artist's profile on that platform
- Platforms included: Spotify, Apple Music, SoundCloud, Bandcamp, YouTube Music
- Platform logos displayed using official icons

**How to customize:**
- Replace the `#` placeholder hrefs in `src/pages/Music.tsx` with your actual streaming profile URLs:
  - Spotify: `https://open.spotify.com/artist/YOUR_ARTIST_ID`
  - Apple Music: `https://music.apple.com/artist/YOUR_ARTIST_ID`
  - SoundCloud: `https://soundcloud.com/YOUR_USERNAME`
  - Bandcamp: `https://YOUR_USERNAME.bandcamp.com`
  - YouTube Music: `https://music.youtube.com/channel/YOUR_CHANNEL_ID`

---

### 5. Contact (`/contact`)

**Purpose:** Allow visitors to reach out directly via a form and social media.

**Key Elements:**
- Contact form with fields: Name, Email, Message
- Submit button
- Social media links: Instagram, X (Twitter), Vimeo

**How the contact form works:**
- The form collects Name, Email, and Message
- Currently it is a frontend-only form (no backend submission). To activate email delivery, connect a backend service such as Resend, Formspree, or EmailJS, and wire it up in the form submit handler in `src/pages/Contact.tsx`

**How to customize social links:**
- Update the social URLs in `src/pages/Contact.tsx`:
  - Instagram: `https://instagram.com/YOUR_HANDLE`
  - X/Twitter: `https://x.com/YOUR_HANDLE`
  - Vimeo: `https://vimeo.com/YOUR_USERNAME`

---

## Navigation

### Desktop
- **Top navigation bar:** Artist name on the left, page links on the right (Bio, Works, Music, Contact)
- **Cosmic nav:** Visible on the landing page as the primary artwork navigation
- All links use smooth scrolling and animated page transitions

### Mobile
- Top navigation collapses to a hamburger menu icon
- Tapping the hamburger opens a full-screen dark overlay menu with all page links
- The cosmic planetary nav gracefully falls back to a vertical list of artworks

---

## Design System

### Color Palette
- **Background:** Near-black (not pure gray) — deep space feel
- **Primary accent:** Electric blue or deep violet (used sparingly)
- **Text:** Off-white and pale gray
- **Planet colors:** Each planet has a unique nebula-inspired glow: blue, red, amber, violet, pale green

### Typography
- Editorial typeface: widely spaced, elegant, designed for dark backgrounds
- Headings: large and sparse
- Body: small, airy, generous line-height

### Animations
| Element | Animation |
|---------|-----------|
| Planet system | Continuous slow orbital rotation (loop) |
| Page entrance | Fade + slight upward drift on scroll |
| Cards | Staggered entrance on load |
| Hover states | Subtle glow intensification on planets; scale on cards |
| Navigation links | Smooth underline reveal on hover |
| Page transitions | Crossfade between routes |

### Texture
- Subtle grain/noise overlay applied to the background throughout the site for depth and warmth

---

## File Structure

```
artifacts/portfolio/
  src/
    pages/
      Landing.tsx      — Landing page with hero + cosmic nav
      Bio.tsx          — Artist bio page
      Works.tsx        — Project gallery
      WorkDetail.tsx   — Individual artwork detail view
      Music.tsx        — Music + streaming links
      Contact.tsx      — Contact form + social links
    components/
      PlanetNav.tsx    — Cosmic planet navigation component
      Navbar.tsx       — Top navigation bar
      WorkCard.tsx     — Artwork card component
    data/
      works.ts         — Artwork data (title, description, year, medium, image)
    index.css          — Global styles, dark theme variables
    App.tsx            — Router setup
```

---

## Customization Guide

### Changing the Artist Name
Search for the artist name placeholder across `src/` files and replace with your own.

### Adding a New Artwork
1. Add a new entry to the works data array in `src/data/works.ts`
2. Add a new planet entry to the `PlanetNav` component with a chosen size, color, and orbital radius
3. Add a thumbnail image to `public/images/` or use a hosted URL

### Removing the Grain Texture
The grain texture is applied via a CSS overlay in `index.css`. To disable it, remove or comment out the `.grain-overlay` class and its usage.

### Changing the Accent Color
Update the `--accent` CSS custom property in `src/index.css` under `:root`.

---

## Mobile Responsiveness

The site is fully responsive:
- **Landing:** Cosmic nav collapses to a vertical list; hero text scales down
- **Bio:** Portrait and text stack vertically on small screens
- **Gallery:** 2-column grid on desktop, 1-column on mobile
- **Music:** Platform links stack vertically on mobile
- **Contact:** Form is full-width on mobile

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Routing | Wouter |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons (SI) |
| Build | Vite + esbuild |
| Language | TypeScript |

---

## Known Limitations & Next Steps

- The contact form does not yet send emails — a backend service needs to be connected
- Artwork media (video/audio) is not embedded — only still images are shown; add `<video>` or iframe embeds per artwork detail view for full A/V experience
- The artist name, bio text, and streaming URLs are placeholders — all need to be replaced with real content

---

*Manual last updated: May 2026*
