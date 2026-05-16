import React, { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  Share2,
  Heart,
  Download,
  Users,
  Image as ImageIcon,
  Hotel,
  Utensils,
  Plane,
  ChevronRight,
} from "lucide-react";

export const TourDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedDay, setExpandedDay] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = ["overview", "gallery", "itinerary", "inclusions", "exclusions", "faqs", "booking"];

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Zurich",
      description: "Welcome to Switzerland! Arrive at Zurich International Airport and transfer to your luxury hotel. Evening free for rest and relaxation.",
      meals: ["Dinner"],
      hotel: "Grand Hotel Zermatterhof (5-Star)",
      activities: ["Airport Transfer", "Hotel Check-in"],
    },
    {
      day: 2,
      title: "Lucerne Exploration",
      description: "Explore the charming city of Lucerne with its iconic Chapel Bridge, museums, and lakeside walks. Enjoy a romantic dinner with lake views.",
      meals: ["Breakfast", "Lunch", "Dinner"],
      hotel: "Grand Hotel Zermatterhof (5-Star)",
      activities: ["City Tour", "Lake Cruise", "Museum Visit"],
    },
    {
      day: 3,
      title: "Jungfrau Day Trip",
      description: "Take the scenic train to Jungfrau - the 'Top of Europe'. Experience breathtaking alpine views and walk on the Aletsch Glacier.",
      meals: ["Breakfast", "Lunch", "Dinner"],
      hotel: "Grand Hotel Zermatterhof (5-Star)",
      activities: ["Mountain Train", "Glacier Walk", "Photography"],
    },
    {
      day: 4,
      title: "Zermatt & Matterhorn",
      description: "Journey to Matterhorn. Experience the stunning alpine village of Zermatt with shopping and dining. Optional: Gondola ride for panoramic views.",
      meals: ["Breakfast", "Lunch", "Dinner"],
      hotel: "Grand Hotel Zermatterhof (5-Star)",
      activities: ["Mountain Village Tour", "Shopping", "Gondola Ride"],
    },
    {
      day: 5,
      title: "Interlaken Adventure",
      description: "Relax in the adventure hub of Interlaken. Optional paragliding, hiking, or spa treatments. Swiss chocolate and fondue tasting.",
      meals: ["Breakfast", "Lunch", "Dinner"],
      hotel: "Grand Hotel Zermatterhof (5-Star)",
      activities: ["Paragliding", "Hiking", "Chocolate Tasting"],
    },
    {
      day: 6,
      title: "Lauterbrunnen Valley",
      description: "Explore the fairy-tale Lauterbrunnen Valley with 72 waterfalls. Cable car to mountain peaks and scenic walks through alpine meadows.",
      meals: ["Breakfast", "Lunch", "Dinner"],
      hotel: "Grand Hotel Zermatterhof (5-Star)",
      activities: ["Valley Tour", "Waterfall Hikes", "Cable Car"],
    },
    {
      day: 7,
      title: "Departure",
      description: "Leisurely breakfast and final shopping before transfer to the airport. Depart with unforgettable memories of your Swiss honeymoon.",
      meals: ["Breakfast"],
      hotel: "Airport Transfer",
      activities: ["Shopping", "Departure"],
    },
  ];

  const faqs = [
    {
      question: "What is the best time to visit Switzerland?",
      answer: "The best time to visit is May-September for pleasant weather. Winter (December-February) is ideal for snow activities. Summer offers longer days and outdoor activities.",
    },
    {
      question: "Are flights included in this package?",
      answer: "International flights are not included. However, we can arrange them separately. Airport transfers in Switzerland are included.",
    },
    {
      question: "Is this package customizable?",
      answer: "Yes! All packages are fully customizable. We can adjust itinerary, hotels, activities, and duration based on your preferences.",
    },
    {
      question: "What documents do Indians need for Switzerland?",
      answer: "Indian citizens need a valid Schengen visa. We'll provide all support for visa documentation. Passport must be valid for 6 months.",
    },
    {
      question: "What is the best month for honeymoon?",
      answer: "June-August is perfect for honeymoons with warm weather and long days. September is also great with fewer crowds and pleasant weather.",
    },
    {
      question: "Is travel insurance required?",
      answer: "Travel insurance is highly recommended to cover medical emergencies, flight cancellations, and baggage. We can arrange it for you.",
    },
  ];

  const inclusions = [
    "Hotel Accommodation (5-Star Hotels)",
    "Daily Breakfast",
    "Airport Transfers",
    "All Sightseeing Tours",
    "Guided Mountain Tours",
    "Train & Cable Car Passes",
    "Romantic Dinner (3 nights)",
    "Switzerland SIM Card",
  ];

  const exclusions = [
    "International Flights",
    "Personal Expenses",
    "Travel Insurance",
    "Meals not mentioned",
    "Adventure Activities (optional)",
    "Shopping & Entertainment",
    "Tips & Gratuities",
    "Visa Fees",
  ];

  const highlights = [
    { icon: "⛰️", text: "Alpine Peaks" },
    { icon: "🏰", text: "Swiss Villages" },
    { icon: "💎", text: "Luxury Hotels" },
    { icon: "🍷", text: "Wine & Cuisine" },
    { icon: "❤️", text: "Romantic Dinners" },
    { icon: "🚂", text: "Scenic Trains" },
  ];

  const relatedPackages = [
    { title: "Maldives Paradise", duration: "5D / 4N", price: "₹49,999", rating: 4.8 },
    { title: "Greece Escape", duration: "7D / 6N", price: "₹79,999", rating: 4.9 },
    { title: "Bali Bliss", duration: "6D / 5N", price: "₹39,999", rating: 4.7 },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Sticky Tab Navigation */}
      <StickyTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content Area */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview Section */}
          {activeTab === "overview" && (
            <OverviewSection highlights={highlights} />
          )}

          {/* Gallery Section */}
          {activeTab === "gallery" && <GallerySection />}

          {/* Itinerary Section */}
          {activeTab === "itinerary" && (
            <ItinerarySection
              itinerary={itinerary}
              expandedDay={expandedDay}
              setExpandedDay={setExpandedDay}
            />
          )}

          {/* Inclusions Section */}
          {activeTab === "inclusions" && (
            <InclusionExclusionSection
              title="What's Included"
              items={inclusions}
              type="inclusion"
            />
          )}

          {/* Exclusions Section */}
          {activeTab === "exclusions" && (
            <InclusionExclusionSection
              title="What's Not Included"
              items={exclusions}
              type="exclusion"
            />
          )}

          {/* FAQs Section */}
          {activeTab === "faqs" && (
            <FAQSection
              faqs={faqs}
              expandedFaq={expandedFaq}
              setExpandedFaq={setExpandedFaq}
            />
          )}

          {/* Booking Section */}
          {activeTab === "booking" && <BookingSection />}
        </div>

        {/* Right Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className={`space-y-6 ${scrolled ? "sticky top-24" : ""}`}>
            <QuickBookingCard />
            <RelatedPackagesCard packages={relatedPackages} />
            <HelpCard />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <BottomCTA />
    </div>
  );
};

// ==================== HERO BANNER ====================
const HeroBanner = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] bg-cover bg-center overflow-hidden group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=600&fit=crop')",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Romantic Switzerland Honeymoon Package
          </h1>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Switzerland</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-orange-400 text-orange-400" />
              <span>4.9 Rating (240 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>7 Days / 6 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Couple Friendly</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center gap-2">
              Book Now
              <ChevronRight className="h-4 w-4" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== STICKY TABS ====================
const StickyTabs = ({ activeTab, setActiveTab, tabs }) => {
  const tabLabels = {
    overview: "Overview",
    gallery: "Gallery",
    itinerary: "Itinerary",
    inclusions: "Inclusions",
    exclusions: "Exclusions",
    faqs: "FAQs",
    booking: "Booking",
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-orange-600 text-orange-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== OVERVIEW SECTION ====================
const OverviewSection = ({ highlights }) => {
  return (
    <div id="overview" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Tour Overview</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Experience the magic of Switzerland on this 7-day romantic honeymoon package. From the majestic Alps to charming lakeside towns, every moment is crafted for couples seeking unforgettable memories. Stay in luxury 5-star hotels, enjoy gourmet dining, and witness nature's finest beauty.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Perfect for newly married couples, this package combines adventure, relaxation, and romance in one extraordinary journey.
        </p>
      </div>

      {/* Highlights Grid */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">Tour Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-4 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{highlight.icon}</div>
              <p className="font-medium text-gray-900">{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-blue-900 mb-2">Best Time to Visit</h4>
          <p className="text-blue-800 text-sm">
            May to September offers pleasant weather and longest days. Winter is perfect for snow activities.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-bold text-green-900 mb-2">Travel Style</h4>
          <p className="text-green-800 text-sm">
            Luxury hotels, guided tours, scenic trains, and private transfers for a premium experience.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==================== GALLERY SECTION ====================
const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1537225228614-56cc894d8b5b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop",
  ];

  return (
    <div id="gallery" className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>

      {/* Featured Image */}
      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
        <img
          src={images[0]}
          alt="Featured"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative h-32 rounded-lg overflow-hidden shadow cursor-pointer group">
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== ITINERARY SECTION ====================
const ItinerarySection = ({ itinerary, expandedDay, setExpandedDay }) => {
  return (
    <div id="itinerary" className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Day-Wise Itinerary</h2>

      <div className="space-y-4">
        {itinerary.map((day) => (
          <div
            key={day.day}
            className={`border rounded-lg overflow-hidden transition-all ${
              expandedDay === day.day
                ? "border-orange-300 bg-orange-50 shadow-md"
                : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              className="w-full p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors text-left"
            >
              {/* Day Badge */}
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
                  {day.day}
                </div>
              </div>

              {/* Day Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{day.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{day.description.substring(0, 100)}...</p>
              </div>

              <ChevronDown
                className={`h-5 w-5 text-orange-600 transition-transform ${
                  expandedDay === day.day ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Expanded Content */}
            {expandedDay === day.day && (
              <div className="px-6 pb-6 border-t border-orange-200 space-y-4">
                <p className="text-gray-700">{day.description}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Meals Included</p>
                    <div className="flex flex-wrap gap-2">
                      {day.meals.map((meal) => (
                        <span key={meal} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                          {meal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">Hotel</p>
                    <p className="text-gray-700 text-sm flex items-center gap-2">
                      <Hotel className="h-4 w-4 text-orange-600" />
                      {day.hotel}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Activities</p>
                  <div className="flex flex-wrap gap-2">
                    {day.activities.map((activity) => (
                      <span key={activity} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== INCLUSIONS/EXCLUSIONS SECTION ====================
const InclusionExclusionSection = ({ title, items, type }) => {
  const Icon = type === "inclusion" ? CheckCircle : XCircle;
  const iconColor = type === "inclusion" ? "text-green-600" : "text-red-600";
  const bgColor = type === "inclusion" ? "bg-green-50" : "bg-red-50";

  return (
    <div id={type === "inclusion" ? "inclusions" : "exclusions"} className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <div className={`border-2 ${type === "inclusion" ? "border-green-200" : "border-red-200"} rounded-lg p-8 ${bgColor}`}>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <Icon className={`h-6 w-6 ${iconColor} flex-shrink-0 mt-0.5`} />
              <p className="text-gray-900 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== FAQ SECTION ====================
const FAQSection = ({ faqs, expandedFaq, setExpandedFaq }) => {
  return (
    <div id="faqs" className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`border rounded-lg overflow-hidden transition-all ${
              expandedFaq === idx
                ? "border-orange-300 bg-orange-50 shadow-md"
                : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              className="w-full p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-orange-600 transition-transform flex-shrink-0 ${
                  expandedFaq === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedFaq === idx && (
              <div className="px-6 pb-6 border-t border-orange-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== BOOKING SECTION ====================
const BookingSection = () => {
  return (
    <div id="booking" className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Book Your Tour</h2>

      <form className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-200">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
          />
        </div>

        {/* Phone & Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        {/* Travel Date & Travelers */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Travel Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Travelers</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition">
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4 Travelers</option>
              <option>5+ Travelers</option>
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Special Requests (Optional)</label>
          <textarea
            placeholder="Any special arrangements, dietary preferences, or activities you'd like to add?"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition resize-none"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <Plane className="h-5 w-5" />
            Book This Tour
          </button>
          <button
            type="button"
            className="flex-1 px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </button>
        </div>

        {/* Trust Elements */}
        <div className="mt-8 pt-6 border-t border-gray-300 grid md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div>✓ Secure Booking</div>
          <div>✓ Best Price Guarantee</div>
          <div>✓ 24/7 Support</div>
        </div>
      </form>
    </div>
  );
};

// ==================== QUICK BOOKING CARD ====================
const QuickBookingCard = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Starting Price</p>
          <p className="text-3xl font-bold text-orange-600">₹1,29,999</p>
          <p className="text-xs text-gray-500">Per Couple</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-gray-600">Duration</p>
            <p className="font-semibold text-gray-900">7D / 6N</p>
          </div>
          <div>
            <p className="text-gray-600">Rating</p>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              <p className="font-semibold text-gray-900">4.9</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-orange-200">
          <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold">
            Book Now
          </button>
          <button className="w-full px-4 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== RELATED PACKAGES CARD ====================
const RelatedPackagesCard = ({ packages }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="font-bold text-gray-900 mb-4">Related Packages</h3>

      <div className="space-y-3">
        {packages.map((pkg, idx) => (
          <a
            key={idx}
            href="#"
            className="block p-3 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-lg transition-all group"
          >
            <p className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
              {pkg.title}
            </p>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
              <span>{pkg.duration}</span>
              <span>⭐ {pkg.rating}</span>
            </div>
            <p className="text-orange-600 font-bold text-sm mt-2">{pkg.price}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

// ==================== HELP CARD ====================
const HelpCard = () => {
  return (
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
      <h4 className="font-bold text-gray-900 mb-2">Need Help Planning?</h4>
      <p className="text-sm text-gray-600 mb-4">
        Our travel experts are here to help you plan the perfect trip.
      </p>

      <div className="space-y-2">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

// ==================== BOTTOM CTA ====================
const BottomCTA = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Ready for Your Dream Vacation?</h2>
        <p className="text-xl text-orange-100">
          Book your unforgettable journey today and create memories that last a lifetime.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
            Plan My Trip
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
            Talk to Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsPage;