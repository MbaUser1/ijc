import {
  ArrowUpRight,
  BriefcaseBusiness,
  Lightbulb,
  Users,
  GraduationCap,
  HandHeart,
} from "lucide-react";

const actions = [
  {
    id: "entrepreneuriat",
    number: "01",
    title: "Entrepreneuriat",
    intro:
      "Encourager les jeunes à entreprendre et les accompagner dans la transformation de leurs idées en initiatives concrètes.",
    description:
      "Nous contribuons à créer un environnement favorable à l'initiative entrepreneuriale. L'accompagnement peut notamment porter sur la structuration d'une idée, la réflexion autour du modèle de projet, la recherche de ressources et la mise en relation avec des acteurs pertinents.",
    icon: Lightbulb,
    color: "#044E83",
    points: [
      "Sensibilisation à l'entrepreneuriat",
      "Accompagnement des porteurs d'idées",
      "Structuration des projets",
      "Mise en relation avec des ressources et partenaires",
    ],
  },
  {
    id: "formation",
    number: "02",
    title: "Formation & compétences",
    intro:
      "Développer les compétences dont les jeunes ont besoin pour mieux construire leur parcours personnel et professionnel.",
    description:
      "Les formations permettent aux participants d'acquérir ou de renforcer des compétences pratiques. Elles peuvent concerner les compétences numériques, professionnelles, entrepreneuriales ou encore les compétences transversales.",
    icon: GraduationCap,
    color: "#1C9B35",
    points: [
      "Formations pratiques",
      "Compétences numériques",
      "Compétences professionnelles",
      "Développement des compétences transversales",
    ],
  },
  {
    id: "leadership",
    number: "03",
    title: "Leadership & développement personnel",
    intro:
      "Favoriser la confiance en soi, l'esprit d'initiative et la capacité des jeunes à prendre des responsabilités.",
    description:
      "Le développement personnel et le leadership constituent des leviers importants pour permettre aux jeunes de mieux identifier leurs capacités, prendre des initiatives et contribuer positivement à leur environnement.",
    icon: Users,
    color: "#FFC000",
    points: [
      "Leadership des jeunes",
      "Confiance en soi",
      "Prise d'initiative",
      "Développement personnel",
    ],
  },
  {
    id: "citoyennete",
    number: "04",
    title: "Citoyenneté & engagement",
    intro:
      "Encourager une participation active des jeunes dans la vie de leur communauté et dans les initiatives d'intérêt collectif.",
    description:
      "Nous encourageons les jeunes à comprendre leur rôle dans la société et à participer à des actions qui contribuent au bien-être collectif, au dialogue et au développement de leurs communautés.",
    icon: HandHeart,
    color: "#DE0609",
    points: [
      "Engagement communautaire",
      "Initiatives citoyennes",
      "Participation des jeunes",
      "Actions d'intérêt collectif",
    ],
  },
  {
    id: "insertion",
    number: "05",
    title: "Insertion socio-économique",
    intro:
      "Créer des passerelles vers les opportunités professionnelles et favoriser l'autonomisation économique des jeunes.",
    description:
      "Nous cherchons à rapprocher les jeunes des opportunités qui peuvent contribuer à leur insertion professionnelle et à leur autonomie économique, notamment à travers l'information, l'orientation, les compétences et la mise en relation.",
    icon: BriefcaseBusiness,
    color: "#044E83",
    points: [
      "Orientation professionnelle",
      "Accès aux opportunités",
      "Mise en relation",
      "Autonomisation économique",
    ],
  },
];

export function ActionsContent() {
  return (
    <>
      {/* Introduction */}
      <section
        id="domaines"
        className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Nos domaines d'intervention
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
              Des actions pensées autour des réalités des jeunes.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Chaque domaine répond à un besoin spécifique, tout en restant
              connecté aux autres dimensions du parcours d'un jeune.
            </p>
          </div>
        </div>
      </section>

      {/* Domaines */}
      <section className="bg-white px-5 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {actions.map((action) => {
              const Icon = action.icon;

              return (
                <article
                  key={action.id}
                  id={action.id}
                  className="grid gap-8 py-12 lg:grid-cols-[90px_0.9fr_1.1fr] lg:gap-12 lg:py-16"
                >
                  {/* Numéro */}
                  <div>
                    <span
                      className="font-[var(--font-sora)] text-sm font-bold"
                      style={{ color: action.color }}
                    >
                      {action.number}
                    </span>
                  </div>

                  {/* Titre */}
                  <div>
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${action.color}12`,
                        color: action.color,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h2 className="mt-5 max-w-md font-[var(--font-sora)] text-2xl font-semibold leading-tight tracking-tight text-[#0B1720] sm:text-3xl">
                      {action.title}
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
                      {action.intro}
                    </p>
                  </div>

                  {/* Contenu */}
                  <div className="max-w-xl">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {action.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {action.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-lg bg-[#F8FAFC] px-4 py-3"
                        >
                          <span
                            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: action.color }}
                          />

                          <span className="text-sm leading-5 text-slate-600">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`/actions#${action.id}`}
                      className="group mt-7 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
                    >
                      En savoir plus
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="max-w-md">
              <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
                Notre approche
              </p>

              <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
                Passer de l'idée à l'action.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Nos actions ne se limitent pas à transmettre de
                l'information. Nous cherchons à créer des conditions
                permettant aux jeunes de comprendre, d'apprendre, d'expérimenter
                et de mettre leurs compétences au service de leurs projets et
                de leur communauté.
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Selon les besoins, cela peut passer par une formation, un
                accompagnement, une mise en relation, une opportunité ou une
                participation à une initiative collective.
              </p>

              <a
                href="/projets"
                className="group mt-7 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
              >
                Découvrir l'accompagnement des projets
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
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
                <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.15em] text-[#FFC000]">
                  Votre initiative
                </p>

                <h2 className="mt-3 font-[var(--font-sora)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Vous avez un projet à développer ?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                  Découvrez comment présenter votre initiative et bénéficier
                  d'un accompagnement adapté.
                </p>
              </div>

              <a
                href="/projets#soumettre"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 font-[var(--font-sora)] text-sm font-semibold text-[#044E83] hover:bg-slate-100"
              >
                Soumettre un projet
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}