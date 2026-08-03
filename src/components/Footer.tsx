// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Mail } from "lucide-react";
// import { assets } from "@/assets/assets";
// import { useLocale } from "@/context/LocaleContext";
// import { useTheme } from "@/context/ThemeContext";
// import Reveal from "./Reveal";

// const Footer = () => {
//   const { t } = useLocale();
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const year = new Date().getFullYear();

//   return (
//     <footer className="mt-10 border-t border-line px-6 py-14 sm:px-10">
//       <Reveal className="text-center">
//         <Image
//           src={isDark ? assets.logo_dark : assets.logo}
//           alt="Maka"
//           className="mx-auto mb-4 w-28 rounded-2xl"
//         />
//         <Link
//           href="mailto:makaseairan@gmail.com"
//           className="mx-auto flex w-max items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
//         >
//           <Mail size={16} />
//           makaseairan@gmail.com
//         </Link>
//       </Reveal>

//       <Reveal delay={0}>
//         <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-2 border-t border-line pt-6 text-center text-xs text-muted sm:flex-row sm:justify-between">
//           <p>
//             © {year} {t.footer.rights}
//           </p>
//           <p className="">{t.footer.madeBy}</p>
//         </div>
//       </Reveal>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { assets } from "@/assets/assets";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";
import Reveal from "./Reveal";

const Footer = () => {
  const { t } = useLocale();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-line px-6 py-14 sm:px-10">
      <Reveal className="text-center" margin="0px">
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="Maka"
          className="mx-auto mb-4 w-28 rounded-2xl"
        />
        <Link
          href="mailto:makaseairan@gmail.com"
          className="mx-auto flex w-max items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <Mail size={16} />
          makaseairan@gmail.com
        </Link>
      </Reveal>

      <Reveal delay={0.15} margin="0px">
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-2 border-t border-line pt-6 text-center text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {t.footer.rights}
          </p>
          <p>{t.footer.madeBy}</p>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
