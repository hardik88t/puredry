'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProductCategory } from '@/types/product';

interface CategoryGridProps {
  categories: ProductCategory[];
}

const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Browse by Category
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of dehydrated products organized by category
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/products?category=${category.id}`}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white text-center`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-lg font-bold">{category.name}</h3>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {category.productCount} products
                    </span>
                    {category.featured && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors flex items-center">
                      View Products
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
