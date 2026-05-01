import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, Plus, Minus, MessageCircle, Plane, ShieldCheck, Headphones, Star, ArrowRight } from "lucide-react";
import traveler from "@/assets/faq-traveler.jpg";

const faqs = [
  { q: "How do I book a tour package?", a: "You can book a package directly on our website by selecting your preferred tour and filling in your details. Our team will connect with you to confirm your booking and share all the details." },
  { q: "Can I customize my tour package?", a: "Absolutely. Every itinerary can be tailored to your dates, pace, hotel category, and inclusions. Just share your wishlist with our travel designer." },
  { q: "What is included in the tour package?", a: "Standard packages include accommodation, daily breakfast, transfers and sightseeing. Flights, visa, and meals can be added on request." },
  { q: "What is the cancellation policy?", a: "Cancellations are free up to 30 days before departure. Within 30 days, charges apply as per the booking terms shared at confirmation." },
  { q: "Do you provide travel insurance?", a: "Yes, we partner with leading insurers and can add comprehensive travel insurance to any booking for a small additional fee." },
  { q: "How can I contact customer support?", a: "Reach us 24×7 via WhatsApp, phone, or email. Our on-trip concierge is available to help during your journey as well." },
];

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-primary/40" />
            <Plane className="h-4 w-4 text-primary -rotate-12" />
            <span className="text-sm font-bold tracking-[0.25em] text-primary">FAQS</span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-3">Everything you need to know for a smooth and memorable journey.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated h-[560px]">
              <img src={traveler} alt="Traveler at lake" loading="lazy" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/30 to-secondary/40" />

              <div className="absolute top-6 inset-x-6 bg-card/95 backdrop-blur rounded-2xl p-5">
                <h3 className="text-xl font-extrabold text-secondary mb-1">Still have questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">We're here to help!</p>
                <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </Button>
              </div>

              <div className="absolute bottom-6 inset-x-6 bg-card/95 backdrop-blur rounded-2xl p-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <ShieldCheck className="h-5 w-5 text-primary mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-secondary leading-tight">Safe & Trusted Travel</p>
                </div>
                <div className="border-x border-border">
                  <Headphones className="h-5 w-5 text-primary mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-secondary leading-tight">24x7 Travel Support</p>
                </div>
                <div>
                  <Star className="h-5 w-5 text-primary mx-auto mb-1 fill-primary" />
                  <p className="text-[11px] font-bold text-secondary leading-tight">10,000+ Happy Travelers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`bg-card border rounded-2xl overflow-hidden transition-all ${isOpen ? "border-primary shadow-card" : "border-border"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-primary" : "text-primary/70"}`} />
                    <span className={`flex-1 font-bold ${isOpen ? "text-primary" : "text-secondary"}`}>{f.q}</span>
                    {isOpen ? <Minus className="h-5 w-5 text-primary" /> : <Plus className="h-5 w-5 text-secondary" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pl-14 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Headphones className="h-5 w-5 text-primary" />
          </span>
          <p className="font-bold text-secondary">Can't find what you're looking for?</p>
          <p className="text-muted-foreground">Our support team is ready to assist you.</p>
          <a href="#contact" className="text-primary font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
