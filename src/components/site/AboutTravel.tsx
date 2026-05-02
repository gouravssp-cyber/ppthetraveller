import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import santorini from "@/assets/about-santorini.jpg";
import beach from "@/assets/about-beach.jpg";
import photographer from "@/assets/about-photographer.jpg";

const points = [
  "Handpicked stays & curated routes",
  "Local experts on every itinerary",
  "Transparent pricing, no surprises",
  "24×7 on-trip concierge support",
  "Flexible cancellations & reschedules",
  "Tailor-made for couples, families & solos",
];

export const AboutTravel = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative dotted lines */}
      <svg className="absolute left-0 bottom-10 w-[480px] opacity-[0.08] text-primary hidden lg:block" viewBox="0 0 400 200" fill="none" aria-hidden>
        <path d="M0 180 Q 100 80 200 140 T 400 60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
        <path d="M0 120 Q 120 40 240 100 T 400 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
      </svg>

      <div className="container relative grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <p className="font-script text-2xl text-primary mb-2">We Are PP The Traveller</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary leading-[1.1] mb-5">
            Why Choose <br/> PP The Traveller
          </h2>
          <p className="text-muted-foreground text-base mb-4 max-w-lg">
            From the misty hills of Meghalaya to the temples and beaches of Thailand — we craft innovative tour plans suited to your interests, with expert guides and flexible payment options.
          </p>
          <p className="text-muted-foreground text-base mb-8 max-w-lg">
            3,500+ happy travelers, 3,400+ successful tours and 98% positive reviews. Tailor-made packages, high-quality management and 24/7 support.
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-9">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-secondary font-medium">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <Button variant="hero" size="xl">
            View More <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Right: image collage */}
        <div className="relative h-[560px] animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="absolute top-0 right-0 w-[78%] h-[64%] rounded-3xl overflow-hidden shadow-elevated">
            <img src={santorini} alt="Coastal village at twilight" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-[48%] h-[42%] rounded-3xl overflow-hidden shadow-elevated border-4 border-background">
            <img src={beach} alt="Tropical beach with overwater huts" loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-6 right-6 w-[44%] h-[50%] rounded-3xl overflow-hidden shadow-elevated ring-4 ring-primary/80">
            <img src={photographer} alt="Traveler with camera at golden hour" loading="lazy" width={800} height={1000} className="h-full w-full object-cover" />
          </div>

          {/* Floating accent triangles */}
          <div className="hidden lg:flex absolute -right-2 top-2 flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-primary opacity-90" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
