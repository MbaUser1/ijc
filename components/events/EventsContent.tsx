import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

const upcomingEvents = [
  {
    day: "12",
    month: "OCT",
    category: "Rencontre",
    title: "Jeunesse & initiatives : passer à l'action",
    description:
      "Une rencontre autour des idées, des initiatives et des opportunités offertes aux jeunes.",
    location: "Yaoundé, Cameroun",
    time: "09:00 — 13:00",
    image: "/images/events/event-01.jpg",
    featured: true,
  },
  {
    day: "26",
    month: "OCT",
    category: "Formation",
    title: "Atelier compétences & employabilité",
    description:
      "Un atelier pratique consacré au développement des compétences professionnelles.",
    location: "Yaoundé, Cameroun",
    time: "10:00 — 14:00",
    image: "/images/events/event-02.jpg",
    featured: false,
  },
  {
    day: "09",
    month: "NOV",
    category: "Échange",
    title: "Jeunes acteurs du changement",
    description:
      "Un temps d'échange autour de l'engagement, du leadership et de l'impact local.",
    location: "Cameroun",
    time: "09:30 — 12:30",
    image: "/images/events/event-03.jpg",
    featured: false,
  },
];

const pastEvents = [
  {
    date: "18 SEPT. 2026",
    category: "Atelier",
    title: "Construire son projet avec méthode",
    image: "/images/events/event-04.jpg",
  },
  {
    date: "04 SEPT. 2026",
    category: "Rencontre",
    title: "Jeunesse, emploi & opportunités",
    image: "/images/events/event-05.jpg",
  },
  {
    date: "21 AOÛT 2026",
    category: "Formation",
    title: "Développer ses compétences numériques",
    image: "/images/events/event-06.jpg",
  },
];

export function EventsContent() {
  const featuredEvent = upcomingEvents[0];
  const secondaryEvents = upcomingEvents.slice(1);

  return (
    <>
      {/* Prochains événements */}
      <section id="prochains-evenements" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-[#044E83]">
                À venir
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Les prochains rendez-vous
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
                Retrouvez les événements à venir et choisissez les rendez-vous
                qui vous intéressent.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-[#64748B] sm:flex">
              <CalendarDays size={17} />
              Agenda IJC
            </div>
          </div>

          {/* Événement principal */}
          <div className="mt-12 overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-[#E2E8F0] lg:min-h-[500px]">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1720]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <div className="text-center">
                    <div className="text-2xl font-semibold leading-none text-[#044E83]">
                      {featuredEvent.day}
                    </div>
                    <div className="mt-1 text-[10px] font-bold tracking-[0.16em] text-[#64748B]">
                      {featuredEvent.month}
                    </div>
                  </div>

                  <div className="h-8 w-px bg-[#E2E8F0]" />

                  <span className="text-sm font-semibold text-[#334155]">
                    Prochain événement
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="w-fit rounded-full bg-[#EAF3F9] px-3 py-1.5 text-xs font-semibold text-[#044E83]">
                  {featuredEvent.category}
                </span>

                <h3 className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-[#0B1720] sm:text-3xl">
                  {featuredEvent.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
                  {featuredEvent.description}
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#475569]">
                    <MapPin size={17} className="text-[#044E83]" />
                    {featuredEvent.location}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#475569]">
                    <Clock3 size={17} className="text-[#1C9B35]" />
                    {featuredEvent.time}
                  </div>
                </div>

                <Link
                  href="/evenements/jeunesse-initiatives"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#044E83] px-5 py-3 text-sm font-semibold text-white"
                >
                  Découvrir l'événement
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>

          {/* Événements secondaires */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {secondaryEvents.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
              >
                <div className="grid sm:grid-cols-[190px_1fr]">
                  <div className="relative min-h-[190px] bg-[#F1F5F9]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1C9B35]">
                      {event.category}
                    </span>

                    <h3 className="mt-3 text-lg font-semibold text-[#0B1720]">
                      {event.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#64748B]">
                      {event.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#64748B]">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {event.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={14} />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Une autre manière de présenter l'agenda */}
      <section className="overflow-hidden bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-sm font-semibold text-[#DE0609]">
                Agenda
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Des rendez-vous pour apprendre, échanger et agir.
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-[#64748B]">
                IJC crée des espaces où les jeunes peuvent se rencontrer,
                développer leurs compétences et faire avancer leurs initiatives.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1F1]">
                  <Users size={18} className="text-[#DE0609]" />
                </div>

                <span className="text-sm font-medium text-[#334155]">
                  Des événements ouverts à la communauté.
                </span>
              </div>
            </div>

            <div className="space-y-0">
              {[
                ["OCT", "12", "Jeunesse & initiatives", "Rencontre"],
                ["OCT", "26", "Compétences & employabilité", "Formation"],
                ["NOV", "09", "Jeunes acteurs du changement", "Échange"],
                ["NOV", "23", "Entreprendre autrement", "Atelier"],
              ].map(([month, day, title, category], index) => (
                <div
                  key={`${month}-${day}`}
                  className="group flex gap-5 border-t border-[#E2E8F0] py-7 first:border-t-0 sm:gap-8"
                >
                  <div className="w-14 shrink-0 text-center">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#94A3B8]">
                      {month}
                    </span>
                    <div className="mt-1 text-3xl font-semibold tracking-tight text-[#044E83]">
                      {day}
                    </div>
                  </div>

                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                      {category}
                    </span>

                    <h3 className="mt-2 text-lg font-semibold text-[#0B1720]">
                      {title}
                    </h3>

                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#044E83]">
                      Voir les détails
                      <ArrowRight size={15} />
                    </span>
                  </div>

                  <span className="hidden self-center text-xs font-medium text-[#CBD5E1] sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Événements passés */}
      <section id="evenements-passes" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-28">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#1C9B35]">
              Nos archives
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
              Les événements passés
            </h2>

            <p className="mt-4 text-base leading-7 text-[#64748B]">
              Revivez quelques-uns des moments qui ont marqué la vie de la
              communauté.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pastEvents.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0]"
              >
                <div className="aspect-[16/10] bg-[#F1F5F9]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1C9B35]">
                      {event.category}
                    </span>

                    <span className="text-xs font-medium text-[#94A3B8]">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#0B1720]">
                    {event.title}
                  </h3>

                  <Link
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#044E83]"
                  >
                    Voir le récapitulatif
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 
      <section className="bg-[#0B1720]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-medium text-[#FFC000]">
                Restez connecté
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ne manquez pas les prochains rendez-vous d'IJC.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/60">
                Retrouvez nos actualités et les opportunités ouvertes à la
                communauté.
              </p>
            </div>

            <Link
              href="/actualites"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B1720]"
            >
              Voir les actualités
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      */}
    </>
  );
}