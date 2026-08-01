"use client";

import { useLocale } from "@/context/LocaleContext";
import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  const { locale } = useLocale();

  return (
    <div className="mb-12 text-center sm:mb-16">
      <Reveal>
        <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-primary uppercase">
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className={`text-4xl font-semibold text-ink sm:text-5xl ${
            locale === "fa" ? "font-fa" : "font-serif"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
