import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="rejoindre"
      className=" bg-[#F8FAFC] px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl bg-[#044E83] px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          {/* Accents */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#FFC000]"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-full bg-[#DE0609]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#FFC000]">
                Rejoindre IJC
              </p>

              <h2 className="mt-4 font-[var(--font-sora)] text-2xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
                Et si votre prochaine initiative commençait avec nous ?
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75 sm:text-base">
                Rejoignez une communauté de jeunes engagés, développez vos
                compétences et participez à des initiatives qui créent de
                l'impact.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-white px-6 font-[var(--font-sora)] text-sm font-semibold text-[#044E83] transition-colors hover:bg-slate-100 lg:self-center"
            >
              Rejoindre IJC
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
