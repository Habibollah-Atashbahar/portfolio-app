"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assets } from "@/assets/assets";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { locale, t } = useLocale();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ArrowIcon = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <div
      id="top"
      className="mx-auto flex h-screen w-11/12 max-w-3xl scroll-mt-20 flex-col items-center justify-center gap-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <Image
          src={isDark ? assets.maka_dark : assets.maka_bg}
          alt="Maka"
          className="w-28 rounded-full ring-4 ring-surface sm:w-32"
          priority
        />
      </motion.div>

      <motion.h3
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className={`mb-2 flex items-center gap-2 text-lg text-muted sm:text-xl ${
          locale === "fa" ? "font-fa" : "font-serif"
        }`}
      >
        {t.header.greeting}
        <span aria-hidden="true">👋</span>
      </motion.h3>

      <motion.h1
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`text-4xl font-semibold text-ink sm:text-6xl lg:text-[64px] ${
          locale === "fa" ? "font-fa" : "font-serif"
        }`}
      >
        {t.header.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mx-auto max-w-2xl text-muted"
      >
        {t.header.description}
      </motion.p>

      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        href="#contact"
        className="mt-4 flex items-center gap-2 rounded-full bg-primary px-9 py-3.5 font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
      >
        {t.header.cta}
        <ArrowIcon size={16} />
      </motion.a>
    </div>
  );
};

export default Header;
