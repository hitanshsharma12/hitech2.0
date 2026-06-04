"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Sparkles,
  Clock3,
} from "lucide-react";

const courses = [
  {
    title: "Freelancing with AI",
    description:
      "Learn AI freelancing, automation systems & smart client hunting.",
    price: "₹999",
    oldPrice: "₹2,999",
    discount: "67% OFF",
    duration: "4 Weeks",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    slug: "freelancing-with-ai",
  },

  {
    title: "Web Dev + AI Automation",
    description:
      "Build modern websites using Next.js, Tailwind & AI automation.",
    price: "₹1499",
    oldPrice: "₹4,999",
    discount: "70% OFF",
    duration: "8 Weeks",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    slug: "web-dev-ai-automation",
  },

];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative py-20 md:py-28 overflow-hidden bg-card/30"
    >
      {/* Background */}
      <div className="absolute inset-0">
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            Hi-Tech Premium Courses
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-foreground">Featured</span>{" "}
            <span className="gradient-text-accent">Cohorts</span>
          </h2>

          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Learn high-income digital skills, AI systems & modern web
            development from real projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group relative glass rounded-3xl overflow-hidden hover-glow border border-white/10"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  quality={90}
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 glass-light rounded-full text-xs font-medium text-foreground">
                  Premium Course
                </div>

                {/* Discount */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/20 text-green-400 text-xs font-semibold backdrop-blur-md">
                  {course.discount}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}

                    <span className="text-xs text-white/70 ml-1">
                      5.0 Rating
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-tight">
                    {course.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {course.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock3 className="w-4 h-4 text-accent" />
                  {course.duration}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-3xl font-bold gradient-text-accent">
                      {course.price}
                    </span>

                    <span className="text-sm line-through text-muted-foreground">
                      {course.oldPrice}
                    </span>
                  </div>
                </div>

                {/* Currency */}
                <select className="w-full mt-5 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:border-accent transition-all">
                  <option>INR</option>
                
                </select>

                {/* Button */}
                <Link href="/courses">
                  <button className="w-full mt-5 group/button relative overflow-hidden rounded-2xl bg-foreground text-background py-3.5 font-semibold transition-all duration-300 hover:scale-[1.02]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Course

                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}