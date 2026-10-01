import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OpportunitiesHero } from "@/components/opportunities/OpportunitiesHero";
import { OpportunitiesContent } from "@/components/opportunities/OpportunitiesContent";

export const metadata: Metadata = {
  title: "Opportunités",
  description:
    "Découvrez les formations, appels à projets, concours, stages, emplois et autres opportunités proposés à la jeunesse.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <Header />

      <main>
        <OpportunitiesHero />
        <OpportunitiesContent />
      </main>

      <Footer />
    </>
  );
}