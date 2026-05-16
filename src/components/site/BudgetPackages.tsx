import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Clock, Bed, Utensils, MessageCircle, ArrowRight, Tag, LayoutGrid, ShieldCheck, Users, Headphones, CalendarCheck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import goa from "@/assets/dom-goa.jpg";
import manali from "@/assets/dom-manali.jpg";
import kerala from "@/assets/bud-kerala.jpg";
import chardham from "@/assets/pil-chardham.jpg";

const tabs = [
  { key: "all", label: "All Packages", icon: LayoutGrid },
  { key: "15k", label: "Under ₹15K", icon: Tag },
  { key: "30k", label: "Under ₹30K", icon: Tag },
  { key: "50k", label: "Upto ₹50K", icon: Tag },
  { key: "more", label: "More than ₹50K", icon: Tag },
];

const packages = [
  { tag: "UNDER ₹15,000", name: "Goa Beach Getaway", price: "₹9,999", duration: "3D / 2N", breakfast: "2 Breakfast", location: "Goa", img: goa, cat: "15k" },
  { tag: "UNDER ₹30,000", name: "Manali Adventure", price: "₹22,999", duration: "4D / 3N", breakfast: "3 Breakfast", location: "Manali", img: manali, cat: "30k" },
  { tag: "UPTO ₹50,000", name: "Kerala Backwaters", price: "₹42,999", duration: "5D / 4N", breakfast: "4 Breakfast", location: "Kerala", img: kerala, cat: "50k" },
  { tag: "MORE THAN ₹50,000", name: "Kedarnath Yatra", price: "₹55,999", duration: "6D / 5N", breakfast: "4 Breakfast", location: "Uttarakhand", img: chardham, cat: "more" },
];

const perks = [
  { icon: ShieldCheck, title: "Best Price Guarantee", desc: "Get the best deals for every budget" },
  { icon: Users, title: "Trusted by Travelers", desc: "50,000+ happy travelers across India" },
  { icon: Headphones, title: "24x7 Travel Support", desc: "We're here to help you anytime" },
  { icon: CalendarCheck, title: "Easy & Flexible Booking", desc: "Book with confidence, cancel with ease" },
];

export const BudgetPackages = () => {
  const [active, setActive] = useState("all");
  const list = active === "all" ? packages : packages.filter((p) => p.cat === active);

  return (
    <section className="py-14 bg-muted/30 relative overflow-hidden">
      {/* decorative dotted line */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 1200 800" fill="none">
        <path d="M0 600 Q 300 400 600 600 T 1200 500" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 8" />
      </svg>

      <div className="container relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-primary/40" />
            <Tag className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold tracking-[0.2em] text-primary">TRAVEL MORE, SPEND SMART</span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">Budget Friendly Tour Packages</h2>
          <p className="text-muted-foreground mt-3">Amazing destinations. Comfortable stays. Best prices for every budget.</p>
        </div>

        {/* Pill tabs in card */}
        <div className="flex hidden md:flex justify-center mb-4">
          <div className="inline-flex flex-wrap items-center gap-1 bg-card border border-border rounded-full p-1.5 shadow-card">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === key ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-secondary"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-10">Showing <strong className="text-primary">{list.length}</strong> packages</p>

        <Carousel opts={{ align: "start", loop: true }} className="px-2">
          <CarouselContent className="-ml-6">
          {list.map((p) => (
            <CarouselItem key={p.name} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4">
            <article className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-card/95 text-primary text-[10px] font-bold tracking-wider px-3 py-1 rounded-md border border-primary/30">{p.tag}</span>
                <button aria-label="Save" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/95 flex items-center justify-center hover:text-primary">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-lg text-secondary">{p.name}</h3>
                <p className="text-2xl font-extrabold text-primary mt-1 mb-3">{p.price} <span className="text-xs font-medium text-muted-foreground">/ person</span></p>
                <div className="grid grid-cols-3 gap-2 text-[11px] border-y border-border py-3 mb-3">
                  <div>
                    <p className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" />Duration</p>
                    <p className="font-bold text-secondary">{p.duration}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-muted-foreground"><Bed className="h-3 w-3" />Stay</p>
                    <p className="font-bold text-secondary">Included</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-muted-foreground"><Utensils className="h-3 w-3" />Meals</p>
                    <p className="font-bold text-secondary">{p.breakfast}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  <MessageCircle className="h-4 w-4" /> Explore Trip <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
            </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Bottom perks strip */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-card">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-secondary text-sm">{title}</p>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
