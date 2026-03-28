import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Shield,
  ShoppingCart,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  emoji: string;
  category: string;
  description: string;
}

interface CartItem extends Product {
  qty: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Combat Boots",
    price: 4500,
    emoji: "🥾",
    category: "Footwear",
    description: "Heavy-duty leather combat boots, waterproof & durable",
  },
  {
    id: 2,
    name: "Army Uniform Set",
    price: 8500,
    emoji: "🪖",
    category: "Uniform",
    description: "Official camouflage uniform with matching trousers",
  },
  {
    id: 3,
    name: "Tactical Backpack",
    price: 3200,
    emoji: "🎒",
    category: "Gear",
    description: "60L molle system tactical backpack, heavy-duty straps",
  },
  {
    id: 4,
    name: "Military Belt",
    price: 850,
    emoji: "🔧",
    category: "Accessories",
    description: "Genuine leather duty belt with metal buckle",
  },
  {
    id: 5,
    name: "Beret Hat",
    price: 650,
    emoji: "👒",
    category: "Headgear",
    description: "Official wool beret, various regiment colours available",
  },
  {
    id: 6,
    name: "Field Ration Pack",
    price: 1200,
    emoji: "🥫",
    category: "Supplies",
    description: "72-hour emergency ration pack, high calorie & nutritious",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    toast.success(`${product.emoji} ${product.name} added to cart`);
  }

  function updateQty(id: number, delta: number) {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    );
  }

  function removeItem(id: number) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  function placeOrder() {
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
      toast.error("Please fill all fields before placing order");
      return;
    }
    setOrderPlaced(true);
    setCart([]);
    toast.success("🎖️ Order placed successfully! We will contact you shortly.");
    setTimeout(() => {
      setOrderPlaced(false);
      setOrderForm({ name: "", phone: "", address: "" });
      setCartOpen(false);
    }, 3000);
  }

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-right" />

      {/* NAVBAR */}
      <header
        className="sticky top-0 z-50 border-b border-border"
        style={{ background: "var(--ai-olive-dark)" }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Shield className="h-7 w-7" style={{ color: "var(--ai-gold)" }} />
            <span
              className="font-display text-xl font-bold tracking-widest uppercase"
              style={{ color: "var(--ai-gold)" }}
            >
              ARMY IGNSEE
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-semibold uppercase tracking-wider transition-colors"
                style={{ color: "oklch(0.88 0.04 95)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Cart button */}
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative border-none"
                  style={{
                    background: "transparent",
                    color: "var(--ai-gold)",
                  }}
                  data-ocid="cart.open_modal_button"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <Badge
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                      style={{
                        background: "var(--ai-gold)",
                        color: "var(--ai-charcoal)",
                      }}
                    >
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>

              {/* CART SHEET */}
              <SheetContent
                className="w-full sm:max-w-md flex flex-col"
                data-ocid="cart.sheet"
              >
                <SheetHeader>
                  <SheetTitle className="font-display text-xl tracking-wider uppercase">
                    🛒 Your Cart
                  </SheetTitle>
                </SheetHeader>

                {cart.length === 0 && !orderPlaced ? (
                  <div
                    className="flex-1 flex flex-col items-center justify-center text-muted-foreground"
                    data-ocid="cart.empty_state"
                  >
                    <ShoppingCart className="h-16 w-16 mb-3 opacity-30" />
                    <p className="text-sm">Your cart is empty</p>
                  </div>
                ) : orderPlaced ? (
                  <div
                    className="flex-1 flex flex-col items-center justify-center gap-4"
                    data-ocid="cart.success_state"
                  >
                    <div className="text-5xl">🎖️</div>
                    <p className="font-display text-lg font-bold text-center uppercase tracking-wide">
                      Order Placed!
                    </p>
                    <p className="text-sm text-muted-foreground text-center">
                      We will contact you on {orderForm.phone}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col flex-1 overflow-hidden">
                    {/* Items */}
                    <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-3">
                      {cart.map((item, idx) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 rounded border border-border p-2"
                          data-ocid={`cart.item.${idx + 1}`}
                        >
                          <span className="text-2xl">{item.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              NPR {item.price.toLocaleString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6"
                              onClick={() => updateQty(item.id, -1)}
                              data-ocid={`cart.secondary_button.${idx + 1}`}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-6 text-center text-sm font-bold">
                              {item.qty}
                            </span>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6"
                              onClick={() => updateQty(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6 text-destructive"
                              onClick={() => removeItem(item.id)}
                              data-ocid={`cart.delete_button.${idx + 1}`}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="pt-3 space-y-1">
                      <p className="font-bold text-right">
                        Total: NPR {cartTotal.toLocaleString()}
                      </p>
                    </div>

                    <Separator className="my-3" />

                    {/* Checkout form */}
                    <div className="space-y-2">
                      <p className="font-display text-sm uppercase tracking-wider font-semibold">
                        Delivery Details
                      </p>
                      <Input
                        placeholder="Your Name"
                        value={orderForm.name}
                        onChange={(e) =>
                          setOrderForm((p) => ({ ...p, name: e.target.value }))
                        }
                        data-ocid="cart.input"
                      />
                      <Input
                        placeholder="Phone Number"
                        value={orderForm.phone}
                        onChange={(e) =>
                          setOrderForm((p) => ({ ...p, phone: e.target.value }))
                        }
                      />
                      <Textarea
                        placeholder="Delivery Address"
                        rows={2}
                        value={orderForm.address}
                        onChange={(e) =>
                          setOrderForm((p) => ({
                            ...p,
                            address: e.target.value,
                          }))
                        }
                        data-ocid="cart.textarea"
                      />
                      <Button
                        className="w-full font-display uppercase tracking-widest font-bold"
                        style={{
                          background: "var(--ai-olive)",
                          color: "white",
                        }}
                        onClick={placeOrder}
                        data-ocid="cart.submit_button"
                      >
                        🎖️ Place Order
                      </Button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden"
              style={{ color: "var(--ai-gold)" }}
              onClick={() => setMobileMenuOpen((o) => !o)}
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              style={{ background: "var(--ai-olive-dark)" }}
            >
              <nav className="flex flex-col px-4 pb-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/10"
                    style={{ color: "oklch(0.88 0.04 95)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.05 130) 0%, oklch(0.28 0.07 130) 60%, oklch(0.35 0.06 90) 100%)",
            minHeight: "88vh",
          }}
        >
          {/* Camo pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, oklch(0.50 0.08 130) 0, oklch(0.50 0.08 130) 2px, transparent 0, transparent 50%)",
              backgroundSize: "12px 12px",
            }}
          />

          <div
            className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center"
            style={{ minHeight: "88vh" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Shield
                className="mx-auto h-20 w-20 mb-4"
                style={{ color: "var(--ai-gold)" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-3 text-sm uppercase tracking-[0.3em] font-semibold"
              style={{ color: "var(--ai-gold)" }}
            >
              Official Military Supply Store
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.92 0.04 95)" }}
            >
              ARMY
              <span className="block" style={{ color: "var(--ai-gold)" }}>
                IGNSEE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-md text-base mb-8"
              style={{ color: "oklch(0.78 0.03 95)" }}
            >
              Premium military-grade equipment, uniforms, and supplies. Trusted
              by servicemen across Nepal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#products">
                <Button
                  size="lg"
                  className="font-display uppercase tracking-widest font-bold px-8 text-base"
                  style={{
                    background: "var(--ai-gold)",
                    color: "var(--ai-charcoal)",
                  }}
                  data-ocid="hero.primary_button"
                >
                  Shop Now
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-display uppercase tracking-widest font-bold px-8 text-base border-2"
                  style={{
                    borderColor: "oklch(0.88 0.04 95)",
                    color: "oklch(0.88 0.04 95)",
                    background: "transparent",
                  }}
                  data-ocid="hero.secondary_button"
                >
                  Contact Us
                </Button>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 grid grid-cols-3 gap-8 text-center"
            >
              {[
                { value: "500+", label: "Products" },
                { value: "10+", label: "Years Service" },
                { value: "5000+", label: "Customers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-2xl font-bold"
                    style={{ color: "var(--ai-gold)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-wider mt-1"
                    style={{ color: "oklch(0.70 0.03 95)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p
                className="text-xs uppercase tracking-[0.3em] font-bold mb-2"
                style={{ color: "var(--ai-olive)" }}
              >
                Military Grade
              </p>
              <h2
                className="font-display text-4xl font-bold uppercase tracking-wider"
                style={{ color: "oklch(0.22 0.06 130)" }}
              >
                Our Products
              </h2>
              <div
                className="mx-auto mt-3 h-1 w-16"
                style={{ background: "var(--ai-gold)" }}
              />
            </motion.div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="products.list"
            >
              {PRODUCTS.map((product, idx) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  className="group rounded border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                  data-ocid={`products.item.${idx + 1}`}
                >
                  {/* Product image area */}
                  <div
                    className="relative flex items-center justify-center h-44"
                    style={{ background: "oklch(0.90 0.025 95)" }}
                  >
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {product.emoji}
                    </span>
                    <Badge
                      className="absolute top-3 left-3 text-xs uppercase tracking-wider font-semibold"
                      style={{
                        background: "var(--ai-olive)",
                        color: "white",
                        borderRadius: "2px",
                      }}
                    >
                      {product.category}
                    </Badge>
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span
                        className="font-display text-xl font-bold"
                        style={{ color: "var(--ai-olive-dark)" }}
                      >
                        NPR {product.price.toLocaleString()}
                      </span>
                      <Button
                        size="sm"
                        className="font-semibold uppercase tracking-wider text-xs"
                        style={{
                          background: "var(--ai-olive)",
                          color: "white",
                        }}
                        onClick={() => addToCart(product)}
                        data-ocid={`products.primary_button.${idx + 1}`}
                      >
                        <Plus className="h-3 w-3 mr-1" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-20"
          style={{ background: "oklch(0.26 0.06 130)" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p
                  className="text-xs uppercase tracking-[0.3em] font-bold mb-3"
                  style={{ color: "var(--ai-gold)" }}
                >
                  Est. 2010
                </p>
                <h2
                  className="font-display text-4xl font-bold uppercase tracking-wide mb-5"
                  style={{ color: "oklch(0.92 0.04 95)" }}
                >
                  About the Store
                </h2>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "oklch(0.80 0.03 95)" }}
                >
                  Army IGNSEE is Nepal's trusted military supply and canteen
                  store, specializing in authentic military-grade equipment,
                  uniforms, and tactical gear. We serve active servicemen,
                  veterans, and outdoor enthusiasts with pride.
                </p>
                <p
                  className="leading-relaxed mb-6"
                  style={{ color: "oklch(0.80 0.03 95)" }}
                >
                  Every product is sourced from certified suppliers ensuring the
                  highest standards of quality and durability that our nation's
                  defenders deserve.
                </p>

                <div
                  className="rounded border-l-4 p-5"
                  style={{
                    borderLeftColor: "var(--ai-gold)",
                    background: "oklch(0.30 0.06 130)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <Shield
                      className="h-5 w-5"
                      style={{ color: "var(--ai-gold)" }}
                    />
                    <span
                      className="font-display font-bold uppercase tracking-wider"
                      style={{ color: "var(--ai-gold)" }}
                    >
                      Tsering Dorjee
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.70 0.03 95)" }}
                  >
                    Owner & Proprietor
                  </p>
                  <a
                    href="tel:9808091436"
                    className="flex items-center gap-2 mt-2 text-sm font-semibold"
                    style={{ color: "var(--ai-gold)" }}
                  >
                    <Phone className="h-4 w-4" />
                    9808091436
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: "🛡️",
                    title: "Authentic Gear",
                    desc: "Certified military-grade products",
                  },
                  {
                    icon: "⚡",
                    title: "Fast Delivery",
                    desc: "Quick dispatch across Nepal",
                  },
                  {
                    icon: "🏅",
                    title: "Quality Assured",
                    desc: "100% quality guarantee",
                  },
                  {
                    icon: "🤝",
                    title: "Trusted Service",
                    desc: "10+ years serving Nepal's army",
                  },
                ].map((feat) => (
                  <div
                    key={feat.title}
                    className="rounded p-5 flex flex-col gap-2"
                    style={{ background: "oklch(0.30 0.06 130)" }}
                  >
                    <span className="text-3xl">{feat.icon}</span>
                    <p
                      className="font-display font-bold uppercase text-sm tracking-wide"
                      style={{ color: "oklch(0.90 0.04 95)" }}
                    >
                      {feat.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.68 0.03 95)" }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PAYMENT */}
        <section
          id="payment"
          className="py-20"
          style={{ background: "oklch(0.94 0.025 95)" }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p
                className="text-xs uppercase tracking-[0.3em] font-bold mb-2"
                style={{ color: "var(--ai-olive)" }}
              >
                Easy Payments
              </p>
              <h2
                className="font-display text-4xl font-bold uppercase tracking-wider"
                style={{ color: "oklch(0.22 0.06 130)" }}
              >
                Pay via eSewa
              </h2>
              <div
                className="mx-auto mt-3 h-1 w-16"
                style={{ background: "var(--ai-gold)" }}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="flex justify-center"
            >
              <div
                className="rounded-lg p-8 text-center max-w-xs w-full shadow-xl"
                style={{
                  background: "white",
                  border: "3px solid var(--ai-gold)",
                }}
              >
                <div
                  className="rounded text-xs font-bold uppercase tracking-widest mb-5 py-2 px-4"
                  style={{ background: "#60b246", color: "white" }}
                >
                  eSewa QR Code
                </div>
                <img
                  src="/assets/uploads/img_6439-019d3570-78e2-7257-bc0e-25f5d2e2ac95-1.jpeg"
                  alt="eSewa QR Code"
                  className="mx-auto rounded w-48 h-48 object-contain"
                  style={{ border: "1px solid oklch(0.85 0.03 95)" }}
                />
                <p
                  className="mt-4 font-display font-bold uppercase tracking-wider text-base"
                  style={{ color: "oklch(0.22 0.06 130)" }}
                >
                  Tsering Dorjee
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Scan to pay via eSewa
                </p>
                <div
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold"
                  style={{ color: "var(--ai-olive)" }}
                >
                  <Phone className="h-4 w-4" />
                  9808091436
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20"
          style={{ background: "oklch(0.24 0.06 130)" }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p
                className="text-xs uppercase tracking-[0.3em] font-bold mb-2"
                style={{ color: "var(--ai-gold)" }}
              >
                Get In Touch
              </p>
              <h2
                className="font-display text-4xl font-bold uppercase tracking-wider"
                style={{ color: "oklch(0.92 0.04 95)" }}
              >
                Contact Us
              </h2>
              <div
                className="mx-auto mt-3 h-1 w-16"
                style={{ background: "var(--ai-gold)" }}
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "Phone",
                  value: "9808091436",
                  href: "tel:9808091436",
                },
                {
                  icon: <MapPin className="h-8 w-8" />,
                  title: "Location",
                  value: "Nepal",
                  href: null,
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Owner",
                  value: "Tsering Dorjee",
                  href: null,
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx}
                  className="rounded p-6 text-center"
                  style={{ background: "oklch(0.30 0.06 130)" }}
                  data-ocid="contact.card"
                >
                  <div
                    className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "oklch(0.36 0.07 130)" }}
                  >
                    <span style={{ color: "var(--ai-gold)" }}>{item.icon}</span>
                  </div>
                  <p
                    className="font-display text-sm uppercase tracking-wider font-bold mb-1"
                    style={{ color: "var(--ai-gold)" }}
                  >
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.88 0.04 95)" }}
                      data-ocid="contact.link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-sm"
                      style={{ color: "oklch(0.80 0.03 95)" }}
                    >
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "var(--ai-charcoal)" }} className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" style={{ color: "var(--ai-gold)" }} />
              <span
                className="font-display text-base font-bold uppercase tracking-widest"
                style={{ color: "var(--ai-gold)" }}
              >
                ARMY IGNSEE
              </span>
            </div>

            <div className="text-center">
              <p className="text-xs" style={{ color: "oklch(0.55 0.02 250)" }}>
                Owner: Tsering Dorjee &nbsp;|&nbsp;
                <a
                  href="tel:9808091436"
                  className="hover:underline"
                  style={{ color: "oklch(0.65 0.02 250)" }}
                >
                  9808091436
                </a>
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "oklch(0.40 0.01 250)" }}
              >
                © {new Date().getFullYear()}. Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "oklch(0.55 0.02 250)" }}
                >
                  caffeine.ai
                </a>
              </p>
            </div>

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="h-3 w-3 fill-current"
                  style={{ color: "var(--ai-gold)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
