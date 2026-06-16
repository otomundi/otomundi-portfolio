import { useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiX, SiTiktok } from "react-icons/si";

const GOTHIC = "'Cinzel', Georgia, serif";
const CRIMSON = "#a81a2e";
const dim = (a: number) => `rgba(245,244,242,${a})`;

const socials = [
  { name: "Instagram", icon: SiInstagram, href: "https://instagram.com/otomundi", label: "@otomundi" },
  { name: "X", icon: SiX, href: "https://x.com/otomundi", label: "@otomundi" },
  { name: "TikTok", icon: SiTiktok, href: "https://tiktok.com/@otomundi", label: "@otomundi" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main className="min-h-screen bg-void relative pt-28 pb-20 px-6" data-testid="page-contact">
      <div className="grain-overlay" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontFamily: GOTHIC,
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: CRIMSON,
              fontWeight: 400,
            }}
          >
            Contact
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12"
                data-testid="contact-success"
              >
                <div className="w-6 h-px mb-6" style={{ background: "#730623" }} />
                <p
                  className="italic"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1rem",
                    color: dim(0.50),
                    fontWeight: 300,
                  }}
                >
                  Message received. I will be in touch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      className="block mb-3"
                      style={{
                        fontFamily: GOTHIC,
                        fontSize: "8px",
                        letterSpacing: "0.45em",
                        textTransform: "uppercase",
                        color: dim(0.20),
                        fontWeight: 400,
                      }}
                      htmlFor={field.id}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      value={formState[field.id as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full bg-transparent pb-3 focus:outline-none transition-colors duration-300"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "1rem",
                        fontWeight: 300,
                        borderBottom: `1px solid ${dim(0.09)}`,
                        color: dim(0.60),
                      }}
                      placeholder={field.placeholder}
                      data-testid={`input-contact-${field.id}`}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block mb-3"
                    style={{
                      fontFamily: GOTHIC,
                      fontSize: "8px",
                      letterSpacing: "0.45em",
                      textTransform: "uppercase",
                      color: dim(0.20),
                      fontWeight: 400,
                    }}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-transparent pb-3 focus:outline-none transition-colors duration-300 resize-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 300,
                      borderBottom: `1px solid ${dim(0.09)}`,
                      color: dim(0.60),
                    }}
                    placeholder="Your message..."
                    data-testid="input-contact-message"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 cursor-crosshair"
                  data-testid="button-contact-submit"
                >
                  <span
                    style={{
                      fontFamily: GOTHIC,
                      fontSize: "9px",
                      letterSpacing: "0.45em",
                      textTransform: "uppercase",
                      color: dim(0.35),
                      fontWeight: 400,
                    }}
                  >
                    Send
                  </span>
                  <span className="h-px block" style={{ width: "32px", background: "#730623" }} />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex flex-col gap-12 md:gap-0 md:justify-between"
          >
            <div>
              <p
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: dim(0.20),
                  fontWeight: 400,
                  marginBottom: "1rem",
                }}
              >
                Direct
              </p>
              <a
                href="mailto:otomundi@gmail.com"
                className="cursor-crosshair transition-colors duration-300"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: dim(0.45),
                }}
                data-testid="link-email"
              >
                otomundi@gmail.com
              </a>
            </div>

            <div>
              <p
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: dim(0.20),
                  fontWeight: 400,
                  marginBottom: "1.5rem",
                }}
              >
                Elsewhere
              </p>
              <div className="space-y-5" data-testid="social-links">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 cursor-crosshair"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                    >
                      <Icon size={12} style={{ color: dim(0.20) }} />
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "0.88rem",
                          color: dim(0.28),
                          fontWeight: 400,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div>
              <p
                style={{
                  fontFamily: GOTHIC,
                  fontSize: "8px",
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: dim(0.20),
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                }}
              >
                About ótomundi
              </p>
              <p
                className="italic"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
                  lineHeight: 1.8,
                  color: dim(0.24),
                  fontWeight: 300,
                }}
              >
                ótomundi (b. 2000) is an Angolan/Andalusian interdisciplinary artist and creative director, working across music, audiovisual art, and painting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
