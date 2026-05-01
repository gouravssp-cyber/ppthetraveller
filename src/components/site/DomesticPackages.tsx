import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Utensils, Camera, Bus, Star, ArrowRight, Globe, Mountain, Palmtree, Building2, PawPrint, Flower2, Landmark } from "lucide-react";
import darjeeling from "@/assets/dom-darjeeling.jpg";
import goa from "@/assets/dom-goa.jpg";
import manali from "@/assets/dom-manali.jpg";
import ranthambore from "@/assets/dom-ranthambore.jpg";

const tabs = [
  { key: "all", label: "All Packages", icon: Globe },
  { key: "himalayas", label: "Himalayas", icon: Mountain },
  { key: "beaches", label: "Beaches", icon: Palmtree },
  { key: "hill", label: "Hill Stations", icon: Building2 },
  { key: "wildlife", label: "Wildlife", icon: PawPrint },
  { key: "spiritual", label: "Spiritual", icon: Flower2 },
  { key: "heritage", label: "Heritage", icon: Landmark },
];

const packages = [
  { tag: "HIMALAYAS", name: "Darjeeling Delight", location: "West Bengal", img: darjeeling, nights: "5 Nights / 6 Days", price: "₹12,999", rating: 4.6, reviews: 210, cat: "himalayas" },
  { tag: "BEACHES", name: "Goa Getaway", location: "Goa", img: goa, nights: "4 Nights / 5 Days", price: "₹9,999", rating: 4.5, reviews: 180, cat: "beaches" },
  { tag: "HILL STATIONS", name: "Manali Magic", location: "Himachal Pradesh", img: manali, nights: "6 Nights / 7 Days", price: "₹14,999", rating: 4.7, reviews: 250, cat: "hill" },
  { tag: "WILDLIFE", name: "Ranthambore Safari", location: "Rajasthan", img: ranthambore, nights: "3 Nights / 4 Days", price: "₹11,999", rating: 4.6, reviews: 160, cat: "wildlife" },
];

export const DomesticPackages = () => {
  const [active, setActive] = useState("all");
  const list = active === "all" ? packages : packages.filter((p) => p.cat === active);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-primary/40" />
            <Mountain className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold tracking-[0.2em] text-primary">EXPLORE INCREDIBLE INDIA</span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">Domestic Tour Packages</h2>
          <p className="text-muted-foreground mt-3">Uncover the beauty of India, one journey at a time.</p>
        </div>

        {/* Tabs */}
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

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((p) => (
            <article key={p.name} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider px-3 py-1 rounded-md">{p.tag}</span>
                <button aria-label="Save" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/95 flex items-center justify-center hover:text-primary">
                  <Heart className="h-4 w-4" />
                </button>
                <span className="absolute bottom-3 left-3 bg-card/95 backdrop-blur text-secondary text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Camera className="h-3 w-3 text-primary" /> {p.nights}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-secondary">{p.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1 mb-3">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground border-y border-border py-3 mb-3">
                  <span className="flex items-center gap-1"><Bed className="h-3 w-3" />Stay</span>
                  <span className="flex items-center gap-1"><Utensils className="h-3 w-3" />Meals</span>
                  <span className="flex items-center gap-1"><Camera className="h-3 w-3" />Sights</span>
                  <span className="flex items-center gap-1"><Bus className="h-3 w-3" />Transport</span>
                </div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-2xl font-extrabold text-primary mb-3">{p.price} <span className="text-xs font-medium text-muted-foreground">/ Per Person</span></p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-4 w-4 fill-primary text-primary" /> <strong className="text-secondary">{p.rating}</strong> ({p.reviews} Reviews)
                  </span>
                  <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="hero" size="xl">
            <Globe className="h-5 w-5" /> View All Domestic Packages <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
