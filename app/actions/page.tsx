import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ActionsHero } from "@/components/actions/ActionsHero";
import { ActionsContent } from "@/components/actions/ActionsContent";

export const metadata: Metadata = {
  title: "Nos actions",
  description:
    "Découvrez les domaines d'intervention d'Impact Jeune Cameroun : entrepreneuriat, formation, leadership, citoyenneté et insertion socio-économique.",
};

export default function ActionsPage() {
  return (
    <>
      <Header />

      <main>
        <ActionsHero />
        <ActionsContent />
      </main>

      <Footer />
    </>
  );
}