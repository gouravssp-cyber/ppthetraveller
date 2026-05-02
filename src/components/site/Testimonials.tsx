import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Anjali Patel", trip: "Kerala Backwaters", text: "Truly a paradise! The Kerala backwaters tour was so relaxing and rejuvenating. The houseboats, local cuisine and serene landscapes exceeded all expectations. Can't wait to book another trip!", avatar: "AP" },
  { name: "Priya Sharma", trip: "Kashmir Honeymoon", text: "The Kashmir tour was absolutely breathtaking! Every moment was perfectly planned, from Shikara rides on Dal Lake to luxury houseboat stays. PP The Traveller made our honeymoon unforgettable!", avatar: "PS" },
  { name: "Rajesh Kumar", trip: "Rajasthan Heritage", text: "An incredible 7-day journey through Rajasthan! Knowledgeable guides, fantastic accommodations and every moment felt magical. Highly recommend PP The Traveller for a premium experience.", avatar: "RK" },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--primary-glow))_0%,transparent_50%)]" />
      <div className="container relative">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-primary">Real travelers, real stories</p>
          <h2 className="text-3xl md:text-5xl font-extrabold">What Our Travelers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="h-10 w-10 text-primary opacity-40 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="h-12 w-12 rounded-full bg-gradient-sunset flex items-center justify-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/70">{t.trip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
