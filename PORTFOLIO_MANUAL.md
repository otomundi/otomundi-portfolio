# ótomundi — Portfolio Manual

## Overview

Portfolio website for ótomundi — an Angolan/Andalusian interdisciplinary artist and creative director (b. 2000, est. 2020), working across music, audiovisual art, and painting. The site is dark, minimal, and typographically led. Palette: #730623 red accent, #f5f4f2 cream text, #111111 dark void background. Typography: Cinzel (display/headings) + Cormorant Garamond (body/italic).

---

## Site Structure

### 1. Landing Page (`/`)

**Purpose:** Full-screen red immersive hero. First impression before the visitor enters the work.

**Key Elements:**
- Logo: hand-drawn ótomundi symbol (PNG) — top-left in navbar
- Artist name: "ótomundi" in large Cinzel lowercase type (cream on red)
- Tagline: *creative director, audiovisual artist, and music producer* (Cormorant italic)
- Latest Work CTA panel: floats upper-right on desktop, inline below tagline on mobile — auto-pulls from `works[0]` (always most recent)
- Social links footer bar: Instagram, YouTube, SoundCloud, Spotify
- "Works →" link bottom-right

**Social link targets:**
| Platform | URL |
|----------|-----|
| Instagram | https://instagram.com/otomundi |
| YouTube | https://www.youtube.com/@otomundi |
| SoundCloud | https://soundcloud.com/otomundi |
| Spotify | https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe |

---

### 2. Bio Page (`/bio`)

**Purpose:** Artist biography. Red background matching the landing page — continuous visual identity.

**Layout:**
1. "Biography" label
2. "ÓTOMUNDI" — large Cinzel heading (cream on red)
3. bio-1.jpg — portrait floating upper-right (desktop)
4. Paragraph 1 (large Cormorant): "ótomundi (b. 2000) is an Angolan/Andalusian interdisciplinary artist and creative director, working across music, audiovisual art, and painting."
5. Paragraph 2 (italic Cormorant): intercultural practice / ancestral spirituality / surrealism
6. bio-2.jpg — secondary portrait with body text alongside
7. Paragraph 3 (italic Cormorant): devotion to creative act as spiritual projection
8. bio-3.jpg — closing full-width image, page ends here

**Images:** `src/assets/images/bio-1.jpg`, `bio-2.jpg`, `bio-3.jpg`

**No stats grid. No trailing paragraphs. Page ends with bio-3 image.**

---

### 3. Works / Audiovisual Page (`/works`)

**Purpose:** Chronological gallery of published audiovisual artworks, most recent first.

**Header:** "PUBLISHED WORKS" label · "AUDIOVISUAL" h1

**Works (in order):**

| # | Title | Medium | Release Date | Image |
|---|-------|--------|--------------|-------|
| 01 | EUVIM | Live A/V Performance | May 11, 2026 | EUVIM_ARTWORK.jpg |
| 02 | SKY | Film Score + Visuals | July 16, 2025 | SKY_ARTWORK.png |
| 03 | TIGRE | Immersive Installation | March 9, 2025 | TIGRE_ARTWORK.JPG |
| 04 | DESNUDO | Audiovisual Performance | April 8, 2024 | DESNUDO_ARTWORK.jpg |

**Descriptions:**
- **EUVIM:** I came, she felt the whole world through me, and we became witnesses to the obsessive games of love.
- **SKY:** A love letter from the gothic underworld, sent to a mythical lover that resides above the realm of mortals.
- **TIGRE:** To run away from desire, while realizing that one is the predator who can't live without it.
- **DESNUDO:** An emotional confession, from a youth who learned to see the world from eyes beyond his ego.

To add a new work: prepend it to the `works` array in `src/data/works.ts`. The landing page CTA auto-updates.

---

### 4. Work Detail Page (`/works/:id`)

Each work has its own detail page with:
- Full-width hero image with slow-breathing crimson pulse animation (5s, Framer Motion)
- Title in large Cinzel crimson
- Long description in Cormorant Garamond
- Credits section (role / name / Instagram)
- Embedded video (Vimeo or YouTube)
- Photo grid
- Next work navigation

**To update credits:** edit the `credits` array in the relevant work object in `src/data/works.ts`.

---

### 5. Music Page (`/music`)

**Purpose:** Streaming platform links.

**Header:** "DISCOGRAPHY" label · "MUSIC" h1 (no description below)

**Platforms (bordered button rows, color-coded icons):**
| Platform | URL |
|----------|-----|
| YouTube | https://www.youtube.com/@otomundi |
| Spotify | https://open.spotify.com/artist/1Pr9r0RYuRgh971UdzxSpe |
| Apple Music | https://music.apple.com/es/artist/ótomundi/1739394893 |
| SoundCloud | https://soundcloud.com/otomundi |

---

### 6. Contact Page (`/contact`)

**Purpose:** Minimal contact form + direct info.

**Header:** "CONTACT" h1 only — no label, no description

**Left column:** Contact form (Name, Email, Message, Send)

**Right column:**
- Direct email: otomundi@gmail.com
- Elsewhere: Instagram, X, TikTok — all @otomundi
- About ótomundi: "ótomundi (b. 2000) is an Angolan/Andalusian interdisciplinary artist and creative director, working across music, audiovisual art, and painting."

---

## Design System

### Palette
| Token | Value | Usage |
|-------|-------|-------|
| Red accent | `#730623` | Landing/Bio background, decorative lines, hover bleeds |
| Crimson display | `#a81a2e` | All headings on dark pages (Works, Music, Contact, WorkDetail) |
| Cream | `#f5f4f2` | All text; various opacities |
| Void | `#111111` | Background for Works, Music, Contact, WorkDetail |

### Typography
| Font | Usage |
|------|-------|
| Cinzel | Headings, nav, labels, titles, all-caps elements |
| Cormorant Garamond | Body copy, descriptions, italic quotes |

### Logo
`src/assets/images/otomundi-logo-white.png` — hand-drawn ótomundi symbol, white on transparent. Used in Navbar at height 28px.

### Assets
All artwork and bio images live in `src/assets/images/`. Import via `@/assets/images/filename`.

---

## Customisation

### Adding a new artwork
1. Add image to `src/assets/images/`
2. Add entry at the **top** of the `works` array in `src/data/works.ts`
3. The landing page CTA and works list update automatically

### Updating artwork images
Replace `image:` field in the relevant work object in `src/data/works.ts`.

### Updating credits
Edit the `credits` array inside each work object in `src/data/works.ts`.

### Updating bio text
Edit `src/pages/Bio.tsx` — three paragraph blocks clearly marked with `data-testid="text-bio-paragraph-1/2/3"`.

### Updating social links
- Landing socials: `socialLinks` array in `src/pages/Landing.tsx`
- Contact socials: `socials` array in `src/pages/Contact.tsx`
- Music platforms: `platforms` array in `src/pages/Music.tsx`

---

## Tech Stack

- **React + Vite** — frontend framework
- **Tailwind CSS v4** — utility styling
- **Framer Motion** — all animations and transitions
- **Wouter** — lightweight client-side routing
- **react-icons/si** — social/platform icons

## Key Commands

```bash
pnpm --filter @workspace/portfolio run dev    # start dev server
pnpm --filter @workspace/portfolio run build  # production build
```
