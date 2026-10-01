import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#a-propos" },
  { label: "Nos actions", href: "#actions" },
  { label: "Projets", href: "#projets" },
  { label: "Événements", href: "#evenements" },
  { label: "Opportunités", href: "#opportunites" },
];

const resources = [
  { label: "Actualités", href: "#actualites" },
  { label: "Galerie", href: "#galerie" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Rejoindre IJC", href: "#rejoindre" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1720] text-white">
      <div className="mx-auto max-w-[1200px] px-12 py-16 sm:px-14 lg:px-8 lg:py-20">
        {/* Partie principale */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-10">
          {/* Identité */}
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#044E83] font-[var(--font-sora)] text-xs font-bold">
                IJC
              </div>

              <div>
                <p className="font-[var(--font-sora)] text-sm font-bold">
                  Impact Jeune
                </p>

                <p className="text-[11px] text-white/50">Cameroun</p>
              </div>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
              Une communauté engagée pour l'autonomisation, le développement des
              compétences et l'impact des jeunes.
            </p>

            {/* <div className="mt-6 flex items-center gap-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <Facebook size={16} />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <Instagram size={16} />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <Linkedin size={16} />
              </a>
            </div> */}

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 font-[var(--font-sora)] text-xs font-bold text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                f
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 font-[var(--font-sora)] text-xs font-bold text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                ig
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 font-[var(--font-sora)] text-xs font-bold text-white/60 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Découvrir
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {resources.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:impactjeunecameroun@gmail.com"
                className="flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>impactjeunecameroun@gmail.com</span>
              </a>

              <a
                href="tel:+237694799465"
                className="flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+237 694 799 465 | 682 652 473</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/55">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Bafoussam, Cameroun</span>
              </div>
            </div>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 font-[var(--font-sora)] text-xs font-semibold text-white"
            >
              Nous contacter
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Impact Jeune Cameroun. Tous droits
              réservés.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href="#mentions-legales"
                className="transition-colors hover:text-white"
              >
                Mentions légales
              </a>

              <a
                href="#politique-confidentialite"
                className="transition-colors hover:text-white"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
