'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types/product';
import Icon from '@/components/ui/Icon';
import AddToCartButton from '@/components/ui/AddToCartButton';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard = ({ product, viewMode }: ProductCardProps) => {
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'vegetables':
        return <Icon name="carrot" size="xl" aria-label="Vegetables category" />;
      case 'fruits':
        return <Icon name="apple" size="xl" aria-label="Fruits category" />;
      case 'herbs-spices':
        return <Icon name="herbs" size="xl" aria-label="Herbs and spices category" />;
      case 'custom':
        return <Icon name="factory" size="xl" aria-label="Custom products category" />;
      default:
        return <Icon name="factory" size="xl" aria-label="Product category" />;
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="md:w-48 flex-shrink-0">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-amber-600">
              {getCategoryIcon(product.category)}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(product.availability)}`}>
                    {product.availability.replace('-', ' ')}
                  </span>
                  {product.featured && (
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  <Link href={`/products/${product.id}`} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {product.name}
                  </Link>
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Origin:</span> {product.specifications.origin}
                  </div>
                  <div>
                    <span className="font-medium">Shelf Life:</span> {product.specifications.shelfLife}
                  </div>
                  <div>
                    <span className="font-medium">MOQ:</span> {product.minOrderQuantity}
                  </div>
                  <div>
                    <span className="font-medium">Moisture:</span> {product.specifications.moisture}
                  </div>
                </div>
              </div>

              <div className="md:text-right">
                <div className="text-2xl font-bold text-amber-600 mb-2">
                  {product.price.priceRange}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {product.price.unit}
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-amber-600 text-white px-6 py-2 rounded-lg text-center hover:bg-amber-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <AddToCartButton
                    product={product}
                    variant="secondary"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-amber-600">
        {getCategoryIcon(product.category)}
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(product.availability)}`}>
            {product.availability.replace('-', ' ')}
          </span>
          {product.featured && (
            <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          <Link href={`/products/${product.id}`} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            {product.name}
          </Link>
        </h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-600 mb-4 space-y-1 flex-1">
          <div><span className="font-medium">Origin:</span> {product.specifications.origin}</div>
          <div><span className="font-medium">MOQ:</span> {product.minOrderQuantity}</div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-amber-600">
            {product.price.priceRange}
          </div>
          <div className="text-xs text-gray-600">
            {product.price.unit}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <Link
            href={`/products/${product.id}`}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-amber-700 transition-colors"
          >
            View Details
          </Link>
          <AddToCartButton
            product={product}
            variant="secondary"
            size="sm"
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
