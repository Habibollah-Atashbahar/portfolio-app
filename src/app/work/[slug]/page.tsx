import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";
import { dictionary } from "@/context/dictionary";

// اسلاگ‌ها بین هر دو زبان یکسان هستند، پس از دیکشنری انگلیسی می‌گیریمشان
// تا Next.js همه‌ی صفحات پروژه را از قبل (در زمان بیلد) بسازد — سریع‌ترین حالت ممکن.
export function generateStaticParams() {
  return dictionary.en.work.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = dictionary.en.work.items.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — Maka`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = dictionary.en.work.items.some((item) => item.slug === slug);
  if (!exists) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-28">
        <ProjectDetail slug={slug} />
      </main>
      <Footer />
    </>
  );
}
