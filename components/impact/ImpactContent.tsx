import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";

const impactAreas = [
  {
    number: "01",
    title: "Jeunesse",
    text: "Créer des espaces où les jeunes peuvent apprendre, prendre des initiatives et participer pleinement à la vie de leur communauté.",
    icon: Users,
    color: "#044E83",
  },
  {
    number: "02",
    title: "Compétences",
    text: "Favoriser l’acquisition de compétences utiles pour les études, l’emploi, l’entrepreneuriat et la vie professionnelle.",
    icon: GraduationCap,
    color: "#1C9B35",
  },
  {
    number: "03",
    title: "Initiatives",
    text: "Encourager les idées et accompagner leur transformation en projets structurés et en actions concrètes.",
    icon: Lightbulb,
    color: "#FFC000",
  },
  {
    number: "04",
    title: "Insertion",
    text: "Contribuer à créer des passerelles entre les jeunes, les opportunités, les organisations et le monde professionnel.",
    icon: BriefcaseBusiness,
    color: "#DE0609",
  },
];

const indicators = [
  {
    label: "Jeunes accompagnés",
    value: "À renseigner",
  },
  {
    label: "Projets soutenus",
    value: "À renseigner",
  },
  {
    label: "Formations réalisées",
    value: "À renseigner",
  },
  {
    label: "Initiatives mises en œuvre",
    value: "À renseigner",
  },
];

export function ImpactContent() {
  return (
    <div>
      {/* Repères */}
      <section
        id="impact-en-action"
        className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#044E83]">
              Des repères pour mesurer
            </span>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
              Notre impact en quelques indicateurs.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#64748B]">
              Les indicateurs présentés ici seront alimentés à partir des
              données réelles des activités et projets d’IJC.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-2 lg:grid-cols-4">
            {indicators.map((indicator) => (
              <div key={indicator.label} className="bg-white p-7 sm:p-8">
                <p className="text-3xl font-semibold tracking-tight text-[#044E83]">
                  {indicator.value}
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-[#334155]">
                  {indicator.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'impact */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1C9B35]">
                Là où nous agissons
              </span>

              <h2 className="mt-4 max-w-lg font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight text-[#0B1720] sm:text-4xl">
                Un impact qui se construit sur plusieurs dimensions.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#64748B]">
                L’accompagnement de la jeunesse ne se résume pas à une seule
                action. Il repose sur un ensemble de leviers complémentaires.
              </p>
            </div>

            <div className="divide-y divide-[#E2E8F0] rounded-2xl border border-[#E2E8F0] bg-white">
              {impactAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.number}
                    className="grid gap-6 p-6 sm:grid-cols-[56px_1fr_auto] sm:items-start sm:p-8"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${area.color}12`,
                        color: area.color,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-[0.12em] text-[#94A3B8]">
                          {area.number}
                        </span>

                        <h3 className="font-[var(--font-sora)] text-lg font-semibold text-[#0B1720]">
                          {area.title}
                        </h3>
                      </div>

                      <p className="max-w-xl text-sm leading-7 text-[#64748B]">
                        {area.text}
                      </p>
                    </div>

                    <div
                      className="hidden h-9 w-9 items-center justify-center rounded-full sm:flex"
                      style={{
                        backgroundColor: `${area.color}12`,
                        color: area.color,
                      }}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Histoires d'impact */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#DE0609]">
                Histoires d’impact
              </span>

              <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Derrière chaque résultat, il y a un parcours.
              </h2>

              <p className="mt-5 text-base leading-8 text-[#64748B]">
                Les chiffres permettent de mesurer une évolution. Les
                témoignages permettent de comprendre ce qu’elle représente
                réellement.
              </p>
            </div>

            <a
              href="/actualites"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#044E83]"
            >
              Voir nos actualités
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                image: "/images/impact/impact-01.jpg",
                category: "Parcours",
                title: "Une idée qui prend forme",
              },
              {
                image: "/images/impact/impact-02.jpg",
                category: "Compétences",
                title: "Apprendre pour mieux agir",
              },
              {
                image: "/images/impact/impact-03.jpg",
                category: "Initiative",
                title: "Des jeunes qui passent à l’action",
              },
            ].map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={story.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                    {story.category}
                  </span>

                  <h3 className="mt-3 font-[var(--font-sora)] text-lg font-semibold leading-7 text-[#0B1720]">
                    {story.title}
                  </h3>

                  <a
                    href="/actualites"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#044E83]"
                  >
                    Lire l’histoire
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section
        id="notre-approche"
        className="bg-[#0B1720] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <BarChart3 size={23} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#FFC000]">
                Notre méthode
              </span>

              <h2 className="mt-4 max-w-xl font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Mesurer pour mieux comprendre, apprendre et progresser.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                Le suivi de l’impact doit permettre d’identifier ce qui
                fonctionne, les besoins qui persistent et les améliorations à
                apporter aux actions futures.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Définir",
                  "Identifier les objectifs et les résultats attendus.",
                ],
                [
                  "02",
                  "Suivre",
                  "Documenter les activités et les parcours accompagnés.",
                ],
                [
                  "03",
                  "Évaluer",
                  "Analyser les résultats obtenus et les enseignements.",
                ],
                [
                  "04",
                  "Améliorer",
                  "Utiliser les enseignements pour renforcer nos actions.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#FFC000]">
                    {number}
                  </span>

                  <h3 className="mt-4 font-[var(--font-sora)] text-lg font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1000px] overflow-hidden rounded-3xl bg-[#044E83] px-6 py-14 text-center text-white sm:px-10 lg:px-16 lg:py-16">
          <h2 className="mx-auto max-w-2xl font-[var(--font-sora)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Vous souhaitez contribuer à cet impact ?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/70">
            Rejoignez la dynamique d’Impact Jeune Cameroun ou proposez une
            initiative qui mérite d’être accompagnée.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/rejoindre"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#044E83]"
            >
              Rejoindre IJC
            </a>

            <a
              href="/projets"
              className="rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white"
            >
              Présenter un projet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}