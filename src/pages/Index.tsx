import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import WebsitePricingSection from "@/components/sections/WebsitePricingSection";
import WhyWebsiteSection from "@/components/sections/WhyWebsiteSection";
import AppPricingSection from "@/components/sections/AppPricingSection";
import WhyAppsSection from "@/components/sections/WhyAppsSection";
import AISection from "@/components/sections/AISection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Reordered as requested */}
      <main>
        {/* 1. Hero Section - Entry Navigation */}
        <HeroSection />
        
        {/* 2. Website Pricing - First Business Section */}
        <WebsitePricingSection />
        
        {/* 3. Why Website - Short section */}
        <WhyWebsiteSection />
        
        {/* 4. App Pricing - Second Priority */}
        <AppPricingSection />
        
        {/* 5. Why Apps - Small section */}
        <WhyAppsSection />
        
        {/* 6. AI Integration Section */}
        <AISection />
        
        {/* 7. Services - What SUPERWEB Builds */}
        <ServicesSection />
        
        {/* 8. Portfolio - Past Work */}
        <PortfolioSection />
        
        {/* 9. Why Choose SUPERWEB */}
        <WhyChooseSection />
        
        {/* 10. Final CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
