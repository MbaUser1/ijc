import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

export function OpportunitiesHero() {
  return (
    // <section className="relative overflow-hidden">
      <section className=" bg-[#0B1720] px-12 pb-16 pt-36 sm:px-14 sm:pb-24 lg:px-14 lg:pb-24 lg:pt-40">
      <div className="absolute right-[-100px] top-[-130px] h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute right-[-25px] top-[-55px] h-64 w-64 rounded-full border border-[#FFC000]/15" />

      <div className="absolute bottom-[-130px] left-[-90px] h-72 w-72 rounded-full bg-[#044E83]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#FFC000]">
              <BriefcaseBusiness size={16} />
              Opportunités
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Les opportunités à{" "}
              <span className="text-[#FFC000]">saisir.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Formations, appels à projets, concours, stages, emplois et
              bourses : découvrez les opportunités qui peuvent vous aider à
              faire avancer votre parcours.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#opportunites"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B1720]"
              >
                Explorer les opportunités
                <ArrowDown size={17} />
              </Link>

              <Link
                href="#categories"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white"
              >
                Parcourir par catégorie
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative w-[300px]">
              <div className="absolute -right-5 -top-5 h-20 w-20 rounded-2xl border border-[#FFC000]/30" />

              <div className="relative rounded-[28px] bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    À saisir
                  </span>

                  <Sparkles size={18} className="text-[#FFC000]" />
                </div>

                <div className="mt-12">
                  <div className="text-5xl font-semibold tracking-tight text-[#044E83]">
                    05
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    catégories d'opportunités à explorer.
                  </p>
                </div>

                <div className="mt-8 flex gap-1">
                  <span className="h-1.5 flex-1 rounded-full bg-[#044E83]" />
                  <span className="h-1.5 flex-1 rounded-full bg-[#1C9B35]" />
                  <span className="h-1.5 flex-1 rounded-full bg-[#FFC000]" />
                  <span className="h-1.5 flex-1 rounded-full bg-[#DE0609]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}