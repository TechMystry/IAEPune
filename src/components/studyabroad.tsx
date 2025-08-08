"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudyAbroadHero() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-200 text-blue-900 px-4 py-1 rounded-full text-sm font-medium mb-3 shadow-sm"
          >
            Explore Global Education
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-900 mb-3"
          >
            Study Abroad – Your Gateway to Global Opportunities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-gray-700 mb-6 max-w-xl"
          >
            Pursue your dream course from Engineering, Business, Arts to Medicine at top universities across the globe. Get expert guidance on admissions, visas, and scholarships.
          </motion.p>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center h-60 md:h-72 lg:h-80"
        >
        </motion.div>
      </div>

      {/* Floating Decorative Shapes */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-16 right-16 w-4 h-4 bg-blue-400 rounded-full shadow-md"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-24 w-3.5 h-3.5 bg-blue-300 rounded-full shadow-md"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-sm"
      ></motion.div>
    </section>
  );
}
