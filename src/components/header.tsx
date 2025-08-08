"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ContactModal from "./ContactForm";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Global Careers", href: "/global-careers" }, // maps to src/app/global/page.tsx
    { name: "Study Abroad", href: "/study-abroad" }, // maps to src/app/studyabroad/page.tsx
    { name: "MBBS Abroad", href: "/mbbs-abroad" }, // maps to src/app/mbbsabroad/page.tsx
    { name: "Ausbildung", href: "/AusbildungGermany" },
    { name: "About Us", href: "/about" }, // you'll need to move about.tsx to app/about/page.tsx
  ];

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    } else {
      router.push(href);
      setMenuOpen(false);
    }
  };

  return (
    <>
       <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-gray-200 shadow-sm text-black">
        <div className="flex items-center justify-between px-4 md:px-10 py-2">
          {/* Logo Section */}
          <div className="flex flex-col leading-tight text-[#1e3a8a]">
            <span className="text-lg md:text-xl font-bold">IAE Pune</span>
            <span className="text-[10px] md:text-xs opacity-80">
              Global Education Partner Since 2009
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleClick(e, link.href)}
                className="relative text-black text-sm font-medium hover:text-black transition-colors duration-300 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                  after:bg-gradient-to-r after:from-[#2f68ff] after:to-[#9f44ff] 
                  hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <button
            onClick={() => setShowContactModal(true)}
            className="hidden md:inline-block bg-[#1e3a8a] hover:bg-[#15317e] text-white font-bold py-2 px-4 rounded-lg 
              shadow-md text-xs md:text-sm transition-transform duration-200 hover:scale-105"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1e3a8a]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col items-start p-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleClick(e, link.href)}
                  className="w-full text-left text-black text-sm font-medium py-2 border-b border-gray-100 last:border-none"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowContactModal(true);
                  setMenuOpen(false);
                }}
                className="w-full text-center bg-[#1e3a8a] hover:bg-[#15317e] text-white font-bold py-2 rounded-lg shadow-md text-sm"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </>
  );
}
