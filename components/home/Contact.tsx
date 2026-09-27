import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Informations */}
          <div className="max-w-md">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Contact
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl">
              Parlons de votre idée, de votre projet ou de votre initiative.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Une question, une proposition de partenariat ou un projet à
              partager ? Notre équipe est à votre écoute.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#044E83]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]">
                    Email
                  </p>
                  <a
                    href="mailto:contact@ijc.cm"
                    className="mt-1 block text-sm text-slate-500 hover:text-[#044E83]"
                  >
                    contact@ijc.cm
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#1C9B35]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]">
                    Téléphone
                  </p>
                  <a
                    href="tel:+237600000000"
                    className="mt-1 block text-sm text-slate-500 hover:text-[#044E83]"
                  >
                    +237 6 XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#DE0609]">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]">
                    Localisation
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Yaoundé, Cameroun
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]"
                  >
                    Nom complet
                  </label>

                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#0B1720] outline-none placeholder:text-slate-400 focus:border-[#044E83]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]"
                  >
                    Adresse email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="vous@example.com"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-[#0B1720] outline-none placeholder:text-slate-400 focus:border-[#044E83]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="objet"
                  className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]"
                >
                  Objet
                </label>

                <select
                  id="objet"
                  name="objet"
                  defaultValue=""
                  className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-500 outline-none focus:border-[#044E83]"
                >
                  <option value="" disabled>
                    Sélectionnez un sujet
                  </option>
                  <option value="projet">Soumettre un projet</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="formation">Formation</option>
                  <option value="information">Demande d'information</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-[var(--font-sora)] text-xs font-semibold text-[#0B1720]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Écrivez votre message..."
                  className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm leading-6 text-[#0B1720] outline-none placeholder:text-slate-400 focus:border-[#044E83]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#044E83] px-5 font-[var(--font-sora)] text-sm font-semibold text-white transition-colors hover:bg-[#033E69] sm:w-auto"
              >
                Envoyer le message
                <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
