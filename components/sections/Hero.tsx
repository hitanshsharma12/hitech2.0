"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Globe, Zap } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
    call: "Yes, call me",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `🔥 New Project Request

👤 Name: ${form.name}
🏢 Business: ${form.business}
📞 Phone: ${form.phone}
📩 Message: ${form.message}
📲 Call Preference: ${form.call}`;

    const url = `https://wa.me/917018796714?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSent(true);
    setOpen(false);

    setTimeout(() => setSent(false), 3000);
  };

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Globe, value: "100+", label: "Websites Delivered" },
    { icon: Zap, value: "99%", label: "Client Satisfaction" },
  ];

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Transforming Big Businesses Since 2023</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-balance">
            <span className="gradient-text">Digital Empire </span>
            <br />
            <span className="text-foreground">of</span>{" "}
            <span className="gradient-text-accent">Hitansh Sharma</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-center mt-8 leading-relaxed text-pretty"
        >
          Premium websites that convert visitors into customers. Built for cafes, 
          gyms, salons & ambitious local businesses ready to dominate online.
        </motion.p>
{/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
>
  <button
    onClick={() => setOpen(true)}
    className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-2 rounded-xl bg-foreground px-8 py-4 font-semibold text-background transition-all duration-300 hover:scale-105 hover-glow"
  >
    <span>Start Your Project</span>
    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
  </button>

  <Link
    href="/clienthub"
    className="flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 font-semibold text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
  >
    <Users className="h-5 w-5" />
    <span>Client Hub</span>
  </Link>

  <Link
    href="https://github.com/hitanshsharma12?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex w-full sm:w-auto min-w-[220px] items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-8 py-4 font-semibold text-muted-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent/10 hover:text-accent"
  >
    <svg
      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>

    <span>View Our Projects</span>
  </Link>
</motion.div>

        {/* Client access line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          Already a client?{" "}
          <Link href="/clienthub" className="text-accent hover:underline">
            Access your dashboard →
          </Link>
        </motion.p>

          

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center p-4 md:p-6 glass rounded-2xl"
            >
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 text-xs md:text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" /> Fast Delivery
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" /> SEO Optimized
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent" /> 24/7 Support
          </span>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass rounded-2xl p-6 md:p-8 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Start Your Project</h2>
                <p className="text-muted-foreground text-sm mt-2">{"Let's build something amazing together"}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />

                <input
                  name="business"
                  onChange={handleChange}
                  placeholder="Business Name"
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />

                <input
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />

                <textarea
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />

                <select
                  name="call"
                  onChange={handleChange}
                  className="bg-secondary/50 border border-border p-4 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option>Yes, call me</option>
                  <option>No, WhatsApp only</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success toast */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-4 rounded-xl flex items-center gap-3 z-50"
          >
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-foreground font-medium">Request Sent Successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}