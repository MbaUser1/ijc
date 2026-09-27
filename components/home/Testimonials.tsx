import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    image: "/images/testimonial-01.jpg",
    quote:
      "L'accompagnement m'a permis de mieux structurer mon idée, de croire davantage en mon projet et surtout de passer à l'action.",
    name: "Nom du bénéficiaire",
    role: "Porteur de projet",
    location: "Yaoundé",
    accent: "#FFC000",
  },
  {
    image: "/images/testimonial-02.jpg",
    quote:
      "Les échanges et les formations m'ont permis de développer de nouvelles compétences et de mieux préparer mon parcours professionnel.",
    name: "Nom du bénéficiaire",
    role: "Participant à une formation",
    location: "Douala",
    accent: "#1C9B35",
  },
  {
    image: "/images/testimonial-03.jpg",
    quote:
      "J'ai découvert des opportunités et surtout une communauté qui encourage les jeunes à prendre des initiatives.",
    name: "Nom du bénéficiaire",
    role: "Membre de la communauté",
    location: "Bafoussam",
    accent: "#DE0609",
  },
];

export function Testimonials() {
  return (
    <section
      id="temoignages"
      className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="max-w-2xl">
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
            Témoignages
          </p>

          <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
            L'impact se mesure aussi dans les parcours.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Découvrez les expériences de jeunes qui ont participé à nos
            programmes, formations ou initiatives.
          </p>
        </div>

        {/* Témoignages */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name + testimonial.role}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-200">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} — ${testimonial.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div
                  className="absolute bottom-0 left-0 h-1.5 w-16"
                  style={{ backgroundColor: testimonial.accent }}
                />
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <Quote size={24} strokeWidth={1.5} className="text-[#DE0609]" />

                <blockquote className="mt-4 flex-1 font-[var(--font-sora)] text-base font-medium leading-7 tracking-tight text-[#0B1720]">
                  « {testimonial.quote} »
                </blockquote>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="font-[var(--font-sora)] text-sm font-semibold text-[#044E83]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Indicateur / lien */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#044E83]" />
            <span className="h-1.5 w-3 rounded-full bg-[#1C9B35]" />
            <span className="h-1.5 w-3 rounded-full bg-[#FFC000]" />
            <span className="h-1.5 w-3 rounded-full bg-[#DE0609]" />
          </div>

          <a
            href="#temoignages"
            className="font-[var(--font-sora)] text-xs font-semibold text-[#044E83]"
          >
            Voir tous les témoignages
          </a>
        </div>
      </div>
    </section>
  );
}
