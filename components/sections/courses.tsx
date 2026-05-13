"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Brain,
  Globe,
  TrendingUp,
  Clock3,
  Star,
} from "lucide-react";

const courses = [
  {
    title: "Freelancing with AI",
    description:
      "Learn how to make money online using AI tools, client hunting, automation & smart freelancing systems.",
    price: "₹999",
    oldPrice: "₹2,999",
    discount: "67% OFF",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    level: "Beginner Friendly",
    duration: "4 Weeks",
    features: [
      "AI Client Hunting",
      "Fiverr + Upwork",
      "Automation Workflows",
      "Real Freelance Projects",
    ],
  },

  {
    title: "0 → 100 Web Development with AI Automation",
    description:
      "Master modern web development with AI. Build websites, automate tasks & create real client projects.",
    price: "₹1499",
    oldPrice: "₹4,999",
    discount: "70% OFF",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    level: "Intermediate",
    duration: "8 Weeks",
    features: [
      "Next.js + Tailwind",
      "AI Website Building",
      "Automation Systems",
      "Deploy Real Projects",
    ],
  },

  {
    title: "Marketing Strategies & Build Your Empire",
    description:
      "Grow any business using powerful marketing strategies, branding psychology & social media domination.",
    price: "₹1999",
    oldPrice: "₹5,999",
    discount: "66% OFF",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    level: "Advanced",
    duration: "6 Weeks",
    features: [
      "Instagram Growth",
      "Business Branding",
      "Sales Psychology",
      "Build Your Empire",
    ],
  },
];

export default function Courses() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Hi-Tech Premium Courses</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Skills &
            <span className="gradient-text-accent"> Create Your Empire</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Learn powerful AI skills, web development & marketing systems to
            build your income and dominate online.
          </p>
        </motion.div>

        {/* Courses */}
        <div className="space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-accent/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-[420px_1fr] gap-0">
                {/* Image */}
                <div className="relative h-[280px] lg:h-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <course.icon className="w-4 h-4 text-accent" />
                      <span className="text-sm text-white">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {course.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mt-8">
                      {course.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-3 mt-6 text-muted-foreground">
                      <Clock3 className="w-4 h-4 text-accent" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold gradient-text">
                          {course.price}
                        </span>

                        <span className="text-xl line-through text-muted-foreground">
                          {course.oldPrice}
                        </span>
                      </div>

                      <div className="inline-flex mt-3 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">
                        {course.discount}
                      </div>
                    </div>

                    <button className="group/button relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-foreground text-background font-semibold overflow-hidden transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">
                        View Course
                      </span>

                      <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/button:translate-x-1" />

                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}