import { useState } from "react";

const GOTHIC = "'Cinzel', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";
const CRIMSON = "#730623";
const CREAM = "#f5f4f2";
const dim = (a: number) => `rgba(245,244,242,${a})`;

const works = [
  {
    id: "euvim",
    title: "EUVIM",
    artist: "ótomundi",
    format: "music, audiovisual film, photographic series",
    duration: "4'15 song, film, 11 photographs",
    location: "Barcelona",
    language: "portuguese",
    genre: "industrial funk",
    releaseDate: "May 11, 2026",
    image: "/__mockup/images/EUVIM_ARTWORK.jpg",
  },
  {
    id: "sky",
    title: "SKY",
    artist: "ótomundi",
    format: "music, audiovisual film, photographic series",
    duration: "3'58 song, film, 11 photographs",
    location: "Sevilla",
    language: "english",
    genre: "alternative soul",
    releaseDate: "July 14, 2025",
    image: "/__mockup/images/SKY_ARTWORK.png",
  },
  {
    id: "tigre",
    title: "TIGRE",
    artist: "ótomundi",
    format: "music, audiovisual film",
    duration: "2'48 song, film",
    location: "Luanda",
    language: "portuguese",
    genre: "afro-electronic",
    releaseDate: "March 3, 2025",
    image: "/__mockup/images/TIGRE_ARTWORK.jpg",
  },
  {
    id: "desnudo",
    title: "DESNUDO",
    artist: "ótomundi",
    format: "music, photographic series",
    duration: "4'02 song, 8 photographs",
    location: "Barcelona",
    language: "spanish",
    genre: "neosoul",
    releaseDate: "November 19, 2024",
    image: "/__mockup/images/DESNUDO_ARTWORK.jpg",
  },
];

const metaFields = [
  "format",
  "duration",
  "location",
  "language",
  "genre",
] as const;

