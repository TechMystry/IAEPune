'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from "./ContactForm";
import {
  Globe,
  Target,
  Users,
  GraduationCap,
  Award,
  Plane,
  Star,
  MessageCircle,
  Phone,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]as any,
    },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut'as any,
    },
  },
};

// Animated Number Component
const AnimatedNumber = ({
  target,
  suffix = '',
  title,
  duration = 2500,
}: {
  target: number;
  suffix?: string;
  title: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const startTime = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <motion.div
      ref={ref}
      variants={numberVariants}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
      className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl" />
      <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        {count}
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{suffix}</span>
      </h2>
      <p className="relative mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium">{title}</p>
    </motion.div>
  );
};

const careers = [
  {
    title: 'International Consultant',
    salary: '$75,000 - $110,000',
    growth: '+16%',
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Global Project Manager',
    salary: '$85,000 - $125,000',
    growth: '+11%',
    icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Cross-cultural Trainer',
    salary: '$60,000 - $90,000',
    growth: '+14%',
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Immigration Specialist',
    salary: '$55,000 - $80,000',
    growth: '+19%',
    icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />,
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const stats = [
  { target: 15000, suffix: '+', title: 'Students Placed' },
  { target: 500, suffix: '+', title: 'Partner Companies' },
  { target: 25, suffix: '+', title: 'Countries' },
  { target: 95, suffix: '%', title: 'Success Rate' },
];

const benefits = [
  {
    title: 'Global Recognition',
    description: 'Work with renowned global brands',
    icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Career Advancement',
    description: 'Faster promotions and global exposure',
    icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Cultural Experience',
    description: 'Work in multicultural environments',
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Higher Salary Potential',
    description: 'Earn more with global opportunities',
    icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />,
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const testimonials = [
  {
    name: 'Ananya Mehta',
    role: 'Global Project Manager at Siemens',
    content: 'The Global Careers program helped me find the perfect job in Germany!',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'Carlos Mendez',
    role: 'International Consultant at Deloitte',
    content: 'Professional support, interview prep and career mapping changed my life.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
];

const careerOptions = ['Global Careers', 'International Success', 'Worldwide Opportunities'];

export default function GlobalCareersPage() {
  const [hoveredCareer, setHoveredCareer] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [showContactModal, setShowContactModal] = useState(false);

  // Typewriter animation
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
    <div className="min-h-screen bg-gray-50">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-indigo-900 min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/global-careers-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-indigo-900/70" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-12"
        >
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10">
  <motion.div
    variants={itemVariants}
    className="inline-block bg-white/20 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4 backdrop-blur-sm"
  >
    Indira Academy Education
  </motion.div>

  <motion.h1
    variants={itemVariants}
    className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight"
  >
    Build Your Global Career
  </motion.h1>

  <motion.p
    variants={itemVariants}
    className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-full sm:max-w-xl mx-auto md:mx-0"
  >
    Unlock international job opportunities with IAE Pune’s expert career guidance and global network of top employers.
  </motion.p>

  <motion.div
    variants={itemVariants}
    className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6 md:mb-8"
  >
    Your Gateway to{' '}
    <span className="text-green-400 border-r-2 border-green-400 pr-1">
      {displayText}
    </span>
  </motion.div>

  <motion.div
    variants={itemVariants}
    className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-3 sm:gap-4"
  >
    <motion.div whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.95 }}>
      <Link
        href="#careers"
        className="bg-green-400 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-green-500 transition shadow-md hover:shadow-lg text-sm sm:text-base"      >
        Explore Careers
      </Link>
    </motion.div>
  </motion.div>
</div>
          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto md:mx-0">
              <Image
                src="/Global.png"
                alt="Global Career Professional"
                width={500}
                height={500}
                className="object-contain transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <AnimatedNumber key={idx} {...stat} />
          ))}
        </motion.div>
      </section>

      {/* Careers List */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50 min-h-[100vh] flex items-center justify-center" id="careers">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto w-full text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 sm:mb-12 md:mb-16"
          >
            Explore Global Careers
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {careers.map((career, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => setHoveredCareer(`career-${idx}`)}
                onMouseLeave={() => setHoveredCareer(null)}
                className={`relative bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${career.gradient} flex flex-col min-h-[250px] sm:min-h-[300px]`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5">
                  {career.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{career.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-2">Salary: {career.salary}</p>
                <p className="text-green-600 text-xs sm:text-sm lg:text-base">Growth: {career.growth}</p>
                <motion.div
                  className="mt-auto flex items-center justify-end"
                  animate={hoveredCareer === `career-${idx}` ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto w-full text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 sm:mb-12 md:mb-16"
          >
            Why Choose Global Careers?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 },
                }}
                className={`relative bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${benefit.gradient} flex flex-col min-h-[250px] sm:min-h-[300px]`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50 min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto w-full text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8 sm:mb-12 md:mb-16"
          >
            Success Stories
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 },
                }}
                className={`relative bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${t.gradient}`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center rounded-full text-base sm:text-lg font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">{t.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-xs sm:text-sm md:text-base mb-2 sm:mb-3">{t.content}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
   </div>

    </>
  );
}
