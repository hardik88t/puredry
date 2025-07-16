'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

const ProductComparison = ({ products, onClose }: ProductComparisonProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    if (selectedProducts.length < 3 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const comparisonAttributes = [
    { key: 'category', label: 'Category' },
    { key: 'origin', label: 'Origin', path: 'specifications.origin' },
    { key: 'moisture', label: 'Moisture Content', path: 'specifications.moisture' },
    { key: 'shelfLife', label: 'Shelf Life', path: 'specifications.shelfLife' },
    { key: 'calories', label: 'Calories (per 100g)', path: 'nutritionalInfo.calories' },
    { key: 'protein', label: 'Protein (g)', path: 'nutritionalInfo.protein' },
    { key: 'fiber', label: 'Fiber (g)', path: 'nutritionalInfo.fiber' },
    { key: 'priceRange', label: 'Price Range', path: 'price.priceRange' },
    { key: 'minOrder', label: 'Min Order Qty', path: 'minOrderQuantity' }
  ];

  const getNestedValue = (obj: unknown, path: string): string | number => {
    const result = path.split('.').reduce((current: unknown, key: string) => {
      if (current && typeof current === 'object' && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);

    if (typeof result === 'string' || typeof result === 'number') {
      return result;
    }
    return '';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Product Comparison</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-amber-100 mt-2">
            Select up to 3 products to compare their specifications and features
          </p>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Product Selection */}
          {selectedProducts.length < 3 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Add Products to Compare ({selectedProducts.length}/3)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.slice(0, 6).map((product) => (
                  <div
                    key={product.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedProducts.find(p => p.id === product.id)
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-200 hover:border-amber-300'
                    }`}
                    onClick={() => addToComparison(product)}
                  >
                    <h4 className="font-medium text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Table */}
          {selectedProducts.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b border-gray-200 font-semibold text-gray-900">
                      Attribute
                    </th>
                    {selectedProducts.map((product) => (
                      <th key={product.id} className="text-left p-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-600">{product.category}</div>
                          </div>
                          <button
                            onClick={() => removeFromComparison(product.id)}
                            className="text-red-500 hover:text-red-700 ml-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonAttributes.map((attr) => (
                    <tr key={attr.key} className="hover:bg-gray-50">
                      <td className="p-4 border-b border-gray-100 font-medium text-gray-900">
                        {attr.label}
                      </td>
                      {selectedProducts.map((product) => {
                        let value: string | number = '';
                        if (attr.path) {
                          value = getNestedValue(product, attr.path);
                        } else {
                          const productValue = product[attr.key as keyof Product];
                          if (typeof productValue === 'string' || typeof productValue === 'number') {
                            value = productValue;
                          } else {
                            value = String(productValue);
                          }
                        }

                        return (
                          <td key={product.id} className="p-4 border-b border-gray-100 text-gray-600">
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products selected</h3>
              <p className="text-gray-600">Select products from above to start comparing</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {selectedProducts.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Request Quote for Selected
              </button>
              <button className="border border-amber-600 text-amber-600 px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors">
                Download Comparison
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProductComparison;
