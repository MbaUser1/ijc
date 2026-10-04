import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Lightbulb,
  SearchCheck,
  Send,
  Users,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Projet entrepreneurial",
    category: "Entrepreneuriat",
    location: "Cameroun",
    description:
      "Projet de création et de développement d'une activité portée par de jeunes entrepreneurs.",
    status: "Projet accompagné",
    image: "/images/projects/project-01.jpg",
    accent: "#044E83",
  },
  {
    number: "02",
    title: "Initiative de formation",
    category: "Formation & compétences",
    location: "Cameroun",
    description:
      "Initiative visant à renforcer les compétences pratiques et professionnelles des jeunes.",
    status: "Projet accompagné",
    image: "/images/projects/project-02.jpg",
    accent: "#1C9B35",
  },
  {
    number: "03",
    title: "Initiative citoyenne",
    category: "Citoyenneté & engagement",
    location: "Cameroun",
    description:
      "Projet porté par des jeunes autour de l'engagement citoyen et de la mobilisation communautaire.",
    status: "Projet accompagné",
    image: "/images/projects/project-03.jpg",
    accent: "#DE0609",
  },
];

const steps = [
  {
    number: "01",
    title: "Soumettre son projet",
    description:
      "Le porteur présente son idée, ses objectifs et les besoins identifiés.",
    icon: Send,
  },
  {
    number: "02",
    title: "Évaluer & échanger",
    description:
      "Nous échangeons avec le porteur afin de comprendre le projet et son contexte.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Définir l'accompagnement",
    description:
      "Les besoins sont identifiés afin de définir les formes d'accompagnement adaptées.",
    icon: Users,
  },
  {
    number: "04",
    title: "Mettre en œuvre & suivre",
    description:
      "Le projet avance avec un accompagnement et un suivi adaptés à ses objectifs.",
    icon: CheckCircle2,
  },
];

export function ProjectsContent() {
  return (
    <>
      {/* Projets accompagnés */}
      <section id="projets-accompagnes" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-18 lg:py-28">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-[#044E83]">
                Nos réalisations
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Des projets portés par la jeunesse
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
                Chaque projet raconte une idée, une ambition et une volonté
                d'agir. Découvrez quelques initiatives présentées dans notre
                espace projets.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#64748B]">
              <BriefcaseBusiness size={17} />
              <span>Projets accompagnés</span>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#334155]">
                    {project.status}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.16em]"
                      style={{ color: project.accent }}
                    >
                      {project.category}
                    </span>

                    <span className="text-sm font-medium text-[#94A3B8]">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-[#0B1720]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#F1F5F9] pt-4">
                    <span className="text-sm text-[#64748B]">
                      {project.location}
                    </span>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#044E83]"
                    >
                      Voir le projet
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#tous-les-projets"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#044E83]"
            >
              Voir tous les projets
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tous les projets */}
      <section id="tous-les-projets" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#1C9B35]">
              Explorer
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
              Des projets dans plusieurs domaines
            </h2>

            <p className="mt-4 text-base leading-7 text-[#64748B]">
              L'accompagnement peut concerner différents domaines selon les
              besoins, les objectifs et le potentiel de chaque initiative.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Entrepreneuriat", "01", "#044E83"],
              ["Formation", "02", "#1C9B35"],
              ["Citoyenneté", "03", "#DE0609"],
              ["Insertion", "04", "#FFC000"],
            ].map(([title, number, color]) => (
              <Link
                key={title}
                href="#projets-accompagnes"
                className="rounded-2xl border border-[#E2E8F0] bg-white p-6"
              >
                <span className="text-sm font-semibold" style={{ color }}>
                  {number}
                </span>

                <h3 className="mt-8 text-lg font-semibold text-[#0B1720]">
                  {title}
                </h3>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#64748B]">
                  Explorer
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold text-[#044E83]">
                Notre approche
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                De l'idée à la mise en œuvre
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#64748B]">
                Un projet peut avoir besoin d'écoute, de structuration, de
                compétences ou de mise en réseau. Notre approche s'adapte à la
                réalité de chaque initiative.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7D6]">
                  <Lightbulb size={20} className="text-[#B88A00]" />
                </div>

                <span className="text-sm font-medium text-[#334155]">
                  Faire émerger des initiatives utiles et durables.
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-[#E2E8F0] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#044E83]">
                        <Icon size={19} />
                      </div>

                      <span className="text-sm font-semibold text-[#CBD5E1]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[#0B1720]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Soumettre */}
      <section id="soumettre" className="bg-[#044E83]">
        <div className="mx-auto max-w-[1280px] px-12 py-16 sm:px-14 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-[#FFC000]">
                Vous avez une idée ?
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Votre projet peut être le prochain à passer à l'action.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                Présentez-nous votre initiative et expliquez-nous ce dont vous
                avez besoin pour la faire avancer.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#044E83]"
            >
              Soumettre un projet
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
