import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrendingDestinations } from "@/components/site/TrendingDestinations";
import { AboutTravel } from "@/components/site/AboutTravel";
import { TravelThemes } from "@/components/site/TravelThemes";
import { IndiaBanner } from "@/components/site/IndiaBanner";
import { DomesticPackages } from "@/components/site/DomesticPackages";
import { PilgrimPackages } from "@/components/site/PilgrimPackages";
import { HoneymoonPackages } from "@/components/site/HoneymoonPackages";
import { InternationalBanner } from "@/components/site/InternationalBanner";
import { InternationalPackages } from "@/components/site/InternationalPackages";
import { BudgetPackages } from "@/components/site/BudgetPackages";
import { SupportSection } from "@/components/site/SupportSection";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { PerfectTripCTA } from "@/components/site/PerfectTripCTA";
import { BookingSection } from "@/components/site/BookingSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import TourDetailsPage from "@/components/site/TourDetailsPage";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      {/* <TourDetailsPage/> */}
      <Hero />
      <TrendingDestinations />
      <AboutTravel />
      <TravelThemes />
      <IndiaBanner />
      <DomesticPackages />
      <PilgrimPackages />
      <HoneymoonPackages />
      <InternationalBanner />
      <InternationalPackages />
      <BudgetPackages />
      <SupportSection />
      <Testimonials />
      <FAQ />
      <PerfectTripCTA />
      <BookingSection />
      <SiteFooter />
    </main>
  );
};

export default Index;
