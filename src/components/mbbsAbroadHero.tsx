"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MbbsAbroadHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-200 text-blue-900 px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-4 shadow-sm"
          >
            Learn & Get Certificates
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4"
          >
            MBBS Abroad – Your Path to a Global Medical Career
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-full sm:max-w-lg"
          >
            Study at top WHO & NMC approved universities worldwide — without
            donation and at affordable costs. Let us guide you every step of the way.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="#why-study"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Why Study MBBS Abroad?
            </Link>
            <Link
              href="#popular-countries"
              className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Popular Countries
            </Link>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center h-48 sm:h-64 md:h-80 lg:h-96"
        >
          <Image
            src="/Doctors-pana.svg"
            alt="MBBS Abroad Illustration"
            width={400}
            height={400}
            className="object-contain drop-shadow-lg w-full h-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            priority
          />
        </motion.div>
      </div>

      {/* Floating Decorative Shapes */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 sm:top-20 right-10 sm:right-20 w-3 sm:w-5 h-3 sm:h-5 bg-blue-400 rounded-full shadow-md hidden sm:block"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 sm:bottom-32 left-20 sm:left-40 w-2 sm:w-4 h-2 sm:h-4 bg-blue-300 rounded-full shadow-md hidden sm:block"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full shadow-sm hidden sm:block"
      ></motion.div>
    </section>
  );
}