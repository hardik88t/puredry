'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const FeaturedCategories = () => {
  const categories = [
    {
      title: 'Dehydrated Vegetables',
      description: 'Premium quality vegetables dried to perfection, retaining maximum nutrition and flavor.',
      image: '🥕',
      products: ['Onions', 'Garlic', 'Carrots', 'Potatoes', 'Tomatoes', 'Bell Peppers'],
      href: '/products?category=vegetables',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Dried Fruits',
      description: 'Natural sweetness preserved through careful dehydration processes.',
      image: '🍎',
      products: ['Apples', 'Mangoes', 'Bananas', 'Pineapples', 'Strawberries', 'Dates'],
      href: '/products?category=fruits',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Herbs & Spices',
      description: 'Aromatic herbs and spices that add authentic flavors to any cuisine.',
      image: '🌿',
      products: ['Basil', 'Oregano', 'Thyme', 'Turmeric', 'Cumin', 'Coriander'],
      href: '/products?category=herbs-spices',
      color: 'from-amber-400 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of dehydrated food products, each category carefully crafted 
            to meet the diverse needs of our global customers.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white text-center`}>
                  <div className="text-6xl mb-4">{category.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-white/90">{category.description}</p>
                </div>

                {/* Products List */}
                <div className="p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Popular Products:</h4>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.products.map((product, productIndex) => (
                      <div
                        key={productIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {product}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={category.href}
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 group-hover:bg-amber-600"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">200+</div>
              <div className="text-gray-600">Product Varieties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">99.9%</div>
              <div className="text-gray-600">Purity Level</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Quality Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
