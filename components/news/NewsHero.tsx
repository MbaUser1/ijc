import Link from "next/link";
import { ArrowDown, ArrowRight, Newspaper } from "lucide-react";

export function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full border-[40px] border-[#044E83]/5" />
      <div className="absolute bottom-[-100px] left-[-80px] h-60 w-60 rounded-full bg-[#FFC000]/10" />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#044E83]">
            <Newspaper size={16} />
            Actualités IJC
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#0B1720] sm:text-5xl lg:text-6xl">
            Les histoires, les idées et les{" "}
            <span className="text-[#044E83]">initiatives</span> qui font
            avancer la jeunesse.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Retrouvez les actualités d'Impact Jeune Cameroun, les histoires de
            notre communauté, nos initiatives et les sujets qui comptent pour
            la jeunesse.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#a-la-une"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#044E83] px-5 py-3 text-sm font-semibold text-white"
            >
              Lire les dernières actualités
              <ArrowDown size={17} />
            </Link>

            <Link
              href="#categories"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#334155]"
            >
              Explorer les thèmes
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}