import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight, Tag, ShieldCheck, Headphones, CalendarCheck, Star, Send } from "lucide-react";
import adventurer from "@/assets/cta-adventurer.jpg";

const perks = [
  { icon: Tag, title: "Best Price Guarantee", desc: "Get the best deals always" },
  { icon: ShieldCheck, title: "Safe & Secure Travel", desc: "Your safety is our priority" },
  { icon: Headphones, title: "24/7 Travel Support", desc: "We're here for you anytime" },
  { icon: CalendarCheck, title: "Easy & Flexible Booking", desc: "Book, modify or cancel with ease" },
];

export const PerfectTripCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="relative rounded-[2rem] overflow-hidden shadow-elevated border border-border bg-gradient-to-br from-primary/5 via-card to-primary/10">
          <div className="grid lg:grid-cols-2">
            {/* Left content */}
            <div className="p-8 md:p-12 lg:p-14 relative">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-primary font-bold tracking-wide">Ready for Your Next Adventure?</p>
                <Send className="h-4 w-4 text-primary -rotate-12" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] mb-5">
                Let's Plan Your <br/> Perfect Trip!
              </h2>
              <p className="text-muted-foreground text-lg max-w-md mb-8">
                Tell us your travel dreams and we'll create an unforgettable experience just for you.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button variant="hero" size="xl">
                  <MessageCircle className="h-5 w-5" /> Chat on WhatsApp <ArrowRight className="h-5 w-5" />
                </Button>
                <a href="tel:+911234567890" className="flex items-center gap-3 bg-card border border-border rounded-full px-6 h-14 hover:border-primary transition-colors">
                  <span className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-bold text-secondary">Call Us Now</p>
                    <p className="text-sm font-semibold text-secondary">+91 123 456 7890</p>
                  </div>
                </a>
              </div>

              {/* Perks grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-border/60">
                {perks.map(({ icon: Icon, title, desc }) => (
                  <div key={title}>
                    <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <p className="font-bold text-sm text-secondary leading-tight mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[420px] lg:min-h-full">
              <img src={adventurer} alt="Traveler with arms wide open at a mountain viewpoint" loading="lazy" width={1280} height={1280} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-card to-transparent hidden lg:block" />
              <div className="absolute top-10 left-6 lg:left-2 hidden md:block">
                <p className="font-script text-3xl text-secondary leading-tight">Your journey<br/><span className="text-secondary">starts here!</span></p>
                <svg className="ml-12 -mt-1" width="120" height="10" viewBox="0 0 120 10" fill="none">
                  <path d="M2 6 Q 60 -2 118 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom trust strip */}
          <div className="border-t border-border/60 bg-card/60 backdrop-blur-sm px-8 md:px-12 py-5 grid md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "P", "M", "R", "S"].map((c, i) => (
                  <div key={i} className="h-10 w-10 rounded-full bg-gradient-sunset border-2 border-card flex items-center justify-center text-white text-xs font-bold">{c}</div>
                ))}
              </div>
              <div>
                <p className="font-bold text-secondary">50,000+ Happy Travelers</p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">4.8/5 Ratings</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 md:border-l md:border-border md:pl-6">
              <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="font-bold text-sm text-secondary">Trusted by thousands of travelers across India</p>
                <p className="text-xs text-muted-foreground">for memorable and hassle-free journeys.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
