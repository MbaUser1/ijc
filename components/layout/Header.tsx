// "use client";

// import { useState } from "react";
// import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

// const navigation = [
//   {
//     label: "À propos",
//     href: "#a-propos",
//   },
//   {
//     label: "Nos actions",
//     href: "#actions",
//   },
//   {
//     label: "Projets",
//     href: "#projets",
//   },
//   {
//     label: "Événements",
//     href: "#evenements",
//   },
//   {
//     label: "Actualités",
//     href: "#actualites",
//   },
//   {
//     label: "Opportunités",
//     href: "#opportunites",
//   },
// ];

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6 lg:px-8">
//         <div
//           className="
//             relative
//             rounded-[20px]
//             border border-slate-200/70
//             bg-white/90
//             shadow-[0_12px_50px_rgba(4,78,131,0.08)]
//             backdrop-blur-xl
//           "
//         >
//           <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">
//             {/* LOGO */}
//             <a
//               href="#"
//               onClick={() => setIsOpen(false)}
//               className="group flex items-center gap-3"
//             >
//               <div
//                 className="
//                   relative flex h-11 w-11 items-center justify-center
//                   overflow-hidden rounded-[13px]
//                   bg-[#044E83]
//                   shadow-[0_8px_20px_rgba(4,78,131,0.2)]
//                   transition-transform duration-300
//                   group-hover:scale-105
//                 "
//               >
//                 <span className="relative z-10 font-[var(--font-sora)] text-xs font-extrabold tracking-tight text-white">
//                   IJC
//                 </span>

//                 <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-[#FFC000]" />
//                 <span className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-[#1C9B35]" />
//               </div>

//               <div className="hidden sm:block">
//                 <p className="font-[var(--font-sora)] text-[14px] font-bold leading-tight tracking-[-0.02em] text-[#0B1720]">
//                   Impact Jeune
//                 </p>

//                 <p className="mt-0.5 text-[11px] font-medium tracking-wide text-slate-500">
//                   Cameroun
//                 </p>
//               </div>
//             </a>

//             {/* NAVIGATION DESKTOP */}
//             <nav className="hidden items-center xl:flex">
//               <div className="flex items-center gap-1">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     className="
//                       group relative rounded-lg px-3 py-2
//                       font-[var(--font-sora)]
//                       text-[12px] font-medium
//                       text-slate-600
//                       transition-colors duration-200
//                       hover:text-[#044E83]
//                     "
//                   >
//                     {item.label}

//                     <span
//                       className="
//                         absolute bottom-1 left-1/2 h-[2px] w-0
//                         -translate-x-1/2 rounded-full
//                         bg-[#1C9B35]
//                         transition-all duration-300
//                         group-hover:w-4
//                       "
//                     />
//                   </a>
//                 ))}
//               </div>
//             </nav>

//             {/* ACTIONS */}
//             <div className="hidden items-center gap-2 lg:flex">
//               <a
//                 href="#contact"
//                 className="
//                   group inline-flex items-center gap-2
//                   rounded-xl px-4 py-3
//                   font-[var(--font-sora)]
//                   text-[12px] font-semibold
//                   text-[#044E83]
//                   transition-all duration-300
//                   hover:bg-[#044E83]/5
//                 "
//               >
//                 Nous contacter
//               </a>

//               <a
//                 href="#rejoindre"
//                 className="
//                   group inline-flex items-center gap-2
//                   rounded-xl
//                   bg-[#044E83]
//                   px-5 py-3
//                   font-[var(--font-sora)]
//                   text-[12px] font-semibold
//                   text-white
//                   shadow-[0_10px_25px_rgba(4,78,131,0.2)]
//                   transition-all duration-300
//                   hover:-translate-y-0.5
//                   hover:bg-[#033E69]
//                   hover:shadow-[0_14px_30px_rgba(4,78,131,0.26)]
//                 "
//               >
//                 Rejoindre IJC
//                 <span
//                   className="
//                     flex h-5 w-5 items-center justify-center
//                     rounded-full bg-white/10
//                     transition-transform duration-300
//                     group-hover:translate-x-0.5
//                     group-hover:-translate-y-0.5
//                   "
//                 >
//                   <ArrowUpRight size={13} />
//                 </span>
//               </a>
//             </div>

