import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrendingDestinations } from "@/components/site/TrendingDestinations";
import { AboutTravel } from "@/components/site/AboutTravel";
import { TravelThemes } from "@/components/site/TravelThemes";
import { IndiaBanner } from "@/components/site/IndiaBanner";
import { HoneymoonPackages } from "@/components/site/HoneymoonPackages";
import { InternationalBanner } from "@/components/site/InternationalBanner";
import { SupportSection } from "@/components/site/SupportSection";
import { Testimonials } from "@/components/site/Testimonials";
import { PerfectTripCTA } from "@/components/site/PerfectTripCTA";
import { BookingSection } from "@/components/site/BookingSection";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <TrendingDestinations />
      <AboutTravel />
      <TravelThemes />
      <IndiaBanner />
      <HoneymoonPackages />
      <InternationalBanner />
      <SupportSection />
      <Testimonials />
      <PerfectTripCTA />
      <BookingSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
