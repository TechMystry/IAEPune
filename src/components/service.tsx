'use client';

import { motion, Variants } from "framer-motion";
import { Briefcase, Globe, GraduationCap, BookOpen } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  show: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  },
};

// Animated Number Component
const AnimatedNumber = ({
  target, suffix = "", title, duration = 2500
}: {
  target: number; suffix?: string; title: string; duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
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
      animate={isVisible ? "show" : "hidden"}
      className="relative p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl" />
      <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
        {count}
        <span className="text-2xl sm:text-3xl lg:text-4xl">{suffix}</span>
      </h2>
      <p className="relative mt-3 text-gray-700 text-sm sm:text-base lg:text-lg font-medium">{title}</p>
    </motion.div>
  );
};

export default function OurServices() {
  const router = useRouter();

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
      gradient: "from-blue-500/20 to-indigo-500/20",
      title: "Global Careers",
      desc: "Unlock international job opportunities with curated listings and expert visa support.",
      points: ["Fresh Job Listings", "Visa Assistance", "Career Mentorship"],
      link: "/global-careers"
    },
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />,
      gradient: "from-indigo-500/20 to-purple-500/20",
      title: "Study Abroad",
      desc: "Pursue world-class education with guidance on top universities and scholarships.",
      points: ["Elite Universities", "Scholarship Support", "Visa Guidance"],
      link: "/study-abroad"
    },
    {
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      title: "MBBS Abroad",
      desc: "Achieve your medical dreams with affordable MBBS programs at trusted colleges.",
      points: ["Accredited Colleges", "Cost-Effective Fees", "End-to-End Support"],
      link: "/mbbs-abroad"
    },
    {
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />,
      gradient: "from-teal-500/20 to-cyan-500/20",
      title: <>Ausbildung <span className="text-xs sm:text-sm text-gray-600 font-normal">(Vocational Course)</span></>,
      desc: "Start your career in Germany with hands-on vocational training while earning.",
      points: ["Paid Training Programs", "German Language Support", "Guaranteed Job Placement"],
      link: "/AusbildungGermany"
    },
  ];

  const stats = [
    { target: 150, suffix: "+", title: "Global Partners" },
    { target: 15, suffix: "+", title: "Years of Excellence" },
    { target: 5000, suffix: "+", title: "Success Stories" },
    { target: 95, suffix: "%", title: "Success Rate" },
  ];

  const handleRedirect = (path: string) => {
    setTimeout(() => router.push(path));
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-fit flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your future with our expertly crafted global education and career solutions.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)", transition: { duration: 0.3 } }}
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${service.gradient} flex flex-col min-h-[420px]`}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-5">
                {service.icon}
              </div>

              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm lg:text-base mb-4">{service.desc}</p>
                <ul className="text-sm lg:text-base text-gray-700 space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-600 mr-2 text-lg">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRedirect(service.link)}
                className="cursor-pointer mt-auto w-full px-4 py-2 text-sm lg:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all"
              >
                Discover More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => <AnimatedNumber key={idx} {...stat} />)}
        </motion.div>
      </div>
    </section>
  );
}
