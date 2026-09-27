import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Lightbulb,
  Trophy,
} from "lucide-react";

const opportunities = [
  {
    icon: GraduationCap,
    category: "Formations",
    title: "Développez de nouvelles compétences",
    text: "Découvrez des formations et programmes pour renforcer vos compétences.",
  },
  {
    icon: Lightbulb,
    category: "Appels à projets",
    title: "Donnez vie à vos idées",
    text: "Repérez les programmes ouverts aux jeunes porteurs d'initiatives.",
  },
  {
    icon: Trophy,
    category: "Concours & challenges",
    title: "Mettez votre talent en avant",
    text: "Participez à des concours et challenges dédiés à la jeunesse.",
  },
  {
    icon: BriefcaseBusiness,
    category: "Stages & emplois",
    title: "Trouvez votre prochaine opportunité",
    text: "Accédez à des opportunités professionnelles adaptées à votre parcours.",
  },
];

export function Opportunities() {
  return (
    <section
      id="opportunites"
      className="bg-white px-5 py-18 sm:px-6 lg:px-8 lg:py-22"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
            Opportunités
          </p>

          <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
            Les bonnes opportunités peuvent changer un parcours.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Formations, concours, appels à projets, stages ou emplois :
            retrouvez des opportunités destinées aux jeunes.
          </p>
        </div>

        {/* Liste */}
        <div className="mx-auto mt-14 max-w-4xl border-t border-slate-200">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;

            return (
              <a
                key={opportunity.category}
                href="#opportunite"
                className="group flex gap-5 border-b border-slate-200 py-7 sm:items-center sm:gap-7"
              >
                {/* Icône */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-[#044E83] transition-colors group-hover:bg-[#044E83] group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Contenu */}
                <div className="min-w-0 flex-1">
                  <p className="font-[var(--font-sora)] text-[10px] font-bold uppercase tracking-[0.15em] text-[#1C9B35]">
                    {opportunity.category}
                  </p>

                  <h3 className="mt-1.5 font-[var(--font-sora)] text-base font-semibold text-[#0B1720] sm:text-lg">
                    {opportunity.title}
                  </h3>

                  <p className="mt-1.5 max-w-lg text-sm leading-6 text-slate-500">
                    {opportunity.text}
                  </p>
                </div>

                {/* Flèche */}
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#044E83] transition-all group-hover:border-[#044E83] group-hover:bg-[#044E83] group-hover:text-white sm:flex">
                  <ArrowRight size={15} />
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#toutes-opportunites"
            className="group inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
          >
            Voir toutes les opportunités
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
