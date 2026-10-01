import type { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsContent } from "@/components/events/EventsContent";

export const metadata: Metadata = {
  title: "Événements",
  description:
    "Découvrez les événements, rencontres, formations et ateliers d'Impact Jeune Cameroun.",
};

export default function EventsPage() {
  return (
    <>
      <Header />

      <main>
        <EventsHero />
        <EventsContent />
      </main>

      <Footer />
    </>
  );
}