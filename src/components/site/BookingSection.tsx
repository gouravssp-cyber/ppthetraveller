import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Mail, Phone, User, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/pkg-maldives.jpg";

export const BookingSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "Meghalaya", date: "", travelers: "2" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    toast.success("Thanks! Our team will reach out within 24 hours.");
    setForm({ name: "", email: "", phone: "", destination: "Meghalaya", date: "", travelers: "2" });
  };

  return (
    <section className="py-14 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[640px] rounded-3xl overflow-hidden shadow-elevated">
            <img src={heroImg} alt="Plan your trip" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <Sparkles className="h-7 w-7 text-primary mb-3" />
              <h3 className="text-3xl font-extrabold mb-2">Tailor-made trips, made simple.</h3>
              <p className="text-white/85 max-w-md">Tell us your dream — we'll craft an itinerary, handle the bookings, and stay on call through your journey.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="font-script text-2xl text-primary">Start your journey</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-3">Book Your Adventure</h2>
            <p className="text-muted-foreground mb-8">Free consultation. No commitment. We'll get back within 24 hours.</p>

            <form onSubmit={submit} className="bg-card rounded-3xl shadow-card border border-border p-6 md:p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field icon={User} placeholder="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field icon={Mail} type="email" placeholder="Email address" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field icon={Phone} type="tel" placeholder="Phone (optional)" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                <SelectField icon={MapPin} value={form.destination} onChange={(v) => setForm({ ...form, destination: v })}
                  options={["Meghalaya", "Kashmir", "Ladakh", "Bhutan", "Maldives", "Switzerland", "Greece", "Sri Lanka"]} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field icon={Calendar} type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
                <SelectField icon={Users} value={form.travelers} onChange={(v) => setForm({ ...form, travelers: v })}
                  options={["1", "2", "3", "4", "5+"]} suffix="travelers" />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Request My Custom Trip <ArrowRight className="h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">By submitting, you agree to be contacted by our travel experts.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ icon: Icon, ...props }: any) => (
  <div className="flex items-center gap-3 bg-muted rounded-xl px-4 h-12 focus-within:ring-2 focus-within:ring-primary transition-all">
    <Icon className="h-4 w-4 text-primary shrink-0" />
    <input
      {...props}
      onChange={(e) => props.onChange(e.target.value)}
      className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:text-muted-foreground"
    />
  </div>
);

const SelectField = ({ icon: Icon, options, value, onChange, suffix }: any) => (
  <div className="flex items-center gap-3 bg-muted rounded-xl px-4 h-12">
    <Icon className="h-4 w-4 text-primary shrink-0" />
    <select value={value} onChange={(e) => onChange(e.target.value)} className="flex-1 bg-transparent outline-none text-sm font-medium">
      {options.map((o: string) => (
        <option key={o} value={o}>{o}{suffix ? ` ${suffix}` : ""}</option>
      ))}
    </select>
  </div>
);
