import { motion } from "framer-motion";
import Logo from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container-custom py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size="lg" className="mb-4" />
            <p className="text-muted-foreground max-w-md mb-6">
              We Build Websites, Apps & AI Systems That Grow Businesses. From simple websites to AI-powered apps, SUPERWEB turns ideas into systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {["Business Websites", "Mobile Apps", "AI Integration", "Web Apps"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919606664929" className="hover:text-foreground transition-colors">
                  +91 96066 64929
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:prathap.v52142gmail.com" className="hover:text-foreground transition-colors">
                  prathap.v5214
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} SUPERWEB. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Websites. Apps. AI. Built for Growth.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
