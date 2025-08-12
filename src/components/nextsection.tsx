'use client';
import React, { useState, useEffect } from 'react';
import {
  Globe,
  Users,
  Star,
  Calendar,
} from 'lucide-react';

// Emoji fallback helper
function getEmojiFlag(code: string) {
  const codePoints = code
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Country Data
const countries = [
  {
    name: 'Russia',
    code: 'ru',
    students: '260,000+',
    universities: '80+',
    established: '1706',
    rating: 4.8,
    description: `Russia boasts a prestigious history in medical education with its first school dating back to 1706. Over 260,000 students are enrolled across 80 universities, many of which are globally ranked. Degrees are recognized by WHO and the EU.`,
    color: 'from-red-500 to-red-600',
    universityImage: '/russia.jpg',
  },
  {
    name: 'Georgia',
    code: 'ge',
    students: '8,000+',
    universities: '12+',
    established: '1918',
    rating: 4.7,
    description: `Georgia is globally recognized for its medical programs with universities like Tbilisi State Medical University. Programs are WHO and MCI recognized, and the climate is similar to India.`,
    color: 'from-blue-500 to-blue-600',
    universityImage: '/georgia.jpg',
  },
  // Add more countries here if needed
];

export default function MBBSAbroad() {
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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
        <div className="relative px-4 py-20 sm:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
                <Globe className="w-4 h-4" />
                Trusted by 350,000+ Students Worldwide
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                MBBS{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Abroad
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
                Discover world-class medical education opportunities across the
                globe. Your journey to becoming a doctor starts here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
              Universities We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access to the world's most prestigious medical institutions with
              proven track records of excellence
            </p>
          </div>
        </div>
      </div>

      {/* Country Cards Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${
                selectedCountry === index
                  ? 'ring-2 ring-blue-500 ring-offset-4 scale-105'
                  : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              {/* University Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.universityImage}
                  alt={`${country.name} university`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30"></div>

                {/* Flag + Country Name */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
                  <img
                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png?refresh=1`}
                    alt={`${country.name} flag`}
                    className="w-10 h-6 object-cover rounded shadow-md border border-white"
                    loading="lazy"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'text-2xl';
                      fallback.textContent = getEmojiFlag(country.code);
                      parent?.prepend(fallback);
                    }}
                  />
                  <h3 className="text-2xl font-bold text-white drop-shadow-2xl">
                    {country.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/20 z-20">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-gray-900 text-sm font-bold">
                    {country.rating}
                  </span>
                </div>
              </div>

              {/* Gradient Header */}
              <div className={`h-16 bg-gradient-to-r ${country.color} relative`}>
                <div className="relative px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-white/80" />
                    <span className="text-white font-medium">
                      Est. {country.established}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{country.students}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {country.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
