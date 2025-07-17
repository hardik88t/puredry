'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';
import Icon from '@/components/ui/Icon';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'primary' | 'secondary' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  showQuantitySelector?: boolean;
  className?: string;
}

const AddToCartButton = ({
  product,
  variant = 'primary',
  size = 'md',
  showQuantitySelector = false,
  className = ''
}: AddToCartButtonProps) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('kg');
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    try {
      addItem(product, quantity, unit);
      
      // Show success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      
      // Reset quantity if not showing selector
      if (!showQuantitySelector) {
        setQuantity(1);
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500';
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    const variantClasses = {
      primary: 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800',
      secondary: 'bg-white text-amber-600 border border-amber-600 hover:bg-amber-50 active:bg-amber-100 dark:bg-gray-800 dark:text-amber-400 dark:border-amber-400 dark:hover:bg-gray-700',
      minimal: 'text-amber-600 hover:text-amber-700 hover:bg-amber-50 active:bg-amber-100 dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-900/20'
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  };

  const isOutOfStock = product.availability === 'out-of-stock';

  if (isOutOfStock) {
    return (
      <button
        disabled
        className={`${getButtonClasses()} opacity-50 cursor-not-allowed`}
      >
        <Icon name="package" size="sm" className="mr-2" />
        Out of Stock
      </button>
    );
  }

  return (
    <div className="space-y-3">
      {/* Quantity and Unit Selector */}
      {showQuantitySelector && (
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              disabled={quantity <= 1}
            >
              <Icon name="minus" size="sm" />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 text-center border-0 bg-transparent focus:ring-0 text-gray-900 dark:text-gray-100"
              min="1"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon name="plus" size="sm" />
            </button>
          </div>
          
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="kg">kg</option>
            <option value="tons">tons</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
      )}

      {/* Add to Cart Button */}
      <motion.button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={getButtonClasses()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={showSuccess ? { scale: [1, 1.05, 1] } : {}}
      >
        {isAdding ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              <Icon name="loading" size="sm" />
            </motion.div>
            Adding...
          </>
        ) : showSuccess ? (
          <>
            <Icon name="check" size="sm" className="mr-2 text-green-500" />
            Added!
          </>
        ) : (
          <>
            <Icon name="shopping-cart" size="sm" className="mr-2" />
            Add to Cart
            {showQuantitySelector && quantity > 1 && (
              <span className="ml-1">({quantity} {unit})</span>
            )}
          </>
        )}
      </motion.button>

      {/* Availability Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {product.availability === 'limited' && (
          <span className="text-orange-600 dark:text-orange-400">⚠️ Limited stock</span>
        )}
        {product.availability === 'seasonal' && (
          <span className="text-blue-600 dark:text-blue-400">🌱 Seasonal availability</span>
        )}
        {product.availability === 'in-stock' && (
          <span className="text-green-600 dark:text-green-400">✅ In stock</span>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
