// import { ArrowUpRight } from "lucide-react";

// const actions = [
//   {
//     number: "01",
//     title: "Entrepreneuriat",
//     text: "Encourager les jeunes à entreprendre et les accompagner dans la concrétisation de leurs initiatives.",
//   },
//   {
//     number: "02",
//     title: "Formation & compétences",
//     text: "Développer les compétences utiles à l'insertion professionnelle et à l'autonomie.",
//   },
//   {
//     number: "03",
//     title: "Leadership",
//     text: "Favoriser le développement personnel, la confiance en soi et la capacité à prendre des initiatives.",
//   },
//   {
//     number: "04",
//     title: "Citoyenneté & engagement",
//     text: "Encourager une participation active des jeunes dans la vie de leur communauté.",
//   },
//   {
//     number: "05",
//     title: "Insertion socio-économique",
//     text: "Créer des passerelles vers les opportunités professionnelles et l'autonomisation économique.",
//   },
// ];

// export function Actions() {
//   return (
//     <section
//       id="actions"
//       className="bg-[#F8FAFC] px-5 py-24 sm:px-6 lg:px-8 lg:py-32"
//     >
//       <div className="mx-auto max-w-[1200px]">
//         {/* Intro */}
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div className="max-w-2xl">
//             <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
//               Nos actions
//             </p>

//             <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
//               Agir sur ce qui compte pour la jeunesse.
//             </h2>
//           </div>

//           <p className="max-w-sm text-sm leading-6 text-slate-500 lg:pb-1">
//             Nos interventions s'articulent autour de plusieurs domaines
//             essentiels au développement et à l'autonomisation des jeunes.
//           </p>
//         </div>

//         {/* Liste */}
//         <div className="mt-14 border-t border-slate-200">
//           {actions.map((action) => (
//             <article
//               key={action.number}
//               className="group grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-[70px_0.8fr_1fr_auto] sm:items-center sm:gap-8 lg:py-8"
//             >
//               <span className="font-[var(--font-sora)] text-xs font-semibold text-slate-400">
//                 {action.number}
//               </span>

//               <h3 className="font-[var(--font-sora)] text-xl font-semibold tracking-tight text-[#0B1720] transition-colors group-hover:text-[#044E83] sm:text-2xl">
//                 {action.title}
//               </h3>

//               <p className="max-w-md text-sm leading-6 text-slate-500">
//                 {action.text}
//               </p>

//               <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#044E83] transition-all group-hover:border-[#044E83] group-hover:bg-[#044E83] group-hover:text-white sm:flex">
//                 <ArrowUpRight size={16} />
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Lien */}
//         <div className="mt-8">
//           <a
//             href="#projets"
//             className="group inline-flex items-center gap-2 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
//           >
//             Voir comment nous agissons
//             <ArrowUpRight
//               size={16}
//               className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  HandHeart,
  Lightbulb,
  Users,
} from "lucide-react";

const actions = [
  {
    number: "01",
    title: "Entrepreneuriat",
    text: "Encourager les jeunes à entreprendre et les accompagner dans la concrétisation de leurs initiatives.",
    icon: Lightbulb,
    color: "#044E83",
  },
  {
    number: "02",
    title: "Formation & compétences",
    text: "Développer les compétences utiles à l'insertion professionnelle et à l'autonomie.",
    icon: GraduationCap,
    color: "#1C9B35",
  },
  {
    number: "03",
    title: "Leadership",
    text: "Favoriser le développement personnel, la confiance en soi et la capacité à prendre des initiatives.",
    icon: Users,
    color: "#FFC000",
  },
  {
    number: "04",
    title: "Citoyenneté & engagement",
    text: "Encourager une participation active des jeunes dans la vie de leur communauté.",
    icon: HandHeart,
    color: "#DE0609",
  },
  {
    number: "05",
    title: "Insertion socio-économique",
    text: "Créer des passerelles vers les opportunités professionnelles et l'autonomisation économique.",
    icon: BriefcaseBusiness,
    color: "#044E83",
  },
];

export function Actions() {
  return (
    <section
      id="actions"
      className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-26"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Intro */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35]">
              Nos actions
            </p>

            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-bold leading-tight tracking-[-0.035em] text-[#044E83] sm:text-4xl lg:text-5xl">
              Agir sur ce qui compte pour la jeunesse.
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#044E83]" />
              <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
              <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
              <span className="h-1 w-5 rounded-full bg-[#DE0609]" />
            </div>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500 lg:pb-1">
            Nos interventions s'articulent autour de plusieurs domaines
            essentiels au développement et à l'autonomisation des jeunes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <article
                key={action.number}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:border-[#044E83]/20 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)] ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                {/* Accent */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-14"
                  style={{ backgroundColor: action.color }}
                />

                {/* En-tête */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${action.color}12`,
                      color: action.color,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span
                    className="font-[var(--font-sora)] text-xs font-semibold"
                    style={{ color: action.color }}
                  >
                    {action.number}
                  </span>
                </div>

                {/* Contenu */}
                <h3 className="mt-7 max-w-sm font-[var(--font-sora)] text-lg font-semibold leading-snug tracking-tight text-[#0B1720] sm:text-xl">
                  {action.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  {action.text}
                </p>

                {/* Lien */}
                <a
                  href="#projets"
                  className="mt-7 inline-flex items-center gap-2 font-[var(--font-sora)] text-xs font-semibold text-[#044E83]"
                >
                  Découvrir
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 transition-colors group-hover:border-[#044E83] group-hover:bg-[#044E83] group-hover:text-white">
                    <ArrowUpRight size={13} />
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
