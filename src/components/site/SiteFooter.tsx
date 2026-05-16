import React, { useState } from "react";
import logo from "@/assets/pp-traveller-logo.webp";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  MessageCircle,
  Headphones,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Star,
} from "lucide-react";

export const SiteFooter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Subscription Bar */}
      <NewsletterBar onSubscribe={handleSubscribe} email={email} setEmail={setEmail} subscribed={subscribed} />

      {/* Main Footer Content */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-2 ">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-16">
            {/* Brand Column */}
            <BrandColumn />

            {/* Navigation Columns */}
            <FooterLinksColumn
              icon={<Building className="h-5 w-5 text-orange-600" />}
              title="Company"
              links={["About Us", "Why Choose Us", "Our Services", "Careers", "Blog", "Contact Us"]}
            />
            <FooterLinksColumn
              icon={<Briefcase className="h-5 w-5 text-orange-600" />}
              title="Packages"
              links={["Domestic Tours", "International Tours", "Honeymoon Packages", "Pilgrim Tours", "Family Packages", "Group Tours"]}
            />
            <FooterLinksColumn
              icon={<MapPin className="h-5 w-5 text-orange-600" />}
              title="Top Destinations"
              links={["Meghalaya", "Goa", "Manali", "Kashmir", "Kerala", "Rajasthan"]}
            />
            <FooterLinksColumn
              icon={<Headphones className="h-5 w-5 text-orange-600" />}
              title="Support"
              links={["FAQs", "Booking Guide", "Cancellation Policy", "Payment Options", "Travel Insurance", "Terms & Conditions"]}
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <BottomFooterBar />
    </footer>
  );
};

// ==================== Newsletter Bar ====================
const NewsletterBar = ({
  onSubscribe,
  email,
  setEmail,
  subscribed,
}: {
  onSubscribe: (e: React.FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
  subscribed: boolean;
}) => {
  return (
    <div className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-8 lg:py-10">
        <div className="bg-[#0b0b0b] border border-white/8 rounded-2xl p-6 lg:p-8 hover:border-white/12 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center">
            {/* Left Content */}
            <div className="flex gap-4 lg:gap-6">
              <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-orange-600/20 border border-orange-600/40 flex items-center justify-center shrink-0">
                <Send className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                  Get Travel Deals & Hidden Destinations in Your Inbox
                </h3>
                <p className="text-sm text-gray-400">Subscribe now and never miss an update.</p>
              </div>
            </div>

            {/* Right Form */}
            <form onSubmit={onSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-black border border-white/12 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-600/50 transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 lg:px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-r-lg font-semibold transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-orange-600/30"
              >
                <span className="hidden sm:inline">{subscribed ? "Subscribed!" : "Subscribe"}</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== Brand Column ====================
const BrandColumn = () => {
  return (
    <div className="space-y-6">
      {/* Logo & Branding */}
      <div>
        <div className="flex items-center gap-2 mb-2">

          <img src={logo} alt="PP The Traveller logo" width={56} height={56} className="w-32 object-contain drop-shadow-lg" />



        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mt-4">
          Your trusted travel partner for unforgettable journeys. We create experiences you'll cherish forever.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-3">
        <ContactItem icon={<Phone className="h-4 w-4" />} text="+91 123 456 7890" />
        <ContactItem icon={<Mail className="h-4 w-4" />} text="info@ppthetraveller.com" />
        <ContactItem icon={<MapPin className="h-4 w-4" />} text="123, Travel Street, New Delhi, India - 110001" />
      </div>


      
      
    </div>
  );
};

// ==================== Footer Links Column ====================
interface FooterLinksColumnProps {
  icon: React.ReactNode;
  title: string;
  links: string[];
}

const FooterLinksColumn: React.FC<FooterLinksColumnProps> = ({ icon, title, links }) => {
  return (
    <div>
      {/* Header with Icon */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-orange-600">
        {icon}
        <h4 className="font-bold text-white">{title}</h4>
      </div>

      {/* Links */}
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-orange-600 transition-colors inline-flex items-center gap-2 group"
            >
              {link}
              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ==================== Feature Card ====================
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-[#0b0b0b] border border-white/8 rounded-2xl p-6 hover:border-orange-600/40 transition-colors group">
      <div className="h-12 w-12 rounded-lg bg-orange-600/20 border border-orange-600/40 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600/30 transition-colors">
        {icon}
      </div>
      <h4 className="font-bold text-white mb-1.5">{title}</h4>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
};

// ==================== Contact Item ====================
interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-3">
      <div className="text-orange-600 shrink-0 mt-0.5">{icon}</div>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
};

// ==================== Bottom Footer Bar ====================
const BottomFooterBar = () => {
  return (
    <div className="bg-[#050505] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400 mb-2">© 2025 PP The Traveller. All rights reserved.</p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((link) => (
                <a key={link} href="#" className="text-xs text-gray-500 hover:text-orange-600 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Center - Payment Methods */}
          <div className="text-center">
            <p className="text-sm font-semibold text-white mb-3">We Accept</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["VISA", "Mastercard", "RuPay", "UPI", "Paytm"].map((method) => (
                <div
                  key={method}
                  className="px-3 py-1.5 bg-white text-gray-900 text-xs font-semibold rounded text-center"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Trust Badge */}
          <div className="text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-end gap-2 mb-2">
              <div className="h-8 w-8 rounded-full bg-orange-600/20 border border-orange-600/40 flex items-center justify-center">
                <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">4.8/5 Rating</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-orange-600 text-orange-600" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">Trusted by 50,000+ Travelers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== Icon Components ====================
const Building = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="2" width="18" height="20" rx="2" ry="2" />
    <line x1="9" y1="2" x2="9" y2="22" />
    <line x1="15" y1="2" x2="15" y2="22" />
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

const Briefcase = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="6" y1="11" x2="6" y2="15" />
    <line x1="18" y1="11" x2="18" y2="15" />
  </svg>
);

export default SiteFooter;