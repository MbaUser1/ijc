import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export function ProjectsHero() {
  return (
    <section className="bg-[#F8FAFC] px-12 pb-16 pt-36 sm:px-14 sm:pb-24 lg:px-14 lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-12 rounded-full bg-[#044E83]" />
            <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
            <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
          </div>
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
            Projets accompagnés
          </p>
          <h1 className="mt-5 font-[var(--font-sora)] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0B1720] sm:text-5xl lg:text-6xl">
            Des idées qui deviennent des{" "}
            <span className="text-[#044E83]">initiatives concrètes.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Découvrez les projets portés par des jeunes et accompagnés par
            Impact Jeune Cameroun pour transformer leurs idées en actions utiles
            et durables.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projets-accompagnes"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#044E83] px-5 py-3 text-sm font-semibold text-white"
            >
              Découvrir les projets
              <ArrowDown size={17} />
            </Link>

            <Link
              href="#soumettre"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#334155]"
            >
              Soumettre un projet
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
