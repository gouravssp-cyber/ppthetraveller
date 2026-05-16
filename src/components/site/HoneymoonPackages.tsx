import { Heart, Gift, ShieldCheck, Headphones, Bed, Coffee, Calendar, MapPin, Star, MessageCircle, ArrowRight, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import maldives from "@/assets/pkg-maldives.jpg";
import switzerland from "@/assets/pkg-switzerland.jpg";
import greece from "@/assets/pkg-greece.jpg";
import promoBannerImage from "@/assets/honeymoon-promo.jpg"; // Add your promo image

const packages = [
  { tag: "MOST POPULAR", title: "Maldives Paradise", location: "Maldives", rating: 4.8, reviews: 320, days: "5D / 4N", stay: "Luxury Stay", meal: "Breakfast", price: "₹49,999", img: maldives },
  { tag: "BEST VALUE", title: "Switzerland Romance", location: "Switzerland", rating: 4.7, reviews: 218, days: "6D / 5N", stay: "Comfort Stay", meal: "Breakfast", price: "₹89,999", img: switzerland },
  { tag: "PREMIUM", title: "Greece Romantic Escape", location: "Greece", rating: 4.9, reviews: 156, days: "7D / 6N", stay: "Luxury Stay", meal: "Breakfast", price: "₹1,29,999", img: greece },
];

export const HoneymoonPackages = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 mb-8">

          {/* LEFT: Promotional Banner */}
          <PromoBanner />

          {/* RIGHT: Content Area */}
          <div className="space-y-8">

            {/* Header Section */}
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center justify-center lg:justify-start gap-2 font-semibold text-sm text-primary uppercase tracking-wider mb-4">
                <span className="h-px w-8 bg-primary/40" />
                <Heart className="h-4 w-4 fill-primary" /> For the new beginning
                <span className="h-px w-8 bg-primary/40" />
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Honeymoon{" "}
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Tour Packages
                </span>
              </h2>
              <p className="text-muted-foreground mt-3 text-base md:text-lg">
                Romantic destinations. Beautiful memories. A perfect start to forever.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Perk icon={Gift} title="Romantic Experiences" desc="Curated for Couples" />
              <Perk icon={ShieldCheck} title="Best Price Guarantee" desc="Unbeatable Deals" />
              <Perk icon={Headphones} title="24x7 Couple Support" desc="We're Always Here" />
            </div>

            {/* Package Cards Carousel */}
            <div className="relative">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-6">
                  {packages.map((p) => (
                    <CarouselItem key={p.title} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                      <PackageCard package={p} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4 top-1/2" />
                <CarouselNext className="hidden sm:flex -right-4 top-1/2" />
              </Carousel>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {packages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-2.5 rounded-full transition-all ${idx === 0 ? "w-8 bg-gradient-to-r from-pink-500 to-rose-500" : "w-2.5 bg-gray-300"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <CTABanner />
      </div>
    </section>
  );
};

// ==================== LEFT PROMO BANNER ====================
const PromoBanner = () => {
  return (
    <div className="relative h-full h-full rounded-3xl overflow-hidden shadow-xl group">
      {/* Background Image with Overlay */}
      <img
        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=800&fit=crop"
        alt="Couple on beach at sunset"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white">

        {/* Top Decorative Text */}
        <div className="space-y-1">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light italic leading-tight">
            Celebrate Love
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light italic leading-tight">
            Create Memories
          </p>
          <div className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-light italic leading-tight">
            <span>That Last Forever</span>
            <Heart className="h-6 w-6 sm:h-7 sm:w-7 fill-pink-400 text-pink-400" />
          </div>
        </div>

        {/* Bottom Info Card */}
        <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-black/60 transition-colors">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shrink-0">
              <Heart className="h-5 w-5 fill-white text-white" />
            </div>
            <p className="text-sm sm:text-base leading-relaxed font-medium">
              Special honeymoon experiences crafted with love and care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== PACKAGE CARD ====================
const PackageCard = ({ package: p }) => {
  return (
    <article className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 border border-border h-full flex flex-col">
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
          {p.tag}
        </span>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md hover:shadow-lg">
          <Heart className="h-5 w-5 text-primary" />
        </button>
      </div>

      {/* Content Section */}
      <div className="px-6 pt-6 flex flex-col flex-1">
        <h3 className="text-xl font-extrabold text-foreground mb-2">{p.title}</h3>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs sm:text-sm gap-2">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {p.location}
          </span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span className="font-semibold text-foreground">{p.rating}</span>
            <span className="text-muted-foreground">({p.reviews})</span>
          </span>
        </div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-3 gap-2 py-4 border-y border-border mb-4 text-xs">
          <Spec icon={Calendar} top={p.days} bottom="Duration" />
          <Spec icon={Bed} top={p.stay} bottom="Included" />
          <Spec icon={Coffee} top={p.meal} bottom="Included" />
        </div> */}

        {/* Pricing Section */}
        <div className="flex items-end justify-between mt-auto mb-1">
          <div>
            <p className="text-xs text-muted-foreground font-medium">Starting from</p>
            <p className="text-2xl font-extrabold text-primary">
              {p.price}
              <span className="text-xs font-normal text-muted-foreground ml-1">/ couple</span>
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-primary/40 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/60 transition-all group/btn"
          >
            <span className="hidden sm:inline">View</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </article>
  );
};

// ==================== FEATURE PERK ====================
const Perk = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
    <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div className="text-center sm:text-left">
      <p className="font-bold text-sm text-foreground">{title}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  </div>
);

// ==================== SPEC ITEM ====================
const Spec = ({ icon: Icon, top, bottom }) => (
  <div className="text-center py-2">
    <Icon className="h-4 w-4 text-primary mx-auto mb-1.5" />
    <p className="font-semibold text-xs text-foreground">{top}</p>
    <p className="text-muted-foreground text-xs">{bottom}</p>
  </div>
);

// ==================== CTA BANNER ====================
const CTABanner = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8 border border-pink-100/50">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">

        {/* Left: Text Content */}
        <div className="flex items-start sm:items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shrink-0 shadow-lg">
            <Heart className="h-7 w-7 text-white fill-white" />
          </div>
          <div>
            <p className="font-bold text-base sm:text-lg text-foreground">
              Planning a surprise for your special one?
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Let our travel experts help you plan the perfect honeymoon.
            </p>
          </div>
        </div>

        {/* Center: WhatsApp Button (hidden on mobile, shown on md+) */}
        <Button className="hidden md:inline-flex bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full h-12 px-6 hover:shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all gap-2">
          <MessageCircle className="h-5 w-5" />
          <span>Chat on WhatsApp</span>
        </Button>

        {/* Right: Social Proof */}
        <div className="text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
            {/* Avatar placeholder - replace with actual images */}
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
          <p className="font-bold text-foreground text-sm">
            50,000+{" "}
            <span className="text-muted-foreground font-normal">Happy Couples</span>
          </p>
          <div className="flex items-center justify-center md:justify-end gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
        </div>

        {/* Mobile WhatsApp Button */}
        <Button className="md:hidden w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full h-12 hover:shadow-lg hover:from-pink-600 hover:to-rose-600 transition-all gap-2">
          <MessageCircle className="h-5 w-5" />
          <span>Chat on WhatsApp</span>
        </Button>
      </div>
    </div>
  );
};