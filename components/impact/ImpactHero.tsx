export function ImpactHero() {
  return (
    <section className="bg-[#0B1720] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-12 rounded-full bg-[#FFC000]" />
            <span className="text-sm font-medium uppercase tracking-[0.16em] text-white/65">
              Notre impact
            </span>
          </div>

          <h1 className="max-w-3xl font-[var(--font-sora)] text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Transformer les idées en{" "}
            <span className="text-[#FFC000]">impact concret.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            L’impact d’Impact Jeune Cameroun se mesure dans les compétences
            développées, les initiatives qui émergent et les parcours qui
            évoluent.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#impact-en-action"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B1720]"
            >
              Découvrir notre impact
            </a>

            <a
              href="#notre-approche"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              Notre approche
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}