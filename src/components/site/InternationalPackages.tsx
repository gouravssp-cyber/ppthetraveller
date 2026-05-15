import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Plane, Bed, Utensils, Camera, Star, ArrowRight, Globe, Landmark, Building2, Trees, Waves } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import paris from "@/assets/intl-paris.jpg";
import bali from "@/assets/intl-bali.jpg";
import dubai from "@/assets/intl-dubai.jpg";
import sydney from "@/assets/intl-sydney.jpg";

const tabs = [
  { key: "all", label: "All Packages", icon: Globe },
  { key: "europe", label: "Europe", icon: Landmark },
  { key: "asia", label: "Asia", icon: Building2 },
  { key: "me", label: "Middle East", icon: Building2 },
  { key: "africa", label: "Africa", icon: Trees },
  { key: "oceania", label: "Oceania", icon: Waves },
];

const packages = [
  { tag: "EUROPE", name: "European Highlights", places: "Paris • Switzerland • Italy", img: paris, nights: "7 Nights / 8 Days", price: "₹1,29,999", rating: 4.8, reviews: 320, cat: "europe" },
  { tag: "ASIA", name: "Bali Bliss", places: "Bali • Ubud • Nusa Dua", img: bali, nights: "5 Nights / 6 Days", price: "₹69,999", rating: 4.7, reviews: 210, cat: "asia" },
  { tag: "MIDDLE EAST", name: "Dubai Explorer", places: "Dubai • Abu Dhabi", img: dubai, nights: "4 Nights / 5 Days", price: "₹74,999", rating: 4.6, reviews: 180, cat: "me" },
  { tag: "OCEANIA", name: "Australia Discovery", places: "Sydney • Melbourne • Gold Coast", img: sydney, nights: "6 Nights / 7 Days", price: "₹1,49,999", rating: 4.9, reviews: 150, cat: "oceania" },
];

export const InternationalPackages = () => {
  const [active, setActive] = useState("all");
  const list = active === "all" ? packages : packages.filter((p) => p.cat === active);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-primary/40" />
            <Plane className="h-4 w-4 text-primary -rotate-12" />
            <span className="text-sm font-bold tracking-[0.2em] text-primary">EXPLORE THE WORLD</span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">International Tour Packages</h2>
          <p className="text-muted-foreground mt-3">Handpicked destinations, unforgettable experiences.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                active === key
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card text-secondary border-border hover:border-primary hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="px-2">
          <CarouselContent className="-ml-6">
          {list.map((p) => (
            <CarouselItem key={p.name} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4">
            <article className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-card/95 text-primary text-[10px] font-bold tracking-wider px-3 py-1 rounded-md">{p.tag}</span>
                <button aria-label="Save" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/95 flex items-center justify-center hover:text-primary">
                  <Heart className="h-4 w-4" />
                </button>
                <span className="absolute bottom-3 left-3 bg-card/95 backdrop-blur text-secondary text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Camera className="h-3 w-3 text-primary" /> {p.nights}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-secondary">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{p.places}</p>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground border-y border-border py-3 mb-3">
                  <span className="flex items-center gap-1"><Plane className="h-3 w-3" />Flights</span>
                  <span className="flex items-center gap-1"><Bed className="h-3 w-3" />Stay</span>
                  <span className="flex items-center gap-1"><Utensils className="h-3 w-3" />Meals</span>
                  <span className="flex items-center gap-1"><Camera className="h-3 w-3" />Sights</span>
                </div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-2xl font-extrabold text-primary mb-3">{p.price} <span className="text-xs font-medium text-muted-foreground">/ Per Person</span></p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-4 w-4 fill-primary text-primary" /> <strong className="text-secondary">{p.rating}</strong> ({p.reviews})
                  </span>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </article>
            </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="xl" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Globe className="h-5 w-5" /> View All International Packages <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
