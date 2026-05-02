import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/pp-traveller-logo.webp";

export const SiteFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <a href="#" className="flex items-center gap-3 mb-4">
            <img src={logo} alt="PP The Traveller logo" width={56} height={56} className="h-14 w-14 object-contain bg-white/5 rounded-full p-1" />
            <span className="text-xl font-extrabold tracking-tight leading-tight">PP <span className="text-primary">The Traveller</span></span>
          </a>
          <p className="font-script text-xl text-primary mb-3">Explore 100+ destinations across India.</p>
          <p className="text-sm text-white/70 mb-5">Curated tour packages with expert guides, flexible payments and 24/7 support. 3,500+ happy travelers and counting.</p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" links={["About Us", "Contact", "Packages", "Blog", "FAQs"]} />
        <FooterCol title="Destinations" links={["Kashmir", "Himachal Pradesh", "Meghalaya", "Rajasthan", "Bhutan", "Thailand"]} />

        <div>
          <h4 className="font-bold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Romillie Villa, Upper Lumpynggad, Shillong, Meghalaya 793014</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> +91 99101 41081</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> ppthetraveller123@gmail.com</li>
          </ul>
          <p className="text-xs text-white/60 mt-4">Mon–Sat: 9 AM – 8 PM · Sun: 10 AM – 6 PM</p>
        </div>
      </div>

      <div className="container border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
        <p>© {new Date().getFullYear()} PP The Traveller. All rights reserved.</p>
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
