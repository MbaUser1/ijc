import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Impact Jeune Cameroun, sa mission, sa vision, ses valeurs, ses objectifs et son équipe.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <AboutHero />
        <AboutContent />
      </main>

      <Footer />
    </>
  );
}