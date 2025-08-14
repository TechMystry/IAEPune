"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import ContactModal from "./ContactForm";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Global Careers", href: "/global-careers" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "MBBS Abroad", href: "/mbbs-abroad" },
    { name: "Ausbildung", href: "/AusbildungGermany" },
    {
      name: "Language Learning",
      href: "http://192.168.31.94:3007/language",
      external: true,
    },
    { name: "About Us", href: "/about" },
  ];

  const handleClick = (
    e: React.MouseEvent,
    href: string,
    external?: boolean
  ) => {
    e.preventDefault();

    if (external) {
      window.location.href = href; // Open in same tab
      return;
    }

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
    {/* Fixed Header */}
<header className="fixed top-0 left-0 right-0 z-50 bg-white text-black shadow-sm">
  <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-2">
    {/* Logo Section */}
    <div className="flex flex-col leading-tight text-[#1e3a8a]">
      <span className="text-base sm:text-lg md:text-xl font-bold">
        IAE Pune
      </span>
      <span className="text-[9px] sm:text-[10px] md:text-xs opacity-80">
        Global Education Partner Since 2009
      </span>
    </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleClick(e, link.href, link.external)}
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg w-full">
            <nav className="flex flex-col items-start p-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleClick(e, link.href, link.external)}
                  className="w-full text-left text-black text-sm font-medium py-2 px-2 border-b border-gray-100 last:border-none"
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