//             {/* MOBILE */}
//             <button
//               type="button"
//               aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
//               aria-expanded={isOpen}
//               onClick={() => setIsOpen((value) => !value)}
//               className="
//                 flex h-11 w-11 items-center justify-center
//                 rounded-xl
//                 bg-slate-100
//                 text-[#044E83]
//                 transition-all duration-200
//                 hover:bg-[#044E83]
//                 hover:text-white
//                 lg:hidden
//               "
//             >
//               {isOpen ? <X size={21} /> : <Menu size={21} />}
//             </button>
//           </div>

//           {/* MENU MOBILE */}
//           <div
//             className={`
//               overflow-hidden transition-all duration-300 ease-out lg:hidden
//               ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
//             `}
//           >
//             <div className="border-t border-slate-100 px-4 pb-5 pt-3 sm:px-6">
//               <nav className="flex flex-col">
//                 {navigation.map((item, index) => (
//                   <a
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className="
//                       flex items-center justify-between
//                       border-b border-slate-100
//                       px-1 py-4
//                       font-[var(--font-sora)]
//                       text-sm font-medium
//                       text-slate-700
//                       transition-colors
//                       hover:text-[#044E83]
//                     "
//                   >
//                     <span>{item.label}</span>

//                     <ArrowUpRight size={16} className="text-slate-300" />
//                   </a>
//                 ))}
//               </nav>

//               <div className="mt-5 grid grid-cols-2 gap-3">
//                 <a
//                   href="#contact"
//                   onClick={() => setIsOpen(false)}
//                   className="
//                     flex items-center justify-center
//                     rounded-xl
//                     border border-slate-200
//                     px-4 py-3.5
//                     font-[var(--font-sora)]
//                     text-xs font-semibold
//                     text-[#044E83]
//                     transition-colors
//                     hover:bg-slate-50
//                   "
//                 >
//                   Contact
//                 </a>

//                 <a
//                   href="#rejoindre"
//                   onClick={() => setIsOpen(false)}
//                   className="
//                     flex items-center justify-center gap-2
//                     rounded-xl
//                     bg-[#044E83]
//                     px-4 py-3.5
//                     font-[var(--font-sora)]
//                     text-xs font-semibold
//                     text-white
//                     shadow-lg shadow-[#044E83]/20
//                   "
//                 >
//                   Rejoindre IJC
//                   <ArrowUpRight size={15} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Menu, X, ArrowUpRight } from "lucide-react";

// const navigation = [
//   { label: "À propos", href: "#a-propos" },
//   { label: "Nos actions", href: "#actions" },
//   { label: "Projets", href: "#projets" },
//   { label: "Événements", href: "#evenements" },
//   { label: "Opportunités", href: "#opportunites" },
// ];

// export function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="absolute inset-x-0 top-0 z-50">
//       <div className="mx-auto max-w-[1280px] px-5 py-5 sm:px-6 lg:px-8">
//         <div className="flex h-14 items-center justify-between">
//           {/* Logo */}
//           <a
//             href="#"
//             onClick={() => setOpen(false)}
//             className="flex items-center gap-2.5"
//           >
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#044E83] font-[var(--font-sora)] text-xs font-bold text-white">
//               IJC
//             </div>

//             <div className="hidden sm:block">
//               <p className="font-[var(--font-sora)] text-sm font-bold leading-tight text-[#0B1720]">
//                 Impact Jeune
//               </p>
//               <p className="text-[11px] text-slate-500">Cameroun</p>
//             </div>
//           </a>

