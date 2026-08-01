import type { Metadata, Viewport } from "next";
import { Outfit, Ovo } from "next/font/google";
import "@fontsource-variable/vazirmatn/wght.css";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider, themeInitScript } from "@/context/ThemeContext";
import Analytics from "@/components/Analytics";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.makateam.ir"),
  title: "Maka | Software Developers Team",
  description:
    "Maka is a development team specializing in web applications and smart marine systems.",
  openGraph: {
    title: "Maka | Software Developers Team",
    description:
      "Maka is a development team specializing in web applications and smart marine systems.",
    url: "https://www.makateam.ir",
    siteName: "Maka",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maka | Software Developers Team",
    description:
      "Maka is a development team specializing in web applications and smart marine systems.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5faff" },
    { media: "(prefers-color-scheme: dark)", color: "#071426" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${ovo.variable} bg-canvas font-sans text-ink antialiased overflow-x-hidden`}
      >
        {/* اسکریپت مسدودکننده‌ی تم — قبل از رندر React اجرا می‌شود تا هیچ پرش رنگی دیده نشود */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
