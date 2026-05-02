import { useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiX, SiVimeo } from "react-icons/si";

const dim = (a: number) => `rgba(245,244,242,${a})`;

const socials = [
  { name: "Instagram", icon: SiInstagram, href: "#", label: "@otomundi" },
  { name: "X", icon: SiX, href: "#", label: "@otomundi" },
  { name: "Vimeo", icon: SiVimeo, href: "#", label: "vimeo.com/otomundi" },
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
          <p
            className="text-[9px] tracking-[0.5em] uppercase mb-3"
            style={{ color: dim(0.22) }}
          >
            Get in touch
          </p>
          <h1
            className="text-4xl font-extralight tracking-[0.08em] uppercase mb-6"
            style={{ color: "#f5f4f2" }}
          >
            Contact
          </h1>
          <p
            className="font-extralight leading-relaxed max-w-sm"
            style={{
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              lineHeight: 1.75,
              color: dim(0.32),
            }}
          >
            For collaborations, commissions, performance bookings, and press enquiries — reach out directly.
          </p>
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
                  className="text-sm font-light leading-relaxed"
                  style={{ color: dim(0.55) }}
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
                      className="block text-[9px] tracking-[0.4em] uppercase mb-3"
                      style={{ color: dim(0.22) }}
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
                      className="w-full bg-transparent pb-3 text-sm font-light focus:outline-none transition-colors duration-300"
                      style={{
                        borderBottom: `1px solid ${dim(0.10)}`,
                        color: dim(0.65),
                      }}
                      placeholder={field.placeholder}
                      data-testid={`input-contact-${field.id}`}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-[9px] tracking-[0.4em] uppercase mb-3"
                    style={{ color: dim(0.22) }}
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
                    className="w-full bg-transparent pb-3 text-sm font-light focus:outline-none transition-colors duration-300 resize-none"
                    style={{
                      borderBottom: `1px solid ${dim(0.10)}`,
                      color: dim(0.65),
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
                    className="text-[10px] tracking-[0.4em] uppercase transition-colors duration-300"
                    style={{ color: dim(0.40) }}
                  >
                    Send
                  </span>
                  <span
                    className="h-px block transition-all duration-300"
                    style={{ width: "32px", background: "#730623" }}
                  />
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
                className="text-[9px] tracking-[0.4em] uppercase mb-4"
                style={{ color: dim(0.22) }}
              >
                Direct
              </p>
              <a
                href="mailto:hello@otomundi.com"
                className="text-sm font-light tracking-wide cursor-crosshair transition-colors duration-300"
                style={{ color: dim(0.45) }}
                data-testid="link-email"
              >
                hello@otomundi.com
              </a>
            </div>

            <div>
              <p
                className="text-[9px] tracking-[0.4em] uppercase mb-6"
                style={{ color: dim(0.22) }}
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
                      <Icon size={13} style={{ color: dim(0.22) }} />
                      <span
                        className="text-xs tracking-[0.15em] font-light"
                        style={{ color: dim(0.30) }}
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
                className="text-[9px] tracking-[0.4em] uppercase mb-3"
                style={{ color: dim(0.22) }}
              >
                About ótomundi
              </p>
              <p
                className="font-extralight leading-relaxed"
                style={{
                  fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)",
                  lineHeight: 1.75,
                  color: dim(0.25),
                }}
              >
                ótomundi is a creative circle directed by óto — an Angolan/Andalusian interdisciplinary artist working in service of collective consciousness, ancestral heritage, and the unobstructed flow of creative intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
