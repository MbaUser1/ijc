import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JoinHero } from "@/components/join/JoinHero";
import { JoinContent } from "@/components/join/JoinContent";

export const metadata: Metadata = {
  title: "Rejoindre IJC",
  description:
    "Rejoignez Impact Jeune Cameroun, participez aux activités, engagez-vous ou proposez votre initiative.",
};

export default function RejoindrePage() {
  return (
    <>
      <Header />

      <main>
        <JoinHero />
        <JoinContent />
      </main>

      <Footer />
    </>
  );
}