import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * اگه NEXT_PUBLIC_GA_ID تنظیم نشده باشه، این کامپوننت هیچی رندر نمی‌کنه —
 * یعنی صفر بایت اضافه و صفر تاثیر روی سرعت، تا وقتی خودت فعالش کنی.
 * strategy="afterInteractive" یعنی اسکریپت بعد از اینکه صفحه قابل تعامل شد لود می‌شه،
 * نه قبلش — پس روی سرعت اولیه‌ی نمایش صفحه هیچ تاثیری نداره.
 */
export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