export function WorksTightened() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main
      className="min-h-screen relative pt-28 pb-24"
      style={{ background: "#111111", fontFamily: GOTHIC }}
    >
      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      <div
        className="max-w-5xl mx-auto px-8 relative"
        style={{ zIndex: 2 }}
      >
        {/* Page header */}
        <div className="mb-20">
          <p
            style={{
              fontFamily: GOTHIC,
              fontSize: "8px",
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              color: dim(0.30),
              fontWeight: 400,
              marginBottom: "0.8rem",
            }}
          >
            Published Works
          </p>
          <h1
            style={{
              fontFamily: GOTHIC,
              /* unified to page crimson — no #a81a2e */
              color: CRIMSON,
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            Audiovisual
          </h1>
        </div>

        {/* Works list */}
        <div>
          {works.map((work, i) => {
            const isActive = hoveredId === work.id;
            const isDimmed = hoveredId !== null && !isActive;

            return (
              <div
                key={work.id}
                style={{
                  borderTop: `1px solid ${dim(0.07)}`,
                  /* single transition controls both opacity and blur */
                  opacity: isDimmed ? 0.15 : 1,
                  filter: isDimmed ? "blur(1px)" : "none",
                  transition: "opacity 0.38s ease, filter 0.38s ease",
                  position: "relative",
                }}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Crimson left accent — slides in on hover */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "2px",
                    background: CRIMSON,
                    transform: isActive ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                    transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />

                <div
                  className="flex gap-0 py-12"
                  style={{
                    paddingLeft: "18px",
                    cursor: "crosshair",
                  }}
                >
                  {/* Artwork image — 40% */}
                  <div
                    style={{
                      width: "40%",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      style={{
                        width: "100%",
                        display: "block",
                        transform: isActive ? "scale(1.025)" : "scale(1)",
                        transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                  </div>

                  {/* Text content — 60% */}
                  <div
                    style={{
                      width: "60%",
                      paddingLeft: "48px",
                      paddingTop: "4px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {/* Number + date row */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: "20px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: GOTHIC,
                            fontSize: "8px",
                            letterSpacing: "0.42em",
                            color: dim(0.28),
                            fontWeight: 400,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontFamily: GOTHIC,
                            fontSize: "8px",
                            letterSpacing: "0.30em",
                            color: dim(0.28),
                            fontWeight: 400,
                          }}
                        >
                          {work.releaseDate}
                        </span>
                      </div>

                      {/* Crimson rule — expands on hover */}
                      <div
                        style={{
                          height: "1px",
                          background: CRIMSON,
                          marginBottom: "20px",
                          width: isActive ? "40px" : "18px",
                          transition: "width 0.45s cubic-bezier(0.16,1,0.3,1)",
                        }}
                      />

                      {/* Title */}
                      <h2
                        style={{
                          fontFamily: GOTHIC,
                          fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: CREAM,
                          lineHeight: 0.95,
                          fontWeight: 400,
                          marginBottom: "10px",
                        }}
                      >
                        {work.title}
                      </h2>

                      {/* Artist */}
                      <p
                        style={{
                          fontFamily: CORMORANT,
                          fontSize: "clamp(0.82rem, 1.1vw, 0.96rem)",
                          fontStyle: "italic",
                          color: dim(0.45),
                          fontWeight: 300,
                          marginBottom: "24px",
                        }}
                      >
                        {work.artist}
                      </p>

                      {/* Metadata */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "7px",
                          marginBottom: "28px",
                        }}
                      >
                        {metaFields.map((key) => (
                          <div
                            key={key}
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: "12px",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: GOTHIC,
                                fontSize: "6.5px",
                                letterSpacing: "0.40em",
                                textTransform: "uppercase",
                                /* lifted from 0.28 → 0.32 for label legibility */
                                color: dim(0.32),
                                fontWeight: 400,
                                flexShrink: 0,
                                width: "52px",
                              }}
                            >
                              {key}
                            </span>
                            <span
                              style={{
                                fontFamily: CORMORANT,
                                fontSize: "clamp(0.78rem, 1vw, 0.88rem)",
                                /* value lifted from 0.48 → 0.55 */
                                color: dim(0.55),
                                fontWeight: 300,
                                lineHeight: 1.4,
                              }}
                            >
                              {(work as Record<string, string>)[key]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View work — lifted from 0.35 → 0.55 + arrow nudge */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          fontFamily: GOTHIC,
                          fontSize: "8px",
                          letterSpacing: "0.40em",
                          textTransform: "uppercase",
                          color: isActive ? dim(0.70) : dim(0.42),
                          fontWeight: 400,
                          transition: "color 0.3s ease",
                        }}
                      >
                        View work
                      </span>
                      <span
                        style={{
                          fontFamily: GOTHIC,
                          fontSize: "9px",
                          color: isActive ? dim(0.70) : dim(0.30),
                          transition: "color 0.3s ease, transform 0.35s ease",
                          display: "inline-block",
                          transform: isActive ? "translateX(4px)" : "translateX(0)",
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Closing rule */}
          <div style={{ borderTop: `1px solid ${dim(0.07)}` }} />
        </div>

        {/* Footer bar */}
        <div
          style={{
            marginTop: "56px",
            paddingTop: "20px",
            borderTop: `1px solid ${dim(0.07)}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            {["Instagram", "YouTube", "SoundCloud", "Spotify"].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "7px",
                  letterSpacing: "0.40em",
                  textTransform: "uppercase",
                  /* lifted from 0.28 → 0.38 — these are links, not decoration */
                  color: dim(0.38),
                  fontWeight: 400,
                }}
              >
                {label}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontFamily: GOTHIC,
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: dim(0.38),
                fontWeight: 400,
              }}
            >
              Contact
            </span>
            <span
              style={{
                display: "block",
                height: "1px",
                width: "28px",
                background: dim(0.22),
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
