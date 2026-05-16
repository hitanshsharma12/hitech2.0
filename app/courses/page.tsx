"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Star,
  User,
  BookOpen,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";

const courses = [
  {
    title: "Freelancing with AI",
    description:
      "Learn AI freelancing, smart automation systems & high-paying client acquisition.",
    price: "₹999",
    oldPrice: "₹2,999",
    lessons: "42 Lessons",
    students: "1.2k+ Students",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    slug: "freelancing-with-ai",
  },

  {
    title: "Web Dev + AI Automation",
    description:
      "Build premium modern websites using Next.js, Tailwind & AI workflows.",
    price: "₹1499",
    oldPrice: "₹4,999",
    lessons: "65 Lessons",
    students: "2k+ Students",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    slug: "web-dev-ai-automation",
  },

  {
    title: "Marketing & Empire Building",
    description:
      "Master branding, growth systems & social media domination strategies.",
    price: "₹1499",
    oldPrice: "₹5,999",
    lessons: "50 Lessons",
    students: "900+ Students",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    slug: "marketing-empire-building",
  },
];

export default function CoursesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

      {/* Grid */}
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

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">Hi-Tech</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Academy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <Link
              href="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="text-blue-400"
            >
              Courses
            </Link>

            <Link
              href="/"
              className="hover:text-white transition"
            >
              Community
            </Link>

            <Link
              href="/"
              className="hover:text-white transition"
            >
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.08]">
                <span className="relative z-10 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Login
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-4 sm:px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/70 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Premium Learning Experience
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Upgrade Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Digital Skills
              </span>
            </h1>

            <p className="text-white/60 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
              Learn AI automation, web development &
              high-income digital skills through premium
              real-world cohorts built for creators &
              entrepreneurs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                "5k+ Students",
                "20+ Cohorts",
                "4.9 Rating",
                "Lifetime Access",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-white/10 bg-white/[0.03] rounded-2xl p-5 backdrop-blur-xl"
                >
                  <p className="text-lg font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <main className="relative z-10 px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-blue-400/20 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6 p-5">
                  {/* Image */}
                  <div className="relative w-full lg:w-[420px] h-[260px] rounded-3xl overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/20 text-blue-300 text-xs font-semibold backdrop-blur-md">
                      Premium Cohort
                    </div>

                    {/* Lessons */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs">
                        <BookOpen className="w-3 h-3 text-blue-400" />
                        {course.lessons}
                      </div>

                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-xs">
                        <PlayCircle className="w-3 h-3 text-cyan-300" />
                        Lifetime Access
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-2 text-sm text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}

                        <span className="text-white/70 ml-1">
                          4.9 Rating
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                        {course.title}
                      </h2>

                      {/* Description */}
                      <p className="text-white/60 mt-5 leading-relaxed text-base max-w-2xl">
                        {course.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mt-6">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm">
                          <ShieldCheck className="w-4 h-4 text-green-400" />
                          Certificate Included
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm">
                          <Sparkles className="w-4 h-4 text-blue-400" />
                          AI Powered Learning
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-4 flex-wrap mt-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                          {course.price}
                        </span>

                        <span className="text-xl line-through text-white/30">
                          {course.oldPrice}
                        </span>

                        <span className="rounded-full border border-green-400/20 bg-green-500/15 px-3 py-1 text-sm font-medium text-green-400">
                          70% OFF
                        </span>
                      </div>

                      {/* Students */}
                      <p className="mt-4 text-sm text-white/50">
                        {course.students} already enrolled
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <Link href={`/courses/${course.slug}`}>
                        <button className="group/button relative overflow-hidden rounded-2xl bg-white text-black px-8 py-4 font-semibold transition-all duration-300 hover:scale-[1.02]">
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Buy Course

                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </span>

                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                        </button>
                      </Link>

                      <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-medium text-white/80 hover:bg-white/[0.06] transition">
                        Watch Preview
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}