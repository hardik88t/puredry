'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import ValuePropositions from '@/components/home/ValuePropositions';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProcessOverview from '@/components/home/ProcessOverview';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositions />
      <FeaturedCategories />
      <ProcessOverview />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner with PureDry?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers worldwide. Get premium dehydrated products with guaranteed quality and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
