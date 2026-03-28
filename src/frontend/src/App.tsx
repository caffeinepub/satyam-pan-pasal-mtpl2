import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Car,
  CreditCard,
  MapPin,
  Menu,
  Package,
  Phone,
  Settings,
  Shield,
  ThumbsUp,
  User,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "MODELS", href: "#models" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const MODELS = [
  {
    name: "BMW X5",
    tagline: "The Ultimate Sports Activity Vehicle",
    price: "NPR 1,85,00,000",
    img: "/assets/generated/bmw-x5.dim_600x400.jpg",
  },
  {
    name: "BMW 3 Series",
    tagline: "Sheer Driving Pleasure Redefined",
    price: "NPR 95,00,000",
    img: "/assets/generated/bmw-3series.dim_600x400.jpg",
  },
  {
    name: "BMW 7 Series",
    tagline: "The Pinnacle of Luxury Driving",
    price: "NPR 2,80,00,000",
    img: "/assets/generated/bmw-7series.dim_600x400.jpg",
  },
];

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "Premium Service",
    desc: "World-class service standards with trained BMW technicians dedicated to excellence.",
  },
  {
    icon: Shield,
    title: "Authorised Dealership",
    desc: "Official BMW dealership in Prithive Cholk, Pokhara Nepal SUB - Metro ensuring genuine quality and warranty support.",
  },
  {
    icon: Car,
    title: "Test Drive Experience",
    desc: "Book a test drive and feel the thrill of BMW's engineering firsthand.",
  },
  {
    icon: ThumbsUp,
    title: "Genuine Parts",
    desc: "Only original BMW-certified parts used in all servicing and repairs.",
  },
];

