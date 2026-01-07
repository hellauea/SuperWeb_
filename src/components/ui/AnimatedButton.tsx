import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

const AnimatedButton = ({
  children,
  variant = "primary",
  className,
  onClick,
  href,
  external = false,
}: AnimatedButtonProps) => {
  const baseClasses =
    variant === "primary"
      ? "relative overflow-hidden bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg"
      : "relative overflow-hidden bg-secondary text-secondary-foreground font-semibold px-8 py-4 rounded-lg border border-border";

  const content = (
    <motion.span
      className={cn(baseClasses, "inline-flex items-center gap-2", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      
      {/* Glow effect on hover */}
      <motion.span
        className="absolute inset-0 rounded-lg"
        initial={{ boxShadow: "0 0 0 0 transparent" }}
        whileHover={{
          boxShadow:
            variant === "primary"
              ? "0 0 30px hsl(var(--primary) / 0.5)"
              : "0 0 20px hsl(var(--primary) / 0.2)",
        }}
        transition={{ duration: 0.3 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className="cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="cursor-pointer">
      {content}
    </button>
  );
};

export default AnimatedButton;
