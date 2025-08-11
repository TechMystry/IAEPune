"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactModal from "./ContactForm";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const careerOptions = [
  "Global Careers",
  "Global Ambitions",
  "Global Opportunities",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    if (subIndex === careerOptions[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % careerOptions.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setDisplayText(careerOptions[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <>
      <section className="min-h-screen relative overflow-hidden">
        {/* German Flag Background using image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/germanFlagBackground.png" // Place the uploaded flag image in /public folder
            alt="German Flag Background"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: "brightness(0.85) contrast(1.1)" }}
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />

          {/* Moving light sweep for premium feel */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10 min-h-screen"
        >
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-block bg-[#F9E79F] text-black text-xs sm:text-sm px-3 py-1 rounded-full mb-4"
            >
              Indira Academy Education
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Developing Thoughts for the Future
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white mb-6 max-w-xl mx-auto md:mx-0"
            >
              At IAE Pune, our mission is to make global education accessible
              and career-oriented, ensuring every student gets the right
              guidance, support, and opportunities.
            </motion.p>

            {/* Typewriter Text */}
            <motion.div
              variants={fadeInUp}
              className="text-lg sm:text-2xl font-semibold text-[#fef7e5] mb-8"
            >
              Your Gateway to{" "}
              <span className="text-[#FFD700] font-bold border-r-2 border-[#FFD700] pr-1">
                {displayText}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="bg-white text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
                >
                  Let's Talk
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={scaleIn}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden shadow-lg border-4 border-[#FFD700]">
              <Image
                src="/studentPlaceHolder.png"
                alt="Graduate"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

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