const SERVICES = [
  {
    icon: Wrench,
    title: "Servicing & Maintenance",
    desc: "Complete BMW-certified service by trained technicians.",
  },
  {
    icon: CreditCard,
    title: "Financing Options",
    desc: "Flexible finance plans to make your dream BMW affordable.",
  },
  {
    icon: Package,
    title: "Genuine Parts",
    desc: "Sourced directly from BMW — nothing less than original.",
  },
  {
    icon: Settings,
    title: "Test Drive",
    desc: "Experience the ultimate driving machine before you buy.",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Utility Bar */}
      <div className="bg-bmw-dark text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Prithive Cholk, Pokhara Nepal SUB - Metro
          </span>
          <span className="flex items-center gap-3">
            <Phone className="w-3 h-3" />
            <a
              href="tel:9768993140"
              className="hover:text-yellow-300 transition-colors"
            >
              9768993140
            </a>
            <span className="opacity-50">/</span>
            <a
              href="tel:9808091436"
              className="hover:text-yellow-300 transition-colors"
            >
              9808091436
            </a>
          </span>
        </div>
      </div>

      {/* Header / Nav */}
      <header
        className="bg-white shadow-md sticky top-0 z-50"
        data-ocid="header.section"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-bmw-navy flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tight">
                BMW
              </span>
            </div>
            <div>
              <div className="font-black text-bmw-navy text-lg leading-tight tracking-wide uppercase">
                BMW
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">
                Car Company
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs font-semibold tracking-widest text-gray-700 hover:text-bmw-navy transition-colors"
                data-ocid={`nav.${l.label.toLowerCase().replace(/ /g, "_")}.link`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Phone right */}
          <div className="hidden md:flex items-center gap-2 text-bmw-navy">
            <Phone className="w-4 h-4" />
            <div className="text-xs font-semibold">
              <div>9768993140</div>
              <div>9808091436</div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.menu.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-sm font-semibold tracking-widest text-gray-700 hover:bg-gray-50 hover:text-bmw-navy"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/bmw-hero.dim_1400x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="hero.section"
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-yellow-400 text-sm font-semibold tracking-[0.4em] uppercase mb-4">
            BMW Car Company — Prithive Cholk, Pokhara Nepal SUB - Metro
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-wide mb-6">
            EXPERIENCE PURE
            <br />
            <span className="text-yellow-300">DRIVING PLEASURE</span>
            <br />
            IN POKHARA NEPAL
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Discover the world's most iconic luxury automobiles. Authorised BMW
            dealership serving Prithive Cholk, Pokhara Nepal SUB - Metro and
            beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-bmw-navy hover:bg-bmw-dark text-white font-bold tracking-widest uppercase px-8"
              data-ocid="hero.primary_button"
            >
              Explore Models
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-bmw-navy font-bold tracking-widest uppercase px-8 bg-transparent"
              data-ocid="hero.secondary_button"
            >
              Book Test Drive
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section
        id="models"
        className="py-20 bg-white"
        data-ocid="models.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-bmw-navy text-xs font-semibold tracking-[0.4em] uppercase mb-2">
              OUR LINEUP
            </p>
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-900">
              FEATURED MODELS
            </h2>
            <div className="mt-3 w-16 h-1 bg-bmw-navy mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MODELS.map((model, i) => (
              <Card
                key={model.name}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0 rounded-none"
                data-ocid={`models.item.${i + 1}`}
              >
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={model.img}
                    alt={model.name}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-black uppercase tracking-wide text-gray-900 mb-1">
                    {model.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{model.tagline}</p>
                  <p className="text-bmw-navy font-bold text-sm mb-4">
                    {model.price}
                  </p>
                  <Button
                    className="w-full bg-bmw-navy hover:bg-bmw-dark text-white uppercase tracking-widest text-xs font-bold rounded-none"
                    data-ocid={`models.button.${i + 1}`}
                  >
                    View Model
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BMW */}
      <section
        id="about"
        className="py-20 bg-gray-50"
        data-ocid="about.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-bmw-navy text-xs font-semibold tracking-[0.4em] uppercase mb-2">
              OUR COMMITMENT
            </p>
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-900">
              WHY CHOOSE BMW POKHARA
            </h2>
            <div className="mt-3 w-16 h-1 bg-bmw-navy mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE.map((item, i) => (
              <div
                key={item.title}
                className="text-center"
                data-ocid={`about.item.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-bmw-navy flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold uppercase tracking-wide text-gray-900 mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Band */}
      <section
        id="services"
        className="py-20 bg-bmw-navy"
        data-ocid="services.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-xs font-semibold tracking-[0.4em] uppercase mb-2">
              WHAT WE OFFER
            </p>
            <h2 className="text-3xl font-black uppercase tracking-wider text-white">
              PREMIUM AUTOMOTIVE SERVICES
            </h2>
            <div className="mt-3 w-16 h-1 bg-yellow-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="bg-white/10 border border-white/20 p-6 text-center hover:bg-white/20 transition-colors"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-bmw-dark" />
                </div>
                <h3 className="font-bold uppercase tracking-wide text-white text-sm mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-bmw-dark uppercase tracking-widest text-xs font-bold rounded-none bg-transparent"
                  data-ocid={`services.button.${i + 1}`}
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image strip */}
      <div
        className="h-40 md:h-56 w-full"
        style={{
          backgroundImage: `url('/assets/generated/bmw-hero.dim_1400x700.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      />

      {/* Payment & Contact */}
      <section
        id="contact"
        className="py-20 bg-white"
        data-ocid="contact.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-bmw-navy text-xs font-semibold tracking-[0.4em] uppercase mb-2">
              GET IN TOUCH
            </p>
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-900">
              PAYMENT & SHOWROOM
            </h2>
            <div className="mt-3 w-16 h-1 bg-bmw-navy mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: QR Codes */}
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-center font-black uppercase tracking-wider text-bmw-navy text-lg mb-2">
                Payment via NIC ASIA MoBank
              </h3>
              <p className="text-center text-gray-500 text-sm mb-6">
                Scan any QR code to pay
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="text-center" data-ocid="contact.payment.card">
                  <div className="bg-white p-3 shadow-md inline-block">
                    <img
                      src="/assets/uploads/img_6438-019d3589-f195-7514-800a-5a8ebeac96c8-1.jpeg"
                      alt="NIC ASIA MoBank QR Code 1"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 font-medium">
                    QR Code 1
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 shadow-md inline-block">
                    <img
                      src="/assets/uploads/img_6438-019d35aa-d99c-7189-87f8-a3c55fef2326-2.jpeg"
                      alt="NIC ASIA MoBank QR Code 2"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 font-medium">
                    QR Code 2
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/NIC_ASIA_Bank_logo.png"
                  alt="NIC ASIA Bank"
                  className="h-8 mx-auto object-contain opacity-70"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-black uppercase tracking-wider text-bmw-navy text-xl mb-6">
                  Showroom Details
                </h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bmw-navy flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    Owner
                  </p>
                  <p className="text-gray-900 font-bold text-lg">
                    Tsering Dorjee
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bmw-navy flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    Mobile
                  </p>
                  <a
                    href="tel:9768993140"
                    className="text-gray-900 font-bold text-lg hover:text-bmw-navy transition-colors block"
                    data-ocid="contact.phone.link"
                  >
                    9768993140
                  </a>
                  <a
                    href="tel:9808091436"
                    className="text-gray-900 font-bold text-lg hover:text-bmw-navy transition-colors block"
                  >
                    9808091436
                  </a>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-bmw-navy flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                    Location
                  </p>
                  <p className="text-gray-900 font-bold text-lg">
                    Prithive Cholk, Pokhara Nepal SUB - Metro
                  </p>
                </div>
              </div>

              <Separator />

              <div className="pt-2">
                <Button
                  size="lg"
                  className="bg-bmw-navy hover:bg-bmw-dark text-white uppercase tracking-widest font-bold rounded-none w-full"
                  data-ocid="contact.primary_button"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-bmw-dark text-white py-12"
        data-ocid="footer.section"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white font-black text-sm">BMW</span>
                </div>
                <div>
                  <div className="font-black text-white text-lg uppercase tracking-wide">
                    BMW
                  </div>
                  <div className="text-xs text-gray-400 tracking-widest uppercase">
                    Car Company
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Authorised BMW dealership in Prithive Cholk, Pokhara Nepal SUB -
                Metro. Delivering the ultimate driving experience.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-gray-300">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-gray-300">
                Contact
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Tsering Dorjee
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 9768993140 / 9808091436
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Prithive Cholk, Pokhara Nepal
                  SUB - Metro
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-white/10 mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              © {year} BMW Car Company, Prithive Cholk Pokhara Nepal SUB -
              Metro. All rights reserved.
            </p>
            <p>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
