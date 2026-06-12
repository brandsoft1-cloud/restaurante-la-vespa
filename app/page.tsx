import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { MenuSection } from "@/components/MenuSection";
import { QuoteBanner } from "@/components/QuoteBanner";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Reservation } from "@/components/Reservation";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MenuSection />
        <QuoteBanner />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Visit />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
