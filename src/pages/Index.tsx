import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrendingDestinations } from "@/components/site/TrendingDestinations";
import { TravelThemes } from "@/components/site/TravelThemes";
import { HoneymoonPackages } from "@/components/site/HoneymoonPackages";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingSection } from "@/components/site/BookingSection";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <TrendingDestinations />
      <TravelThemes />
      <HoneymoonPackages />
      <Testimonials />
      <BookingSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
