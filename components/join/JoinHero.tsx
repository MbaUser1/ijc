export function JoinHero() {
  return (
    <section className="bg-[#044E83] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#FFC000]" />
              <span className="h-1 w-5 rounded-full bg-[#DE0609]" />
              <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              Rejoindre IJC
            </p>

            <h1 className="mt-4 max-w-3xl font-[var(--font-sora)] text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Votre énergie peut devenir{" "}
              <span className="text-[#FFC000]">une force d’impact.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Rejoignez une dynamique de jeunes qui apprennent, entreprennent,
              s’engagent et construisent des solutions pour leur communauté.
            </p>

            <a
              href="#formulaire"
              className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#044E83]"
            >
              Je souhaite rejoindre IJC
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white/10">
              <img
                src="/images/join/join-hero.jpg"
                alt="Jeunes engagés dans une activité"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 text-[#0B1720] shadow-xl sm:-left-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                Ensemble
              </p>
              <p className="mt-1 font-[var(--font-sora)] text-lg font-semibold">
                Construisons l’impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}