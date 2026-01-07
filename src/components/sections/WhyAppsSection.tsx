import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { Smartphone, Bell, TrendingUp, Users } from "lucide-react";

const appBenefits = [
  { icon: Smartphone, text: "Always on phone" },
  { icon: Bell, text: "Push notifications" },
  { icon: TrendingUp, text: "Higher engagement" },
  { icon: Users, text: "Repeat customers" },
];

const WhyAppsSection = () => {
  return (
    <SectionWrapper id="why-apps" className="py-16">
      <SectionHeading
        title="Why Your Business Needs an App"
        subtitle=""
      />

      {/* Benefits - Compact horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        {appBenefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-3 px-5 py-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <benefit.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium text-foreground">{benefit.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default WhyAppsSection;
