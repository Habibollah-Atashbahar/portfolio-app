export type Locale = "en" | "fa";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    services: string;
    work: string;
    contact: string;
    contactCta: string;
  };
  header: {
    greeting: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraph: string;
    toolsTitle: string;
    team: { name: string; role: string }[];
  };
  services: {
    kicker: string;
    title: string;
    items: { title: string; description: string }[];
  };
  work: {
    kicker: string;
    title: string;
    items: {
      slug: string;
      name: string;
      role: string;
      description: string;
      techStack: string[];
      githubUrl: string;
      liveUrl?: string;
      accent: "ocean" | "violet" | "coffee";
    }[];
    detail: {
      back: string;
      techStack: string;
      github: string;
      live: string;
    };
  };
  contact: {
    kicker: string;
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { rights: string; madeBy: string };
  a11y: {
    toggleTheme: string;
    toggleLocale: string;
    openMenu: string;
    closeMenu: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Maka | Software Developers Team",
      description:
        "Maka is a development team specializing in web applications and smart marine systems.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Our Work",
      contact: "Contact",
      contactCta: "Contact",
    },
    header: {
      greeting: "Maka Team",
      title: "Software Developers Team",
      description:
        "Maka is a development team specializing in web applications and smart marine systems.",
      cta: "Contact Us",
    },
    about: {
      kicker: "Introduction",
      title: "About Maka",
      paragraph:
        "Maka is a dedicated software engineering team specializing in modern web development and intelligent marine technologies. We design and build scalable, high-performance web applications for businesses, while simultaneously developing our own in-house project focused on smart systems for marine vessels. Our mission is to combine clean engineering, practical innovation, and real-world problem-solving to create solutions that are not only powerful, but meaningful.",
      toolsTitle: "Tools We Use",
      team: [
        { name: "Habibollah Atashbahar", role: "Full-Stack Developer" },
        { name: "Pourya Samimi", role: "Back-end Developer" },
      ],
    },
    services: {
      kicker: "Services",
      title: "Our Services",
      items: [
        {
          title: "Web Design",
          description:
            "Modern, responsive websites and web applications built for performance and scale.",
        },
        {
          title: "Mobile App",
          description:
            "Native-feeling mobile experiences designed and engineered end to end.",
        },
        {
          title: "Automation Tools",
          description:
            "Custom automation and smart marine tooling for more efficient operations.",
        },
      ],
    },
    work: {
      kicker: "Developers Portfolio",
      title: "Our Works",
      items: [
        {
          slug: "rozhn-cafe",
          name: "Rozhn Cafe",
          role: "Full-Stack Ordering Platform",
          description:
            "A complete online menu and ordering platform for a real cafe — customers browse the menu and order at the table by QR code, while an admin dashboard handles orders, sales reports, and customer data, all backed by a serverless database.",
          techStack: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Upstash Redis",
            "Vercel",
          ],
          githubUrl: "https://github.com/Habibollah-Atashbahar/rozhn-cafe",
          liveUrl: "https://rozhn-cafe.vercel.app",
          accent: "coffee",
        },
        {
          slug: "habibollah-ab",
          name: "Habibollah AB",
          role: "Full-Stack Developer",
          description:
            "Personal engineering profile and open-source work by Habibollah Atashbahar, focused on modern frontend engineering with React, Next.js, and TypeScript, alongside backend fundamentals in Rust and PostgreSQL.",
          techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Rust",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/Habibollah-Atashbahar",
          accent: "ocean",
        },
        {
          slug: "pourya-samimi",
          name: "Pourya Samimi",
          role: "Back-End Developer",
          description:
            "Backend engineering work by Pourya Samimi, covering server-side systems, APIs, and database design that power Maka's products.",
          techStack: ["Python", "Django", "FastAPI", "Go"],
          githubUrl: "https://github.com/itpourya",
          accent: "violet",
        },
      ],
      detail: {
        back: "Back to Work",
        techStack: "Tech Stack",
        github: "View on GitHub",
        live: "Visit Live Site",
      },
    },
    contact: {
      kicker: "Contact",
      title: "Contact With Us",
      name: "Enter your name",
      email: "Enter your email",
      message: "Enter your message",
      submit: "Submit Now",
      sending: "Sending...",
      success: "Your message was sent successfully.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      rights: "MAKA — All rights reserved.",
      madeBy: "Built by Habibollah Atashbahar",
    },
    a11y: {
      toggleTheme: "Toggle dark mode",
      toggleLocale: "Switch to Persian",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
  fa: {
    meta: {
      title: "ماکا | تیم توسعه‌دهندگان نرم‌افزار",
      description:
        "ماکا یک تیم توسعه است که در ساخت اپلیکیشن‌های وب و سیستم‌های هوشمند دریایی تخصص دارد.",
    },
    nav: {
      home: "خانه",
      about: "درباره ما",
      services: "خدمات",
      work: "نمونه‌کارها",
      contact: "تماس",
      contactCta: "تماس با ما",
    },
    header: {
      greeting: "تیم ماکا",
      title: "تیم توسعه‌دهندگان نرم‌افزار",
      description:
        "ماکا یک تیم توسعه است که در ساخت اپلیکیشن‌های وب و سیستم‌های هوشمند دریایی تخصص دارد.",
      cta: "تماس با ما",
    },
    about: {
      kicker: "معرفی",
      title: "درباره ماکا",
      paragraph:
        "ماکا یک تیم مهندسی نرم‌افزار متعهد است که در توسعه‌ی وب مدرن و فناوری‌های هوشمند دریایی تخصص دارد. ما اپلیکیشن‌های وب مقیاس‌پذیر و کارآمد برای کسب‌وکارها طراحی و می‌سازیم و هم‌زمان روی پروژه‌ی داخلی خودمان در زمینه‌ی سیستم‌های هوشمند برای شناورهای دریایی کار می‌کنیم. ماموریت ما ترکیب مهندسی تمیز، نوآوری کاربردی و حل مسئله‌ی واقعی است تا راهکارهایی بسازیم که هم قدرتمند و هم معنادار باشند.",
      toolsTitle: "ابزارهایی که استفاده می‌کنیم",
      team: [
        { name: "حبیب‌الله آتش‌بهار", role: "توسعه‌دهنده فرانت‌اند و بک‌اند" },
        { name: "پوریا صمیمی", role: "توسعه‌دهنده بک‌اند" },
      ],
    },
    services: {
      kicker: "خدمات",
      title: "خدمات ما",
      items: [
        {
          title: "طراحی وب",
          description:
            "وب‌سایت‌ها و اپلیکیشن‌های وب مدرن و واکنش‌گرا با تمرکز بر عملکرد و مقیاس‌پذیری.",
        },
        {
          title: "اپلیکیشن موبایل",
          description:
            "تجربه‌های موبایل روان و حرفه‌ای، طراحی و توسعه‌یافته از ابتدا تا انتها.",
        },
        {
          title: "ابزارهای اتوماسیون",
          description:
            "ابزارهای اتوماسیون سفارشی و سیستم‌های هوشمند دریایی برای عملیات کارآمدتر.",
        },
      ],
    },
    work: {
      kicker: "نمونه‌کار توسعه‌دهندگان",
      title: "نمونه‌کارهای ما",
      items: [
        {
          slug: "rozhn-cafe",
          name: "کافه رژن",
          role: "پلتفرم سفارش آنلاین فول‌استک",
          description:
            "یک پلتفرم کامل منوی آنلاین و سفارش‌گیری برای یک کافه‌ی واقعی — مشتری‌ها منو را می‌بینند و سر میز با اسکن QR سفارش می‌دهند، و یک پنل مدیریت، سفارش‌ها، گزارش فروش و اطلاعات مشتری‌ها را با یک دیتابیس سرورلس مدیریت می‌کند.",
          techStack: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Upstash Redis",
            "Vercel",
          ],
          githubUrl: "https://github.com/Habibollah-Atashbahar/rozhn-cafe",
          liveUrl: "https://rozhn-cafe.vercel.app",
          accent: "coffee",
        },
        {
          slug: "habibollah-ab",
          name: "حبیب‌الله آتش‌بهار",
          role: "توسعه‌دهنده فرانت‌اند و بک‌اند",
          description:
            "پروفایل مهندسی و پروژه‌های متن‌باز حبیب‌الله آتش‌بهار، با تمرکز بر توسعه‌ی فرانت‌اند مدرن با React، Next.js و TypeScript، در کنار مبانی بک‌اند با Rust و PostgreSQL.",
          techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "Rust",
            "PostgreSQL",
          ],
          githubUrl: "https://github.com/Habibollah-Atashbahar",
          accent: "ocean",
        },
        {
          slug: "pourya-samimi",
          name: "پوریا صمیمی",
          role: "توسعه‌دهنده بک‌اند",
          description:
            "پروژه‌های مهندسی بک‌اند پوریا صمیمی، شامل سیستم‌های سمت سرور، API و طراحی دیتابیس که پشت محصولات ماکا کار می‌کنند.",
          techStack: ["Python", "Django", "FastAPI", "Go"],
          githubUrl: "https://github.com/itpourya",
          accent: "violet",
        },
      ],
      detail: {
        back: "بازگشت به نمونه‌کارها",
        techStack: "پشته‌ی فناوری",
        github: "مشاهده در گیت‌هاب",
        live: "مشاهده‌ی سایت زنده",
      },
    },
    contact: {
      kicker: "تماس",
      title: "با ما در تماس باشید",
      name: "نام خود را وارد کنید",
      email: "ایمیل خود را وارد کنید",
      message: "پیام خود را بنویسید",
      submit: "ارسال پیام",
      sending: "در حال ارسال...",
      success: "پیام شما با موفقیت ارسال شد.",
      error: "مشکلی پیش آمد. دوباره تلاش کنید.",
    },
    footer: {
      rights: "ماکا — تمامی حقوق محفوظ است.",
      madeBy: "ساخته‌شده توسط حبیب‌الله آتش‌بهار",
    },
    a11y: {
      toggleTheme: "تغییر حالت شب و روز",
      toggleLocale: "Switch to English",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
    },
  },
} as const;
