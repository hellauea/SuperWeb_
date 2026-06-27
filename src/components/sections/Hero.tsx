import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageSquareCode, ArrowDown } from "lucide-react";
import Logo from "../Logo";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const orb1X = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const orb1Y = useTransform(springY, [-0.5, 0.5], [-25, 25]);
  const orb2X = useTransform(springX, [-0.5, 0.5], [25, -25]);
  const orb2Y = useTransform(springY, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleScrollToDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const demoSection = document.querySelector("#ai-demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#0A0A0A] text-white"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating orbs with mouse parallax */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/20 rounded-full filter blur-[100px] pointer-events-none"
        style={{ x: orb1X, y: orb1Y }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-sky-400/10 rounded-full filter blur-[80px] pointer-events-none"
        style={{ x: orb2X, y: orb2Y }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-400 uppercase">
              Websites & Apps Built For Growth
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-sans"
          >
            We build digital experiences that drive{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              growth.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl font-light"
          >
            Websites, custom portals, and intelligent automation built for schools and growing businesses. We handle the code, so you can focus on scaling.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/919606664929"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <MessageSquareCode className="w-5 h-5" />
              Let's Build Together
            </a>
            <button
              onClick={handleScrollToDemo}
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300"
            >
              Try Live AI Demo
            </button>
          </motion.div>
        </div>

        {/* Right Side: Animated Monogram Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Backlit Glow for the large logo */}
          <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full filter blur-[80px]" />
          
          {/* Logo container */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl relative group">
            <Logo variant="icon" size={140} className="text-white group-hover:text-blue-400 transition-colors duration-500" />
            
            {/* Interactive Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#1A1A1A] border border-border/80 rounded-xl px-4 py-2.5 shadow-xl text-left flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold leading-none">Live Demo</div>
                <div className="text-xs text-white font-bold leading-none mt-1">3 Active Modes</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer animate-bounce">
        <ArrowDown className="w-6 h-6" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} />
      </div>
    </section>
  );
};

export default Hero;
