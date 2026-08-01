"use client";

import { Cog, Globe, Smartphone } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICE_ICONS = [Globe, Smartphone, Cog];

const Services = () => {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10"
    >
      <SectionHeading kicker={t.services.kicker} title={t.services.title} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((service, index) => {
          const Icon = SERVICE_ICONS[index] ?? Globe;
          return (
            <Reveal key={service.title} delay={0.1 * index}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
