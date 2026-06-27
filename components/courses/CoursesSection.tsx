"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import CourseVideoPlayer from "./CourseVideoPlayer";
import CourseFeatureGrid from "./CourseFeatureGrid";
import CourseSeatCounter from "./CourseSeatCounter";
import { courseData } from "./data/courseData";


export default function CoursesSection() {
  const {
    videoSrc,
    videoPoster,
    courseTitle,
    instructorName,
    watchLabel,
    sectionTitle,
    features,
    price,
    seats,
    ctaMain,
    ctaSub,
  } = courseData;

  const scrollToEnroll = () => {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="courses"
      className="relative py-20 md:py-28 overflow-hidden bg-card/30"
    >
      {/* ── Background ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Section header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            {watchLabel}
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-foreground">{sectionTitle.white} </span>
            <span className="gradient-text-accent">{sectionTitle.accent}</span>
          </h2>
        </motion.div>

        {/* ── Main card: Video + Details ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/10 p-5 md:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* ── Left: Video Player ──────────────────────────────────── */}
            <div>
              <CourseVideoPlayer
                src={videoSrc}
                poster={videoPoster}
                title={courseTitle}
                instructor={instructorName}
              />
            </div>

            {/* ── Right: Features + CTA + Seats ──────────────────────── */}
            <div className="space-y-7">

              {/* Feature grid */}
              <CourseFeatureGrid features={features} />

              {/* CTA button */}
              <div className="space-y-3">
                <button
                  onClick={scrollToEnroll}
                  className="w-full relative overflow-hidden rounded-2xl py-4 font-bold text-white text-sm tracking-wide group focus:outline-none focus:ring-2 focus:ring-accent/50"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
                  }}
                >
                  <span className="relative z-10 flex flex-col items-center leading-tight">
                    {ctaMain}
                    <span className="text-xs font-normal text-white/60 line-through mt-0.5">
                      {price.original}
                    </span>
                  </span>
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <p className="text-center text-xs text-accent/80 leading-relaxed px-2">
                  {ctaSub}
                </p>
              </div>

              {/* Seat counter */}
              <CourseSeatCounter
                claimed={seats.claimed}
                total={seats.total}
                isLive
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}