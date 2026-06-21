import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";
import Courses from "@/components/sections/courses";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Courses/>
      
      <About />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
