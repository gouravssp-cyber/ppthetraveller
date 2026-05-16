import React, { useState, useEffect } from "react";
import logo from "@/assets/pp-traveller-logo.webp";
import {
  Menu,
  X,
  Phone,
  User,
  UserPlus,
  Facebook,
  Instagram,
  Youtube,
  Send,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

export const SiteHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if at the top
      if (currentScrollY < 100) {
        setIsVisible(true);
        setScrolled(false);
      } else {
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Packages",
      href: "/packages",
      dropdown: [
        "Domestic Tours",
        "International Tours",
        "Honeymoon Packages",
        "Pilgrim Tours",
        "Family Packages",
        "Group Tours",
      ],
    },
    {
      label: "Destinations",
      href: "/destinations",
      dropdown: ["Goa", "Kashmir", "Manali", "Meghalaya", "Kerala", "Rajasthan"],
    },
    { label: "Custom Trip", href: "/custom-trip" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 transform ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      {/* Top Info Bar */}
      <TopInfoBar />

      {/* Main Navbar */}
      <nav className="border-t border-white/8 px-6 py-4 lg:px-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <NavLink
                  label={link.label}
                  href={link.href}
                  hasDropdown={!!link.dropdown}
                />

                {/* Desktop Dropdown */}
                {link.dropdown && (
                  <DesktopDropdown items={link.dropdown} />
                )}
              </div>
            ))}
          </div>

        

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-orange-600 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          navLinks={navLinks}
          mobileDropdownOpen={mobileDropdownOpen}
          setMobileDropdownOpen={setMobileDropdownOpen}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </header>
  );
};

// ==================== TOP INFO BAR ====================
const TopInfoBar = () => {
  return (
    <div className="hidden md:block bg-black/40 backdrop-blur-sm border-b border-white/8 px-6 py-2.5 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <span className="text-white/75 flex items-center gap-1.5">
            🕒 Mon - Sun: 7:00 AM - 10:00 PM
          </span>
        </div>

        {/* Center - Social */}
        <div className="flex items-center gap-3">
          <span className="text-white/60">Follow Us:</span>
          <a
            href="#"
            className="text-white/60 hover:text-orange-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-orange-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-orange-600 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-orange-600 transition-colors"
            aria-label="Twitter"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>

        {/* Right - Auth & Phone */}
        <div className="flex items-center gap-4">
          <button className="text-white/75 hover:text-orange-600 transition-colors flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            Login
          </button>
          <button className="text-white/75 hover:text-orange-600 transition-colors flex items-center gap-1">
            <UserPlus className="h-3.5 w-3.5" />
            Sign Up
          </button>
          <a
            href="tel:+919876543210"
            className="text-orange-600 font-semibold hover:text-orange-500 transition-colors flex items-center gap-1 ml-2"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
};

// ==================== LOGO ====================
const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2 shrink-0">
      <img src={logo} alt="" className="h-16" />
    </a>
  );
};

// ==================== NAV LINK ====================
interface NavLinkProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, hasDropdown }) => {
  return (
    <a
      href={href}
      className="relative group text-white/90 hover:text-orange-600 transition-colors font-medium text-sm py-2 inline-flex items-center gap-1"
    >
      {label}
      {hasDropdown && <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />}
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
    </a>
  );
};

// ==================== DESKTOP DROPDOWN ====================
interface DesktopDropdownProps {
  items: string[];
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({ items }) => {
  return (
    <div className="absolute left-0 top-full pt-4 hidden group-hover:block">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden min-w-max">
        {items.map((item, idx) => (
          <a
            key={item}
            href="#"
            className={`block px-4 py-3 text-white/80 hover:text-orange-600 hover:bg-orange-600/10 transition-all text-sm ${idx !== items.length - 1 ? "border-b border-white/5" : ""
              }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

// ==================== MOBILE MENU ====================
interface MobileMenuProps {
  navLinks: Array<{
    label: string;
    href: string;
    dropdown?: string[];
  }>;
  mobileDropdownOpen: string | null;
  setMobileDropdownOpen: (label: string | null) => void;
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navLinks,
  mobileDropdownOpen,
  setMobileDropdownOpen,
  closeMobileMenu,
}) => {
  return (
    <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/8 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="px-6 py-6 space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
        {navLinks.map((link) => (
          <div key={link.label}>
            {link.dropdown ? (
              <MobileDropdownButton
                label={link.label}
                isOpen={mobileDropdownOpen === link.label}
                onClick={() =>
                  setMobileDropdownOpen(
                    mobileDropdownOpen === link.label ? null : link.label
                  )
                }
              />
            ) : (
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-white/90 hover:text-orange-600 hover:bg-orange-600/10 rounded-lg transition-all text-sm font-medium"
              >
                {link.label}
              </a>
            )}

            {/* Mobile Dropdown Items */}
            {link.dropdown && mobileDropdownOpen === link.label && (
              <div className="bg-white/5 rounded-lg mt-1 overflow-hidden border border-white/5">
                {link.dropdown.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={closeMobileMenu}
                    className="block px-6 py-2.5 text-white/70 hover:text-orange-600 text-sm border-b border-white/5 last:border-b-0"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Mobile Auth Section */}
        <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
          <button className="w-full px-4 py-2.5 text-white/80 hover:text-orange-600 transition-colors text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 rounded-lg">
            <User className="h-4 w-4" />
            Login
          </button>
          <button className="w-full px-4 py-2.5 text-orange-600 border border-orange-600/50 hover:bg-orange-600/10 transition-colors text-sm font-medium flex items-center justify-center gap-2 rounded-lg">
            <UserPlus className="h-4 w-4" />
            Sign Up
          </button>
          <a
            href="tel:+919876543210"
            className="w-full px-4 py-2.5 bg-orange-600 text-white hover:bg-orange-700 transition-colors text-sm font-medium flex items-center justify-center gap-2 rounded-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

// ==================== MOBILE DROPDOWN BUTTON ====================
interface MobileDropdownButtonProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

const MobileDropdownButton: React.FC<MobileDropdownButtonProps> = ({
  label,
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-3 text-white/90 hover:text-orange-600 hover:bg-orange-600/10 rounded-lg transition-all text-sm font-medium flex items-center justify-between"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
          }`}
      />
    </button>
  );
};

export default SiteHeader;