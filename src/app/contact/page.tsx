'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useFormValidation, commonValidationRules } from '@/hooks/useFormValidation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { errors, validateField, validateForm, clearError } = useFormValidation({
    name: commonValidationRules.name,
    email: commonValidationRules.email,
    company: commonValidationRules.company,
    phone: commonValidationRules.phone,
    message: commonValidationRules.message
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      clearError(name);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'general',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Global Headquarters',
      icon: '🏢',
      details: [
        'PureDry International Ltd.',
        '123 Industrial Park Drive',
        'Mumbai, Maharashtra 400001',
        'India'
      ]
    },
    {
      title: 'Phone & Email',
      icon: '📞',
      details: [
        '+91 22 1234 5678',
        '+91 22 8765 4321',
        'info@puredry.com',
        'sales@puredry.com'
      ]
    },
    {
      title: 'Business Hours',
      icon: '🕒',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
        'IST (UTC+5:30)'
      ]
    }
  ];

  const offices = [
    {
      region: 'North America',
      city: 'New York, USA',
      address: '456 Trade Center Blvd, NY 10001',
      phone: '+1 212 555 0123',
      email: 'americas@puredry.com'
    },
    {
      region: 'Europe',
      city: 'Amsterdam, Netherlands',
      address: '789 Export Plaza, 1012 AB Amsterdam',
      phone: '+31 20 123 4567',
      email: 'europe@puredry.com'
    },
    {
      region: 'Asia Pacific',
      city: 'Singapore',
      address: '321 Business Hub, Singapore 018989',
      phone: '+65 6123 4567',
      email: 'apac@puredry.com'
    },
    {
      region: 'Middle East & Africa',
      city: 'Dubai, UAE',
      address: '654 Trade District, Dubai 12345',
      phone: '+971 4 123 4567',
      email: 'mea@puredry.com'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Ready to partner with us? Get in touch with our team for quotes, samples, 
              or any questions about our premium dehydrated food products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1 flex items-center">
                        <span className="mr-1">⚠️</span>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="your.email@company.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1 flex items-center">
                        <span className="mr-1">⚠️</span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="sample">Request Sample</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="technical">Technical Support</option>
                    <option value="bulk">Bulk Order</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-vertical"
                    placeholder="Please provide details about your inquiry, including product requirements, quantities, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 flex items-center">
                      <span className="mr-2">✅</span>
                      Message sent successfully! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 flex items-center">
                      <span className="mr-2">❌</span>
                      Failed to send message. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <span className="text-xl mr-3">📋</span>
                    <span className="font-medium">Request Product Catalog</span>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <span className="text-xl mr-3">🧪</span>
                    <span className="font-medium">Request Free Samples</span>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                    <span className="text-xl mr-3">💰</span>
                    <span className="font-medium">Get Bulk Pricing</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices worldwide, we&apos;re always close to our customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {office.region}
                </h3>
                <p className="text-amber-600 font-medium mb-4">
                  {office.city}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p className="text-amber-600">{office.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is your minimum order quantity?",
                answer: "Minimum order quantities vary by product, typically ranging from 100kg to 500kg. Contact us for specific product MOQs."
              },
              {
                question: "Do you provide samples?",
                answer: "Yes, we provide free samples for qualified businesses. Sample quantities are typically 100-500g per product."
              },
              {
                question: "What certifications do you have?",
                answer: "We hold ISO 22000, HACCP, FDA registration, and various organic certifications including USDA Organic and EU Organic."
              },
              {
                question: "What are your payment terms?",
                answer: "We offer flexible payment terms including T/T, L/C, and other arrangements based on order size and customer relationship."
              },
              {
                question: "How long does shipping take?",
                answer: "Shipping times vary by destination: 7-14 days for Asia, 14-21 days for Europe/Americas, and 10-18 days for other regions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
