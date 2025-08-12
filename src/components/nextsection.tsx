"use client"
import React, { useState, useEffect } from 'react';
import { Mail, ChevronRight, Globe, GraduationCap, Users, Award, MapPin, Clock, Star, Building2, BookOpen, Calendar } from 'lucide-react';

const countries = [
  {
    name: 'Russia',
    flagCode: 'RU',
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
  // ... keep rest of your countries here
];

export default function MBBSAbroad() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
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
                    className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
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
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${selectedCountry === index ? 'ring-2 ring-blue-500 ring-offset-4 scale-105' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                    <img
                      src={`https://flagcdn.com/w40/${country.flagCode.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      className="w-9 h-9 rounded-sm shadow-lg"
                    />
                    <h3 className="text-2xl font-bold text-white drop-shadow-2xl">{country.name}</h3>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/20 z-20">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-900 text-sm font-bold">{country.rating}</span>
                  </div>
                </div>

                {/* Rest of your card code stays the same */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
