import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ladakh from "@/assets/dest-ladakh.jpg";
import srilanka from "@/assets/dest-srilanka.jpg";
import kashmir from "@/assets/dest-kashmir.jpg";
import bhutan from "@/assets/dest-bhutan.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import chardham from "@/assets/dest-chardham.jpg";

const domestic = [
  { name: "LADAKH", img: ladakh, font: "font-extrabold tracking-wider" },
  { name: "Kashmir", img: kashmir, font: "font-script text-5xl" },
  { name: "Char Dham", img: chardham, font: "font-script text-5xl" },
  { name: "Himachal", img: himachal, font: "font-extrabold italic tracking-wide" },
];
const international = [
  { name: "Sri Lanka", img: srilanka, font: "font-script text-5xl" },
  { name: "Bhutan", img: bhutan, font: "font-script text-5xl" },
  { name: "Maldives", img: ladakh, font: "font-extrabold tracking-wider" },
  { name: "Switzerland", img: kashmir, font: "font-script text-5xl" },
];

export const TrendingDestinations = () => {
  const [tab, setTab] = useState<"domestic" | "international">("domestic");
  const list = tab === "domestic" ? domestic : international;

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <p className="font-script text-2xl text-primary">Trending now</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary">Trending Destinations</h2>
          </div>
          <div className="flex items-center gap-2 bg-muted rounded-full p-1.5">
            <TabBtn active={tab === "domestic"} onClick={() => setTab("domestic")}>Domestic</TabBtn>
            <TabBtn active={tab === "international"} onClick={() => setTab("international")}>International</TabBtn>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {list.map((d, i) => (
              <article
                key={d.name + i}
                className="group relative aspect-[3/4] rounded-[140px_140px_24px_24px] overflow-hidden cursor-pointer shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
                <h3 className={`absolute top-6 inset-x-0 text-center text-white text-2xl drop-shadow-lg ${d.font}`}>
                  {d.name}
                </h3>
                <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <button className="w-full bg-white/90 backdrop-blur text-secondary text-sm font-semibold py-2 rounded-full flex items-center justify-center gap-1">
                    View Trips <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card shadow-card hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="hero" size="lg">Explore Now <ArrowUpRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </section>
  );
};

const TabBtn = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
      active ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {children}
  </button>
);
