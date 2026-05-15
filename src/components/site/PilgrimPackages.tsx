import { Button } from "@/components/ui/button";
import { Heart, Bed, Landmark, Utensils, Bus, ArrowRight, Phone, Headphones, ShieldCheck, CalendarCheck, Flower2, Star, MessageCircle, Plane } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import chardham from "@/assets/pil-chardham.jpg";
import vaishno from "@/assets/pil-vaishno.jpg";
import rameshwaram from "@/assets/pil-rameshwaram.jpg";
import jyotirlinga from "@/assets/pil-jyotirlinga.jpg";

const features = [
  { icon: Flower2, title: "Sacred Destinations", desc: "Across India" },
  { icon: ShieldCheck, title: "Safe & Comfortable", desc: "Your Safety, Our Priority" },
  { icon: Headphones, title: "24x7 Travel Support", desc: "Always With You" },
  { icon: CalendarCheck, title: "Hassle-free Booking", desc: "Easy & Flexible" },
];

const packages = [
  { duration: "6D / 5N", tag: "CHAR DHAM YATRA", name: "Char Dham Yatra", places: "Yamunotri • Gangotri • Kedarnath • Badrinath", img: chardham, price: "₹24,999", extras: ["Stay", "Darshan", "Meals", "Transfers"] },
  { duration: "5D / 4N", tag: "VAISHNO DEVI YATRA", name: "Vaishno Devi Yatra", places: "Katra • Vaishno Devi", img: vaishno, price: "₹16,999", extras: ["Stay", "Darshan", "Meals", "Helicopter"] },
  { duration: "4D / 3N", tag: "RAMESHWARAM YATRA", name: "Rameshwaram Yatra", places: "Rameshwaram • Dhanushkodi • Madurai", img: rameshwaram, price: "₹13,999", extras: ["Stay", "Darshan", "Meals", "Transfers"] },
  { duration: "5D / 4N", tag: "JYOTIRLINGA DARSHAN", name: "Jyotirlinga Darshan", places: "Somnath • Dwarka • Nageshwar • Trimbakeshwar", img: jyotirlinga, price: "₹17,999", extras: ["Stay", "Darshan", "Meals", "Transfers"] },
];

export const PilgrimPackages = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Decorative temple silhouettes */}
      <div className="absolute inset-x-0 top-0 h-40 opacity-[0.06] pointer-events-none bg-[radial-gradient(circle_at_10%_80%,hsl(var(--primary))_0%,transparent_30%),radial-gradient(circle_at_90%_80%,hsl(var(--primary))_0%,transparent_30%)]" />

      <div className="container relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="text-primary">‖</span>
            <Flower2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold tracking-[0.2em] text-primary">DIVINE JOURNEYS, BLESSED MEMORIES</span>
            <Flower2 className="h-5 w-5 text-primary" />
            <span className="text-primary">‖</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">Top 4 Pilgrim Tour Packages of India</h2>
          <p className="text-muted-foreground mt-3">Seek blessings. Discover peace. Create memories for a lifetime.</p>
        </div>

        {/* Feature strip */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-secondary">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
              {i < features.length - 1 && <span className="hidden md:block h-8 w-px bg-border ml-6" />}
            </div>
          ))}
        </div>

        {/* Cards Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="px-2">
          <CarouselContent className="-ml-6">
          {packages.map((p) => (
            <CarouselItem key={p.name} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/4">
            <article className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-md">{p.duration}</span>
                <button aria-label="Save" className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/95 flex items-center justify-center hover:text-primary">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full mb-3">
                  <Flower2 className="h-3 w-3" /> {p.tag}
                </span>
                <h3 className="font-extrabold text-lg text-secondary">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{p.places}</p>
                <div className="flex items-center gap-3 flex-wrap text-[11px] text-muted-foreground border-y border-border py-3 mb-3">
                  {p.extras.map((e, i) => (
                    <span key={i} className="flex items-center gap-1">
                      {i === 0 ? <Bed className="h-3 w-3" /> : i === 1 ? <Landmark className="h-3 w-3" /> : i === 2 ? <Utensils className="h-3 w-3" /> : <Bus className="h-3 w-3" />}
                      {e}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-2xl font-extrabold text-primary mb-3">{p.price} <span className="text-xs font-medium text-muted-foreground">Per Person</span></p>
                <Button variant="outline" size="sm" className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </article>
            </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-5 md:p-6 grid md:grid-cols-3 gap-4 items-center shadow-card">
          <div className="flex items-center gap-4 md:col-span-1">
            <span className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-secondary">Need Help Choosing the Right Pilgrimage?</p>
              <p className="text-xs text-muted-foreground">Talk to our travel expert and get the best recommendation.</p>
            </div>
          </div>
          <div className="md:col-span-1 flex md:justify-center">
            <Button variant="hero" size="lg">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <div className="flex -space-x-2">
              {["A", "P", "M", "R"].map((c, i) => (
                <div key={i} className="h-9 w-9 rounded-full bg-gradient-sunset border-2 border-card flex items-center justify-center text-white text-xs font-bold">{c}</div>
              ))}
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Trusted by</p>
              <p className="font-bold text-secondary text-sm">50,000+ Devotees</p>
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
