import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Star,
  Wind,
  X,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const packages = [
  {
    id: 1,
    name: "Tandem Beginner Flight",
    duration: "15 mins",
    price: "NPR 3,500",
    description:
      "Perfect for first-timers. Experience the thrill of paragliding with an expert pilot in a safe, controlled flight over the valley.",
    icon: "🪂",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    id: 2,
    name: "Tandem Standard Flight",
    duration: "30 mins",
    price: "NPR 6,000",
    description:
      "Enjoy an extended flight with panoramic views of the Himalayan foothills, gliding on thermal winds with your professional guide.",
    icon: "🏔️",
    gradient: "from-teal-400 to-cyan-600",
    featured: true,
  },
  {
    id: 3,
    name: "Tandem Panoramic Flight",
    duration: "45 mins",
    price: "NPR 9,000",
    description:
      "The ultimate paragliding experience. Soar high above the Himalayas and witness breathtaking 360° views of snow-capped peaks.",
    icon: "🌄",
    gradient: "from-indigo-400 to-purple-600",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Booking", href: "#booking" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    guests: "",
    email: "",
    message: "",
    packageType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.packageType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking request submitted! We'll contact you shortly.");
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      date: "",
      guests: "",
      email: "",
      message: "",
      packageType: "",
    });
  };

  return (
    <div className="min-h-screen font-body">
      <Toaster />

      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "oklch(0.18 0.06 240 / 0.80)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <span className="text-2xl">🪂</span>
            <div>
              <div className="text-white font-display font-bold text-lg leading-none">
                Para World
              </div>
              <div className="text-blue-200 text-xs font-medium">
                Tsering Dorjee
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#booking">
              <Button
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-full px-5"
                data-ocid="nav.primary_button"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-ocid="nav.toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3"
            style={{ background: "oklch(0.15 0.06 240 / 0.95)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white py-1 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a href="#booking">
              <Button
                className="w-full bg-white text-gray-900 font-semibold rounded-full"
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.primary_button"
              >
                Book Now
              </Button>
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-paragliding.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.10 0.06 240 / 0.50)" }}
        />
        <div className="relative z-10 container mx-auto px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <span className="text-amber-300 text-sm font-medium tracking-wide uppercase">
                Himalayan Paragliding Adventure
              </span>
            </div>
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl leading-tight mb-6">
              Discover the Himalayas
              <span className="block" style={{ color: "oklch(0.85 0.15 200)" }}>
                from Above.
              </span>
            </h1>
            <p className="text-white/85 text-lg mb-8 leading-relaxed">
              Soar above Nepal's breathtaking landscapes with expert pilot
              Tsering Dorjee. Safe, thrilling tandem flights for all experience
              levels.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl px-8 shadow-lg"
                  data-ocid="hero.primary_button"
                >
                  Book Now
                </Button>
              </a>
              <a href="#packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 font-semibold rounded-xl px-8"
                  data-ocid="hero.secondary_button"
                >
                  Our Packages
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <Wind size={20} className="animate-bounce" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "hsl(var(--secondary))" }}
            >
              What We Offer
            </span>
            <h2 className="font-display font-bold text-4xl text-gray-900 mt-2">
              Experience Packages
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Choose your adventure level and let us take you on an
              unforgettable journey over the Himalayas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col ${
                  pkg.featured ? "ring-2 ring-teal-500 scale-105" : ""
                }`}
                data-ocid={`packages.item.${idx + 1}`}
              >
                {pkg.featured && (
                  <div className="bg-teal-500 text-white text-center text-xs font-bold py-1.5 tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                {/* Image area */}
                <div
                  className={`h-48 bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}
                >
                  <span className="text-7xl">{pkg.icon}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display font-bold text-xl text-gray-900">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "hsl(var(--accent))" }}
                    >
                      {pkg.price}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock size={14} />
                      {pkg.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                    {pkg.description}
                  </p>
                  <a href="#booking">
                    <Button
                      className="w-full rounded-xl font-semibold"
                      style={{
                        background: "hsl(var(--primary))",
                        color: "white",
                      }}
                      data-ocid={`packages.primary_button.${idx + 1}`}
                    >
                      Book Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section
        id="booking"
        className="py-24"
        style={{ background: "oklch(0.97 0.01 220)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "hsl(var(--secondary))" }}
            >
              Reserve Your Spot
            </span>
            <h2 className="font-display font-bold text-4xl text-gray-900 mt-2">
              Book Your Adventure
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
                data-ocid="booking.success_state"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                  Booking Received!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you {formData.name}! We'll call you on 9808091436 to
                  confirm your flight.
                </p>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="rounded-xl"
                  data-ocid="booking.secondary_button"
                >
                  Book Another Flight
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                data-ocid="booking.panel"
              >
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="date">Flight Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, date: e.target.value }))
                    }
                    required
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="1"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, guests: e.target.value }))
                    }
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <Label>Package *</Label>
                  <Select
                    value={formData.packageType}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, packageType: v }))
                    }
                    required
                  >
                    <SelectTrigger data-ocid="booking.select">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">
                        Tandem Beginner Flight — NPR 3,500
                      </SelectItem>
                      <SelectItem value="standard">
                        Tandem Standard Flight — NPR 6,000
                      </SelectItem>
                      <SelectItem value="panoramic">
                        Tandem Panoramic Flight — NPR 9,000
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Any special requests or questions..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    data-ocid="booking.textarea"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl font-bold text-base"
                    style={{
                      background: "hsl(var(--secondary))",
                      color: "white",
                    }}
                    data-ocid="booking.submit_button"
                  >
                    Book Now
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Pilot photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/pilot-portrait.dim_600x700.jpg"
                  alt="Tsering Dorjee - Senior Pilot"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Badge */}
              <div
                className="absolute -bottom-6 -right-6 text-white rounded-2xl p-4 shadow-xl text-center"
                style={{ background: "hsl(var(--primary))" }}
              >
                <div className="font-display font-bold text-3xl">10+</div>
                <div className="text-xs font-medium opacity-90">
                  Years Experience
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: "hsl(var(--secondary))" }}
              >
                About Your Guide
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mt-2 mb-4">
                Meet Tsering Dorjee –<br />
                <span style={{ color: "hsl(var(--primary))" }}>
                  Senior Pilot & Guide
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over a decade of experience soaring the Himalayan skies,
                Tsering Dorjee is one of Nepal's most trusted paragliding
                pilots. Born and raised among the world's highest mountains, he
                has guided thousands of adventurers on unforgettable aerial
                journeys.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every flight is conducted with the highest safety standards,
                state-of-the-art equipment, and a deep respect for the majestic
                landscape of Nepal. Your safety and joy are our top priority.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Happy Flyers", value: "5,000+" },
                  { label: "Safe Flights", value: "100%" },
                  { label: "Packages", value: "3" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{ background: "oklch(0.97 0.01 220)" }}
                  >
                    <div
                      className="font-display font-bold text-2xl"
                      style={{ color: "hsl(var(--primary))" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT + QR ── */}
      <section
        id="contact"
        className="py-24"
        style={{ background: "oklch(0.96 0.015 220)" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "hsl(var(--secondary))" }}
            >
              Get In Touch
            </span>
            <h2 className="font-display font-bold text-4xl text-gray-900 mt-2">
              Contact Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">
                Para World Tsering Dorjee
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--primary) / 0.1)" }}
                  >
                    <Phone size={18} style={{ color: "hsl(var(--primary))" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Mobile
                    </div>
                    <a
                      href="tel:9808091436"
                      className="font-semibold text-gray-900 hover:text-blue-700 transition-colors block"
                      data-ocid="contact.link"
                    >
                      9808091436
                    </a>
                    <a
                      href="tel:9766047350"
                      className="font-semibold text-gray-900 hover:text-blue-700 transition-colors block"
                      data-ocid="contact.link"
                    >
                      9766047350
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--secondary) / 0.1)" }}
                  >
                    <MapPin
                      size={18}
                      style={{ color: "hsl(var(--secondary))" }}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Location
                    </div>
                    <p className="font-semibold text-gray-900">Nepal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center"
            >
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                Payment QR Code
              </h3>
              <p className="text-muted-foreground text-sm mb-6 text-center">
                Scan to Pay — NIC ASIA MoBank
              </p>
              <div className="border-4 border-gray-100 rounded-2xl p-3 shadow-inner">
                <img
                  src="/assets/uploads/img_6438-019d3534-b81b-74de-b525-c5dc5e3dc518-1.jpeg"
                  alt="NIC ASIA MoBank QR Code"
                  className="w-56 h-56 object-contain rounded-xl"
                  data-ocid="contact.card"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center font-medium">
                🏦 NIC ASIA MoBank · Para World Tsering Dorjee
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{ background: "oklch(0.14 0.04 240)" }}
        className="text-white py-14"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🪂</span>
                <div>
                  <div className="font-display font-bold text-lg">
                    Para World
                  </div>
                  <div className="text-blue-300 text-xs">Tsering Dorjee</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Nepal's premier tandem paragliding experience. Soar above the
                Himalayas with expert guidance and unmatched safety.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-white/60 hover:text-white text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
                Connect
              </h4>
              <div className="flex gap-3 mb-4">
                <button
                  type="button"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                  data-ocid="footer.toggle"
                >
                  <Facebook size={16} />
                </button>
                <button
                  type="button"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                  data-ocid="footer.toggle"
                >
                  <Instagram size={16} />
                </button>
                <button
                  type="button"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                  data-ocid="footer.toggle"
                >
                  <Youtube size={16} />
                </button>
              </div>
              <div className="text-white/60 text-sm">
                <p>📞 9808091436</p>
                <p>📞 9766047350</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/50 text-sm">
            <p>
              © {new Date().getFullYear()} Para World Tsering Dorjee. All rights
              reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
