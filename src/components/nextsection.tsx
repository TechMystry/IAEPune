"use client"
import React, { useState, useEffect } from 'react';
import { Mail } from "lucide-react";
import { ChevronRight, Globe, GraduationCap, Users, Award, MapPin, Clock, Star, Building2, BookOpen, Calendar } from 'lucide-react';

const countries = [
  {
    name: 'Russia',
    flag: '🇷🇺',
    students: '260,000+',
    universities: '80+',
    established: '1706',
    rating: 4.8,
    description: `Russia boasts a prestigious history in medical education with its first school dating back to 1706. Over 260,000 students are enrolled across 80 universities, many of which are globally ranked. Degrees are recognized by WHO and the EU.`,
    more: `Programs offered include medicine, dentistry, pharmacy, and nursing. Russia's institutions are internationally respected, and graduates can practice globally.`,
    highlights: ['WHO Recognized', 'EU Approved', 'Global Rankings', 'Rich History'],
    color: 'from-red-500 to-red-600',
    universityImage: '/russia.jpg',
    topUniversities: ['Moscow State University', 'Saint Petersburg State University', 'Kazan Federal University']
  },
  {
    name: 'Georgia',
    flag: '🇬🇪',
    students: '8,000+',
    universities: '12+',
    established: '1918',
    rating: 4.7,
    description: `Georgia is globally recognized for its medical programs with universities like Tbilisi State Medical University. Programs are WHO and MCI recognized, and the climate is similar to India.`,
    more: `The country has 8,000+ students, English-language programs, and globally accepted medical degrees.`,
    highlights: ['WHO & MCI Recognized', 'English Programs', 'Similar Climate', 'Modern Infrastructure'],
    color: 'from-blue-500 to-blue-600',
    universityImage: '/georgia.jpg',
    topUniversities: ['Tbilisi State Medical University', 'Georgian American University', 'Caucasus University']
  },
  {
    name: 'Kazakhstan',
    flag: '🇰🇿',
    students: '15,000+',
    universities: '25+',
    established: '1950',
    rating: 4.6,
    description: `Kazakhstan has become a hotspot for Indian students seeking MBBS due to affordability and NMC-recognized universities.`,
    more: `With modern infrastructure and English-taught courses, it offers high-quality education and globally valid degrees.`,
    highlights: ['NMC Recognized', 'Affordable Fees', 'Modern Infrastructure', 'English Medium'],
    color: 'from-teal-500 to-teal-600',
    universityImage: '/kazakhstan.jpg',
    topUniversities: ['Kazakh National Medical University', 'Astana Medical University', 'South Kazakhstan Medical Academy']
  },
  {
    name: 'Uzbekistan',
    flag: '🇺🇿',
    students: '12,000+',
    universities: '20+',
    established: '1935',
    rating: 4.5,
    description: `Uzbekistan is emerging as a strong choice for MBBS abroad, offering low fees and globally recognized degrees.`,
    more: `Many universities offer English-medium programs and provide Indian food and hostel facilities.`,
    highlights: ['Low Fees', 'Global Recognition', 'English Medium', 'Indian Food Available'],
    color: 'from-green-500 to-green-600',
    universityImage: '/uzbekistan.jpg',
    topUniversities: ['Tashkent Medical Academy', 'Andijan State Medical Institute', 'Samarkand State Medical Institute']
  },
  {
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
    students: '10,000+',
    universities: '15+',
    established: '1939',
    rating: 4.4,
    description: `Kyrgyzstan is known for its affordable medical education and WHO-approved universities.`,
    more: `Courses are conducted in English, and the education standard is aligned with global practices.`,
    highlights: ['WHO Approved', 'Affordable Education', 'English Courses', 'Global Standards'],
    color: 'from-purple-500 to-purple-600',
    universityImage: '/kyrgyzstan.jpg',
    topUniversities: ['Kyrgyz State Medical Academy', 'International School of Medicine', 'Asian Medical Institute']
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    students: '8,000+',
    universities: '18+',
    established: '1972',
    rating: 4.3,
    description: `Nepal is a close-to-home destination with MCI-approved colleges and a similar cultural environment.`,
    more: `Most colleges are affiliated with Indian universities, and the medium of instruction is English.`,
    highlights: ['Close to India', 'MCI Approved', 'Cultural Similarity', 'Indian Affiliation'],
    color: 'from-indigo-500 to-indigo-600',
    universityImage: '/nepal.jpg',
    topUniversities: ['Tribhuvan University', 'Kathmandu University', 'BP Koirala Institute']
  },
  {
    name: 'Bangladesh',
    flag: '🇧🇩',
    students: '20,000+',
    universities: '35+',
    established: '1946',
    rating: 4.4,
    description: `Bangladesh provides quality education following the NMC syllabus and has strong cultural similarities with India.`,
    more: `MBBS degrees from Bangladesh are recognized in India, and the cost of living is very affordable.`,
    highlights: ['NMC Syllabus', 'Cultural Similarity', 'Recognized in India', 'Low Cost of Living'],
    color: 'from-emerald-500 to-emerald-600',
    universityImage: '/bangladesh.jpg',
    topUniversities: ['Dhaka Medical College', 'Chittagong Medical College', 'Ibrahim Medical College']
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    students: '18,000+',
    universities: '13+',
    established: '1857',
    rating: 4.8,
    description: `Romania has 13 prestigious medical universities. With a tradition since 1857, it is known for affordability and global recognition.`,
    more: `Universities like Carol Davila are highly ranked. Degrees are accepted by WHO and the EU.`,
    highlights: ['EU Member', 'WHO & EU Recognized', 'Prestigious Universities', 'Affordable'],
    color: 'from-yellow-500 to-yellow-600',
    universityImage: '/romania.jpg',
    topUniversities: ['Carol Davila University', 'Iuliu Hațieganu University', 'Victor Babeș University']
  },
  {
    name: 'Armenia',
    flag: '🇦🇲',
    students: '5,000+',
    universities: '8+',
    established: '1930',
    rating: 4.5,
    description: `Armenia offers modern medical education with low costs. Yerevan State Medical University is the most reputed.`,
    more: `It joined the Bologna Process in 2005 ensuring European-standard education.`,
    highlights: ['Bologna Process', 'Low Costs', 'European Standards', 'Modern Education'],
    color: 'from-pink-500 to-pink-600',
    universityImage: '/armenia.jpg',
    topUniversities: ['Yerevan State Medical University', 'American University of Armenia', 'Saint Tereza Medical University']
  },
    {
  name: 'Serbia',
  flag: '🇷🇸',
  students: '6,000+',
  universities: '10+',
  established: '13th Century',
  rating: 4.6,
  description: `Serbia has some of the finest medical institutions in the world. The nation has a long history of medical conduct, and the local universities maintain high standards of learning.`,
  more: `Serbia has a growing international student population with globally recognized degrees. Adheres to European standards and is fully accredited.`,
  highlights: ['Global Recognition', 'European Standards', 'Affordable Living', 'Long History'],
  color: 'from-rose-500 to-rose-600',
  universityImage: '/serbia.jpg',
  topUniversities: ['University of Belgrade', 'University of Novi Sad', 'University of Nis']
},
{
  name: 'China',
  flag: '🇨🇳',
  students: '30,000+',
  universities: '150+',
  established: 'Early 20th Century',
  rating: 4.7,
  description: `China has invested significantly in its medical education system. Around 50 accredited medical universities offer English-medium programs.`,
  more: `49 Chinese medical schools are recognized by WHO and ECFMG. In 2019, over 6,000 graduates gained residency positions in US hospitals.`,
  highlights: ['WHO & ECFMG Recognized', 'English Medium', 'Affordable', 'US Residency'],
  color: 'from-red-600 to-orange-500',
  universityImage: '/armenia.jpg',
  topUniversities: ['Shanghai Jiao Tong University', 'Peking University', 'Fudan University']
},
{
  name: 'Poland',
  flag: '🇵🇱',
  students: '10,000+',
  universities: '15+',
  established: '1364',
  rating: 4.8,
  description: `Poland's education system is highly ranked. The Cracow Academy (now Jagiellonian University) is one of the oldest universities.`,
  more: `Safe country, ECTS system, rich culture, and globally recognized degrees with affordable costs.`,
  highlights: ['ECTS System', 'Top EU Education', 'Affordable', 'Rich Culture'],
  color: 'from-red-400 to-white',
  universityImage: '/serbia.jpg',
  topUniversities: ['Jagiellonian University', 'Medical University of Warsaw', 'Wroclaw Medical University']
},
{
  name: 'Belarus',
  flag: '🇧🇾',
  students: '7,000+',
  universities: '15+',
  established: '20th Century',
  rating: 4.5,
  description: `Belarus is home to top WHO-recognized medical universities with modern labs and facilities.`,
  more: `The Belarusian State Medical University ranks globally and provides affordable, practical-oriented medical education.`,
  highlights: ['WHO Approved', 'Advanced Labs', 'Affordable', 'Modern Infrastructure'],
  color: 'from-green-400 to-red-500',
  universityImage: '/belarus.jpg',
  topUniversities: ['Belarusian State Medical University', 'Grodno State Medical University', 'Vitebsk State Medical University']
},
{
  name: 'Croatia',
  flag: '🇭🇷',
  students: '3,000+',
  universities: '4+',
  established: '1917',
  rating: 4.4,
  description: `Croatia offers world-class medical education with top universities like the University of Zagreb.`,
  more: `Medical degrees are 6 years with internships. Universities are ranked globally with solid EU standards.`,
  highlights: ['EU Standards', 'Global Rankings', 'Historic Universities', 'Internship Included'],
  color: 'from-blue-400 to-red-400',
  universityImage: '/croatia.jpg',
  topUniversities: ['University of Zagreb', 'University of Rijeka', 'University of Split']
},
{
  name: 'Egypt',
  flag: '🇪🇬',
  students: '209,000+',
  universities: '30+',
  established: '20th Century',
  rating: 4.6,
  description: `Egypt has a strong medical education system with internationally recognized public universities.`,
  more: `Degrees like MBBCh are offered, with over 30,000 medical seats across 32 medical schools.`,
  highlights: ['MBBCh Degree', 'WHO Recognized', 'Arab League Member', 'High Seat Availability'],
  color: 'from-yellow-500 to-red-500',
  universityImage: '/egypt.jpg',
  topUniversities: ['Cairo University', 'Ain Shams University', 'Alexandria University']
},
{
  name: 'Slovakia',
  flag: '🇸🇰',
  students: '9,000+',
  universities: '6+',
  established: '1919',
  rating: 4.5,
  description: `Slovakia’s medical degrees are recognized globally and comply with EU and Schengen area standards.`,
  more: `Top universities include Comenius University. Uses ECTS system and allows easy credit transfers.`,
  highlights: ['EU Member', 'Global Recognition', 'Comenius University', 'ECTS System'],
  color: 'from-sky-500 to-cyan-600',
  universityImage: '/slovakia.jpg',
  topUniversities: ['Comenius University', 'Pavol Jozef Šafárik University', 'Jessenius Faculty of Medicine']
},
{
  name: 'Hungary',
  flag: '🇭🇺',
  students: '22,000+',
  universities: '6+',
  established: '1367',
  rating: 4.7,
  description: `Hungary is popular for its quality medical education with over 4,500 international students annually.`,
  more: `Semmelweis University is Hungary's oldest and ranks globally. Scholarships and work-study options available.`,
  highlights: ['Top Rankings', 'Scholarships', 'Work While Studying', 'Oldest Medical School'],
  color: 'from-pink-400 to-rose-500',
  universityImage: '/hungary.jpg',
  topUniversities: ['Semmelweis University', 'University of Debrecen', 'University of Pecs']
},
{
  name: 'USA via Caribbean',
  flag: '🌎',
  students: '10,000+',
  universities: '60+',
  established: '20th Century',
  rating: 4.8,
  description: `Caribbean medical schools are a gateway to practicing in the US. Known for USMLE success and match rates.`,
  more: `Graduates often gain residencies in US hospitals. Programs follow US curriculum and standards.`,
  highlights: ['USMLE Focused', 'Residency Success', 'Global Acceptance', 'English Medium'],
  color: 'from-teal-400 to-blue-500',
  universityImage: '/usa-via-caribbean.jpg',
  topUniversities: ['Ross University', 'St. George’s University', 'American University of the Caribbean']

 },
];

