'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  BookOpen, 
  User, 
  Award, 
  Star, 
  Phone, 
  Mail, 
  Globe, 
  Calculator,
  Languages,
  GraduationCap,
  Users,
  Clock,
  Trophy,
  Target,
  Zap,
  Heart
} from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000, suffix = '', prefix = '' }: { 
  target: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  

  useEffect(() => {
    if (!isInView) return;
    
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {prefix}{count}{suffix}
    </div>
  );
};

// Typing Animation Component
const TypingAnimation = ({ texts, className = '' }: { texts: string[]; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function LanguagePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const subjects = [
    'Mathematics Excellence',
    'Language Mastery', 
    'Academic Success',
    'Global Learning'
  ];

  const mathFeatures = [
    { icon: <User className="w-6 h-6" />, text: '15+ Years Teaching Experience' },
    { icon: <Award className="w-6 h-6" />, text: 'Former JEE Mathematics Faculty' },
    { icon: <Star className="w-6 h-6" />, text: 'Specialised in IGCSE | ICSE | IB | CBSE Boards' },
    { icon: <GraduationCap className="w-6 h-6" />, text: 'Grades 5 to 12 – Concept Clarity & Exam Excellence' },
    { icon: <Globe className="w-6 h-6" />, text: 'Learn from anywhere – No location limits!' },
    { icon: <Target className="w-6 h-6" />, text: 'Boost scores & sharpen concepts' },
  ];

  const languages = [
  { name: 'French', flagUrl: 'https://flagcdn.com/fr.svg' },
  { name: 'German', flagUrl: 'https://flagcdn.com/de.svg' },
  { name: 'Japanese', flagUrl: 'https://flagcdn.com/jp.svg' },
  { name: 'English', flagUrl: 'https://flagcdn.com/gb.svg' },
];

  const stats = [
    { number: 15, suffix: '+', label: 'Years Experience', icon: <Trophy className="w-8 h-8" /> },
    { number: 500, suffix: '+', label: 'Students Taught', icon: <Users className="w-8 h-8" /> },
    { number: 98, suffix: '%', label: 'Success Rate', icon: <Target className="w-8 h-8" /> },
    { number: 4, suffix: '', label: 'Languages Offered', icon: <Languages className="w-8 h-8" /> },
  ];

  const benefits = [
    { title: 'World-Class Education', desc: 'Premium quality education from experienced faculty', icon: <Star className="w-8 h-8" /> },
    { title: 'Flexible Timing', desc: 'Learn at your convenient time from anywhere', icon: <Clock className="w-8 h-8" /> },
    { title: 'Personalized Attention', desc: 'Individual focus on each student\'s needs', icon: <Heart className="w-8 h-8" /> },
    { title: 'Proven Results', desc: 'Track record of excellent academic performance', icon: <Zap className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-50" 
        style={{ scaleX, transformOrigin: '0%' }} 
      />

      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <motion.div 
      className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.div 
      className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
    <motion.div 
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
      animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
      transition={{ duration: 8, repeat: Infinity }}
    />
  </div>

  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
  >
    {/* Left Content */}
    <div className="text-center lg:text-left space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
          Indira Academy Education
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          World-Class Online
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl mt-2">
            <TypingAnimation texts={subjects} />
          </span>
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Master Mathematics and Languages from anywhere in the world. Quality education with personalized attention for students from Class 5 to 12.
        </p>
      </motion.div>

      <motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
>
  <motion.a
    href="https://wa.me/919975042929"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex justify-center items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 max-w-xs sm:max-w-none w-full sm:w-auto mx-auto sm:mx-0"
  >
    <Phone className="w-4 h-4 mr-2" />
    <span className="whitespace-nowrap">WhatsApp: +91 9975042929</span>
  </motion.a>
</motion.div>

    </div>

    {/* Right Content - Animated Illustration */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative w-full max-w-md lg:max-w-lg">
        {/* Main Circle */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
            <Calculator className="w-20 h-20 lg:w-24 lg:h-24 text-white" />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-xl"
        >
          <BookOpen className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full shadow-xl"
        >
          <Languages className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-8 bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-full shadow-xl"
        >
          <Star className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
</section>


      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mathematics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                World-Class Online Mathematics Classes
                <span className="text-6xl ml-4"></span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master Mathematics from anywhere in the world with Mr. Vishal Bansodee
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
  {mathFeatures.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="flex items-center p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
        {feature.icon}
      </div>
      <p className="text-gray-700 font-medium">{feature.text}</p>
    </motion.div>
  ))}
</div>

        </motion.div>
      </section>

      {/* Language Classes Section */}
    <section className="py-20 bg-white">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    {languages.map((language, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
      >
    {/* Flag Image */}
      <img
        src={language.flagUrl}
        alt={`${language.name} Flag`}
        className="mx-auto w-16 h-16 mb-4 object-cover shadow-sm"
        loading="lazy"
      />
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{language.name}</h3>
      <div className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-4"></div>
      <p className="text-gray-600 font-medium">Professional Course</p>
    </motion.div>
  ))}
</motion.div>
</section>



      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Classes? ✨
              </h2>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Learning Journey Today! 
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who transformed their academic performance with our world-class online classes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
            <p className="text-white/80 text-lg font-medium">
              ⚡ Limited Seats Available – Don't Miss Out!
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}