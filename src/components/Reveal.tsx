"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * پوسته‌ی مشترک انیمیشن ورود برای همه‌ی بخش‌ها.
 * viewport once: true یعنی انیمیشن فقط یک‌بار اجرا می‌شود، نه هر بار اسکرول —
 * این هم ظاهر تمیزتری می‌دهد و هم فشار کمتری روی مرورگر می‌گذارد (پرفورمنس بهتر).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
