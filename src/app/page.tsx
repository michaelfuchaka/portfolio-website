import Hero from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";

import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
        <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />

    </div>
  );
}
