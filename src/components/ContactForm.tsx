'use client';

import React, { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import { X } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

type InterestOption = {
  label: string;
  value: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // Stores only the national number (without country code)
  countryCode: string; // Stores the country code (e.g., "+91")
  interest: InterestOption | null;
  otherInterest?: string;
};

const interestOptions = [
  { label: 'Study Abroad', value: 'study-abroad' },
  { label: 'MBBS Abroad', value: 'mbbs-abroad' },
  { label: 'Global Careers', value: 'global-careers' },
  { label: 'Aus Building', value: 'ausbuilding' },
  { label: 'Other', value: 'other' },
];

const schema: yup.ObjectSchema<FormData> = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Z]{2,}$/, 'Enter a valid first name'),

  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Z]{2,}$/, 'Enter a valid last name'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),

  phone: yup.string().required('Phone number is required'), // No further validation

  countryCode: yup.string().required('Country code is required'), // No further validation

  interest: yup
    .object({
      label: yup.string().required(),
      value: yup.string().oneOf(interestOptions.map(o => o.value)).required(),
    })
    .nullable()
    .required('Interest is required'),

  otherInterest: yup
    .string()
    .test('otherInterestRequired', 'Please specify your interest', function (value) {
      const { interest } = this.parent;
      if (interest?.value === 'other') {
        return !!value && value.length >= 2;
      }
      return true;
    }),
});

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>('in');

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver<FormData, any, FormData>(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: '+91',
      interest: null,
      otherInterest: '',
    },
  });

  const selectedInterest = watch('interest');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus('Sending...');
    console.log('Form Data:', {
      ...data,
      phone: `${data.countryCode}${data.phone.replace(/[\s-]/g, '')}`,
    });

    try {
      const res = await fetch(`https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: `${data.countryCode}${data.phone.replace(/[\s-]/g, '')}`, // Combine and clean phone number
          interest: data.interest?.value || '',
          otherInterest: data.otherInterest || '',
        }),
      });

      const result = await res.json();

      if (result.code === 200) {
        setStatus('✅ Message sent successfully!');
        reset();
        setTimeout(() => {
          setStatus(null);
          onClose();
        }, 1500);
      } else {
        setStatus('❌ Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('⚠️ Something went wrong.');
    }
  };

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const outsideClickHandler = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', escHandler);
      document.addEventListener('click', outsideClickHandler);
    }

    return () => {
      document.removeEventListener('keydown', escHandler);
      document.removeEventListener('click', outsideClickHandler);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 modal-overlay px-4 sm:px-6">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 sm:p-8 relative shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-700">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">
                First Name
              </label>
              <input
                {...register('firstName')}
                id="firstName"
                type="text"
                className={`w-full border rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">
                Last Name
              </label>
              <input
                {...register('lastName')}
                id="lastName"
                type="text"
                className={`w-full border rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              className={`w-full border rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Mobile Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  country={selectedCountry}
                  enableSearch
                  inputStyle={{
                    width: '100%',
                    borderRadius: '0.375rem',
                    borderColor: errors.phone ? '#ef4444' : '#D1D5DB',
                    padding: '10px',
                    paddingLeft: '48px',
                    fontSize: '14px',
                    color: '#000000',
                    backgroundColor: '#FFFFFF',
                  }}
                  buttonStyle={{
                    borderTopLeftRadius: '0.375rem',
                    borderBottomLeftRadius: '0.375rem',
                    borderColor: errors.phone ? '#ef4444' : '#D1D5DB',
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    width: '48px',
                  }}
                  dropdownStyle={{
                    color: '#000000',
                    backgroundColor: '#FFFFFF',
                    fontSize: '14px',
                  }}
                  onChange={(value, country: any) => {
                    const dialCode = `+${country.dialCode}`;
                    // Clean the phone number: remove spaces and hyphens
                    const phoneNumber = value.startsWith(dialCode)
                      ? value.slice(dialCode.length).replace(/[\s-]/g, '')
                      : value.replace(/[\s-]/g, '');
                    console.log('PhoneInput onChange:', {
                      value,
                      dialCode,
                      phoneNumber,
                      countryCode: country.countryCode,
                    });
                    field.onChange(phoneNumber); // Set cleaned phone number without country code
                    setValue('countryCode', dialCode); // Set country code
                    setSelectedCountry(country.countryCode);
                  }}
                />
              )}
              rules={{ required: 'Phone number is required' }}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            {errors.countryCode && (
              <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Interest</label>
            <Controller
              name="interest"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={interestOptions}
                  className="text-black"
                  isSearchable
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.interest ? '#ef4444' : '#D1D5DB',
                      boxShadow: 'none',
                      fontSize: '14px',
                      padding: '1px',
                      color: '#000000',
                      backgroundColor: '#FFFFFF',
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: '#000000',
                    }),
                    input: (base) => ({
                      ...base,
                      color: '#000000',
                    }),
                    menu: (base) => ({
                      ...base,
                      zIndex: 9999,
                      fontSize: '14px',
                      backgroundColor: '#FFFFFF',
                    }),
                    option: (base, { isFocused }) => ({
                      ...base,
                      backgroundColor: isFocused ? '#E0F2FE' : '#FFFFFF',
                      color: '#000000',
                    }),
                  }}
                  placeholder="Select interest"
                  onChange={(val) => field.onChange(val)}
                  value={field.value}
                />
              )}
              rules={{ required: 'Interest is required' }}
            />
            {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
          </div>

          {selectedInterest?.value === 'other' && (
            <div>
              <label htmlFor="otherInterest" className="block text-sm font-medium text-black mb-1">
                Specify Interest
              </label>
              <input
                {...register('otherInterest')}
                id="otherInterest"
                type="text"
                className={`w-full border rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.otherInterest ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Specify your interest"
              />
              {errors.otherInterest && (
                <p className="text-red-500 text-xs mt-1">{errors.otherInterest.message}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;