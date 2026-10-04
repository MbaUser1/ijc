import Link from "next/link";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Rocket,
  Search,
  Users,
} from "lucide-react";

const featuredOpportunity = {
  category: "Formation",
  title: "Développez les compétences qui feront la différence",
  description:
    "Une opportunité de formation destinée aux jeunes souhaitant renforcer leurs compétences et mieux préparer leur parcours professionnel.",
  deadline: "15 OCT. 2026",
  location: "Cameroun",
  image: "/images/opportunities/opportunity-01.jpg",
};

const opportunities = [
  {
    category: "Appel à projets",
    title: "Vous avez une idée ? Faites-la connaître.",
    description:
      "Présentez votre initiative et découvrez les possibilités d'accompagnement.",
    deadline: "20 OCT. 2026",
    location: "Cameroun",
    icon: Rocket,
    accent: "#044E83",
  },
  {
    category: "Formation",
    title: "Renforcez vos compétences professionnelles",
    description:
      "Un parcours pour développer des compétences utiles à votre évolution.",
    deadline: "25 OCT. 2026",
    location: "Yaoundé",
    icon: GraduationCap,
    accent: "#1C9B35",
  },
  {
    category: "Concours",
    title: "Transformez votre idée en projet",
    description:
      "Une occasion de présenter une initiative et de la confronter à un nouveau regard.",
    deadline: "02 NOV. 2026",
    location: "Cameroun",
    icon: Award,
    accent: "#FFC000",
  },
  {
    category: "Stage & emploi",
    title: "Découvrez de nouvelles possibilités professionnelles",
    description:
      "Des opportunités pour développer votre expérience et votre réseau.",
    deadline: "10 NOV. 2026",
    location: "Cameroun",
    icon: BriefcaseBusiness,
    accent: "#DE0609",
  },
  {
    category: "Bourse",
    title: "Soutenir votre parcours et vos ambitions",
    description:
      "Des dispositifs susceptibles de contribuer à votre parcours de formation.",
    deadline: "18 NOV. 2026",
    location: "Cameroun",
    icon: Users,
    accent: "#044E83",
  },
  {
    category: "Formation",
    title: "Apprendre autrement, progresser ensemble",
    description:
      "Un espace d'apprentissage et d'échange autour de compétences pratiques.",
    deadline: "24 NOV. 2026",
    location: "Yaoundé",
    icon: GraduationCap,
    accent: "#1C9B35",
  },
];

const categories = [
  {
    title: "Formations",
    description: "Développez vos compétences.",
    icon: GraduationCap,
    color: "#1C9B35",
  },
  {
    title: "Appels à projets",
    description: "Faites avancer votre initiative.",
    icon: Rocket,
    color: "#044E83",
  },
  {
    title: "Concours",
    description: "Mettez vos idées en valeur.",
    icon: Award,
    color: "#FFC000",
  },
  {
    title: "Stages & emplois",
    description: "Explorez de nouvelles possibilités.",
    icon: BriefcaseBusiness,
    color: "#DE0609",
  },
  {
    title: "Bourses",
    description: "Soutenez votre parcours.",
    icon: Users,
    color: "#044E83",
  },
];

export function OpportunitiesContent() {
  return (
    <>
      {/* Opportunité mise en avant */}
      <section id="opportunites" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-28">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-[#DE0609]">
                À la une
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Une opportunité à découvrir
              </h2>
            </div>

            <span className="hidden items-center gap-2 text-sm text-[#64748B] sm:flex">
              <CalendarDays size={16} />
              Mise à jour régulière
            </span>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] bg-[#E2E8F0] lg:min-h-[480px]">
                <img
                  src={featuredOpportunity.image}
                  alt={featuredOpportunity.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#044E83]">
                  {featuredOpportunity.category}
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#044E83]">
                  Opportunité à saisir
                </span>

                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[#0B1720] sm:text-3xl">
                  {featuredOpportunity.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#64748B]">
                  {featuredOpportunity.description}
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#475569]">
                    <CalendarDays size={17} className="text-[#044E83]" />
                    Date limite : {featuredOpportunity.deadline}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#475569]">
                    <MapPin size={17} className="text-[#1C9B35]" />
                    {featuredOpportunity.location}
                  </div>
                </div>

                <Link
                  href="/opportunites/formation-competences"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#044E83] px-5 py-3 text-sm font-semibold text-white"
                >
                  Voir les détails
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section id="categories" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#044E83]">
              Explorer
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
              Trouvez ce qui correspond à votre parcours
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
              Parcourez les opportunités par catégorie pour aller directement
              vers les possibilités qui vous intéressent.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.title}
                  href="#liste-opportunites"
                  className="group rounded-2xl border border-[#E2E8F0] bg-white p-5"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${category.color}12`,
                        color: category.color,
                      }}
                    >
                      <Icon size={19} />
                    </div>

                    <span className="text-xs font-semibold text-[#CBD5E1]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-base font-semibold text-[#0B1720]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-[#64748B]">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#044E83]">
                    Explorer
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liste */}
      <section id="liste-opportunites" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-sm font-semibold text-[#1C9B35]">
                Toutes les opportunités
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Ce qui est ouvert en ce moment
              </h2>
            </div>

            <div className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3">
              <Search size={17} className="text-[#94A3B8]" />

              <input
                type="search"
                placeholder="Rechercher une opportunité..."
                className="w-full bg-transparent text-sm text-[#334155] outline-none placeholder:text-[#94A3B8]"
              />
            </div>
          </div>

          <div className="mt-10 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;

              return (
                <article
                  key={opportunity.title}
                  className="grid gap-5 py-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${opportunity.accent}12`,
                      color: opportunity.accent,
                    }}
                  >
                    <Icon size={21} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.13em]"
                        style={{ color: opportunity.accent }}
                      >
                        {opportunity.category}
                      </span>

                      <span className="text-xs text-[#CBD5E1]">•</span>

                      <span className="text-xs text-[#94A3B8]">
                        Opportunité 0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-[#0B1720]">
                      {opportunity.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[#64748B]">
                      {opportunity.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#64748B]">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={13} />
                        Limite : {opportunity.deadline}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {opportunity.location}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/opportunites/opportunite-${index + 1}`}
                    className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm font-semibold text-[#044E83]"
                  >
                    Voir l'opportunité
                    <ArrowRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comment ne rien manquer */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-12 py-20 sm:px-14 lg:px-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold text-[#DE0609]">
                Restez attentif
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
                Une bonne opportunité arrive parfois au bon moment.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-[#64748B]">
                Prenez l'habitude de consulter régulièrement notre espace
                opportunités pour découvrir les nouvelles possibilités
                publiées.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Consultez",
                  text: "Explorez régulièrement les nouvelles opportunités.",
                },
                {
                  number: "02",
                  title: "Préparez",
                  text: "Vérifiez les conditions et préparez votre candidature.",
                },
                {
                  number: "03",
                  title: "Agissez",
                  text: "Ne laissez pas passer les dates limites.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6"
                >
                  <span className="text-sm font-semibold text-[#044E83]">
                    {item.number}
                  </span>

                  <h3 className="mt-7 text-lg font-semibold text-[#0B1720]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#044E83]">
        <div className="mx-auto max-w-[1280px] px-12 py-16 sm:px-14 lg:px-16 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-medium text-[#FFC000]">
                <CheckCircle2 size={16} />
                Impact Jeune Cameroun
              </div>

              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Votre prochaine opportunité pourrait commencer ici.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                Découvrez également nos projets, événements et initiatives.
              </p>
            </div>

            <Link
              href="/projets"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#044E83]"
            >
              Découvrir les projets
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}