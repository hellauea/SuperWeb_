import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { Globe, Sparkles, Layout, Smartphone, Bot, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional websites that establish credibility and convert visitors into customers.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Sparkles,
    title: "Premium Brand Websites",
    description: "High-end websites with custom animations and premium aesthetics for luxury brands.",
    features: ["Custom Animations", "Premium Design", "Brand Identity"],
  },
  {
    icon: Layout,
    title: "Web Apps & Dashboards",
    description: "Powerful web applications for internal tools, admin panels, and business operations.",
    features: ["Custom Features", "Data Management", "User Roles"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps (Android)",
    description: "Native Android apps that put your business directly in customers' pockets.",
    features: ["Push Notifications", "Offline Support", "Play Store Ready"],
  },
  {
    icon: Bot,
    title: "AI-Powered Websites",
    description: "Websites enhanced with AI chatbots, smart forms, and automated customer service.",
    features: ["AI Chatbot", "Smart Automation", "Lead Capture"],
  },
  {
    icon: Settings,
    title: "Custom Business Systems",
    description: "Tailored digital systems that automate and streamline your unique business processes.",
    features: ["Process Automation", "API Integrations", "Scalable Architecture"],
  },
];

const ServicesSection = () => {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="What SUPERWEB Builds"
        subtitle="From simple websites to complex AI systems, we build digital solutions that drive real business results."
        gradient
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3 },
            }}
            className="group relative perspective"
          >
            <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden preserve-3d transition-all duration-300 group-hover:border-primary/30">
              {/* Gradient border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent)",
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
