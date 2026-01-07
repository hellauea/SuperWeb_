import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AnimatedButton from "../ui/AnimatedButton";
import { Bot, MessageSquare, FileCheck, Reply, BarChart3, Headphones, UserPlus, Workflow, Zap, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919606664929";

const aiForWebsite = [
  { icon: MessageSquare, text: "Chatbot integration" },
  { icon: FileCheck, text: "Smart forms" },
  { icon: Reply, text: "Automated replies" },
  { icon: BarChart3, text: "Conversion tracking" },
];

const aiForApp = [
  { icon: Headphones, text: "24/7 support" },
  { icon: UserPlus, text: "Lead capture" },
  { icon: Workflow, text: "AI workflows" },
  { icon: Zap, text: "Efficiency boost" },
];

const aiPlans = [
  {
    id: "ai-integration",
    name: "AI Integration",
    price: "₹9,999",
    description: "Add AI to your existing website or app.",
    features: [
      "AI chatbot",
      "Smart forms",
      "Basic automation",
      "Lead scoring",
    ],
  },
  {
    id: "advanced-ai-systems",
    name: "Advanced AI Systems",
    price: "₹14,999",
    description: "Complete AI-powered transformation.",
    features: [
      "Custom AI models",
      "Workflow automation",
      "API integrations",
      "Ongoing optimization",
    ],
    featured: true,
  },
];

const AISection = () => {
  return (
    <SectionWrapper id="ai-section">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px]"
          animate={{
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px]"
          animate={{
            x: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading
          title="AI Makes Websites & Apps Smarter"
          subtitle="Transform your digital presence with intelligent automation."
          gradient
        />

        {/* AI For Website & App - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* AI For Website */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">AI For Website</h3>
            </div>
            <div className="space-y-3">
              {aiForWebsite.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-foreground/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI For App */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">AI For App</h3>
            </div>
            <div className="space-y-3">
              {aiForApp.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <item.icon className="w-4 h-4 text-purple-400" />
                  <span className="text-foreground/90">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Pricing - Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {aiPlans.map((plan, index) => (
            <motion.div
              id={plan.id}
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className={`relative p-6 rounded-xl border backdrop-blur-sm overflow-hidden group transition-all duration-500 ${
                plan.featured
                  ? "bg-gradient-to-br from-purple-500/10 to-primary/10 border-primary/30"
                  : "bg-card/50 border-border/50"
              }`}
            >
              <h4 className="font-semibold text-foreground mb-1">{plan.name}</h4>
              <div className="text-2xl font-bold gradient-text mb-2">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-3 h-3 text-primary shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton
                href={`${WHATSAPP_URL}?text=Hi! I'm interested in ${plan.name} (${plan.price})`}
                external
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full justify-center py-2 text-sm"
              >
                Get AI Power
              </AnimatedButton>

              {/* Glow */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full filter blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AISection;
