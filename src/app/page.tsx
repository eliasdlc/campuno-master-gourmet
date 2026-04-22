import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee";
import { Locations } from "@/components/sections/locations";
import { MenuSection } from "@/components/sections/menu-section";
import { Ambiance } from "@/components/sections/ambiance";
import { Events } from "@/components/sections/events";
import { Reservations } from "@/components/sections/reservations";
import { Testimonials } from "@/components/sections/testimonials";
import { MapSection } from "@/components/sections/map-section";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Locations />
        <MenuSection />
        <Ambiance />
        <Events />
        <Reservations />
        <Testimonials />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
