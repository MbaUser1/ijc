// import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

// export function Hero() {
//   return (
//     <section className="flex min-h-[720px] items-center justify-center bg-[#F8FAFC] px-5 pt-28 pb-20 sm:min-h-[760px] sm:px-6 lg:px-8">
//       <div className="mx-auto w-full max-w-4xl text-center">
//         {/* Label */}
//         <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35] sm:text-sm">
//           Impact Jeune Cameroun
//         </p>

//         {/* Titre */}
//         <h1 className="mx-auto mt-6 max-w-3xl font-[var(--font-sora)] text-5xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[#044E83] sm:text-6xl lg:text-7xl">
//           Construisons{" "}
//           <span className="text-[#0B1720]">l&apos;impact ensemble.</span>
//         </h1>

//         {/* Description */}
//         <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
//           Une jeunesse engagée, compétente et capable de transformer ses idées
//           en actions pour construire un avenir meilleur.
//         </p>

//         {/* Actions */}
//         <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
//           <a
//             href="#rejoindre"
//             className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#044E83] px-6 font-[var(--font-sora)] text-sm font-semibold text-white transition-colors hover:bg-[#033E69]"
//           >
//             Rejoindre IJC
//             <ArrowUpRight size={16} />
//           </a>

//           <a
//             href="#contact"
//             className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 font-[var(--font-sora)] text-sm font-semibold text-[#044E83] transition-colors hover:border-[#044E83]/30 hover:bg-slate-50"
//           >
//             Nous contacter
//           </a>
//         </div>

//         {/* Lien secondaire */}
//         <a
//           href="#a-propos"
//           className="group mt-12 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-[#044E83]"
//         >
//           Découvrir IJC
//           <ArrowRight
//             size={14}
//             className="transition-transform group-hover:translate-x-1"
//           />
//         </a>
//       </div>

//       {/* Indicateur bas de page */}
//       <a
//         href="#a-propos"
//         aria-label="Faire défiler vers la section À propos"
//         className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-slate-300 transition-colors hover:text-[#044E83] sm:block"
//       >
//         <ArrowDown size={18} strokeWidth={1.5} />
//       </a>
//     </section>
//   );
// }
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="
    flex
    min-h-[480px]
    items-center
    px-5
    pb-14
    pt-[70px]
    sm:min-h-[520px]
    sm:px-6
    sm:pb-16
    sm:pt-[110px]
    lg:px-8
  "
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto mt-14 max-w-3xl text-center">
          {/* Sur-titre */}
          <p className="font-[var(--font-sora)] text-xs font-semibold uppercase tracking-[0.2em] text-[#1C9B35] sm:text-sm">
            Impact Jeune Cameroun
          </p>

          {/* Titre */}
          <h1 className="mx-auto mt-7 max-w-3xl font-[var(--font-sora)] text-[2.75rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#044E83] sm:text-6xl lg:text-[4.5rem]">
            Construisons{" "}
            <span className="text-[#0B1720]">l&apos;impact ensemble.</span>
          </h1>
           <div className="mt-4 justify-center flex  gap-3">
            <span className="h-1 w-12 rounded-full bg-[#044E83]" />
            <span className="h-1 w-5 rounded-full bg-[#1C9B35]" />
            <span className="h-1 w-5 rounded-full bg-[#FFC000]" />
            <span className="h-1 w-5 rounded-full bg-[#DE0609]" />
          </div>
          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">
            Une jeunesse engagée, compétente et capable de transformer ses idées
            en actions pour construire un avenir meilleur.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#rejoindre"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1C9B35] px-5 font-[var(--font-sora)] text-sm font-semibold text-white transition-colors hover:bg-[#0d611e]"
            >
              Rejoindre IJC
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#a-propos"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[white] px-5 font-[var(--font-sora)] text-sm font-semibold text-[#044E83] transition-colors hover:border-[#044E83]/30 hover:bg-slate-50"
            >
              Découvrir IJC
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Repères */}
        {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 border-t border-slate-200 pt-6">
          <div className="px-3 text-center">
            <p className="font-[var(--font-sora)] text-xs font-bold uppercase tracking-[0.12em] text-[#044E83] sm:text-sm">
              Jeunesse
            </p>
            <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
              Au cœur de nos actions
            </p>
          </div>

          <div className="border-l border-slate-200 px-3 text-center">
            <p className="font-[var(--font-sora)] text-xs font-bold uppercase tracking-[0.12em] text-[#1C9B35] sm:text-sm">
              Compétences
            </p>
            <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
              Apprendre et progresser
            </p>
          </div>

          <div className="border-l border-slate-200 px-3 text-center">
            <p className="font-[var(--font-sora)] text-xs font-bold uppercase tracking-[0.12em] text-[#DE0609] sm:text-sm">
              Impact
            </p>
            <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
              Transformer les idées
            </p>
          </div>
        </div> */}

        <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-3">
            <div className="px-4 py-6 text-center sm:py-7">
              <p className="font-[var(--font-sora)] text-xs font-bold uppercase tracking-[0.12em] text-[#1C9B35] sm:text-sm">
                Jeunesse
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                Au cœur de nos actions
              </p>
            </div>

            <div className="border-l border-slate-200 px-4 py-6 text-center sm:py-7">
              <p className="font-[var(--font-sora)] text-xs font-bold uppercase tracking-[0.12em] text-[#DE0609] sm:text-sm">
                Compétences
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                Apprendre et progresser
              </p>
            </div>

            <div className="border-l border-slate-200 px-4 py-6 text-center sm:py-7">
              <p className="font-[var(--font-sora)] text-xs font-bold uppercase tracking-[0.12em] text-[#FFC000] sm:text-sm">
                Impact
              </p>

              <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                Transformer les idées
              </p>
            </div>
          </div>
        </div>

        {/* Lien vers la suite 
        <div className="mt-10 text-center">
          <a
            href="#a-propos"
            className="inline-flex items-center gap-2 font-[var(--font-sora)] text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors hover:text-[#044E83]"
          >
            Découvrir notre engagement
            <ArrowRight size={13} />
          </a>
        </div>*/}
      </div>
    </section>
  );
}