export default function MBBSAbroad() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCountry(selectedCountry === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
        </div>
        
        <div className="relative px-4 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
                <Globe className="w-4 h-4" />
                Trusted by 350,000+ Students Worldwide
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                MBBS <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Abroad</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
                Discover world-class medical education opportunities across the globe. 
                Your journey to becoming a doctor starts here.
              </p>

              {/* Statistics Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Users, label: 'Students Enrolled', value: '350K+', color: 'from-blue-400 to-cyan-400' },
                  { icon: GraduationCap, label: 'Universities', value: '200+', color: 'from-purple-400 to-pink-400' },
                  { icon: Globe, label: 'Countries', value: '10+', color: 'from-green-400 to-emerald-400' },
                  { icon: Award, label: 'Success Rate', value: '95%', color: 'from-yellow-400 to-orange-400' }
                ].map((stat, index: number) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-4 shadow-xl`}>
                      <stat.icon className="w-full h-full text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Universities We Provide Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Universities We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access to the world's most prestigious medical institutions with proven track records of excellence
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Countries Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index: number) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                } ${selectedCountry === index ? 'ring-2 ring-blue-500 ring-offset-4 scale-105' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* University Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.universityImage}
                    alt={`${country.name} university`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>
                  
                  {/* Country Flag & Name Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
                    <span className="text-4xl drop-shadow-2xl filter brightness-110">{country.flag}</span>
                    <h3 className="text-2xl font-bold text-white drop-shadow-2xl">{country.name}</h3>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/20 z-20">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-900 text-sm font-bold">{country.rating}</span>
                  </div>
                </div>

                {/* Header with gradient */}
                <div className={`h-16 bg-gradient-to-r ${country.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-white/80" />
                      <span className="text-white font-medium">Est. {country.established}</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{country.students}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Row */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="group/stat">
                      <div className="text-lg font-bold text-gray-900 group-hover/stat:text-blue-600 transition-colors">{country.students}</div>
                      <div className="text-xs text-gray-500 font-medium">Students</div>
                    </div>
                    <div className="group/stat">
                      <div className="text-lg font-bold text-gray-900 group-hover/stat:text-blue-600 transition-colors">{country.universities}</div>
                      <div className="text-xs text-gray-500 font-medium">Universities</div>
                    </div>
                    <div className="group/stat">
                      <div className="text-lg font-bold text-gray-900 group-hover/stat:text-blue-600 transition-colors">{country.established}</div>
                      <div className="text-xs text-gray-500 font-medium">Established</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {country.description}
                  </p>

                  {/* Top Universities */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      Top Universities
                    </h4>
                    <div className="space-y-1">
                      {country.topUniversities.slice(0, 2).map((university, idx: number) => (
                        <div key={idx} className="text-xs text-gray-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                          {university}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.highlights.slice(0, 2).map((highlight, idx: number) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 shadow-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Expanded content */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    selectedCountry === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {country.more}
                      </p>
                      
                      {/* All Universities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">All Universities:</h4>
                        <div className="space-y-1">
                          {country.topUniversities.map((university, idx: number) => (
                            <div key={idx} className="text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full border">
                              {university}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-900">Complete Highlights:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {country.highlights.map((highlight, idx: number) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium border shadow-sm flex items-center gap-1"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action button */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <button
                      className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCountry === index 
                          ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg' 
                          : 'text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg'
                      }`}
                    >
                      {selectedCountry === index ? 'Show Less' : 'Learn More'}
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        selectedCountry === index ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Enhanced Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 transition-opacity duration-500 pointer-events-none ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
                </div>
  );
} 