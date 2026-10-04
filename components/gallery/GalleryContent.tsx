import { ArrowUpRight, Play } from "lucide-react";

const galleryItems = [
  {
    image: "/images/gallery/gallery-01.JPG",
    title: "Rencontres & échanges",
    category: "Événements",
    size: "large",
  },
  {
    image: "/images/gallery/gallery-02.JPG",
    title: "Apprendre ensemble",
    category: "Formation",
    size: "small",
  },
  {
    image: "/images/gallery/gallery-03.JPG",
    title: "Des idées en action",
    category: "Entrepreneuriat",
    size: "small",
  },
  {
    image: "/images/gallery/gallery-04.JPG",
    title: "Construire le collectif",
    category: "Jeunesse",
    size: "medium",
  },
  {
    image: "/images/gallery/gallery-05.JPG",
    title: "Partager les expériences",
    category: "Rencontres",
    size: "medium",
  },
  {
    image: "/images/gallery/gallery-06.JPG",
    title: "Passer à l'action",
    category: "Initiatives",
    size: "large",
  },
];

const categories = [
  "Tout",
  "Événements",
  "Formation",
  "Entrepreneuriat",
  "Jeunesse",
  "Initiatives",
];

export function GalleryContent() {
  return (
    <div>
      {/* Filtres */}
      <section className="border-b border-[#E2E8F0] bg-white px-12 py-8 sm:px-14 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? "bg-[#044E83] text-white"
                    : "border border-[#E2E8F0] bg-white text-[#64748B]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-white px-12 py-16 sm:px-14 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[190px]">
            {galleryItems.map((item, index) => {
              const isLarge =
                item.size === "large" && (index === 0 || index === 5);

              const isMedium = item.size === "medium";

              return (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl bg-[#F1F5F9] ${
                    isLarge
                      ? "sm:col-span-2 sm:row-span-2"
                      : isMedium
                        ? "lg:col-span-2 lg:row-span-1"
                        : "lg:col-span-1 lg:row-span-1"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-16">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/70">
                      {item.category}
                    </span>

                    <h2 className="mt-1 font-[var(--font-sora)] text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h2>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vidéo */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid overflow-hidden rounded-3xl bg-[#0B1720] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px] bg-[#1B2A35]">
              <img
                src="/images/gallery/gallery-video.jpg"
                alt="Vidéo Impact Jeune Cameroun"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Lire la vidéo"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#044E83] shadow-lg"
                >
                  <Play size={24} fill="currentColor" className="ml-1" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-12">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#FFC000]">
                En vidéo
              </span>

              <h2 className="mt-4 font-[var(--font-sora)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Voir IJC en action.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                Retrouvez les temps forts, témoignages et moments qui
                illustrent l'engagement de notre communauté.
              </p>

              <button
                type="button"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B1720]"
              >
                Voir les vidéos
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dernier appel */}
      <section className="bg-white px-12 py-20 sm:px-14 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mx-auto flex w-fit items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DE0609]" />
            <span className="h-2 w-2 rounded-full bg-[#FFC000]" />
            <span className="h-2 w-2 rounded-full bg-[#1C9B35]" />
          </div>

          <h2 className="mt-6 font-[var(--font-sora)] text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
            Vous souhaitez vivre l'expérience IJC ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#64748B]">
            Participez à nos activités, partagez vos idées et contribuez à
            construire une communauté de jeunes engagés.
          </p>

          <a
            href="/rejoindre"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#044E83] px-5 py-3 text-sm font-semibold text-white"
          >
            Rejoindre IJC
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}