"use client";

import Hero from "@/components/hero";
import OurServices from "@/components/service";
import StatsSection from "@/components/stats";
import AboutSection from "@/components/about";
import ContactModal from "@/components/ContactForm";
import { useState } from "react";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      {/* Optionally you can leave the static contact section too
      <section id="contact">
        <ContactSection />
      </section> 
      */}
    </>
  );
}
