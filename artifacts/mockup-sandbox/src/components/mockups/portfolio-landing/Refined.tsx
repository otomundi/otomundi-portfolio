const GOTHIC = "'Cinzel', Georgia, serif";
const CORMORANT = "'Cormorant Garamond', Georgia, serif";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "SoundCloud", href: "#" },
  { label: "Spotify", href: "#" },
];

const latestWork = {
  title: "EUVIM",
  releaseDate: "May 11, 2026",
  image: "/__mockup/images/EUVIM_ARTWORK.jpg",
};

// Grain SVG as data URL — matches portfolio exactly
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")";

export function Refined() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#730623",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 100,
          backgroundImage: GRAIN,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.07,
          mixBlendMode: "overlay",
        }}
      />

      {/* Depth gradient — deeper corners, stronger anchor */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 15% 90%, rgba(0,0,0,0.65) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 85% 10%, rgba(0,0,0,0.40) 0%, transparent 45%), " +
            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── Artwork panel — right, vertically centered ── */}
      <div
        style={{
          position: "absolute",
          right: "7%",
          top: "12%",
          width: "clamp(160px, 18vw, 280px)",
          zIndex: 20,
        }}
      >
        {/* Label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          {/* Short rule */}
          <div
            style={{
              width: "18px",
              height: "1px",
              background: "rgba(245,244,242,0.20)",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              fontFamily: GOTHIC,
              fontSize: "7px",
              letterSpacing: "0.58em",
              textTransform: "uppercase",
              color: "rgba(245,244,242,0.22)",
              fontWeight: 400,
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Latest Work
          </p>
        </div>

        {/* Image — framed with thin border */}
        <div
          style={{
            position: "relative",
            border: "1px solid rgba(245,244,242,0.10)",
          }}
        >
          <img
            src={latestWork.image}
            alt={latestWork.title}
            style={{
              width: "100%",
              display: "block",
            }}
          />
          {/* Thin bottom fade — very subtle, just softens the cut */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "28%",
              background: "linear-gradient(to top, rgba(115,6,35,0.25) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Work metadata */}
        <div style={{ marginTop: "12px" }}>
          <p
            style={{
              fontFamily: GOTHIC,
              fontSize: "clamp(0.85rem, 1.3vw, 1.2rem)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(245,244,242,0.86)",
              fontWeight: 400,
              lineHeight: 1,
              margin: 0,
            }}
          >
            {latestWork.title}
          </p>
          <p
            style={{
              fontFamily: GOTHIC,
              fontSize: "7px",
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: "rgba(245,244,242,0.32)",
              fontWeight: 400,
              margin: "5px 0 0",
            }}
          >
            {latestWork.releaseDate}
          </p>

          {/* View work link with extending underline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "20px",
                background: "rgba(245,244,242,0.22)",
              }}
            />
            <p
              style={{
                fontFamily: GOTHIC,
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.28)",
                fontWeight: 400,
                margin: 0,
              }}
            >
              View work
            </p>
          </div>
        </div>
      </div>

      {/* ── Main content — flex column, pushes to bottom ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100vh",
        }}
      >
        {/* Spacer pushes name to bottom */}
        <div style={{ flex: 1 }} />

        {/* Name + tagline block */}
        <div style={{ padding: "0 5% 40px" }}>
          {/* Artist name */}
          <h1
            style={{
              fontFamily: GOTHIC,
              fontSize: "clamp(3.4rem, 11vw, 11rem)",
              letterSpacing: "0.04em",
              color: "#f5f4f2",
              lineHeight: 0.88,
              fontWeight: 400,
              textTransform: "lowercase",
              margin: 0,
              // Tight text shadow for depth
              textShadow: "0 4px 48px rgba(0,0,0,0.45)",
            }}
          >
            ótomundi
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: CORMORANT,
              fontSize: "clamp(0.78rem, 1.05vw, 0.95rem)",
              letterSpacing: "0.10em",
              color: "rgba(245,244,242,0.32)",
              fontWeight: 300,
              fontStyle: "italic",
              marginTop: "18px",
              marginBottom: 0,
            }}
          >
            creative director, audiovisual artist, and music producer
          </p>
        </div>

        {/* ── Footer bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(245,244,242,0.09)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 5%",
          }}
        >
          {/* Social links — slightly larger, more visible */}
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            {socialLinks.map(({ label }) => (
              <span
                key={label}
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "7px",
                  letterSpacing: "0.40em",
                  textTransform: "uppercase",
                  color: "rgba(245,244,242,0.28)",
                  fontWeight: 400,
                  cursor: "crosshair",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Works link — right side, with extending dash */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "crosshair",
            }}
          >
            <span
              style={{
                fontFamily: GOTHIC,
                fontSize: "7px",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(245,244,242,0.28)",
                fontWeight: 400,
              }}
            >
              Works
            </span>
            <div
              style={{
                width: "28px",
                height: "1px",
                background: "rgba(245,244,242,0.20)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
