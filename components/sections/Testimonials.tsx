"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles, Zap } from "lucide-react";

type Slide = {
  src: string;
  title: string;
  type: "Reel" | "PDF" | "Video" | "DM";
  note: string;
};

const testimonials: Slide[] = [
  {
    src: "/testimonials/t1.png",
    title: "Client DM after watching reels",
    type: "Reel",
    note: "Proof that reels can bring real leads.",
  },
  {
    src: "/testimonials/t2.png",
    title: "Website advice converted into action",
    type: "DM",
    note: "A simple answer turned into a serious lead.",
  },
  {
    src: "/testimonials/t3.png",
    title: "PDF lead magnet worked instantly",
    type: "PDF",
    note: "One PDF changed the conversation.",
  },
  {
    src: "/testimonials/t4.png",
    title: "Client got clarity from a voice note",
    type: "Video",
    note: "Video content built trust fast.",
  },
  {
    src: "/testimonials/t5.png",
    title: "Consistent outreach brought results",
    type: "DM",
    note: "The follow-up system is working.",
  },
  {
    src: "/testimonials/t6.png",
    title: "Lead asked for the promised PDF",
    type: "PDF",
    note: "Strong CTA, strong response.",
  },
  {
    src: "/testimonials/t7.png",
    title: "Video content feedback",
    type: "Video",
    note: "People loved the content even without buying.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const activeSlide = testimonials[active];

  const next = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({
        x: dir > 0 ? 120 : -120,
        opacity: 0,
        scale: 0.96,
        filter: "blur(4px)",
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      },
      exit: (dir: number) => ({
        x: dir > 0 ? -120 : 120,
        opacity: 0,
        scale: 0.96,
        filter: "blur(4px)",
      }),
    }),
    []
  );

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent" />
              Social proof that sells
            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-balance md:text-6xl">
              <span className="text-foreground">Real results from</span>{" "}
              <span className="gradient-text">reels, PDFs & videos</span>
            </h2>

          

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "7+", label: "Proof Screens" },
                { value: "3", label: "Content Types" },
                { value: "100%", label: "Real DMs" },
                { value: "24/7", label: "Trust Signal" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                >
                  <div className="text-2xl font-bold gradient-text-accent">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-accent" />
              Designed to feel premium on desktop and mobile.
            </div>
          </motion.div>

          {/* Right slider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass relative rounded-[2rem] border border-white/10 p-4 shadow-2xl shadow-black/20">
              {/* header */}
              <div className="mb-4 flex items-center justify-between gap-4 px-2">
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Instagram proof gallery
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Auto-sliding testimonials with smooth left animation
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                  <Quote className="h-3.5 w-3.5 text-accent" />
                  {active + 1}/{testimonials.length}
                </div>
              </div>

              {/* main frame */}
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[390px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-xl">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    drag={prefersReducedMotion ? false : "x"}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      const swipe = info.offset.x;
                      if (swipe < -60) next();
                      if (swipe > 60) prev();
                    }}
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  >
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.title}
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />

                    <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4">
                      <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        {activeSlide.type} testimonial
                      </div>
                      <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                        Swipe left
                      </div>
                    </div>

                    <div className="absolute top-5 left-0 right-0 p-5">
                      <div className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          Social proof from my content
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          {activeSlide.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/75">
                          {activeSlide.note}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* arrows */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-black/60"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-black/60"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* thumbnails */}
              <div className="mt-4 grid grid-cols-7 gap-2 overflow-x-auto pb-1">
                {testimonials.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`relative aspect-[9/16] min-w-[42px] overflow-hidden rounded-xl border transition ${
                      active === index
                        ? "border-accent ring-2 ring-accent/30"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Open testimonial ${index + 1}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* dots */}
              <div className="mt-4 flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      active === index ? "w-8 bg-accent" : "w-2 bg-white/25"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}