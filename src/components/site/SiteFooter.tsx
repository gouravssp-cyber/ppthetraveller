import { Plane, Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-extrabold tracking-tight">Wander<span className="text-primary">ly</span></span>
            <Plane className="h-4 w-4 text-primary rotate-45" />
          </a>
          <p className="font-script text-xl text-primary mb-3">Where every trip becomes a story.</p>
          <p className="text-sm text-white/70 mb-5">Crafting personalized journeys since 2014. 10,000+ travelers and counting.</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" links={["About Us", "Our Story", "Careers", "Blog", "Press"]} />
        <FooterCol title="Destinations" links={["Meghalaya", "Kashmir", "Ladakh", "Bhutan", "Maldives", "Switzerland"]} />

        <div>
          <h4 className="font-bold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 42 Wanderlust Lane, Bengaluru, IN</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> hello@wanderly.travel</li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Wanderly Travel. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul className="space-y-2.5 text-sm text-white/70">
      {links.map((l) => (
        <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
      ))}
    </ul>
  </div>
);
