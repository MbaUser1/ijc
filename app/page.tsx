import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Actions } from "@/components/home/Actions";
import { Projects } from "@/components/home/Projects";
import { Events } from "@/components/home/Events";
import { Opportunities } from "@/components/home/Opportunities";
import { Impact } from "@/components/home/Impact";
import { Testimonials } from "@/components/home/Testimonials";
import { News } from "@/components/home/News";
import { Gallery } from "@/components/home/Gallery";
import { Partners } from "@/components/home/Partners";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Actions />
      <Projects />
      {/* <Events /> */}
      <Opportunities />
      <Impact />
      {/* <Testimonials /> */}
      {/* <News /> */}
      {/* <Gallery /> */}
      <Partners />
      <FinalCTA />
      {/* <Contact /> */}

      <Footer />
    </main>
  );
}
