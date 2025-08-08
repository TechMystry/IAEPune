'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Easing } from 'framer-motion';

import {
  Globe,
  Users,
  GraduationCap,
  Award,
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Calendar,
  Star,
  BookOpen,
  MapPin,
  Phone,
  MessageCircle,
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
      ease: [0.6, -0.05, 0.01, 0.99] as Easing,
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
      ease: 'easeOut' as Easing,
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

const countries = [
  {
    name: "Russia",
    flag: "🇷🇺",
    students: "260,000+",
    universities: "80+",
    established: "1706",
    rating: 4.8,
    description: "Russia boasts a prestigious history in medical education with its first school dating back to 1706. Over 260,000 students are enrolled across 80 universities, many of which are globally ranked.",
    more: "Programs offered include medicine, dentistry, pharmacy, and nursing. Russia's institutions are internationally respected, and graduates can practice globally.",
    highlights: ["WHO Recognized", "EU Approved", "Global Rankings", "Rich History"],
    color: "from-red-500 to-red-600",
    universityImage: "/russia.jpg",
    topUniversities: ["Moscow State University", "Saint Petersburg State University", "Kazan Federal University"],
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    students: "8,000+",
    universities: "12+",
    established: "1918",
    rating: 4.7,
    description: "Georgia is globally recognized for its medical programs with universities like Tbilisi State Medical University. Programs are WHO and MCI recognized.",
    more: "The country has 8,000+ students, English-language programs, and globally accepted medical degrees.",
    highlights: ["WHO & MCI Recognized", "English Programs", "Similar Climate", "Modern Infrastructure"],
    color: "from-blue-500 to-blue-600",
    universityImage: "/georgia.jpg",
    topUniversities: ["Tbilisi State Medical University", "Georgian American University", "Caucasus University"],
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    students: "15,000+",
    universities: "25+",
    established: "1950",
    rating: 4.6,
    description: "Kazakhstan has become a hotspot for Indian students seeking MBBS due to affordability and NMC-recognized universities.",
    more: "With modern infrastructure and English-taught courses, it offers high-quality education and globally valid degrees.",
    highlights: ["NMC Recognized", "Affordable Fees", "Modern Infrastructure", "English Medium"],
    color: "from-teal-500 to-teal-600",
    universityImage: "/kazakhstan.jpg",
    topUniversities: ["Kazakh National Medical University", "Astana Medical University", "South Kazakhstan Medical Academy"],
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    students: "12,000+",
    universities: "20+",
    established: "1935",
    rating: 4.5,
    description: "Uzbekistan is emerging as a strong choice for MBBS abroad, offering low fees and globally recognized degrees.",
    more: "Many universities offer English-medium programs and provide Indian food and hostel facilities.",
    highlights: ["Low Fees", "Global Recognition", "English Medium", "Indian Food Available"],
    color: "from-green-500 to-green-600",
    universityImage: "/uzbekistan.jpg",
    topUniversities: ["Tashkent Medical Academy", "Andijan State Medical Institute", "Samarkand State Medical Institute"],
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    students: "10,000+",
    universities: "15+",
    established: "1939",
    rating: 4.4,
    description: "Kyrgyzstan is known for its affordable medical education and WHO-approved universities.",
    more: "Courses are conducted in English, and the education standard is aligned with global practices.",
    highlights: ["WHO Approved", "Affordable Education", "English Courses", "Global Standards"],
    color: "from-purple-500 to-purple-600",
    universityImage: "/kyrgyzstan.jpg",
    topUniversities: ["Kyrgyz State Medical Academy", "International School of Medicine", "Asian Medical Institute"],
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    students: "8,000+",
    universities: "18+",
    established: "1972",
    rating: 4.3,
    description: "Nepal is a close-to-home destination with MCI-approved colleges and a similar cultural environment.",
    more: "Most colleges are affiliated with Indian universities, and the medium of instruction is English.",
    highlights: ["Close to India", "MCI Approved", "Cultural Similarity", "Indian Affiliation"],
    color: "from-indigo-500 to-indigo-600",
    universityImage: "/nepal.jpg",
    topUniversities: ["Tribhuvan University", "Kathmandu University", "BP Koirala Institute"],
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    students: "20,000+",
    universities: "35+",
    established: "1946",
    rating: 4.4,
    description: "Bangladesh provides quality education following the NMC syllabus and has strong cultural similarities with India.",
    more: "MBBS degrees from Bangladesh are recognized in India, and the cost of living is very affordable.",
    highlights: ["NMC Syllabus", "Cultural Similarity", "Recognized in India", "Low Cost of Living"],
    color: "from-emerald-500 to-emerald-600",
    universityImage: "/bangladesh.jpg",
    topUniversities: ["Dhaka Medical College", "Chittagong Medical College", "Ibrahim Medical College"],
  },
  {
    name: "Romania",
    flag: "🇷🇴",
    students: "18,000+",
    universities: "13+",
    established: "1857",
    rating: 4.8,
    description: "Romania has 13 prestigious medical universities. With a tradition since 1857, it is known for affordability and global recognition.",
    more: "Universities like Carol Davila are highly ranked. Degrees are accepted by WHO and the EU.",
    highlights: ["EU Member", "WHO & EU Recognized", "Prestigious Universities", "Affordable"],
    color: "from-yellow-500 to-yellow-600",
    universityImage: "/romania.jpg",
    topUniversities: ["Carol Davila University", "Iuliu Hațieganu University", "Victor Babeș University"],
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
    students: "5,000+",
    universities: "8+",
    established: "1930",
    rating: 4.5,
    description: "Armenia offers modern medical education with low costs. Yerevan State Medical University is the most reputed.",
    more: "It joined the Bologna Process in 2005 ensuring European-standard education.",
    highlights: ["Bologna Process", "Low Costs", "European Standards", "Modern Education"],
    color: "from-pink-500 to-pink-600",
    universityImage: "/armenia.jpg",
    topUniversities: ["Yerevan State Medical University", "American University of Armenia", "Saint Tereza Medical University"],
  },
  {
    name: "Serbia",
    flag: "🇷🇸",
    students: "6,000+",
    universities: "10+",
    established: "13th Century",
    rating: 4.6,
    description: "Serbia has some of the finest medical institutions in the world with a long history of medical education.",
    more: "Serbia has a growing international student population with globally recognized degrees adhering to European standards.",
    highlights: ["Global Recognition", "European Standards", "Affordable Living", "Long History"],
    color: "from-rose-500 to-rose-600",
    universityImage: "/serbia.jpg",
    topUniversities: ["University of Belgrade", "University of Novi Sad", "University of Nis"],
  },
  {
    name: "China",
    flag: "🇨🇳",
    students: "30,000+",
    universities: "150+",
    established: "Early 20th Century",
    rating: 4.7,
    description: "China has invested significantly in its medical education system with 50 accredited medical universities offering English-medium programs.",
    more: "49 Chinese medical schools are recognized by WHO and ECFMG. Over 6,000 graduates gained US residency positions in 2019.",
    highlights: ["WHO & ECFMG Recognized", "English Medium", "Affordable", "US Residency"],
    color: "from-red-600 to-orange-500",
    universityImage: "/china.jpg",
    topUniversities: ["Shanghai Jiao Tong University", "Peking University", "Fudan University"],
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    students: "10,000+",
    universities: "15+",
    established: "1364",
    rating: 4.8,
    description: "Poland's education system is highly ranked, with the Cracow Academy being one of the oldest universities.",
    more: "Safe country, ECTS system, rich culture, and globally recognized degrees with affordable costs.",
    highlights: ["ECTS System", "Top EU Education", "Affordable", "Rich Culture"],
    color: "from-red-400 to-white",
    universityImage: "/poland.jpg",
    topUniversities: ["Jagiellonian University", "Medical University of Warsaw", "Wroclaw Medical University"],
  },
  {
    name: "Belarus",
    flag: "🇧🇾",
    students: "7,000+",
    universities: "15+",
    established: "20th Century",
    rating: 4.5,
    description: "Belarus is home to top WHO-recognized medical universities with modern labs and facilities.",
    more: "The Belarusian State Medical University ranks globally and provides affordable, practical-oriented education.",
    highlights: ["WHO Approved", "Advanced Labs", "Affordable", "Modern Infrastructure"],
    color: "from-green-400 to-red-500",
    universityImage: "/belarus.jpg",
    topUniversities: ["Belarusian State Medical University", "Grodno State Medical University", "Vitebsk State Medical University"],
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
    students: "3,000+",
    universities: "4+",
    established: "1917",
    rating: 4.4,
    description: "Croatia offers world-class medical education with top universities like the University of Zagreb.",
    more: "Medical degrees are 6 years with internships. Universities are ranked globally with solid EU standards.",
    highlights: ["EU Standards", "Global Rankings", "Historic Universities", "Internship Included"],
    color: "from-blue-400 to-red-400",
    universityImage: "/croatia.jpg",
    topUniversities: ["University of Zagreb", "University of Rijeka", "University of Split"],
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    students: "209,000+",
    universities: "30+",
    established: "20th Century",
    rating: 4.6,
    description: "Egypt has a strong medical education system with internationally recognized public universities.",
    more: "Degrees like MBBCh are offered, with over 30,000 medical seats across 32 medical schools.",
    highlights: ["MBBCh Degree", "WHO Recognized", "Arab League Member", "High Seat Availability"],
    color: "from-yellow-500 to-red-500",
    universityImage: "/egypt.jpg",
    topUniversities: ["Cairo University", "Ain Shams University", "Alexandria University"],
  },
  {
    name: "Slovakia",
    flag: "🇸🇰",
    students: "9,000+",
    universities: "6+",
    established: "1919",
    rating: 4.5,
    description: "Slovakia’s medical degrees are recognized globally and comply with EU and Schengen area standards.",
    more: "Top universities include Comenius University. Uses ECTS system and allows easy credit transfers.",
    highlights: ["EU Member", "Global Recognition", "Comenius University", "ECTS System"],
    color: "from-sky-500 to-cyan-600",
    universityImage: "/slovakia.jpg",
    topUniversities: ["Comenius University", "Pavol Jozef Šafárik University", "Jessenius Faculty of Medicine"],
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    students: "22,000+",
    universities: "6+",
    established: "1367",
    rating: 4.7,
    description: "Hungary is popular for its quality medical education with over 4,500 international students annually.",
    more: "Semmelweis University is Hungary's oldest and ranks globally. Scholarships and work-study options available.",
    highlights: ["Top Rankings", "Scholarships", "Work While Studying", "Oldest Medical School"],
    color: "from-pink-400 to-rose-500",
    universityImage: "/hungary.jpg",
    topUniversities: ["Semmelweis University", "University of Debrecen", "University of Pecs"],
  },
  {
    name: "USA via Caribbean",
    flag: "🌎",
    students: "10,000+",
    universities: "60+",
    established: "20th Century",
    rating: 4.8,
    description: "Caribbean medical schools are a gateway to practicing in the US, known for USMLE success and match rates.",
    more: "Graduates often gain residencies in US hospitals. Programs follow US curriculum and standards.",
    highlights: ["USMLE Focused", "Residency Success", "Global Acceptance", "English Medium"],
    color: "from-teal-400 to-blue-500",
    universityImage: "/usa-via-caribbean.jpg",
    topUniversities: ["Ross University", "St. George’s University", "American University of the Caribbean"],
  },
];

const stats = [
  { target: 100, suffix: '+', title: 'Partner Universities' },
  { target: 50000, suffix: '+', title: 'Students Enrolled' },
  { target: 20, suffix: '+', title: 'Countries' },
  { target: 98, suffix: '%', title: 'Graduate Success' },
];

const benefits = [
  {
    title: 'Affordable Education',
    description: 'Low tuition fees compared to private medical colleges.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Global Recognition',
    description: 'Degrees recognized by WHO, NMC, and global medical councils.',
    icon: <Globe className="w-8 h-8 text-indigo-600" />,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'English-Medium Programs',
    description: 'Study in English, no language barrier for international students.',
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Cultural Diversity',
    description: 'Experience vibrant cultures while pursuing your medical degree.',
    icon: <Users className="w-8 h-8 text-teal-600" />,
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const testimonials = [
  {
    name: 'Riya Patel',
    role: 'MBBS Student, Russia',
    content: 'IAE Pune’s guidance made my MBBS journey in Russia smooth and rewarding!',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    name: 'Arjun Singh',
    role: 'Medical Graduate, Georgia',
    content: 'The support for university selection and visa processing was exceptional.',
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    name: 'Meena Kumari',
    role: 'MBBS Student, Kazakhstan',
    content: 'Affordable fees and great support from IAE Pune made studying in Kazakhstan a reality.',
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

const careerOptions = ['Medical Excellence', 'Global Doctors', 'Healthcare Leaders'];

export default function MbbsAbroadPage() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [activeCountry, setActiveCountry] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
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

  const toggleCountry = (index: number) => {
    setActiveCountry(activeCountry === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden bg-gray-950">  

  {/* Main Content */}
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
        className="inline-block bg-white/10 text-amber-300 text-xs sm:text-sm px-4 py-2 rounded-full mb-4 backdrop-blur-sm"
      >
        Indira Academy Education
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
      >
        Become a Global Doctor
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl mx-auto md:mx-0"
      >
        Study MBBS abroad at top universities with IAE Pune’s expert guidance. Affordable, globally recognized, and English-taught programs await you.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="text-lg sm:text-2xl font-semibold text-amber-200 mb-8"
      >
        Your Journey to{' '}
        <span className="text-pink-300 border-r-2 border-pink-300 pr-1">
          {displayText}
        </span>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >
        <motion.div whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#universities"
            className="bg-amber-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition shadow-md hover:shadow-lg"
          >
            Explore Medical Universities
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
    className="relative
               w-64 h-64 sm:w-80 sm:h-80 md:w-[36rem] md:h-[36rem]
               rounded-2xl overflow-visible shadow-2xl" // changed overflow-hidden to overflow-visible
  >
    <Image
      src="/MBBS.png"
      alt="Medical Student Abroad"
      fill
      className="object-cover transform hover:scale-105 transition-transform duration-700"
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

      {/* Countries Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50" id="universities">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          Top MBBS Destinations
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {countries.map((country, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setHoveredCountry(`country-${idx}`)}
              onMouseLeave={() => setHoveredCountry(null)}
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${country.color}/20 flex flex-col min-h-[450px]`}
            >
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={country.universityImage}
                  alt={`${country.name} University`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{country.flag}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{country.name}</h3>
              </div>
              <p className="text-gray-600 text-sm lg:text-base mb-3">{country.description}</p>
              <div className="flex gap-2 mb-3 flex-wrap">
                {country.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <button
                onClick={() => toggleCountry(idx)}
                className="mt-auto text-blue-600 font-semibold text-sm lg:text-base flex items-center gap-2 hover:text-blue-800 transition"
              >
                {activeCountry === idx ? 'Hide Details' : 'Learn More'} <ChevronRight className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {activeCountry === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-gray-700 text-sm lg:text-base"
                  >
                    <p>{country.more}</p>
                    <p className="mt-2 font-semibold">Top Universities:</p>
                    <ul className="list-disc pl-5">
                      {country.topUniversities.map((uni, i) => (
                        <li key={i}>{uni}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12 sm:mb-16"
        >
          Why Study MBBS Abroad?
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
              className={`relative bg-white p-6 rounded-3xl shadow-lg border border-gray-100 overflow-hidden bg-gradient-to-br ${benefit.gradient} flex flex-col min-h-[300px]`}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm lg:text-base">{benefit.description}</p>
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
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
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