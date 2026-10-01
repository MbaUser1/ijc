import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsContent } from "@/components/news/NewsContent";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Découvrez les actualités, histoires, initiatives et publications d'Impact Jeune Cameroun.",
};

export default function NewsPage() {
  return (
    <>
      <Header />

      <main>
        <NewsHero />
        <NewsContent />
      </main>

      <Footer />
    </>
  );
}