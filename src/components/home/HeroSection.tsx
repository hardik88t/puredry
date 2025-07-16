'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Premium{' '}
              <span className="text-amber-600">Dehydrated</span>{' '}
              Food Products
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              From farm to package, we deliver the finest dehydrated vegetables, fruits, herbs, and spices. 
              Trusted by food manufacturers, restaurants, and premium consumers worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/products"
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 text-center"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-200 text-center"
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-amber-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
              {/* Product Cards - All with consistent height */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧅</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dehydrated Onions</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Premium quality, long-lasting flavor</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥕</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dried Vegetables</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Nutrient-rich, farm-fresh</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌶️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Herbs & Spices</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Aromatic, authentic flavors</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍎</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dried Fruits</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">Natural sweetness preserved</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
