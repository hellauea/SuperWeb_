import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919606664929";

const CTASection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-xl mb-6"
        >
          Let's Build Something That{" "}
          <span className="gradient-text">Actually Works.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Ready to transform your business with a professional website, app, or AI system? Let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedButton
            href={`${WHATSAPP_URL}?text=Hi! I'd like to discuss a project with SUPERWEB.`}
            external
            variant="primary"
            className="text-lg px-10 py-5"
          >
            WhatsApp Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </AnimatedButton>
        </motion.div>

        {/* Trust text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          No commitment required • Free consultation • Quick response
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
