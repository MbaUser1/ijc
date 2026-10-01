import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryContent } from "@/components/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez en images les activités, formations, rencontres et initiatives d'Impact Jeune Cameroun.",
};

export default function GaleriePage() {
  return (
    <>
      <Header />

      <main>
        <GalleryHero />
        <GalleryContent />
      </main>

      <Footer />
    </>
  );
}