"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactModal from "./ContactForm"; // ✅ same modal as in header

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

  // Typewriter effect
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
      <section className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-blue-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="container mx-auto px-4 sm:px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-10"
        >
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              variants={fadeInUp}
              className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full mb-4"
            >
              Indira Academy Education
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            >
              Developing Thoughts for the Future
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto md:mx-0"
            >
              At IAE Pune, our mission is to make global education accessible
              and career-oriented, ensuring every student gets the right
              guidance, support, and opportunities.
            </motion.p>

            {/* Typewriter */}
            <motion.div
              variants={fadeInUp}
              className="text-lg sm:text-2xl font-semibold text-gray-700 mb-8"
            >
              Your Gateway to{" "}
              <span className="text-blue-600 border-r-2 border-blue-600 pr-1">
                {displayText}
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  onClick={() => setShowContactModal(true)} // ✅ opens modal
                  className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-500 transition"
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
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden shadow-lg bg-blue-200 aspect-square">
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

      {/* ✅ Contact Modal */}
      {showContactModal && (
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </>
  );
}
