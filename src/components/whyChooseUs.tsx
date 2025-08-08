'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "WHO & NMC Approved Universities",
      desc: "We partner with globally recognized institutions accredited by the World Health Organization (WHO) and approved by the National Medical Commission (NMC), ensuring international standards and recognition."
    },
    {
      title: "Affordable Tuition, No Donation",
      desc: "Pursue your dream of studying MBBS without financial stress. We help students access affordable universities with transparent fee structures and zero hidden donations."
    },
    {
      title: "Pre-Departure Guidance",
      desc: "From visa application to packing your bags, our experts walk you through every step. We organize orientation sessions so you can fly with clarity and confidence."
    },
    {
      title: "Student Support Abroad",
      desc: "Our commitment doesn’t stop once you board the flight. Get on-ground assistance, support groups, emergency help, and regular check-ins throughout your study journey."
    }
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-100 text-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6"
        >
          Why Choose Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12"
        >
          At IAE Pune, we simplify the complex process of studying MBBS abroad. With expert mentorship, proven pathways, and personalized care, your global medical career begins here.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <CheckCircle className="text-indigo-600 w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blurred background */}
      <div className="absolute top-[-80px] right-[-80px] w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
    </section>
  );
}
