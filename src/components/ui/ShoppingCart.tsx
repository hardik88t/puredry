'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { CartItem } from '@/types/cart';
import Icon from '@/components/ui/Icon';
import QuoteRequestForm from '@/components/ui/QuoteRequestForm';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { cart, removeItem, updateQuantity, updateUnit, updateNotes, clearCart, getCartSummary } = useCart();
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const summary = getCartSummary();

  const handleNotesEdit = (itemId: string, currentNotes: string) => {
    setEditingNotes(itemId);
    setTempNotes(currentNotes || '');
  };

  const handleNotesSave = (itemId: string) => {
    updateNotes(itemId, tempNotes);
    setEditingNotes(null);
    setTempNotes('');
  };

  const handleNotesCancel = () => {
    setEditingNotes(null);
    setTempNotes('');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: cart.currency
    }).format(price);
  };

  const getItemTotal = (item: CartItem) => {
    const product = item.product;
    let price = 0;
    
    if (product.price.value) {
      price = product.price.value;
    } else if (product.price.priceRange) {
      const matches = product.price.priceRange.match(/\$(\d+\.?\d*)\s*-\s*\$(\d+\.?\d*)/);
      if (matches) {
        const min = parseFloat(matches[1]);
        const max = parseFloat(matches[2]);
        price = (min + max) / 2;
      }
    }
    
    return price * item.quantity;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Shopping Cart ({summary.itemCount})
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Icon name="close" size="sm" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <Icon name="package" size="lg" className="text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Add some products to get started
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">
                            {item.product.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.product.category.replace('-', ' ')}
                          </p>
                          <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                            {formatPrice(getItemTotal(item))}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        >
                          <Icon name="close" size="sm" className="text-gray-400" />
                        </button>
                      </div>

                      {/* Quantity and Unit */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Icon name="minus" size="sm" />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-16 text-center border-0 bg-transparent focus:ring-0"
                            min="1"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Icon name="plus" size="sm" />
                          </button>
                        </div>
                        
                        <select
                          value={item.unit}
                          onChange={(e) => updateUnit(item.id, e.target.value)}
                          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="kg">kg</option>
                          <option value="tons">tons</option>
                          <option value="lbs">lbs</option>
                        </select>
                      </div>

                      {/* Notes */}
                      <div>
                        {editingNotes === item.id ? (
                          <div className="space-y-2">
                            <textarea
                              value={tempNotes}
                              onChange={(e) => setTempNotes(e.target.value)}
                              placeholder="Add notes for this item..."
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                              rows={2}
                            />
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleNotesSave(item.id)}
                                className="px-3 py-1 bg-amber-600 text-white text-sm rounded hover:bg-amber-700 transition-colors"
                              >
                                Save
                              </button>
                              <button
                                onClick={handleNotesCancel}
                                className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleNotesEdit(item.id, item.notes || '')}
                            className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                          >
                            {item.notes ? `Notes: ${item.notes}` : 'Add notes'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
                {/* Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Total Items:</span>
                    <span className="text-gray-900 dark:text-gray-100">{summary.totalQuantity}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900 dark:text-gray-100">Estimated Total:</span>
                    <span className="text-amber-600 dark:text-amber-400">
                      {formatPrice(summary.estimatedTotal)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    *Final pricing will be provided in your custom quote
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => setShowQuoteForm(true)}
                    className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium"
                  >
                    Request Quote
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Quote Request Form */}
          <QuoteRequestForm
            isOpen={showQuoteForm}
            onClose={() => setShowQuoteForm(false)}
            onSuccess={(quoteId) => {
              console.log('Quote submitted:', quoteId);
              onClose(); // Close the cart after successful quote
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
