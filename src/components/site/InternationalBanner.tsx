import { Button } from "@/components/ui/button";
import { Plane, Globe, Award, ShieldCheck, MessageCircle, Compass } from "lucide-react";
import banner from "@/assets/banner-international.jpg";

const features = [
  { icon: Globe, label: "Handpicked\nDestinations" },
  { icon: Award, label: "Unforgettable\nExperiences" },
  { icon: ShieldCheck, label: "Safe & Trusted\nTravel" },
];

export const InternationalBanner = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="relative rounded-3xl shadow-elevated overflow-hidden border border-border">
          <div className="grid lg:grid-cols-2">
            {/* Left content */}
            <div className="bg-card p-8 md:p-12 lg:p-14 relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="h-px w-8 bg-primary/40" />
                <Plane className="h-4 w-4 text-primary -rotate-12" />
                <span className="text-sm font-bold tracking-[0.25em] text-primary">INTERNATIONAL TOURS</span>
                <span className="h-px w-8 bg-primary/40" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05]">
                The World
              </h2>
              <p className="font-script text-5xl md:text-6xl text-primary leading-tight mb-3">
                Awaits You.
              </p>
              <div className="h-1 w-16 bg-primary rounded-full mb-8" />

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-9">
                {features.map(({ icon: Icon, label }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="h-12 w-12 rounded-full border border-border flex items-center justify-center">
                      <Icon className="h-5 w-5 text-secondary" />
                    </span>
                    <p className="text-sm font-semibold text-secondary whitespace-pre-line leading-tight">{label}</p>
                    {i < features.length - 1 && <span className="hidden sm:block h-8 w-px bg-border ml-2" />}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="xl">
                  <Compass className="h-5 w-5" /> Explore International Tours
                </Button>
                <Button variant="outline" size="xl" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <MessageCircle className="h-5 w-5" /> Plan on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[320px] lg:min-h-full">
              <img src={banner} alt="Santorini cliffside at golden hour" loading="lazy" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
