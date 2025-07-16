'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const resourceCategories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'recipes', name: 'Recipes', icon: '👨‍🍳' },
    { id: 'storage', name: 'Storage Guides', icon: '📦' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗' },
    { id: 'technical', name: 'Technical', icon: '🔬' },
    { id: 'industry', name: 'Industry Insights', icon: '📊' }
  ];

  const resources = [
    {
      id: 'dehydrated-vegetable-recipes',
      title: '50 Creative Recipes Using Dehydrated Vegetables',
      category: 'recipes',
      type: 'Recipe Collection',
      description: 'Comprehensive recipe collection featuring innovative ways to use dehydrated vegetables in everyday cooking.',
      downloadSize: '2.5 MB',
      pages: 45,
      featured: true,
      image: '👨‍🍳'
    },
    {
      id: 'storage-best-practices',
      title: 'Storage Best Practices for Dehydrated Foods',
      category: 'storage',
      type: 'Guide',
      description: 'Complete guide to proper storage techniques, shelf life optimization, and quality maintenance.',
      downloadSize: '1.8 MB',
      pages: 28,
      featured: true,
      image: '📦'
    },
    {
      id: 'nutritional-comparison-chart',
      title: 'Nutritional Comparison: Fresh vs Dehydrated',
      category: 'nutrition',
      type: 'Chart',
      description: 'Detailed nutritional analysis comparing fresh and dehydrated vegetables and fruits.',
      downloadSize: '850 KB',
      pages: 12,
      featured: false,
      image: '📊'
    },
    {
      id: 'rehydration-techniques',
      title: 'Professional Rehydration Techniques',
      category: 'technical',
      type: 'Technical Guide',
      description: 'Advanced techniques for optimal rehydration in commercial and home kitchens.',
      downloadSize: '1.2 MB',
      pages: 20,
      featured: false,
      image: '💧'
    },
    {
      id: 'food-safety-standards',
      title: 'Food Safety Standards in Dehydration',
      category: 'technical',
      type: 'Compliance Guide',
      description: 'Comprehensive overview of food safety standards and regulations for dehydrated products.',
      downloadSize: '2.1 MB',
      pages: 35,
      featured: true,
      image: '🛡️'
    },
    {
      id: 'market-trends-2024',
      title: 'Dehydrated Foods Market Trends 2024',
      category: 'industry',
      type: 'Market Report',
      description: 'Latest market insights, trends, and forecasts for the global dehydrated foods industry.',
      downloadSize: '3.2 MB',
      pages: 52,
      featured: true,
      image: '📈'
    },
    {
      id: 'herb-spice-guide',
      title: 'Complete Guide to Dried Herbs & Spices',
      category: 'recipes',
      type: 'Reference Guide',
      description: 'Comprehensive reference for using dried herbs and spices in culinary applications.',
      downloadSize: '1.9 MB',
      pages: 38,
      featured: false,
      image: '🌿'
    },
    {
      id: 'packaging-solutions',
      title: 'Packaging Solutions for Extended Shelf Life',
      category: 'technical',
      type: 'Technical Brief',
      description: 'Overview of packaging technologies and materials for optimal product preservation.',
      downloadSize: '1.4 MB',
      pages: 24,
      featured: false,
      image: '📦'
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const featuredResources = resources.filter(resource => resource.featured);

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
              Resources & Downloads
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of guides, recipes, technical documentation, 
              and industry insights to maximize the value of dehydrated food products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and comprehensive resources to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{resource.image}</div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.pages} pages</span>
                  </div>
                  
                  <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                    Download ({resource.downloadSize})
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our full collection of resources by category
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl">{resource.image}</div>
                    {resource.featured && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.pages}p</span>
                  </div>
                  
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with New Resources
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to access new guides, 
              recipes, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Custom Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Custom Resources?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team can create customized guides, specifications, and documentation 
              tailored to your specific industry needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Request Custom Resources
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
