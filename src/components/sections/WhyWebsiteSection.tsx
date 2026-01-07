import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { Clock, Shield, Search, Phone, TrendingUp, X, Check } from "lucide-react";

const benefits = [
  { icon: Clock, text: "24/7 online presence" },
  { icon: Shield, text: "Trust and credibility" },
  { icon: Search, text: "Google visibility" },
  { icon: Phone, text: "Easy contact access" },
  { icon: TrendingUp, text: "More customer enquiries" },
];

const comparison = [
  { aspect: "Customer Reach", with: "Unlimited", without: "Local only" },
  { aspect: "Credibility", with: "High", without: "Low" },
  { aspect: "Google", with: "Visible", without: "Invisible" },
];

const WhyWebsiteSection = () => {
  return (
    <SectionWrapper id="why-website" className="py-16">
      <SectionHeading
        title="Why Your Business Needs a Website"
        subtitle=""
      />

      {/* Benefits - Compact horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            <benefit.icon className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">{benefit.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Compact Comparison Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-lg font-semibold text-center mb-4 text-foreground">
          With Website vs Without Website
        </h3>
        
        <div className="bg-card/30 rounded-xl border border-border/50 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-card/50 border-b border-border/50 text-sm">
            <div className="p-3 text-muted-foreground font-medium">Aspect</div>
            <div className="p-3 text-center font-medium text-primary flex items-center justify-center gap-1">
              <Check className="w-4 h-4" /> With
            </div>
            <div className="p-3 text-center font-medium text-muted-foreground flex items-center justify-center gap-1">
              <X className="w-4 h-4" /> Without
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row, index) => (
            <motion.div
              key={row.aspect}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 border-b border-border/30 last:border-b-0 text-sm"
            >
              <div className="p-3 text-foreground">{row.aspect}</div>
              <div className="p-3 text-center text-primary bg-primary/5 font-medium">{row.with}</div>
              <div className="p-3 text-center text-muted-foreground">{row.without}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default WhyWebsiteSection;
