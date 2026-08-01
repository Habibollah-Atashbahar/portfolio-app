"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { accentGradient } from "@/lib/accent";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Work = () => {
  const { locale, t } = useLocale();

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10"
    >
      <SectionHeading kicker={t.work.kicker} title={t.work.title} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.work.items.map((project, index) => (
          <Reveal key={project.slug} delay={0.1 * index}>
            <Link
              href={`/work/${project.slug}`}
              className={`group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 sm:aspect-square ${accentGradient[project.accent]}`}
            >
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
              />
              <ArrowUpRight
                className={`absolute top-5 text-white/70 transition-transform duration-300 group-hover:rotate-45 ${
                  locale === "fa" ? "left-5" : "right-5"
                }`}
                size={20}
              />
              <div className="relative">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">{project.role}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Work;
