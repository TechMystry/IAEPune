'use client';

import {
  FaAward,
  FaGlobe,
  FaUserTie,
  FaUniversity,
  FaLaptop,
  FaPassport,
  FaBriefcase,
  FaUserNurse,
  FaTools,
} from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section
      id="about-us" // ✅ Add ID for scrolling
      className="py-16 px-6 bg-gray-50 font-sans scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* Left Column - About */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About IAE Pune
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Founded in 2009 by <span className="font-semibold">Mr. Vishal B.</span>, 
            a passionate mathematics professor and educationist, IAE Pune (Indira Academy of Education) 
            has been guiding students and professionals in shaping their academic and professional futures.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Our mission is to make global education accessible and career-oriented, ensuring every student 
            gets the right guidance, support, and opportunities to succeed internationally.
          </p>

          {/* Highlights */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-gray-800">
              <FaAward className="text-blue-500 mr-3 flex-shrink-0" />
              15+ years of excellence in education
            </li>
            <li className="flex items-center text-gray-800">
              <FaGlobe className="text-green-500 mr-3 flex-shrink-0" />
              Global network of 150+ partner universities
            </li>
            <li className="flex items-center text-gray-800">
              <FaUserTie className="text-purple-500 mr-3 flex-shrink-0" />
              Expert counseling & guidance team
            </li>
          </ul>
        </div>

        {/* Right Column - Specializations */}
        <div className="flex-1 min-w-[280px] bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Our Specializations
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <FaUniversity className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
              MBBS Abroad Admissions – 150+ tie-ups with reputed international universities
            </li>
            <li className="flex items-start">
              <FaUniversity className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
              Medical & Engineering Admissions – In India and abroad
            </li>
            <li className="flex items-start">
              <FaUserNurse className="text-pink-500 mt-1 mr-2 flex-shrink-0" />
              Nurses Placement – For GNM and B.Sc Nursing in Germany and other countries
            </li>
            <li className="flex items-start">
              <FaLaptop className="text-indigo-500 mt-1 mr-2 flex-shrink-0" />
              Online Degree & Diploma Programs
            </li>
            <li className="flex items-start">
              <FaTools className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
              Ausbildung (Work & Study) Programs – Vocational training with job placement in Germany
            </li>
            <li className="flex items-start">
              <FaPassport className="text-red-500 mt-1 mr-2 flex-shrink-0" />
              Visa Assistance – For USA, UK, and European countries
            </li>
            <li className="flex items-start">
              <FaBriefcase className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
              Career Counseling & Job Placement Abroad – Global career opportunities with expert guidance
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
