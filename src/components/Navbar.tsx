"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { assets } from "@/assets/assets";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { href: "#top", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#work", key: "work" as const },
  { href: "#contact", key: "contact" as const },
];

const Navbar = () => {
  const { locale, t, toggleLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // وقتی منوی موبایل بازه، اسکرول پشت صفحه قفل می‌شود تا تجربه‌ی تمیزتری داشته باشیم.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isDark = theme === "dark";

  return (
    <>
      {/* نور محیطی تزیینی پشت هدر — با CSS ساخته شده، بدون هیچ درخواست تصویر اضافه */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[420px] bg-glow-ocean"
      />

      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-all duration-300 lg:px-8 xl:px-[8%] ${
          isScrolled
            ? "border-b border-line bg-surface/80 backdrop-blur-lg shadow-soft"
            : ""
        }`}
      >
        <Link href="#top" className="shrink-0">
          <Image
            src={isDark ? assets.logo_dark : assets.logo}
            alt="Maka"
            className="w-24 rounded-2xl sm:w-28"
            priority
          />
        </Link>

        <ul
          className={`hidden items-center gap-1 rounded-full border px-3 py-2 md:flex ${
            isScrolled
              ? "border-transparent"
              : "border-line bg-surface/70 backdrop-blur-sm"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-surface-alt hover:text-ink"
              >
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            aria-label={t.a11y.toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <Languages size={15} />
            {locale === "en" ? "FA" : "EN"}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={t.a11y.toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5 lg:flex"
          >
            {t.nav.contactCta}
          </Link>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t.a11y.openMenu}
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* منوی موبایل */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />
      <aside
        className={`fixed inset-y-0 z-[70] flex w-72 flex-col gap-2 bg-surface p-8 shadow-soft transition-transform duration-300 md:hidden ${
          locale === "fa" ? "left-0" : "right-0"
        } ${
          isMenuOpen
            ? "translate-x-0"
            : locale === "fa"
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          aria-label={t.a11y.closeMenu}
          className="mb-6 flex h-9 w-9 items-center justify-center self-end rounded-full border border-line text-ink"
        >
          <X size={16} />
        </button>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-alt"
          >
            {t.nav[link.key]}
          </Link>
        ))}
      </aside>
    </>
  );
};

export default Navbar;
