import { Snowflake, Sun, CloudRain, Plane, Sparkles, ArrowRight } from "lucide-react";
import winter from "@/assets/theme-winter.jpg";
import summer from "@/assets/theme-summer.jpg";
import monsoon from "@/assets/theme-monsoon.jpg";
import intl from "@/assets/theme-international.jpg";
import spiritual from "@/assets/theme-spiritual.jpg";

const themes = [
  { icon: Snowflake, title: "Winter", subtitle: "WONDERLANDS", desc: "Snowy escapes, cozy stays & magical views.", img: winter, accent: "from-sky-500 to-blue-700" },
  { icon: Sun, title: "Summer", subtitle: "ESCAPES", desc: "Sunshine, beaches & unforgettable adventures.", img: summer, accent: "from-amber-500 to-orange-600" },
  { icon: CloudRain, title: "Monsoon", subtitle: "GETAWAYS", desc: "Green landscapes, misty hills & peaceful escapes.", img: monsoon, accent: "from-emerald-500 to-green-700" },
  { icon: Plane, title: "International", subtitle: "LUXURY", desc: "Exotic destinations & world-class experiences.", img: intl, accent: "from-violet-500 to-purple-700" },
  { icon: Sparkles, title: "Spiritual", subtitle: "JOURNEYS", desc: "Find peace, seek blessings & reconnect within.", img: spiritual, accent: "from-rose-500 to-orange-600" },
];

export const TravelThemes = () => {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-primary">Pick your vibe</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary">Explore by Travel Themes</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Different seasons, different stories. Choose your perfect escape.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {themes.map((t, i) => (
            <article
              key={t.title}
              className="group relative aspect-[3/5] rounded-3xl overflow-hidden cursor-pointer shadow-card hover:shadow-elevated transition-all duration-500"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img src={t.img} alt={t.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-card-overlay" />
              <div className={`absolute top-4 left-4 h-11 w-11 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center shadow-lg`}>
                <t.icon className="h-5 w-5 text-white" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-script text-3xl leading-none">{t.title}</h3>
                <p className="font-extrabold tracking-wider text-sm mb-2">{t.subtitle}</p>
                <p className="text-xs text-white/85 mb-4 leading-snug">{t.desc}</p>
                <button className="w-full bg-white text-secondary font-semibold text-xs py-2 rounded-full flex items-center justify-center gap-1 hover:bg-primary hover:text-primary-foreground transition-colors">
                  Explore Trips <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
