import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

const galleryItems = [
  {
    image: "/images/gallery-01.jpg",
    alt: "Activité Impact Jeune Cameroun",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: "/images/gallery-02.jpg",
    alt: "Jeunes participants à une activité",
    className: "",
  },
  {
    image: "/images/gallery-03.jpg",
    alt: "Atelier avec les jeunes",
    className: "",
  },
  {
    image: "/images/gallery-04.jpg",
    alt: "Événement Impact Jeune Cameroun",
    className: "",
  },
  {
    image: "/images/gallery-05.jpg",
    alt: "Communauté Impact Jeune Cameroun",
    className: "",
  },
];

export function Gallery() {
  return (
    <section
      id="galerie"
      className="bg-white px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Galerie
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
              Des moments qui racontent notre engagement.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Activités, formations, rencontres et événements : découvrez
              quelques moments qui font vivre la communauté IJC.
            </p>
          </div>

          <a
            href="#galerie-complete"
            className="group inline-flex shrink-0 items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
          >
            Voir toute la galerie
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Galerie */}
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <a
              key={item.image}
              href="#galerie"
              className={`group relative overflow-hidden rounded-xl bg-slate-100 ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />

              {/* Voile léger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Indicateur */}
              <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#044E83] opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight size={15} />
              </div>
            </a>
          ))}
        </div>

        {/* Vidéo */}
        <div className="mt-8 grid items-center gap-6 rounded-2xl bg-[#F8FAFC] p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.15em] text-[#DE0609]">
              En vidéo
            </p>

            <h3 className="mt-3 font-[var(--font-sora)] text-xl font-semibold tracking-tight text-[#0B1720] sm:text-2xl">
              Découvrez IJC en images.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Retrouvez les temps forts de nos activités, événements et
              rencontres avec la communauté.
            </p>
          </div>

          <a
            href="#videos"
            aria-label="Voir les vidéos d'Impact Jeune Cameroun"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#044E83] text-white transition-colors hover:bg-[#033E69]"
          >
            <Play size={19} fill="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
}