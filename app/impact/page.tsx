import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ImpactHero } from "@/components/impact/ImpactHero";
import { ImpactContent } from "@/components/impact/ImpactContent";

export const metadata: Metadata = {
  title: "Notre impact",
  description:
    "Découvrez les domaines d'impact d'Impact Jeune Cameroun, ses résultats et son approche de mesure et de suivi.",
};

export default function ImpactPage() {
  return (
    <>
      <Header />

      <main>
        <ImpactHero />
        <ImpactContent />
      </main>

      <Footer />
    </>
  );
}