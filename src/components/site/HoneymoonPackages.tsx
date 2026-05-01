import { Heart, Gift, ShieldCheck, Headphones, Bed, Coffee, Calendar, MapPin, Star, ChevronLeft, ChevronRight, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import maldives from "@/assets/pkg-maldives.jpg";
import switzerland from "@/assets/pkg-switzerland.jpg";
import greece from "@/assets/pkg-greece.jpg";

const packages = [
  { tag: "MOST POPULAR", title: "Maldives Paradise", location: "Maldives", rating: 4.8, reviews: 320, days: "5D / 4N", stay: "Luxury Stay", meal: "Breakfast", price: "₹49,999", img: maldives },
  { tag: "BEST VALUE", title: "Switzerland Romance", location: "Switzerland", rating: 4.7, reviews: 218, days: "6D / 5N", stay: "Comfort Stay", meal: "Breakfast", price: "₹89,999", img: switzerland },
  { tag: "PREMIUM", title: "Greece Romantic Escape", location: "Greece", rating: 4.9, reviews: 156, days: "7D / 6N", stay: "Luxury Stay", meal: "Breakfast", price: "₹1,29,999", img: greece },
];

export const HoneymoonPackages = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 font-semibold text-sm text-pink-600 uppercase tracking-wider">
            <span className="h-px w-8 bg-pink-300" />
            <Heart className="h-4 w-4 fill-pink-600" /> For the new beginning
            <span className="h-px w-8 bg-pink-300" />
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
            Honeymoon <span className="bg-honeymoon bg-clip-text text-transparent">Tour Packages</span>
          </h2>
          <p className="text-muted-foreground mt-3">Romantic destinations. Beautiful memories. A perfect start to forever.</p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <Perk icon={Gift} title="Romantic Experiences" desc="Curated for Couples" />
            <Perk icon={ShieldCheck} title="Best Price Guarantee" desc="Unbeatable Deals" />
            <Perk icon={Headphones} title="24x7 Couple Support" desc="We're Always Here" />
          </div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <article key={p.title} className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 border border-border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-honeymoon text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                    {p.tag}
                  </span>
                  <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-pink-600" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{p.title}</h3>
                  <div className="flex items-center justify-between text-sm mt-2 mb-4">
                    <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary"/>{p.location}</span>
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" /><span className="font-semibold">{p.rating}</span><span className="text-muted-foreground">({p.reviews})</span></span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-border text-xs">
                    <Spec icon={Calendar} top={p.days} bottom="Duration" />
                    <Spec icon={Bed} top={p.stay} bottom="Included" />
                    <Spec icon={Coffee} top={p.meal} bottom="Included" />
                  </div>
                  <div className="flex items-end justify-between mt-5">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-extrabold text-pink-600">{p.price}<span className="text-xs font-normal text-muted-foreground"> / couple</span></p>
                    </div>
                    <Button variant="outline" className="rounded-full border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card shadow-card hover:bg-pink-600 hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card shadow-card hover:bg-pink-600 hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-pink-50 dark:bg-pink-950/20 rounded-3xl p-6 md:p-8 flex flex-wrap items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-honeymoon flex items-center justify-center shrink-0">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <div>
              <p className="font-bold text-lg">Planning a surprise for your special one?</p>
              <p className="text-sm text-muted-foreground">Let our travel experts help you plan the perfect honeymoon.</p>
            </div>
          </div>
          <Button className="bg-honeymoon text-white rounded-full h-12 px-6 hover:opacity-90">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

const Perk = ({ icon: Icon, title, desc }: any) => (
  <div className="flex items-center gap-3">
    <div className="h-11 w-11 rounded-full bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center">
      <Icon className="h-5 w-5 text-pink-600" />
    </div>
    <div className="text-left">
      <p className="font-bold text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const Spec = ({ icon: Icon, top, bottom }: any) => (
  <div className="text-center">
    <Icon className="h-4 w-4 text-pink-600 mx-auto mb-1" />
    <p className="font-semibold">{top}</p>
    <p className="text-muted-foreground">{bottom}</p>
  </div>
);
