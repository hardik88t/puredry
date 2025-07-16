'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Head Chef',
      company: 'Gourmet Restaurant Chain',
      country: 'United States',
      image: '👩‍🍳',
      quote: 'PureDry&apos;s dehydrated vegetables have transformed our kitchen operations. The quality is consistently excellent, and the flavor retention is remarkable. Our customers can taste the difference.',
      rating: 5
    },
    {
      name: 'Marco Rodriguez',
      position: 'Procurement Manager',
      company: 'Global Food Manufacturing',
      country: 'Mexico',
      image: '👨‍💼',
      quote: 'We&apos;ve been sourcing from PureDry for over 5 years. Their reliability, quality standards, and timely delivery have made them our preferred supplier for dehydrated ingredients.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Quality Director',
      company: 'Spice Export Company',
      country: 'India',
      image: '👩‍💼',
      quote: 'The attention to detail in PureDry\'s processing is exceptional. Their products meet all international quality standards, making export to multiple countries seamless.',
      rating: 5
    },
    {
      name: 'James Mitchell',
      position: 'Operations Head',
      company: 'Organic Food Distributor',
      country: 'United Kingdom',
      image: '👨‍🔬',
      quote: 'PureDry understands the organic market requirements perfectly. Their traceability and certification processes give us complete confidence in their products.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by food professionals worldwide, PureDry has built lasting relationships 
            through consistent quality and reliable service.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-4xl">
                {testimonials[activeTestimonial].image}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Stars */}
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-amber-600 font-medium">
                  {testimonials[activeTestimonial].position}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].country}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeTestimonial ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Retention Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
