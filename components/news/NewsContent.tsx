import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Tag,
} from "lucide-react";

const featuredArticle = {
  category: "Jeunesse",
  date: "02 OCT. 2026",
  readTime: "5 min",
  title: "Donner aux jeunes les moyens de transformer leurs idées en actions",
  excerpt:
    "Découvrez les initiatives et les espaces mis en place pour favoriser l'engagement, le développement des compétences et l'émergence de nouvelles initiatives.",
  image: "/images/news/news-01.jpg",
};

const secondaryArticles = [
  {
    category: "Formation",
    date: "28 SEPT. 2026",
    title: "Développer des compétences utiles pour construire son avenir",
    image: "/images/news/news-02.jpg",
  },
  {
    category: "Entrepreneuriat",
    date: "24 SEPT. 2026",
    title: "Quand une idée devient le début d'une aventure entrepreneuriale",
    image: "/images/news/news-03.jpg",
  },
];

const latestArticles = [
  {
    date: "20 SEPT. 2026",
    category: "Citoyenneté",
    title: "La jeunesse au cœur de l'engagement citoyen",
    excerpt:
      "Retour sur les initiatives qui encouragent les jeunes à prendre part à la vie de leur communauté.",
    image: "/images/news/news-04.jpg",
  },
  {
    date: "15 SEPT. 2026",
    category: "Vie d'IJC",
    title: "Créer des espaces pour apprendre, partager et construire",
    excerpt:
      "Des rencontres qui favorisent les échanges entre jeunes, porteurs d'idées et acteurs de leur territoire.",
    image: "/images/news/news-05.jpg",
  },
  {
    date: "09 SEPT. 2026",
    category: "Insertion",
    title: "Compétences et opportunités : préparer les jeunes au monde professionnel",
    excerpt:
      "L'accompagnement des jeunes passe aussi par l'accès à des compétences concrètes et adaptées.",
    image: "/images/news/news-06.jpg",
  },
  {
    date: "03 SEPT. 2026",
    category: "Entrepreneuriat",
    title: "Accompagner les initiatives qui répondent aux besoins locaux",
    excerpt:
      "Comprendre les réalités du terrain pour mieux soutenir les projets portés par les jeunes.",
    image: "/images/news/news-07.jpg",
  },
];

const categories = [
  {
    name: "Jeunesse",
    count: "12 articles",
    color: "#044E83",
  },
  {
    name: "Entrepreneuriat",
    count: "08 articles",
    color: "#1C9B35",
  },
  {
    name: "Formation",
    count: "10 articles",
    color: "#FFC000",
  },
  {
    name: "Citoyenneté",
    count: "06 articles",
    color: "#DE0609",
  },
  {
    name: "Vie d'IJC",
    count: "09 articles",
    color: "#044E83",
  },
];

export function NewsContent() {
  return (
    <>
      {/* À la une */}
      <section id="a-la-une" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex items-center justify-between gap-6">
            <div>
              <span className="text-sm font-semibold text-[#DE0609]">
                À la une
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Ce qu'il faut retenir
              </h2>
            </div>

            <Link
              href="#dernieres-actualites"
              className="hidden items-center gap-2 text-sm font-semibold text-[#044E83] sm:inline-flex"
            >
              Toutes les actualités
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            {/* Article principal */}
            <article className="group overflow-hidden rounded-[28px] bg-[#0B1720]">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1720]/60 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#044E83]">
                    {featuredArticle.category}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/45">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        {featuredArticle.date}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                      {featuredArticle.title}
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <Link
                    href="/actualites/donner-aux-jeunes-les-moyens"
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#FFC000]"
                  >
                    Lire l'article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>

            {/* Articles secondaires */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {secondaryArticles.map((article, index) => (
                <article
                  key={article.title}
                  className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
                >
                  <div className="grid h-full sm:grid-cols-[150px_1fr] lg:grid-cols-[170px_1fr]">
                    <div className="relative min-h-[190px] bg-[#F1F5F9] sm:min-h-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-center p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#1C9B35]">
                          {article.category}
                        </span>

                        <span className="text-xs text-[#94A3B8]">
                          0{index + 2}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0B1720]">
                        {article.title}
                      </h3>

                      <span className="mt-4 text-xs font-medium text-[#94A3B8]">
                        {article.date}
                      </span>

                      <Link
                        href="#"
                        className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#044E83]"
                      >
                        Lire
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dernières actualités */}
      <section id="dernieres-actualites" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-[#044E83]">
                Dernières publications
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Les dernières actualités
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
                Histoires, réflexions, initiatives et nouvelles de la
                communauté IJC.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-medium text-[#334155]"
            >
              Toutes les catégories
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {latestArticles.map((article, index) => (
              <article key={article.title}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E2E8F0]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#334155]">
                    {article.category}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <CalendarDays size={13} />
                    {article.date}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0B1720]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/actualites/article-${index + 1}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#044E83]"
                  >
                    Lire la suite
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-[#E2E8F0] pt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#044E83]"
            >
              Charger davantage d'actualités
              <ArrowDownIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section id="categories" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C9B35]">
                <Tag size={16} />
                Explorer
              </span>

              <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Retrouvez les sujets qui vous intéressent.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[#64748B]">
                Parcourez les contenus d'IJC par domaine pour aller directement
                aux sujets qui vous intéressent.
              </p>
            </div>

            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href="#dernieres-actualites"
                  className="group flex items-center justify-between gap-5 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: `${category.color}12`,
                        color: category.color,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold text-[#0B1720]">
                        {category.name}
                      </h3>

                      <span className="mt-1 block text-xs text-[#94A3B8]">
                        {category.count}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-[#CBD5E1] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#044E83]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-[#FFC000]">
                Restez informé
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Une actualité peut être le début d'une nouvelle opportunité.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                Découvrez aussi les événements et opportunités proposés à la
                communauté IJC.
              </p>
            </div>

            <Link
              href="/opportunites"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#044E83]"
            >
              Voir les opportunités
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowDownIcon() {
  return <ArrowRight size={15} className="rotate-90" />;
}