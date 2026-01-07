import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { Briefcase, Code2, Zap, DollarSign, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Business-First Mindset",
    description: "We don't just build websites. We build systems that understand your business goals and drive real results.",
  },
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description: "Our code is maintainable, well-documented, and built to grow with your business. No technical debt.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We respect your time. Most projects are delivered in 7-14 days without compromising on quality.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "What you see is what you pay. No hidden fees, no surprise charges. Complete transparency.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description: "We're not just vendors, we're partners. Ongoing support and maintenance to keep your systems running.",
  },
];

const WhyChooseSection = () => {
  return (
    <SectionWrapper id="why-choose" className="bg-card/20">
      <SectionHeading
        title="Why Choose SUPERWEB"
        subtitle="We're not just another web agency. Here's what makes us different."
      />

      <div className="max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-6 mb-8 last:mb-0"
          >
            <motion.div
              className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <reason.icon className="w-7 h-7 text-primary" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseSection;
