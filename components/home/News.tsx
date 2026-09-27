import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

const news = [
  {
    category: "Actualité",
    date: "15 septembre 2026",
    title: "Impact Jeune Cameroun renforce son engagement auprès des jeunes",
    excerpt:
      "Retour sur les dernières initiatives mises en place pour accompagner les jeunes dans leurs parcours et leurs projets.",
    image: "/images/news-01.jpg",
    featured: true,
  },
  {
    category: "Formation",
    date: "08 septembre 2026",
    title: "Développer les compétences pour mieux saisir les opportunités",
    excerpt:
      "Une nouvelle session de formation autour des compétences professionnelles et numériques.",
    image: "/images/news-02.jpg",
    featured: false,
  },
  {
    category: "Communauté",
    date: "02 septembre 2026",
    title: "Des jeunes qui transforment leurs idées en initiatives",
    excerpt:
      "Découvrez quelques parcours et initiatives portés par les membres de notre communauté.",
    image: "/images/news-03.jpg",
    featured: false,
  },
];

export function News() {
  const featured = news[0];
  const secondaryNews = news.slice(1);

  return (
    <section
      id="actualites"
      className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Actualités
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
              Ce qui se passe chez IJC.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Retrouvez nos actualités, nos initiatives et les histoires qui
              font vivre notre communauté.
            </p>
          </div>

          <a
            href="#toutes-les-actualites"
            className="group inline-flex shrink-0 items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
          >
            Toutes les actualités
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Grille éditoriale */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Article principal */}
          <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <a href="#article" className="block">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full bg-white px-3 py-1.5 font-[var(--font-sora)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#044E83] shadow-sm">
                    {featured.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays size={14} />
                  {featured.date}
                </div>

                <h3 className="mt-4 max-w-2xl font-[var(--font-sora)] text-xl font-semibold leading-snug tracking-tight text-[#0B1720] sm:text-2xl">
                  {featured.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  {featured.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]">
                  Lire l'article
                  <ArrowRight size={15} />
                </span>
              </div>
            </a>
          </article>

          {/* Articles secondaires */}
          <div className="divide-y divide-slate-200">
            {secondaryNews.map((article) => (
              <article
                key={article.title}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <a
                  href="#article"
                  className="grid gap-5 sm:grid-cols-[180px_1fr] lg:grid-cols-[150px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="180px"
                    />
                  </div>

                  <div>
                    <p className="font-[var(--font-sora)] text-[10px] font-bold uppercase tracking-[0.15em] text-[#1C9B35]">
                      {article.category}
                    </p>

                    <h3 className="mt-2 font-[var(--font-sora)] text-base font-semibold leading-snug text-[#0B1720]">
                      {article.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {article.excerpt}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <CalendarDays size={13} />
                      {article.date}
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
