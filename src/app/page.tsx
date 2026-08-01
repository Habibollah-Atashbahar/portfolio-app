import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

// این صفحه سرور-رندر است (بدون "use client")؛ فقط کامپوننت‌های داخلی که واقعاً
// نیاز به تعامل دارند (تم، زبان، انیمیشن) کلاینتی هستند. این جدا‌سازی حجم
// جاوااسکریپت اولیه‌ی صفحه را کم می‌کند و اولین رندر را سریع‌تر می‌کند.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
