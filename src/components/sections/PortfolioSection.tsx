import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Twinkling Petals",
    description: "A beautiful floral business website with elegant design and seamless customer experience.",
    url: "https://twinklingpetals.com",
    tags: ["Business Website", "E-commerce Ready"],
  },
  {
    name: "Little Junior DPS",
    description: "Modern school website with comprehensive information architecture and parent-friendly navigation.",
    url: "https://littlejuniordps.com",
    tags: ["School Website", "Informational"],
  },
];

const PortfolioSection = () => {
  return (
    <SectionWrapper id="portfolio">
      <SectionHeading
        title="Our Work Speaks for Itself"
        subtitle="Real projects, real results. See what we've built for businesses like yours."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative block p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden cursor-pointer"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <motion.div
                  className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* URL */}
              <div className="flex items-center gap-2 mt-6 text-sm text-primary">
                <ExternalLink className="w-4 h-4" />
                <span className="group-hover:underline">{project.url.replace("https://", "")}</span>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
