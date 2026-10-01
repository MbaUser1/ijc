import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsContent } from "@/components/projects/ProjectsContent";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez les projets accompagnés par Impact Jeune Cameroun et les possibilités d'accompagnement pour les porteurs de projets.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        <ProjectsHero />
        <ProjectsContent />
      </main>

      <Footer />
    </>
  );
}