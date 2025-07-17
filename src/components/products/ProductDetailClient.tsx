'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types/product';
import AddToCartButton from '@/components/ui/AddToCartButton';

interface ProductDetailClientProps {
  product: Product;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vegetables':
        return '🥕';
      case 'fruits':
        return '🍎';
      case 'herbs-spices':
        return '🌿';
      case 'custom':
        return '⚗️';
      default:
        return '📦';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in-stock':
        return 'bg-green-100 text-green-800';
      case 'limited':
        return 'bg-yellow-100 text-yellow-800';
      case 'seasonal':
        return 'bg-blue-100 text-blue-800';
      case 'out-of-stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'applications', label: 'Applications' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-amber-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-amber-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-8xl mb-4">
              {getCategoryIcon(product.category)}
            </div>
            
            {/* Additional Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {getCategoryIcon(product.category)}
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(product.availability)}`}>
                {product.availability.replace('-', ' ')}
              </span>
              {product.featured && (
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {product.price.priceRange}
              </div>
              <div className="text-gray-600">
                {product.price.unit} • MOQ: {product.minOrderQuantity}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-medium text-gray-900">Origin</div>
                <div className="text-gray-600">{product.specifications.origin}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-medium text-gray-900">Shelf Life</div>
                <div className="text-gray-600">{product.specifications.shelfLife}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-medium text-gray-900">Moisture</div>
                <div className="text-gray-600">{product.specifications.moisture}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-medium text-gray-900">Packaging</div>
                <div className="text-gray-600">{product.specifications.packaging[0]}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <AddToCartButton
                product={product}
                variant="primary"
                size="lg"
                showQuantitySelector={true}
                className="w-full"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
                  Request Sample
                </button>
                <Link
                  href="/contact"
                  className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-amber-500 text-amber-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      Premium quality with consistent standards
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      Extended shelf life for cost-effective storage
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      Retains natural flavor and nutritional value
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Physical Properties</h4>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Moisture Content:</dt>
                          <dd className="font-medium">{product.specifications.moisture}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Shelf Life:</dt>
                          <dd className="font-medium">{product.specifications.shelfLife}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Origin:</dt>
                          <dd className="font-medium">{product.specifications.origin}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Packaging Options</h4>
                      <ul className="space-y-1">
                        {product.specifications.packaging.map((pkg, index) => (
                          <li key={index} className="text-gray-600">• {pkg}</li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold text-gray-900 mb-3 mt-4">Certifications</h4>
                      <ul className="space-y-1">
                        {product.specifications.certifications.map((cert, index) => (
                          <li key={index} className="text-gray-600">• {cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nutritional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Per 100g</h4>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Calories:</dt>
                          <dd className="font-medium">{product.nutritionalInfo.calories} kcal</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Protein:</dt>
                          <dd className="font-medium">{product.nutritionalInfo.protein}g</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Carbohydrates:</dt>
                          <dd className="font-medium">{product.nutritionalInfo.carbs}g</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Fiber:</dt>
                          <dd className="font-medium">{product.nutritionalInfo.fiber}g</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Vitamins & Minerals</h4>
                      <ul className="space-y-1">
                        {product.nutritionalInfo.vitamins.map((vitamin, index) => (
                          <li key={index} className="text-gray-600">• {vitamin}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Applications & Uses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.applications.map((application, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{application}</h4>
                        <p className="text-gray-600 text-sm">
                          Perfect for use in {application.toLowerCase()} applications, providing consistent quality and flavor.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
