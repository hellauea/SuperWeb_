import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import AIDemo from "./components/sections/AIDemo";
import Portfolio from "./components/sections/Portfolio";
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <AIDemo />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>

      {/* Sticky Floating Widget */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
