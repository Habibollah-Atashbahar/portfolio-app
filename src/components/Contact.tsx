"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "269c07ea-0937-4ce5-9142-02dff3f240f9";

const Contact = () => {
  const { locale, t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const ArrowIcon = locale === "fa" ? ArrowLeft : ArrowRight;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-surface p-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary";

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[360px] -translate-y-1/2 bg-glow-violet"
      />

      <SectionHeading kicker={t.contact.kicker} title={t.contact.title} />

      <form onSubmit={onSubmit} className="mx-auto max-w-2xl">
        <Reveal>
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder={t.contact.name}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.email}
              required
              className={inputClass}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <textarea
            name="message"
            rows={6}
            placeholder={t.contact.message}
            required
            className={`${inputClass} mb-6 w-full resize-none`}
          />
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="mx-auto flex w-max items-center gap-2 rounded-full bg-primary px-9 py-3.5 font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                {t.contact.sending}
                <Loader2 size={16} className="animate-spin" />
              </>
            ) : (
              <>
                {t.contact.submit}
                <ArrowIcon size={16} />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              {t.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {t.contact.error}
            </p>
          )}
        </Reveal>
      </form>
    </section>
  );
};

export default Contact;
