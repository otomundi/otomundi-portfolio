import { useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiX, SiVimeo } from "react-icons/si";

const socials = [
  { name: "Instagram", icon: SiInstagram, href: "#", label: "@aether" },
  { name: "X", icon: SiX, href: "#", label: "@aether" },
  { name: "Vimeo", icon: SiVimeo, href: "#", label: "vimeo.com/aether" },
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
          <p className="text-[9px] tracking-[0.5em] uppercase text-white/25 mb-3">Get in touch</p>
          <h1 className="text-4xl font-extralight tracking-[0.08em] uppercase text-white/90">
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
                <div className="w-6 h-px bg-white/30 mb-6" />
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Message received. I will be in touch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-white/25 mb-3" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/12 pb-3 text-sm text-white/70 placeholder:text-white/18 focus:outline-none focus:border-white/30 transition-colors duration-300"
                    placeholder="Your name"
                    data-testid="input-contact-name"
                  />
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-white/25 mb-3" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/12 pb-3 text-sm text-white/70 placeholder:text-white/18 focus:outline-none focus:border-white/30 transition-colors duration-300"
                    placeholder="your@email.com"
                    data-testid="input-contact-email"
                  />
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-white/25 mb-3" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/12 pb-3 text-sm text-white/70 placeholder:text-white/18 focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                    data-testid="input-contact-message"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 cursor-crosshair"
                  data-testid="button-contact-submit"
                >
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/45 group-hover:text-white/80 transition-colors duration-300">
                    Send
                  </span>
                  <span
                    className="w-8 h-px bg-white/30 group-hover:w-14 group-hover:bg-white/60 transition-all duration-400 block"
                  />
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/25 mb-4">Direct</p>
              <a
                href="mailto:hello@aether.studio"
                className="text-white/50 hover:text-white/80 transition-colors duration-300 text-sm font-light tracking-wide cursor-crosshair"
                data-testid="link-email"
              >
                hello@aether.studio
              </a>
            </div>

            <div className="mt-12 md:mt-0">
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/25 mb-6">Elsewhere</p>
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
                      <Icon size={14} className="text-white/25 group-hover:text-white/60 transition-colors duration-300" />
                      <span className="text-xs tracking-[0.15em] text-white/35 group-hover:text-white/65 transition-colors duration-300 font-light">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <p className="text-[9px] tracking-[0.4em] uppercase text-white/25 mb-3">Bookings & Press</p>
              <p className="text-xs text-white/30 font-light leading-relaxed">
                For performance bookings, exhibition proposals, and press enquiries, please reach out via email with relevant details.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
