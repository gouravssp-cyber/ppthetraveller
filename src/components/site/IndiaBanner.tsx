import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Camera, MapPin, MessageCircle, Compass } from "lucide-react";
import indiaMap from "@/assets/banner-india-map.png";

const features = [
  { icon: Mountain, label: "Diverse\nDestinations" },
  { icon: Camera, label: "Rich Cultures\n& Heritage" },
  { icon: MapPin, label: "Unforgettable\nExperiences" },
];

export const IndiaBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="relative rounded-3xl bg-card shadow-elevated border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 items-center p-8 md:p-12 lg:p-16">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Mountain className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold tracking-[0.2em] text-primary">INCREDIBLE INDIA</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] mb-1">
                Explore India.
              </h2>
              <p className="font-script text-5xl md:text-6xl text-primary leading-tight mb-3">
                Endless Memories.
              </p>
              <div className="h-1 w-16 bg-primary rounded-full mb-8" />

              <div className="flex flex-wrap gap-x-6 gap-y-4 mb-9">
                {features.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <p className="text-sm font-semibold text-secondary whitespace-pre-line leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="xl">
                  <Compass className="h-5 w-5" /> Explore India Packages
                </Button>
                <Button variant="outline" size="xl" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="h-5 w-5" /> Plan on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <img src={indiaMap} alt="Illustrated map of India with iconic landmarks" loading="lazy" width={1280} height={1280} className="w-full h-auto max-w-[520px] mx-auto" />
              {/* doodle accents */}
              <span className="absolute top-6 left-6 text-primary text-xl">☀</span>
              <span className="absolute top-12 right-10 text-muted-foreground/50 text-sm">~~</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
