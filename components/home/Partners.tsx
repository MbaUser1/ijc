import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    name: "Partenaire 01",
    logo: "/images/partners/partner-01.png",
  },
  {
    name: "Partenaire 02",
    logo: "/images/partners/partner-02.png",
  },
  {
    name: "Partenaire 03",
    logo: "/images/partners/partner-03.png",
  },
  {
    name: "Partenaire 04",
    logo: "/images/partners/partner-04.png",
  },
  {
    name: "Partenaire 05",
    logo: "/images/partners/partner-05.png",
  },
  {
    name: "Partenaire 06",
    logo: "/images/partners/partner-06.png",
  },
];

export function Partners() {
  return (
    <section
      id="partenaires"
      className="bg-white px-12 py-16 sm:px-14 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* Texte */}
          <div className="max-w-lg">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Nos partenaires
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.02em] text-[#044E83] sm:text-4xl">
              Construire l'impact ensemble.
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#044E83]" />
              <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
              <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
              <span className="h-1 w-5 rounded-full bg-[#DE0609]" />
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Le développement de la jeunesse repose aussi sur la force des
              collaborations. IJC travaille avec des organisations, entreprises
              et acteurs engagés autour d'une même ambition.
            </p>

            <a
              href="#devenir-partenaire"
              className="group mt-7 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
            >
              Devenir partenaire
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`flex min-h-[110px] items-center justify-center border-b border-r border-slate-200 bg-white px-5 py-6 ${
                  index === 0 ? "border-t-0" : ""
                }`}
              >
                <div className="text-center">
                  {/* 
                    Remplacer ce bloc par <Image /> lorsque les vrais
                    logos des partenaires seront disponibles.
                  */}
                  <span className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ligne d'accent 
        <div className="mt-16 flex items-center gap-3">
          <span className="h-1 w-12 rounded-full bg-[#044E83]" />
          <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
          <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
          <span className="h-1 w-5 rounded-full bg-[#DE0609]" />
        </div>*/}
      </div>
    </section>
  );
}
