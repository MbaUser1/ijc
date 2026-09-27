import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    date: "12",
    month: "OCT",
    title: "Atelier : entreprendre à l'ère du numérique",
    location: "Yaoundé",
  },
  {
    date: "26",
    month: "OCT",
    title: "Rencontre des jeunes porteurs de projets",
    location: "Yaoundé",
  },
  {
    date: "09",
    month: "NOV",
    title: "Forum jeunesse & opportunités",
    location: "Cameroun",
  },
];

export function Events() {
  return (
    <section
      id="evenements"
      className="bg-[#F8FAFC] px-5 py-18 sm:px-6 lg:px-8 lg:py-22"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Événements
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
              Restons connectés à la communauté.
            </h2>
          </div>

          <a
            href="#tous-les-evenements"
            className="group inline-flex shrink-0 items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
          >
            Tous les événements
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Contenu */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Événement principal */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="relative aspect-[16/8] bg-[#044E83]">
              {/* Image à ajouter plus tard */}
              <div className="absolute inset-0 flex items-end p-7 sm:p-9">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    Prochain événement
                  </span>

                  <h3 className="mt-4 max-w-lg font-[var(--font-sora)] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Atelier : entreprendre à l'ère du numérique
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#044E83]" />
                  12 octobre
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-[#044E83]" />
                  Yaoundé
                </span>
              </div>

              <a
                href="#evenement"
                className="group mt-6 inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
              >
                Voir les détails
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </article>

          {/* Liste */}
          <div className="divide-y divide-slate-200">
            {upcomingEvents.slice(1).map((event) => (
              <article
                key={event.title}
                className="flex gap-5 py-6 first:pt-0 last:pb-0"
              >
                {/* Date */}
                <div className="flex h-[66px] w-[62px] shrink-0 flex-col items-center justify-center rounded-xl bg-white">
                  <span className="font-[var(--font-sora)] text-xl font-bold leading-none text-[#044E83]">
                    {event.date}
                  </span>

                  <span className="mt-1 text-[10px] font-bold tracking-wider text-[#1C9B35]">
                    {event.month}
                  </span>
                </div>

                {/* Contenu */}
                <div className="min-w-0">
                  <h3 className="font-[var(--font-sora)] text-base font-semibold leading-snug text-[#0B1720]">
                    {event.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={13} />
                    {event.location}
                  </p>

                  <a
                    href="#evenement"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#044E83]"
                  >
                    Détails
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
