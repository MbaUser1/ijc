import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Soumettre son projet",
    text: "Présentez votre idée ou votre initiative à notre équipe.",
  },
  {
    number: "02",
    title: "Évaluation & accompagnement",
    text: "Nous étudions le projet et identifions les besoins d'accompagnement.",
  },
  {
    number: "03",
    title: "Passer à l'action",
    text: "Les initiatives retenues bénéficient d'un accompagnement adapté.",
  },
];

export function Projects() {
  return (
    <section
      id="projets"
      className=" bg-[#F8FAFC] px-12 py-18 sm:px-14 lg:px-8 lg:py-22"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
            Nos projets
          </p>

          <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
            Des idées qui méritent de devenir des actions.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            IJC accompagne les jeunes porteurs d'initiatives en leur donnant
            accès à un cadre, des ressources et un accompagnement adaptés.
          </p>
        </div>

        {/* Processus */}
        <div className="mt-14 grid border-t border-slate-200 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`py-4 md:px-8 lg:py-6 ${
                index !== 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""
              }`}
            >
              <span className="font-[var(--font-sora)] text-xs font-semibold text-[#1C9B35]">
                {project.number}
              </span>

              <h3 className="mt-5 max-w-xs font-[var(--font-sora)] text-xl font-semibold tracking-tight text-[#0B1720] sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                {project.text}
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 font-[var(--font-sora)] text-xs font-semibold text-[#044E83]"
              >
                En savoir plus
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-white px-6 py-8 sm:px-8 md:flex-row">
          <div>
            <h3 className="font-[var(--font-sora)] text-lg font-semibold text-[#0B1720]">
              Vous avez une idée à développer ?
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Présentez-nous votre projet et échangeons sur la suite.
            </p>
          </div>

          <a
            href="#soumettre-projet"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-[#044E83] px-5 font-[var(--font-sora)] text-sm font-semibold text-white transition-colors hover:bg-[#033E69]"
          >
            Soumettre un projet
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}