import { Plane, Phone, Facebook, Instagram, Youtube, Twitter, Menu, User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = ["Home", "Packages", "Destinations", "Custom Trip", "About", "Blog", "Contact"];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground/90 text-xs">
        <div className="container flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <span className="opacity-80">Mon – Sun: 7:00 AM – 10:00 PM</span>
            <div className="flex items-center gap-3">
              <span className="opacity-80">Follow Us:</span>
              <Facebook className="h-3.5 w-3.5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-3.5 w-3.5 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-3.5 w-3.5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-3.5 w-3.5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <User className="h-3.5 w-3.5" /> Login
            </button>
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <UserPlus className="h-3.5 w-3.5" /> Sign Up
            </button>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-primary font-semibold">
              <Phone className="h-3.5 w-3.5" /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="relative">
            <span className="text-3xl font-extrabold tracking-tight">Wander<span className="text-primary">ly</span></span>
            <Plane className="absolute -top-2 -right-5 h-4 w-4 text-primary rotate-45" />
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-white/90 font-medium">
          {navLinks.map((l, i) => (
            <li key={l}>
              <a
                href="#"
                className={`relative py-2 transition-colors hover:text-primary ${
                  i === 0 ? "text-primary" : ""
                }`}
              >
                {l}
                {i === 0 && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-md border-t border-white/10">
          <ul className="container py-4 flex flex-col gap-3 text-white">
            {navLinks.map((l) => (
              <li key={l}>
                <a href="#" className="block py-2 hover:text-primary">{l}</a>
              </li>
            ))}
            <Button variant="hero" size="lg" className="mt-2">Book Now</Button>
          </ul>
        </div>
      )}
    </header>
  );
};
