import React, { useState } from "react";
import { MessageSquareCode, Send, Mail, MapPin, Shield } from "lucide-react";
import Logo from "../Logo";

const WHATSAPP_URL = "https://wa.me/919606664929";

export const Contact = () => {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Send data directly to WhatsApp as a pre-filled text
    const textMessage = `Hi SuperWeb! I am interested in building a website/portal.

Name: ${name}
School/Business: ${org}
Phone/Contact: ${phone}
Details: ${msg}`;

    const encodedText = encodeURIComponent(textMessage);
    window.open(`${WHATSAPP_URL}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Let's Build Something Great Together
              </h2>
              <p className="text-base text-gray-400">
                Have questions about school portals, custom database integrations, or pricing? Fill out the quick form or jump directly to chat.
              </p>
            </div>

            {/* Direct Contacts List */}
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>prathap.v5214@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                  <Shield className="w-4 h-4" />
                </div>
                <span>Zero-Code Support Active Global Service</span>
              </div>
            </div>

            {/* Founder details */}
            <div className="p-5 border border-white/5 bg-[#121212]/30 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-400 font-extrabold text-lg">
                PV
              </div>
              <div>
                <div className="font-bold text-sm text-white">Prathap V</div>
                <div className="text-xs text-gray-400 mt-0.5">Founder & Lead Architect, SuperWeb</div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Form */}
          <div className="lg:col-span-7">
            <div className="p-8 border border-white/5 bg-[#121212]/30 rounded-3xl backdrop-blur-md shadow-2xl">
              <h3 className="text-lg font-bold font-sans text-white mb-6">
                Send Project Enquiry
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 block mb-1.5 font-semibold">Your Name:</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1.5 font-semibold">School / Business Name:</label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
                      placeholder="e.g. St. Mary Academy"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 block mb-1.5 font-semibold">WhatsApp / Contact Phone:</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
                    placeholder="e.g. +91 96066 64929"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 block mb-1.5 font-semibold">Describe Your Project Requirements:</label>
                  <textarea
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 resize-none h-28"
                    placeholder="Describe portal features, pages, or automation rules..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit via WhatsApp
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold py-4 rounded-xl text-sm transition-all duration-300"
                  >
                    <MessageSquareCode className="w-4 h-4 text-blue-400" />
                    Start Quick Chat
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Sub-row */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <Logo variant="icon" size={26} />
            <span>&copy; {new Date().getFullYear()} SuperWeb. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <span className="text-xs tracking-wider uppercase">We Build. You Grow.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
