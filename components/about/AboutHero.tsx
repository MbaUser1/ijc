import { ArrowDown, ArrowUpRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="bg-[#F8FAFC] px-5 pb-20 pt-36 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
            À propos d'IJC
          </p>

          <h1 className="mt-5 font-[var(--font-sora)] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#044E83] sm:text-5xl lg:text-6xl">
            Une jeunesse engagée pour construire l'avenir.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Impact Jeune Cameroun est une initiative engagée dans
            l'accompagnement, le développement et l'autonomisation des jeunes
            au Cameroun.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#mission"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#044E83] px-5 font-[var(--font-sora)] text-sm font-semibold text-white transition-colors hover:bg-[#033E69]"
            >
              Découvrir notre mission
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#valeurs"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-5 font-[var(--font-sora)] text-sm font-semibold text-[#044E83] transition-colors hover:bg-slate-50"
            >
              Nos valeurs
            </a>
          </div>
        </div>

        <a
          href="#qui-sommes-nous"
          className="mt-16 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-[#044E83]"
        >
          En savoir plus
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}