//           {/* Navigation desktop */}
//           <nav className="hidden items-center gap-7 lg:flex">
//             {navigation.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="font-[var(--font-sora)] text-[13px] font-medium text-slate-600 transition-colors hover:text-[#044E83]"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Actions desktop */}
//           <div className="hidden items-center gap-4 lg:flex">
//             <a
//               href="#contact"
//               className="font-[var(--font-sora)] text-[13px] font-semibold text-[#044E83] transition-colors hover:text-[#1C9B35]"
//             >
//               Nous contacter
//             </a>

//             <a
//               href="#rejoindre"
//               className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#044E83] px-5 font-[var(--font-sora)] text-[13px] font-semibold text-white transition-colors hover:bg-[#033E69]"
//             >
//               Rejoindre IJC
//               <ArrowUpRight size={15} />
//             </a>
//           </div>

//           {/* Mobile button */}
//           <button
//             type="button"
//             aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
//             aria-expanded={open}
//             onClick={() => setOpen((value) => !value)}
//             className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#044E83] lg:hidden"
//           >
//             {open ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {open && (
//           <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-lg lg:hidden">
//             <nav className="flex flex-col">
//               {navigation.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#044E83]"
//                 >
//                   {item.label}
//                 </a>
//               ))}

//               <div className="mt-2 border-t border-slate-100 pt-3">
//                 <a
//                   href="#contact"
//                   onClick={() => setOpen(false)}
//                   className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#044E83]"
//                 >
//                   Nous contacter
//                 </a>

//                 <a
//                   href="#rejoindre"
//                   onClick={() => setOpen(false)}
//                   className="mt-1 flex h-11 items-center justify-center gap-2 rounded-lg bg-[#044E83] text-sm font-semibold text-white"
//                 >
//                   Rejoindre IJC
//                   <ArrowUpRight size={16} />
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";

const navigation = [
  { label: "À propos", href: "#a-propos" },
  { label: "Nos actions", href: "#actions" },
  { label: "Projets", href: "#projets" },
  { label: "Événements", href: "#evenements" },
  { label: "Opportunités", href: "#opportunites" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/images/logo-ijc.png"
              alt="Impact Jeune Cameroun"
              width={200}
              height={150}
              priority
              className="h-10 w-auto object-contain"
            />

            <div className="hidden sm:block">
              <p className="font-[var(--font-sora)] text-sm font-bold leading-tight text-[#0B1720]">
                Impact Jeune
              </p>

              <p className="text-[11px] text-slate-500">Cameroun</p>
            </div>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden h-full items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex h-full items-center font-[var(--font-sora)] text-[13px] font-medium text-slate-600 transition-colors hover:text-[#044E83]"
              >
                {item.label}

                {/* Barre sous le lien */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 bg-[#044E83] transition-transform duration-150 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#contact"
              className="font-[var(--font-sora)] text-[13px] font-semibold text-[#044E83] transition-colors hover:text-[#1C9B35]"
            >
              Nous contacter
            </a>

            <a
              href="#rejoindre"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#044E83] px-5 font-[var(--font-sora)] text-[13px] font-semibold text-white transition-colors hover:bg-[#033E69]"
            >
              Rejoindre IJC
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Bouton mobile */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#044E83] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="border-t border-slate-100 py-3 lg:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-l-2 border-transparent px-3 py-3 font-[var(--font-sora)] text-sm font-medium text-slate-600 transition-colors hover:border-[#044E83] hover:bg-slate-50 hover:text-[#044E83]"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 border-t border-slate-100 pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 font-[var(--font-sora)] text-sm font-semibold text-[#044E83]"
                >
                  Nous contacter
                </a>

                <a
                  href="#rejoindre"
                  onClick={() => setOpen(false)}
                  className="mt-1 flex h-11 items-center justify-center gap-2 rounded-lg bg-[#044E83] font-[var(--font-sora)] text-sm font-semibold text-white"
                >
                  Rejoindre IJC
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
