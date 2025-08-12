'use client';

import { motion, Variants } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// ✅ Navigation links array
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Global Careers', href: '/global-careers' }, // maps to src/app/global/page.tsx
  { name: 'Study Abroad', href: '/study-abroad' }, // maps to src/app/studyabroad/page.tsx
  { name: 'MBBS Abroad', href: '/mbbs-abroad' }, // maps to src/app/mbbsabroad/page.tsx
  { name: 'About Us', href: '/about' }, // you'll need to move about.tsx to app/about/page.tsx
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-950 text-white py-10 text-sm">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* IAE Pune */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-blue-300 flex items-center mb-2">
              <span className="text-xl mr-2">🌐</span> IAE Pune
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Trusted partner for global education & careers since 2009.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-blue-300 font-semibold mb-2 uppercase tracking-wide text-xs">Quick Links</h4>
            <ul className="space-y-1 text-gray-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-blue-300 font-semibold mb-2 uppercase tracking-wide text-xs">Contact</h4>
            <ul className="space-y-1 text-gray-300">
              <li>
                Flat No. C1, Shree Ganesh Vihar,
                <br />
                Sasane Nagar, Kale Padal Road , Hadapsar, Pune - 411028, Maharashtra, India.
              </li>
              <li>
                📧{' '}
                <a href="mailto:bvishal.bansode@gmail.com" className="hover:text-blue-400">
                  bvishal.bansode@gmail.com
                </a>
              </li>
              <li>
                📞{' '}
                <a href="tel:+919975042929" className="hover:text-blue-400">
                  +91 9975042929
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row justify-between items-center border-t border-blue-900/50 pt-6 gap-4"
        >
          <div className="flex gap-3">
            <motion.a
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/919975042929"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm"
            >
              <FaWhatsapp size={16} /> WhatsApp
            </motion.a>
            <motion.a
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              href="https://instagram.com/iaepune"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm"
            >
              <FaInstagram size={16} /> @IAEPune
            </motion.a>
          </div>
          <div className="text-xs text-gray-400 text-center md:text-right">
            <p>© 2025 IAE Pune. All rights reserved.</p>
            <p>
              <a
                href="https://wa.me/918805526198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-400"
              >
                Managed by Techmystry
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
