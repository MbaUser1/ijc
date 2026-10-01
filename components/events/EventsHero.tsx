import Link from "next/link";
import { ArrowDown, ArrowRight, CalendarDays } from "lucide-react";

export function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1720]">
      {/* Accents graphiques */}
      <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute right-[-20px] top-[-40px] h-52 w-52 rounded-full border border-[#FFC000]/20" />
      <div className="absolute bottom-[-100px] left-[-80px] h-64 w-64 rounded-full bg-[#044E83]/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#FFC000]">
              <CalendarDays size={16} />
              Agenda IJC
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Les moments qui{" "}
              <span className="text-[#FFC000]">rassemblent.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Rencontres, formations, ateliers, conférences et initiatives :
              retrouvez les temps forts qui font vivre la communauté Impact
              Jeune Cameroun.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#prochains-evenements"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0B1720]"
              >
                Voir les prochains événements
                <ArrowDown size={17} />
              </Link>

              <Link
                href="#evenements-passes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white"
              >
                Événements passés
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-[32px] border border-white/10 rotate-6" />

              <div className="absolute inset-5 flex flex-col justify-between rounded-[28px] bg-white p-7">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                    À l'agenda
                  </span>

                  <div className="h-3 w-3 rounded-full bg-[#DE0609]" />
                </div>

                <div>
                  <div className="text-6xl font-semibold tracking-tight text-[#044E83]">
                    12
                  </div>

                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#334155]">
                    Octobre
                  </div>
                </div>

                <div className="h-1 w-16 rounded-full bg-[#FFC000]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}