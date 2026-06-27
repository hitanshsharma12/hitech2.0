"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Script from "next/script";
import CheckoutForm from "./CheckoutForm";
import CourseSeatCounter from "./CourseSeatCounter";
import { courseData } from "./data/courseData";

export default function CourseEnrollSection() {
  const {
    enrollHeadline,
    enrollSubtitle,
    bullets,
    badges,
    seats,
    price,
  } = courseData;

  /* ── Show sticky bar only when this section is NOT yet in view ────────── */
  const sectionRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Enable sticky after user scrolls past hero ─────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      if (!scrolled) setShowSticky(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEnroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Razorpay script — loads once, non-blocking */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      {/* ── Main Section ─────────────────────────────────────────────────── */}
      <section
        id="enroll"
        ref={sectionRef}
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* ── Left Column: Headline + Bullets ────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8 lg:sticky lg:top-24"
            >
              {/* Limited seats badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                LIMITED · {seats.total.toLocaleString()} SEATS / MONTH
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                  <span className="text-foreground block">
                    {enrollHeadline.white}
                  </span>
                  <span className="gradient-text-accent block mt-1">
                    {enrollHeadline.accent}
                  </span>
                </h2>
                <p className="text-muted-foreground mt-5 text-base leading-relaxed max-w-lg">
                  {enrollSubtitle}
                </p>
              </div>

              {/* Bullet points */}
              <div className="space-y-3.5">
                {bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-4 flex-wrap pt-2">
                {badges.map((badge, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <span>{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Right Column: Checkout Card ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 space-y-6">
                {/* Card header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                    </span>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                      Checkout
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Your Details
                  </h3>
                </div>

                {/* Form */}
                <CheckoutForm />

                {/* Live seat counter */}
                <CourseSeatCounter
                  claimed={seats.claimed}
                  total={seats.total}
                  isLive
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Sticky Bottom Bar ──────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSticky
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(0, 0, 0, 0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center">
          <button
            onClick={scrollToEnroll}
            className="bg-accent hover:bg-accent/90 text-background font-bold py-3 px-10 rounded-full text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30"
          >
            Secure Checkout → {price.display}
          </button>
        </div>
      </div>
    </>
  );
}