import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export function ProjectsHero() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-[#044E83]">
            <span className="h-2 w-2 rounded-full bg-[#FFC000]" />
            Projets accompagnés
          </span>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#0B1720] sm:text-5xl lg:text-6xl">
            Des idées qui deviennent des{" "}
            <span className="text-[#044E83]">initiatives concrètes.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Découvrez les projets portés par des jeunes et accompagnés par
            Impact Jeune Cameroun pour transformer leurs idées en actions
            utiles et durables.
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