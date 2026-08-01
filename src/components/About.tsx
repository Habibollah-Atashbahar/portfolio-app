"use client";

import Image from "next/image";
import { Code2 } from "lucide-react";
import { assets, imageTools } from "@/assets/assets";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";
import RustIcon from "./icons/RustIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// آیکون هر عضو تیم — چون همه با lucide رسم می‌شوند، هم در حالت شب و هم روز
// بدون نیاز به دو نسخه‌ی جدا از تصویر، خودشان رنگ درست را می‌گیرند.
const TEAM_ICONS = [Code2, Code2];

const About = () => {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10"
    >
      <SectionHeading kicker={t.about.kicker} title={t.about.title} />

      <div className="flex w-full flex-col items-center gap-14 lg:flex-row lg:gap-20">
        <Reveal className="w-56 shrink-0 sm:w-72" y={0}>
          <Image
            src={isDark ? assets.maka_dark : assets.maka_bg}
            alt="Maka"
            className="w-full rounded-3xl shadow-soft"
          />
        </Reveal>

        <div className="w-full">
          <Reveal delay={0.15}>
            <p className="mb-10 max-w-2xl leading-8 text-muted">
              {t.about.paragraph}
            </p>
          </Reveal>

          <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {t.about.team.map((member, index) => {
              const Icon = TEAM_ICONS[index] ?? Code2;
              return (
                <Reveal key={member.name} delay={0.1 * index}>
                  <li className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-primary">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold text-ink">
                      {member.name}
                    </h3>
                    <p className="text-xs text-muted">{member.role}</p>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={0.2}>
            <h4
              className={`mb-5 text-sm font-medium text-ink ${
                locale === "fa" ? "font-fa" : "font-serif"
              }`}
            >
              {t.about.toolsTitle}
            </h4>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="flex flex-wrap items-center gap-3">
              {imageTools.map((tool) => (
                <li
                  key={tool.name}
                  title={tool.name}
                  className="flex aspect-square w-12 items-center justify-center rounded-xl border border-line bg-surface transition-transform duration-300 hover:-translate-y-1 sm:w-14"
                >
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    className="w-6 sm:w-7"
                  />
                </li>
              ))}
              <li
                title="Rust"
                className="flex aspect-square w-12 items-center justify-center rounded-xl border border-line bg-surface text-ink transition-transform duration-300 hover:-translate-y-1 sm:w-14"
              >
                <RustIcon className="w-6 sm:w-7" />
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
