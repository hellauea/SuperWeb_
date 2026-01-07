import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <motion.a
      href="/"
      className={cn("font-bold tracking-tight flex items-center gap-1", sizeClasses[size], className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="text-foreground">SUPER</span>
      <span className="gradient-text">WEB</span>
    </motion.a>
  );
};

export default Logo;
