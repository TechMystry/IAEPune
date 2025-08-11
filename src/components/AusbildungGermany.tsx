'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Briefcase,
  GraduationCap,
  Users,
  FileText,
  Globe,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Award,
  Star,
  HeartPulse,
  Wrench,
  Hotel,
  Laptop,
  Truck,
  Zap,
  Utensils,
  Hammer,
  PiggyBank,
} from 'lucide-react';

// Animation Variants
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
      ease: [0.6, -0.05, 0.01, 0.99] as any,
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
      ease: 'easeOut' as any,
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
      className="relative p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100"
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

const careerOptions = ['Ausbildung Excellence', 'German Careers', 'Vocational Success'];

const features = [
  {
    title: 'Earn While You Learn',
    description: 'Receive a monthly stipend of €800–€1,500, ensuring financial independence during training.',
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Globally Recognized Diploma',
    description: 'Earn a prestigious German qualification respected by employers worldwide.',
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Near-Guaranteed Employment',
    description: 'Over 95% of graduates secure jobs immediately after completing the program.',
    icon: <Users className="w-8 h-8 text-purple-600" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Practical Training',
    description: 'Gain hands-on experience through Germany’s dual system of workplace and classroom learning.',
    icon: <Wrench className="w-8 h-8 text-teal-600" />,
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const benefits = [
  { title: 'Free German Language Training', gradient: 'from-blue-500/20 to-indigo-500/20' },
  { title: 'Visa & Relocation Support', gradient: 'from-indigo-500/20 to-purple-500/20' },
  { title: 'Guaranteed Monthly Stipend', gradient: 'from-purple-500/20 to-pink-500/20' },
  { title: 'Minimal or No Tuition Fees', gradient: 'from-teal-500/20 to-cyan-500/20' },
  { title: 'Pathway to Permanent Residency', gradient: 'from-blue-500/20 to-indigo-500/20' },
  { title: 'Work Opportunities Across the EU', gradient: 'from-indigo-500/20 to-purple-500/20' },
  { title: 'Hands-On Industry Experience', gradient: 'from-purple-500/20 to-pink-500/20' },
  { title: 'Cultural Immersion in Germany', gradient: 'from-teal-500/20 to-cyan-500/20' },
  { title: 'Access to Top Employers', gradient: 'from-blue-500/20 to-indigo-500/20' },
];

const eligibilityCriteria = [
  { criteria: 'Age between 18–30 years', icon: <Users className="w-6 h-6 text-blue-600" /> },
  { criteria: 'Minimum 12th pass, ITI, Diploma, or Graduate', icon: <GraduationCap className="w-6 h-6 text-indigo-600" /> },
  { criteria: 'Basic German knowledge (A2 level preferred, training provided)', icon: <BookOpen className="w-6 h-6 text-purple-600" /> },
  { criteria: 'No criminal record', icon: <FileText className="w-6 h-6 text-teal-600" /> },
  { criteria: 'Passion for your chosen profession', icon: <HeartPulse className="w-6 h-6 text-blue-600" /> },
];

const fields = [
  { name: 'Nursing & Healthcare', icon: <HeartPulse className="w-8 h-8 text-blue-600" />, gradient: 'from-blue-500/20 to-indigo-500/20' },
  { name: 'Hotel & Hospitality', icon: <Hotel className="w-8 h-8 text-indigo-600" />, gradient: 'from-indigo-500/20 to-purple-500/20' },
  { name: 'Automobile Mechatronics', icon: <Wrench className="w-8 h-8 text-purple-600" />, gradient: 'from-purple-500/20 to-pink-500/20' },
  { name: 'IT & Software Development', icon: <Laptop className="w-8 h-8 text-teal-600" />, gradient: 'from-teal-500/20 to-cyan-500/20' },
  { name: 'Retail Management', icon: <Briefcase className="w-8 h-8 text-blue-600" />, gradient: 'from-blue-500/20 to-indigo-500/20' },
  { name: 'Logistics & Supply Chain', icon: <Truck className="w-8 h-8 text-indigo-600" />, gradient: 'from-indigo-500/20 to-purple-500/20' },
  { name: 'Electrical Engineering', icon: <Zap className="w-8 h-8 text-purple-600" />, gradient: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Culinary Arts', icon: <Utensils className="w-8 h-8 text-teal-600" />, gradient: 'from-teal-500/20 to-cyan-500/20' },
  { name: 'Construction Management', icon: <Hammer className="w-8 h-8 text-blue-600" />, gradient: 'from-blue-500/20 to-indigo-500/20' },
  { name: 'Banking & Finance', icon: <PiggyBank className="w-8 h-8 text-indigo-600" />, gradient: 'from-indigo-500/20 to-purple-500/20' },
];

const applicationSteps = [
  { step: 'Submit your academic and personal documents for assessment.', gradient: 'from-blue-500/20 to-indigo-500/20' },
  { step: 'Enroll in our German language course (A1 to B2 levels).', gradient: 'from-indigo-500/20 to-purple-500/20' },
  { step: 'Get matched with top German employers in your field.', gradient: 'from-purple-500/20 to-pink-500/20' },
  { step: 'Receive your training contract and apply for a German visa.', gradient: 'from-teal-500/20 to-cyan-500/20' },
  { step: 'Relocate to Germany and start your Ausbildung journey!', gradient: 'from-blue-500/20 to-indigo-500/20' },
];

const faqs = [
  {
    question: 'Is German language proficiency mandatory?',
    answer: 'Yes, A2 or B1 level is required to start Ausbildung, but we provide comprehensive language training to get you there.',
  },
  {
    question: 'Can I stay in Germany after completing Ausbildung?',
    answer: 'Absolutely! Graduates receive work rights and can apply for permanent residency with a job contract.',
  },
  {
    question: 'Is the Ausbildung qualification recognized globally?',
    answer: 'Yes, the diploma is highly respected across the EU and worldwide, opening doors to international careers.',
  },
  {
    question: 'What is the duration of the Ausbildung program?',
    answer: 'Programs typically last 2–3.5 years, depending on the profession and your prior qualifications.',
  },
  {
    question: 'Are there any hidden costs?',
    answer: 'No hidden costs! Tuition is free or minimal, and you receive a stipend to cover living expenses.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Nursing Trainee, Berlin',
    content: 'IAE Pune’s guidance made my Ausbildung journey seamless. I’m now training as a nurse in Berlin with a stipend!',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'Ahmed Khan',
    role: 'IT Specialist, Munich',
    content: 'The hands-on training and employer matching by IAE Pune helped me land a tech job right after my program.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    name: 'Sophie Müller',
    role: 'Hospitality Trainee, Hamburg',
    content: 'IAE Pune’s support, from language training to visa assistance, was exceptional. I love my hospitality training!',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
];

const stats = [
  { target: 350, suffix: '+', title: 'Professions Available' },
  { target: 10000, suffix: '+', title: 'Trainees Placed' },
  { target: 500, suffix: '+', title: 'Partner Employers' },
  { target: 95, suffix: '%', title: 'Employment Rate' },
];

export default function AusbildungGermany() {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600 min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-indigo-600/70" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12"
        >
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <motion.div
              variants={itemVariants}
              className="inline-block bg-white/20 text-white text-xs sm:text-sm px-4 py-2 rounded-full mb-4 backdrop-blur-sm"
            >
              Indira Academy Education
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            >
              Launch Your Career with Ausbildung in Germany
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/90 mb-6 max-w-xl mx-auto md:mx-0"
            >
              Join Germany’s world-class vocational training program with IAE Pune’s expert guidance. Earn while you learn and secure a globally recognized diploma.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-2xl font-semibold text-white mb-8"
            >
              Your Path to{' '}
              <span className="text-yellow-300 border-r-2 border-yellow-300 pr-1">
                {displayText}
              </span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#learn-more"
                  className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition shadow-md hover:shadow-lg"
                >
                  Discover More
                </Link>
              </motion.div>
            </motion.div>
          </div>
          {/* Right Image */}
<motion.div
  variants={itemVariants}
  className="flex-1 flex justify-center md:justify-end"
>
  <div
    className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-[32rem] md:h-[36rem]"
    style={{ overflow: 'visible' }}
  >
    <Image
      src="/ausbildung.png"
      alt="German Vocational Training"
      fill
      className="object-contain rounded-2xl transform hover:scale-105 transition-transform duration-700"
      sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
    />
  </div>
</motion.div>

        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <AnimatedNumber key={idx} {...stat} />
          ))}
        </motion.div>
      </section>

      {/* What is Ausbildung Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50" id="learn-more">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6"
          >
            What is Ausbildung?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6"
          >
            Ausbildung is Germany’s world-renowned dual vocational training system, blending practical workplace experience with theoretical classroom learning. Spanning 2–3.5 years, it offers a monthly stipend and a globally recognized qualification.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            With over 350 professions across industries like healthcare, IT, engineering, hospitality, and more, Ausbildung is your gateway to a stable career and long-term residency in Germany or the EU, supported by IAE Pune’s expert guidance.
          </motion.p>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          Why Choose Ausbildung?
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 },
              }}
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${feature.gradient} flex flex-col min-h-[300px]`}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
              <a
                href="#learn-more"
                className="mt-auto text-blue-600 font-semibold text-sm lg:text-base flex items-center gap-2 hover:text-blue-800 transition"
              >
                Learn More <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          Benefits of Ausbildung
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${benefit.gradient} flex items-center gap-4`}
            >
              <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 text-lg font-medium">{benefit.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          Who Can Apply?
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {eligibilityCriteria.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 },
              }}
              className="relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-gray-700 text-lg font-medium">{item.criteria}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Ausbildung Fields Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          Explore Ausbildung Fields
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fields.map((field, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setHoveredField(`field-${idx}`)}
              onMouseLeave={() => setHoveredField(null)}
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${field.gradient} flex flex-col min-h-[200px]`}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-5">
                {field.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{field.name}</h3>
              <motion.div
                className="mt-auto flex items-center justify-end"
                animate={hoveredField === `field-${idx}` ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Application Process Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50" id="apply">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          How to Apply
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-6"
        >
          {applicationSteps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 },
              }}
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${item.gradient} flex items-start gap-4`}
            >
              <span className="text-blue-600 font-bold text-2xl bg-white/50 w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                {idx + 1}
              </span>
              <span className="text-gray-700 text-lg font-medium">{item.step}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Testimonials Section */}
<section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
  <motion.h2
    variants={itemVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
  >
    Success Stories
  </motion.h2>
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {[
      { name: "Niyath B", role: "Student", content: "IAE helped me explore my dream opportunities abroad!", gradient: "from-blue-100 to-blue-50" },
      { name: "Kavya Pathak", role: "Student", content: "The support from the mentors was truly life-changing.", gradient: "from-purple-100 to-indigo-50" },
      { name: "Arpan Suryawanshi", role: "Student", content: "Best platform to understand and apply globally.", gradient: "from-pink-100 to-pink-50" },
      { name: "Ayush Kadam", role: "Student", content: "My experience at IAE has been inspiring and educational.", gradient: "from-green-100 to-green-50" },
      { name: "Swarupa Patil", role: "Student", content: "Thanks to IAE, I’m now studying at a top German university.", gradient: "from-yellow-100 to-yellow-50" },
      { name: "Subhan Shaikh", role: "Student", content: "IAE really prepares students for the global stage.", gradient: "from-cyan-100 to-cyan-50" }, // optional extra
    ].map((t, idx) => (
      <motion.div
        key={idx}
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
          transition: { duration: 0.3 },
        }}
        className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${t.gradient}`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
            {t.name[0]}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
            <p className="text-sm text-gray-600">{t.role}</p>
          </div>
        </div>
        <p className="text-gray-700 italic mb-3">"{t.content}"</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
</section>
    </div>
  );
}