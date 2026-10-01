import {
  ArrowRight,
  BriefcaseBusiness,
  Lightbulb,
  Users,
} from "lucide-react";

const waysToJoin = [
  {
    icon: Users,
    number: "01",
    title: "Participer",
    text: "Prenez part aux activités, formations, rencontres et initiatives organisées par IJC.",
    color: "#044E83",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "S'engager",
    text: "Mettez votre temps, vos compétences ou votre expérience au service d'initiatives utiles.",
    color: "#1C9B35",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Proposer",
    text: "Vous avez une idée ou un projet ? Présentez-le et échangeons sur les possibilités d'accompagnement.",
    color: "#DE0609",
  },
];

const profiles = [
  "Jeune étudiant ou apprenant",
  "Jeune professionnel",
  "Porteur de projet",
  "Entrepreneur",
  "Bénévole",
  "Acteur associatif",
];

export function JoinContent() {
  return (
    <div>
      {/* Pourquoi rejoindre */}
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#044E83]">
              Pourquoi nous rejoindre ?
            </span>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight text-[#0B1720] sm:text-4xl">
              Il n'y a pas une seule manière de contribuer.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#64748B]">
              Chacun peut trouver sa place selon ses envies, ses compétences,
              son expérience et le temps qu’il souhaite consacrer.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {waysToJoin.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${item.color}12`,
                        color: item.color,
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.12em] text-[#94A3B8]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-[var(--font-sora)] text-xl font-semibold text-[#0B1720]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profils */}
      <section className="bg-[#F8FAFC] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1C9B35]">
                Pour qui ?
              </span>

              <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-semibold leading-tight tracking-tight text-[#0B1720] sm:text-4xl">
                Une communauté ouverte aux profils qui veulent agir.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#64748B]">
                IJC s’adresse aux jeunes qui souhaitent développer leurs
                capacités, concrétiser leurs idées et contribuer positivement à
                leur environnement.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {profiles.map((profile, index) => (
                <div
                  key={profile}
                  className="flex items-center gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#044E83] text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-[#334155]">
                    {profile}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section
        id="formulaire"
        className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="grid overflow-hidden rounded-3xl border border-[#E2E8F0] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="bg-[#0B1720] px-7 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#FFC000]">
                Votre démarche
              </span>

              <h2 className="mt-4 font-[var(--font-sora)] text-2xl font-semibold leading-tight sm:text-3xl">
                Parlons de vous.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Quelques informations suffisent pour nous permettre de mieux
                comprendre votre profil et votre intérêt pour IJC.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Présentez votre profil",
                  "Indiquez votre centre d'intérêt",
                  "Expliquez comment vous souhaitez contribuer",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-white p-7 sm:p-10 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-2 block text-sm font-medium text-[#334155]"
                  >
                    Nom complet
                  </label>

                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm text-[#0B1720] outline-none placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#334155]"
                  >
                    Adresse e-mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@example.com"
                    className="w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm text-[#0B1720] outline-none placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-2 block text-sm font-medium text-[#334155]"
                  >
                    Téléphone
                  </label>

                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+237 ..."
                    className="w-full rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm text-[#0B1720] outline-none placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="profil"
                    className="mb-2 block text-sm font-medium text-[#334155]"
                  >
                    Votre profil
                  </label>

                  <select
                    id="profil"
                    name="profil"
                    defaultValue=""
                    className="w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] outline-none"
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    {profiles.map((profile) => (
                      <option key={profile} value={profile}>
                        {profile}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="interet"
                    className="mb-2 block text-sm font-medium text-[#334155]"
                  >
                    Comment souhaitez-vous vous impliquer ?
                  </label>

                  <select
                    id="interet"
                    name="interet"
                    defaultValue=""
                    className="w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#334155] outline-none"
                  >
                    <option value="" disabled>
                      Sélectionner
                    </option>
                    <option value="participer">
                      Participer aux activités
                    </option>
                    <option value="benevole">Devenir bénévole</option>
                    <option value="competences">
                      Mettre mes compétences à disposition
                    </option>
                    <option value="projet">Présenter un projet</option>
                    <option value="partenariat">
                      Proposer une collaboration
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#334155]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Dites-nous quelques mots sur votre démarche..."
                    className="w-full resize-none rounded-xl border border-[#E2E8F0] px-4 py-3 text-sm leading-6 text-[#0B1720] outline-none placeholder:text-[#94A3B8]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#044E83] px-5 py-3 text-sm font-semibold text-white"
              >
                Envoyer ma demande
                <ArrowRight size={17} />
              </button>

              <p className="mt-4 text-xs leading-5 text-[#94A3B8]">
                Ce formulaire est actuellement une interface de présentation.
                Il pourra être connecté au système de gestion des adhésions
                ultérieurement.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA projet */}
      <section className="px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-3xl bg-[#F8FAFC] px-6 py-12 text-center sm:px-10 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#DE0609]">
              Vous avez déjà une idée ?
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-[var(--font-sora)] text-3xl font-semibold tracking-tight text-[#0B1720] sm:text-4xl">
              Présentez-nous directement votre projet.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#64748B]">
              Si votre démarche est déjà structurée, rendez-vous directement
              sur notre espace dédié aux projets.
            </p>

            <a
              href="/projets"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0B1720] px-5 py-3 text-sm font-semibold text-white"
            >
              Découvrir l'accompagnement
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}