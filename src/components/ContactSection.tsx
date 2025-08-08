'use client';

import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'flag-icon-css/css/flag-icons.min.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    otherService: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (formData.service === 'Other' && !formData.otherService.trim()) {
      newErrors.otherService = 'Please specify your service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-violet-50 to-indigo-50">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 mb-4 rounded" />
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Ready to take the next step in your educational journey? Contact us today.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8">
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Send us a message</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Country Code + Phone */}
            <div>
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="!w-full !py-3 !pl-12 !pr-4 !border !border-gray-200 !rounded-lg !text-black !bg-white !focus:outline-none !focus:ring-2 !focus:ring-blue-500"
                buttonClass="!border !border-gray-200 !bg-white !text-black"
                dropdownClass="!text-black"
                containerClass="!w-full"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Service Select */}
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-200 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option>Global Careers</option>
                <option>Study Abroad</option>
                <option>MBBS Abroad</option>
                <option>Ausbildung (Vocational Course)</option>
                <option>Other</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>

            {/* Other Service Field */}
            {formData.service === 'Other' && (
              <div>
                <input
                  type="text"
                  name="otherService"
                  placeholder="Please specify"
                  value={formData.otherService}
                  onChange={handleChange}
                  className="w-full border border-gray-200 text-black rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.otherService && <p className="text-red-500 text-sm mt-1">{errors.otherService}</p>}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>
          <ul className="space-y-6 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Our Office</p>
                <p>Flat No C1, Shree Ganesh Vihar, Kale Padal Road, Sasane Nagar, Hadapsar, Pune-411028, Maharashtra</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-green-500 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Phone Number</p>
                <p>+91 9552929625</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-purple-500 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Email Address</p>
                <p>bvishal.bansode@gmail.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="text-red-500 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Working Hours</p>
                <p>Monday to Saturday: 10:00 AM to 7:00 PM</p>
              </div>
            </li>
          </ul>

          {/* Social Media */}
          <div className="mt-8">
            <p className="font-semibold text-gray-900 mb-3">Follow Us</p>
            <div className="flex gap-4">
              <a href="#" className="text-pink-600 hover:text-pink-700 text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-800 text-lg">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
