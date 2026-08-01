"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { accentGradient } from "@/lib/accent";
import GithubIcon from "./icons/GithubIcon";
import Reveal from "./Reveal";

export default function ProjectDetail({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const project = t.work.items.find((item) => item.slug === slug);
  const BackIcon = locale === "fa" ? ArrowRight : ArrowLeft;

  // در حالت خیلی نادر (اسلاگ نامعتبر که از استاتیک‌جنریشن رد شده)، چیزی رندر نمی‌کنیم
  if (!project) return null;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-24 sm:px-10">
      <Reveal>
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          <BackIcon size={16} />
          {t.work.detail.back}
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div
          className={`mb-8 flex aspect-[21/9] items-center justify-center rounded-2xl bg-gradient-to-br shadow-soft ${accentGradient[project.accent]}`}
        >
          <h1
            className={`px-6 text-center text-2xl font-semibold text-white sm:text-4xl ${
              locale === "fa" ? "font-fa" : "font-serif"
            }`}
          >
            {project.name}
          </h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-2 text-sm font-medium text-primary">
          {project.role}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mb-8 leading-8 text-muted">{project.description}</p>
      </Reveal>

      <Reveal delay={0.2}>
        <h2 className="mb-3 text-sm font-semibold text-ink">
          {t.work.detail.techStack}
        </h2>
        <ul dir="ltr" className="mb-10 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface-alt px-3.5 py-1.5 text-xs font-medium text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.25} className="flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <GithubIcon className="h-4 w-4" />
          {t.work.detail.github}
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ExternalLink size={16} />
            {t.work.detail.live}
          </a>
        )}
      </Reveal>
    </div>
  );
}
