import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "../ui/SpotlightCard";
import { Check, Star, MessageSquareCode, Globe, Smartphone, Bot, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919606664929";

const categories = [
  { id: "websites", label: "Websites", icon: Globe },
  { id: "apps", label: "Apps & Web Apps", icon: Smartphone },
  { id: "ai", label: "AI Add-Ons", icon: Bot },
  { id: "ongoing", label: "Ongoing Services", icon: ShieldCheck },
];

const pricingData: Record<string, any[]> = {
  websites: [
    {
      name: "Landing Page",
      price: "₹5K – ₹15K",
      emoji: "📄",
      badge: null,
      description: "Single page, mobile responsive setup to showcase your core offering.",
      features: [
        "Single page, mobile responsive",
        "Contact form, WhatsApp button",
        "Basic SEO setup",
        "Free Hosting configuration",
      ],
      cta: "Build Landing Page",
      glowColor: "rgba(59, 130, 246, 0.1)",
      gradient: "from-blue-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Business Website",
      price: "₹15K – ₹40K",
      emoji: "🏢",
      badge: "MOST POPULAR",
      description: "Complete multi-page website with self-editable Content Management System.",
      features: [
        "5–10 pages, CMS (edit content yourself)",
        "Gallery, testimonials, blog",
        "Google Maps, SEO setup",
        "Priority WhatsApp updates",
      ],
      cta: "Build Business Site",
      glowColor: "rgba(34, 197, 94, 0.15)",
      gradient: "from-emerald-600/5 to-transparent",
      borderColor: "border-emerald-500/20",
    },
    {
      name: "E-commerce Store",
      price: "₹30K – ₹80K",
      emoji: "🛒",
      badge: null,
      description: "A fully functional online store with product catalogs and cart checkout workflows.",
      features: [
        "Product catalog, cart, checkout",
        "Razorpay / UPI integration",
        "Order management panel",
        "Email/WhatsApp order alerts",
      ],
      cta: "Build E-commerce",
      glowColor: "rgba(249, 115, 22, 0.1)",
      gradient: "from-orange-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Premium / Cinematic",
      price: "₹60K – ₹1.5L",
      emoji: "👑",
      badge: null,
      description: "High-end brand experiences with custom GSAP/WebGL interactive animations.",
      features: [
        "Custom animations, WebGL, GSAP",
        "High-end brand experience",
        "For agencies, startups, luxury brands",
        "Custom art direction & copywriting",
      ],
      cta: "Build Premium Site",
      glowColor: "rgba(168, 85, 247, 0.1)",
      gradient: "from-purple-600/5 to-transparent",
      borderColor: "border-white/5",
    },
  ],
  apps: [
    {
      name: "Web Application",
      price: "₹50K – ₹2L+",
      emoji: "⚙️",
      badge: null,
      description: "Custom user logins, dashboards, role management, and functional databases.",
      features: [
        "Login, roles, dashboard",
        "Forms, data management",
        "React / Next.js / Node.js",
        "API Integration & Cloud setup",
      ],
      cta: "Build Web App",
      glowColor: "rgba(59, 130, 246, 0.1)",
      gradient: "from-blue-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Mobile App (PWA)",
      price: "₹40K – ₹1.2L",
      emoji: "📱",
      badge: null,
      description: "Installable hybrid application for iOS and Android with offline capability.",
      features: [
        "Installable on iOS & Android",
        "Push notifications support",
        "Offline support caching",
        "Fast web-based performance",
      ],
      cta: "Build PWA App",
      glowColor: "rgba(6, 182, 212, 0.1)",
      gradient: "from-cyan-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Native Mobile App",
      price: "₹1L – ₹5L+",
      emoji: "🚀",
      badge: "HIGH COMPLEXITY",
      description: "Cross-platform Flutter build deployed directly to Play Store & App Store.",
      features: [
        "Flutter (iOS + Android both)",
        "Auth, payments, notifications",
        "Play Store / App Store deploy",
        "Native performance & hardware access",
      ],
      cta: "Build Native App",
      glowColor: "rgba(239, 68, 68, 0.15)",
      gradient: "from-red-600/5 to-transparent",
      borderColor: "border-red-500/20",
    },
    {
      name: "Custom Backend / API",
      price: "₹30K – ₹1.5L",
      emoji: "🗄️",
      badge: null,
      description: "High-performance REST or GraphQL database engine to power third party interfaces.",
      features: [
        "REST or GraphQL API",
        "Database design, cloud hosting",
        "Firebase / Supabase / Node.js",
        "Scalable serverless deployment",
      ],
      cta: "Build Backend/API",
      glowColor: "rgba(168, 85, 247, 0.1)",
      gradient: "from-purple-600/5 to-transparent",
      borderColor: "border-white/5",
    },
  ],
  ai: [
    {
      name: "AI Chatbot",
      price: "₹15K – ₹50K",
      emoji: "💬",
      badge: null,
      description: "Auto-answer parent questions or client leads trained directly on your documents.",
      features: [
        "Answers FAQs from your content",
        "Embedded on any website",
        "Powered by GPT / Claude / Gemini",
        "Context limit customization",
      ],
      cta: "Add AI Chatbot",
      glowColor: "rgba(59, 130, 246, 0.1)",
      gradient: "from-blue-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Personality AI",
      price: "₹25K – ₹80K",
      emoji: "🎭",
      badge: "UNIQUE OFFERING",
      description: "A mascot or custom persona representing your brand voice with text-to-speech option.",
      features: [
        "Custom persona (brand mascot, etc.)",
        "Voice, tone, memory, backstory",
        "TTS / voice output optional",
        "Continuous retainer monitoring",
      ],
      cta: "Build Persona AI",
      glowColor: "rgba(168, 85, 247, 0.15)",
      gradient: "from-purple-600/5 to-transparent",
      borderColor: "border-purple-500/20",
    },
    {
      name: "Company AI Assistant",
      price: "₹40K – ₹1.5L",
      emoji: "🏢",
      badge: "HIGH VALUE",
      description: "Trained on company SOPs and docs to run internal operations and staff tasks.",
      features: [
        "Trained on company docs, SOPs",
        "Staff-facing internal tool",
        "Slack / WhatsApp / Web integration",
        "Security boundary protocols",
      ],
      cta: "Build Assistant",
      glowColor: "rgba(34, 197, 94, 0.15)",
      gradient: "from-emerald-600/5 to-transparent",
      borderColor: "border-emerald-500/20",
    },
    {
      name: "AI-Powered Feature",
      price: "₹20K – ₹1L",
      emoji: "🪄",
      badge: null,
      description: "Specific modular AI pipelines like document parsing, image recognition, or screens.",
      features: [
        "Resume screener, invoice parser",
        "Image recognition, form autofill",
        "Add to any existing app/site",
        "Structured JSON outputs setup",
      ],
      cta: "Build AI Feature",
      glowColor: "rgba(6, 182, 212, 0.1)",
      gradient: "from-cyan-600/5 to-transparent",
      borderColor: "border-white/5",
    },
  ],
  ongoing: [
    {
      name: "Monthly Maintenance",
      price: "₹2K – ₹8K",
      emoji: "🛡️",
      badge: "RECOMMENDED",
      description: "Continuous database backups, bug fixes, updates, and server uptime monitoring.",
      features: [
        "Updates, backups, security",
        "Bug fixes, uptime monitoring",
        "WhatsApp change requests sync",
        "Monthly reporting metrics",
      ],
      cta: "Subscribe Support",
      glowColor: "rgba(59, 130, 246, 0.15)",
      gradient: "from-blue-600/5 to-transparent",
      borderColor: "border-blue-500/20",
    },
    {
      name: "SEO & Growth",
      price: "₹5K – ₹20K",
      emoji: "📈",
      badge: null,
      description: "Increase school admissions or customer leads with targeted search optimization.",
      features: [
        "On-page SEO, speed optimization",
        "Monthly performance reporting",
        "Competitor keywords research",
        "Local business directory sync",
      ],
      cta: "Subscribe SEO",
      glowColor: "rgba(6, 182, 212, 0.1)",
      gradient: "from-cyan-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Website Redesign",
      price: "₹10K – ₹50K",
      emoji: "🎨",
      badge: null,
      description: "Modern UI/UX overhaul to bring your old website into the future without losing content.",
      features: [
        "Modern UI/UX overhaul",
        "Keep existing content & structure",
        "Upgraded layout speed audits",
        "New monogram branding setup",
      ],
      cta: "Order Redesign",
      glowColor: "rgba(249, 115, 22, 0.1)",
      gradient: "from-orange-600/5 to-transparent",
      borderColor: "border-white/5",
    },
    {
      name: "Brand & Identity Design",
      price: "₹8K – ₹30K",
      emoji: "✒️",
      badge: null,
      description: "Complete monogram logos, color guides, print-ready sheets, and social media template kits.",
      features: [
        "Logo, color palette, brand kit",
        "Social media templates",
        "Print-ready stationary vector",
        "Guidelines documentation",
      ],
      cta: "Order Branding",
      glowColor: "rgba(168, 85, 247, 0.1)",
      gradient: "from-purple-600/5 to-transparent",
      borderColor: "border-white/5",
    },
  ],
};

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <section id="pricing" className="relative py-24 bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            No hidden developer fees. All pricing options include zero-code WhatsApp update services.
          </p>
        </div>

        {/* Custom Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-2xl mx-auto bg-white/[0.02] border border-white/5 p-2 rounded-2xl">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
            >
              {pricingData[activeTab].map((plan) => (
                <SpotlightCard
                  key={plan.name}
                  glowColor={plan.glowColor}
                  className={`p-6 border bg-[#121212]/50 relative flex flex-col justify-between overflow-hidden rounded-3xl ${plan.borderColor} ${
                    plan.badge ? "ring-2 ring-blue-500/20" : ""
                  }`}
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-30 pointer-events-none`} />

                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-1 -right-1 z-20">
                      <div className="flex items-center gap-1 bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-bl-xl rounded-tr-xl">
                        <Star className="w-3 h-3 fill-white stroke-none" />
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{plan.emoji}</span>
                      <h3 className="text-base font-bold text-white font-sans">{plan.name}</h3>
                    </div>

                    {/* Price */}
                    <div>
                      <span className="text-3xl font-extrabold font-sans text-white">{plan.price}</span>
                      {plan.price !== "Let's Talk" && (
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider block mt-1">
                          {activeTab === "ongoing" ? "monthly subscription" : "one-time cost"}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-400 leading-relaxed min-h-[48px]">
                      {plan.description}
                    </p>

                    {/* Separator */}
                    <div className="h-px bg-white/5 w-full" />

                    {/* Features */}
                    <ul className="space-y-2.5">
                      {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-xs">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="relative z-10 pt-8 mt-auto">
                    <a
                      href={`${WHATSAPP_URL}?text=Hi! I am interested in the ${plan.name} plan under ${
                        categories.find((c) => c.id === activeTab)?.label
                      } (${plan.price}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl text-xs transition-all duration-300 ${
                        plan.badge
                          ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      <MessageSquareCode className="w-4 h-4" />
                      {plan.cta}
                    </a>
                  </div>
                </SpotlightCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
