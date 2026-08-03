// "use client";

// import { motion } from "motion/react";
// import type { ReactNode } from "react";

// type RevealProps = {
//   children: ReactNode;
//   delay?: number;
//   y?: number;
//   className?: string;
// };

// /**
//  * پوسته‌ی مشترک انیمیشن ورود برای همه‌ی بخش‌ها.
//  * viewport once: true یعنی انیمیشن فقط یک‌بار اجرا می‌شود، نه هر بار اسکرول —
//  * این هم ظاهر تمیزتری می‌دهد و هم فشار کمتری روی مرورگر می‌گذارد (پرفورمنس بهتر).
//  */
// export default function Reveal({
//   children,
//   delay = 0,
//   y = 24,
//   className,
// }: RevealProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "90px" }}
//       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }
"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /**
   * حاشیه‌ی تشخیص ورود به دید. مقدار پیش‌فرض "-80px" یعنی المان باید ۸۰ پیکسل
   * داخل صفحه بیاید تا انیمیشن اجرا شود (ظاهر نرم‌تر برای بخش‌های میانی صفحه).
   *
   * ⚠️ برای المان‌هایی که در انتهای صفحه هستند (مثل فوتر) باید "0px" داده شود،
   * وگرنه چون کاربر نمی‌تواند بیشتر اسکرول کند، آن المان هیچ‌وقت وارد محدوده
   * نمی‌شود و برای همیشه نامرئی می‌ماند.
   */
  margin?: string;
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
  margin = "-80px",
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
