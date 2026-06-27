import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

import CoursesSection from "@/components/courses/CoursesSection";
import CourseEnrollSection from "@/components/courses/CourseEnrollSection";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
     <CoursesSection />
<CourseEnrollSection />
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
