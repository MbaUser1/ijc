import { ArrowRight } from "lucide-react";

const stats = [
  {
    value: "01",
    label: "Jeunesse",
    text: "Une génération au cœur de notre engagement.",
    color: "#044E83",
  },
  {
    value: "02",
    label: "Compétences",
    text: "Des savoir-faire pour mieux construire son avenir.",
    color: "#1C9B35",
  },
  {
    value: "03",
    label: "Initiatives",
    text: "Des idées transformées en projets concrets.",
    color: "#FFC000",
  },
  {
    value: "04",
    label: "Impact",
    text: "Des actions pensées pour produire des changements durables.",
    color: "#DE0609",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Notre impact
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
              Faire plus que parler de changement.
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#044E83]" />
              <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
              <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
              <span className="h-1 w-5 rounded-full bg-[#DE0609]" />
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500 lg:justify-self-end">
            L'impact d'IJC se construit à travers les personnes que nous
            accompagnons, les compétences développées et les initiatives qui
            prennent vie.
          </p>
        </div>

        {/* Indicateurs */}
        <div className="mt-14 grid border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="relative border-b border-slate-200 py-8 sm:px-7 sm:py-9 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              {/* Accent couleur */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-10 rounded-full"
                style={{ backgroundColor: stat.color }}
              />

              <p
                className="font-[var(--font-sora)] text-3xl font-bold tracking-tight"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>

              <h3 className="mt-5 font-[var(--font-sora)] text-base font-semibold text-[#0B1720]">
                {stat.label}
              </h3>

              <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-500">
                {stat.text}
              </p>
            </article>
          ))}
        </div>

        {/* Lien */}
        <div className="mt-5">
          <a
            href="#projets-realises"
            className="group inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
          >
            Découvrir nos réalisations
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
