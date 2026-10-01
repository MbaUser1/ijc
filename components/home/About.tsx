import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section
      id="a-propos"
      className=" bg-[#F8FAFC] px-12 pt-16 pb-20 sm:px-14 sm:pt-20 lg:px-8 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
            À propos d'IJC
          </p>

          <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
            Chaque jeune, une force pour le progrès
          </h2>

          <p className="mx-auto mt-5  text-sm leading-7 text-slate-600 sm:text-base">
           Nous sommes une association d'accompagnement dédiée au
                développement des compétences et à l'insertion socio-économique
                des jeunes,à travers des actions concrètes et orientées
                résultats.
          </p>
        </div>

        {/* Composition */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/about-ijc.jpg"
                alt="Jeunes engagés dans une activité d'Impact Jeune Cameroun"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>

            {/* Petit accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-12 w-12 rounded-lg bg-[#FFC000]"
            />
          </div>

          {/* Texte */}
          <div className="max-w-xl">
            <p className="font-[var(--font-sora)] text-xl font-bold leading-snug text-[#0B1720] sm:text-2xl">
              Créer des opportunités. Développer les talents. Encourager
              l'engagement.
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                 Nous œuvrons à créer un environnement dans lequel les jeunes peuvent
            développer leurs compétences, porter leurs idées et participer
            activement au développement de leur communauté.
                {/* Nous accompagnons les jeunes dans leur parcours personnel et
                professionnel à travers la formation, l'accompagnement de
                projets, l'entrepreneuriat et l'engagement citoyen. */}
              </p>

              <p>
                Notre ambition est de contribuer à l'émergence d'une jeunesse
                autonome, compétente et capable de transformer ses idées en
                initiatives concrètes.
              </p>
            </div>

            <a
              href="a-propos"
              className="group mt-8 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
            >
              En savoir plus sur IJC
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Informations
            <div className="mt-10 grid grid-cols-3 border-t border-slate-100 pt-7">
              <div className="pr-4">
                <p className="font-[var(--font-sora)] text-sm font-bold text-[#044E83]">
                  Jeunesse
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Au centre de nos actions
                </p>
              </div>

              <div className="border-l border-slate-100 px-4">
                <p className="font-[var(--font-sora)] text-sm font-bold text-[#044E83]">
                  Compétences
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Apprendre et progresser
                </p>
              </div>

              <div className="border-l border-slate-100 pl-4">
                <p className="font-[var(--font-sora)] text-sm font-bold text-[#044E83]">
                  Impact
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Passer aux actions
                </p>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
