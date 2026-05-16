import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle, MapPin, Calendar, Wallet, Clock, Search, Star, Users, Headphones, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-waterfall.jpg";
import topMeghalaya from "@/assets/top-meghalaya.jpg";
import topArunachal from "@/assets/top-arunachal.jpg";
import topNagaland from "@/assets/top-nagaland.jpg";
import topManipur from "@/assets/top-manipur.jpg";

const topDest = [
  { num: "01", name: "Meghalaya", tag: "Scotland of the East", img: topMeghalaya },
  { num: "02", name: "Arunachal Pradesh", tag: "Land of the Rising Sun", img: topArunachal },
  { num: "03", name: "Nagaland", tag: "Land of Festivals", img: topNagaland },
  { num: "04", name: "Manipur", tag: "The Jewel of India", img: topManipur },
];

const stats = [
  { icon: Star, value: "4.9/5", label: "Google Rating" },
  { icon: Users, value: "10,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "50+", label: "Destinations" },
  { icon: Headphones, value: "24/7", label: "Support" },
  { icon: ShieldCheck, value: "Best Price", label: "Guarantee" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden bg-secondary text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cinematic waterfall landscape at sunset in Meghalaya"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative container pt-44 lg:pt-48 pb-32 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left content */}
          <div className="lg:col-span-7 animate-fade-up">
            <p className="font-script text-2xl text-primary mb-4">Explore. Experience. Cherish.</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-2">
              Where Every Trip
            </h1>
            <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
              Becomes a Story
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-xl">
              Personalized journeys crafted for your dream destinations. From misty mountains to tropical shores — we design the trip, you live the memories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Explore Packages <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="xl">
                Plan on WhatsApp <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right: Top destinations card */}
          <aside className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="hidden lg:block">
              <p className="text-sm text-white/70">Top Destinations in</p>
              <p className="font-script text-3xl text-primary mb-5">North East India</p>
              <div className="space-y-3">
                {topDest.map((d) => (
                  <div
                    key={d.name}
                    className="group relative flex items-center gap-4 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 p-2 pr-5 hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl">
                      <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover" width={600} height={512}/>
                      <span className="absolute top-0 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-b-md">{d.num}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{d.name}</p>
                      <p className="text-xs text-white/70 flex items-center gap-1"><MapPin className="h-3 w-3" />{d.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                Explore All Destinations <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating play button (decorative) */}
      <div className="hidden xl:flex absolute right-[44%] top-[44%] flex-col items-center gap-2 animate-float">
        <span className="font-script text-xl text-white">Watch the<br/>Meghalaya Story</span>
        <button className="h-16 w-16 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/25 transition-colors">
          <Play className="h-6 w-6 text-white fill-white ml-1" />
        </button>
      </div>

      {/* Search bar */}
      <div className="relative container -mb-10 z-10">
        <div className="bg-card text-card-foreground rounded-2xl shadow-elevated p-3 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-1">
          <SearchField icon={MapPin} label="Where to?" value="Any Destination" />
          <SearchField icon={Calendar} label="Travel Type" value="Any Type" />
          <SearchField icon={Wallet} label="Budget" value="Any Budget" />
          <SearchField icon={Clock} label="Duration" value="Any Duration" />
          <Button variant="hero" size="xl" className="w-full md:w-auto">
            <Search className="h-5 w-5" /> Search Trips
          </Button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative bg-secondary/80 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="container py-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className="h-7 w-7 text-primary shrink-0" />
              <div className="leading-tight">
                <p className="font-bold text-white">{s.value}</p>
                <p className="text-xs text-white/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SearchField = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-colors text-left">
    <Icon className="h-5 w-5 text-primary shrink-0" />
    <div className="leading-tight">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold text-sm">{value}</p>
    </div>
  </button>
);
