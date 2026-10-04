export function GalleryHero() {
  return (
    <section className="bg-[#F8FAFC] px-12 pb-16 pt-36 sm:px-14 sm:pb-24 lg:px-14 lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-12 rounded-full bg-[#044E83]" />
            <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
            <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#044E83]">
            Galerie
          </p>

          <h1 className="mt-4 font-[var(--font-sora)] text-4xl font-semibold leading-[1.1] tracking-tight text-[#0B1720] sm:text-5xl lg:text-6xl">
            Les moments qui racontent{" "}
            <span className="text-[#044E83]">notre engagement.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
            Découvrez en images les rencontres, formations, initiatives et
            temps forts qui font vivre Impact Jeune Cameroun.
          </p>
        </div>
      </div>
    </section>
  );
}