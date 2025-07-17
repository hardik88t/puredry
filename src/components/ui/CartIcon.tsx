'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import Icon from '@/components/ui/Icon';
import ShoppingCart from '@/components/ui/ShoppingCart';

const CartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartSummary } = useCart();
  
  const summary = getCartSummary();

  return (
    <>
      <motion.button
        onClick={() => setIsCartOpen(true)}
        className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Shopping cart with ${summary.itemCount} items`}
      >
        <Icon name="shopping-cart" size="md" />
        
        {/* Cart Badge */}
        {summary.itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {summary.itemCount > 99 ? '99+' : summary.itemCount}
          </motion.span>
        )}
      </motion.button>

      <ShoppingCart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default CartIcon;
