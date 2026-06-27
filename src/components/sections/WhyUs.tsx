import { CheckCircle2, Award, Users, Hourglass } from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";

const stats = [
  { value: "50+", label: "Portals & Sites Delivered", icon: Award, color: "text-blue-500" },
  { value: "100%", label: "Zero-Code Client Overhead", icon: Hourglass, color: "text-emerald-500" },
  { value: "24/7", label: "Monitoring & Server Backups", icon: Users, color: "text-cyan-500" },
];

const pillars = [
  {
    title: "Tailored for Schools",
    description: "We understand parent expectations, fee transaction security, and class portals. Everything is crafted specifically for high-efficiency education operations.",
  },
  {
    title: "Zero-Code Maintenance",
    description: "You never need to log into an editor or write a line of HTML. Just send us your content or event announcements on WhatsApp, and we update it within hours.",
  },
  {
    title: "Designed to Drive Growth",
    description: "Every layout we produce is built with conversion paths that turn anonymous visitors into parent enquiries or new customers.",
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-24 bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
                The SuperWeb Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Why Schools & Businesses Choose Us
              </h2>
              <p className="text-base text-gray-400">
                We don't just hand over a zip file of code and walk away. We build your entire infrastructure and maintain it for you continuously.
              </p>
            </div>

            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">{pillar.title}</h3>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats & Glow cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <SpotlightCard
                key={stat.label}
                glowColor="rgba(37, 99, 235, 0.1)"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 border border-white/5 bg-[#121212]/30 flex items-center gap-6"
              >
                <div className="p-3 rounded-xl bg-white/5 shrink-0">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-sans text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
