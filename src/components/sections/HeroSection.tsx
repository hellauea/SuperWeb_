import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Globe, Bot, Smartphone, Sparkles } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  const headlineWords = "We Build Websites, Apps & AI Systems That Grow Businesses.".split(" ");

  const scrollToSection = (sectionId: string, highlightId?: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
      // Highlight specific plan card if provided
      if (highlightId) {
        setTimeout(() => {
          const card = document.getElementById(highlightId);
          if (card) {
            card.classList.add("highlight-glow");
            setTimeout(() => card.classList.remove("highlight-glow"), 2000);
          }
        }, 800);
      }
    }
  };

  const navButtons = [
    { 
      label: "Website", 
      icon: Globe, 
      section: "website-pricing",
      highlight: "basic-website",
      color: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
      hoverBorder: "hover:border-emerald-500/60"
    },
    { 
      label: "AI Website", 
      icon: Sparkles, 
      section: "ai-section",
      highlight: "ai-integration",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-500/60"
    },
    { 
      label: "App", 
      icon: Smartphone, 
      section: "app-pricing",
      highlight: "basic-app",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-500/60"
    },
    { 
      label: "AI App", 
      icon: Bot, 
      section: "app-pricing",
      highlight: "basic-ai-app",
      color: "from-primary/20 to-red-600/20",
      borderColor: "border-primary/30",
      hoverBorder: "hover:border-primary/60"
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full filter blur-[80px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Digital Solutions Company</span>
        </motion.div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="heading-xl mb-6 leading-tight"
        >
          {headlineWords.map((word, index) => (
            <span
              key={index}
              className={`word inline-block mr-3 ${
                ["Websites,", "Apps", "AI", "Systems"].includes(word.replace(",", ""))
                  ? "gradient-text"
                  : ""
              }`}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          From simple websites to AI-powered apps, SUPERWEB turns ideas into digital systems that attract customers, save time, and scale revenue.
        </motion.p>

        {/* Navigation Buttons - 4 Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
        >
          {navButtons.map((button, index) => (
            <motion.button
              key={button.label}
              onClick={() => scrollToSection(button.section, button.highlight)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`relative group p-4 rounded-xl bg-gradient-to-br ${button.color} border ${button.borderColor} ${button.hoverBorder} backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Magnetic glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 70%)",
                }}
              />
              
              {/* Ripple effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ boxShadow: "0 0 0 0 transparent" }}
                whileHover={{
                  boxShadow: "0 0 30px hsl(var(--primary) / 0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 flex flex-col items-center gap-2">
                <button.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="font-semibold text-foreground text-sm">{button.label}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">50+</span>
            <span>Projects Delivered</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">100%</span>
            <span>Client Satisfaction</span>
          </div>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-primary font-semibold">24/7</span>
            <span>Support</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
