import SpotlightCard from "../ui/SpotlightCard";
import { GraduationCap, Landmark, HeartHandshake, Bot, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "School Portals & Websites",
    description: "Responsive portals, online admission forms, fee integrations, and management hubs tailored for educational institutions.",
    features: ["Online Admissions", "Fee Payments", "Parent/Student Portals"],
    glowColor: "rgba(59, 130, 246, 0.15)", // Blue
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Landmark,
    title: "Business Landing Pages",
    description: "Premium, high-converting websites designed to capture leads, showcase achievements, and scale business credibility.",
    features: ["SEO Optimization", "Lead Capturing", "Interactive Copy"],
    glowColor: "rgba(16, 185, 129, 0.15)", // Emerald
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Automation",
    description: "Integrate intelligent conversational agents that auto-reply to parent admission enquiries or client leads 24/7.",
    features: ["Auto Lead Response", "FAQ Handlers", "Custom Chatbots"],
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Zap,
    title: "WordPress & Custom CMS",
    description: "Easy-to-edit blog structures, e-commerce stores, and databases that require zero coding knowledge to update.",
    features: ["CMS Dashboards", "Zero-Code Editing", "E-commerce Stores"],
    glowColor: "rgba(249, 115, 22, 0.15)", // Orange
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Architecture",
    description: "High-speed hosting, SSL setups, database backups, and maintenance plans that ensure 99.9% application uptime.",
    features: ["SSL Certificates", "Database Backups", "Ultra-Fast Speeds"],
    glowColor: "rgba(239, 68, 68, 0.15)", // Red
    iconColor: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Zero-Code Support",
    description: "We handle all technical edits, content updates, and server maintenance so you can focus entirely on growth.",
    features: ["Continuous Backups", "Priority Support", "Zero-Dev Friction"],
    glowColor: "rgba(6, 182, 212, 0.15)", // Cyan
    iconColor: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
            What{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              SuperWeb
            </span>{" "}
            Builds
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            From modern school portals to intelligent automation dashboards, we craft digital platforms that scale your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <SpotlightCard
              key={service.title}
              glowColor={service.glowColor}
              className="p-8 border border-white/5 bg-[#121212]/50 relative"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-sans text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tag Features */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
