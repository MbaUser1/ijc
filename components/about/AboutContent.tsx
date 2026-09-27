import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Engagement",
    text: "Nous croyons en une jeunesse capable de prendre part activement à la transformation de son environnement.",
    color: "#044E83",
  },
  {
    icon: Lightbulb,
    title: "Initiative",
    text: "Nous encourageons les idées, la créativité et le passage de l'intention à l'action.",
    color: "#FFC000",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Nous favorisons les rencontres, les partenariats et l'intelligence collective.",
    color: "#1C9B35",
  },
];

const objectives = [
  "Renforcer les compétences personnelles et professionnelles des jeunes.",
  "Encourager l'entrepreneuriat et l'initiative individuelle.",
  "Faciliter l'accès aux opportunités de formation et d'insertion.",
  "Favoriser l'engagement citoyen et communautaire.",
  "Accompagner les jeunes dans la concrétisation de leurs projets.",
];

export function AboutContent() {
  return (
    <>
      {/* Qui sommes-nous ? */}
      <section
        id="qui-sommes-nous"
        className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/about-ijc.jpg"
                  alt="Jeunes engagés dans une activité d'Impact Jeune Cameroun"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 h-14 w-14 rounded-xl bg-[#FFC000]"
              />
            </div>

            <div className="max-w-xl">
              <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
                Qui sommes-nous ?
              </p>

              <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
                Mettre la jeunesse au cœur du développement.
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  Impact Jeune Cameroun œuvre à créer un environnement dans
                  lequel les jeunes peuvent développer leurs compétences,
                  porter leurs idées et participer activement au développement
                  de leur communauté.
                </p>

                <p>
                  À travers nos programmes, nos formations, l'accompagnement
                  des projets et nos initiatives communautaires, nous cherchons
                  à rapprocher les jeunes des ressources et des opportunités
                  dont ils ont besoin pour avancer.
                </p>

                <p>
                  Notre approche repose sur l'écoute, l'accompagnement et la
                  mise en relation afin de favoriser des parcours plus
                  autonomes et des initiatives porteuses d'impact.
                </p>
              </div>

              <a
                href="#mission"
                className="group mt-8 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
              >
                Découvrir notre mission
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="mission"
        className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <article>
              <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
                Notre mission
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
                Donner aux jeunes les moyens d'agir.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Notre mission est de contribuer à l'autonomisation des jeunes
                en leur permettant d'acquérir des compétences, d'accéder à des
                opportunités et de transformer leurs idées en initiatives
                concrètes.
              </p>
            </article>

            <article className="border-t border-slate-200 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#DE0609]">
                Notre vision
              </p>

              <h2 className="mt-4 max-w-xl font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0B1720] sm:text-4xl">
                Une jeunesse autonome, compétente et engagée.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Nous aspirons à contribuer à l'émergence d'une jeunesse
                capable de prendre des initiatives, de créer de la valeur et
                de participer activement au développement du Cameroun.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section
        id="valeurs"
        className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Nos valeurs
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
              Les principes qui orientent notre action.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Nos valeurs définissent notre manière de travailler avec les
              jeunes, nos partenaires et notre communauté.
            </p>
          </div>

          <div className="mt-14 grid border-t border-slate-200 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="border-b border-slate-200 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${value.color}12`,
                      color: value.color,
                    }}
                  >
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 font-[var(--font-sora)] text-xl font-semibold text-[#0B1720]">
                    {value.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section
        id="objectifs"
        className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div className="max-w-md">
              <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
                Nos objectifs
              </p>

              <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
                Transformer l'engagement en résultats concrets.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Nos objectifs traduisent notre volonté de créer des
                conditions favorables au développement personnel,
                professionnel et citoyen des jeunes.
              </p>
            </div>

            <div className="border-t border-slate-200">
              {objectives.map((objective, index) => (
                <div
                  key={objective}
                  className="flex gap-5 border-b border-slate-200 py-6"
                >
                  <span className="shrink-0 font-[var(--font-sora)] text-xs font-semibold text-[#1C9B35]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section
        id="equipe"
        className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Notre équipe
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
              Des personnes engagées au service de la jeunesse.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Une équipe mobilisée autour d'une même ambition : créer des
              opportunités et accompagner les jeunes dans leurs parcours.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <article
                key={member}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]"
              >
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={`/images/team/team-${String(member).padStart(2, "0")}.jpg`}
                    alt={`Membre de l'équipe IJC ${member}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="font-[var(--font-sora)] text-sm font-semibold text-[#044E83]">
                    Nom du membre
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Fonction / responsabilité
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-2xl bg-[#044E83] px-6 py-12 sm:px-10 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#FFC000]"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-14 w-14 rounded-tr-full bg-[#DE0609]"
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-[var(--font-sora)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Vous souhaitez participer à l'aventure IJC ?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Rejoignez notre communauté ou échangez avec notre équipe
                  autour de votre projet.
                </p>
              </div>

              <a
                href="/rejoindre"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 font-[var(--font-sora)] text-sm font-semibold text-[#044E83] hover:bg-slate-100"
              >
                Rejoindre IJC
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}