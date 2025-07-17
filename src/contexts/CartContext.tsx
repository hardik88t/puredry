'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Cart, CartItem, CartActions, CartSummary, QuoteRequest } from '@/types/cart';
import { Product } from '@/types/product';

interface CartContextType extends CartActions {
  cart: Cart;
  isLoading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    id: 'default-cart',
    items: [],
    totalItems: 0,
    estimatedTotal: 0,
    currency: 'USD',
    createdAt: new Date(),
    updatedAt: new Date()
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('puredry-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Convert date strings back to Date objects
        parsedCart.createdAt = new Date(parsedCart.createdAt);
        parsedCart.updatedAt = new Date(parsedCart.updatedAt);
        parsedCart.items = parsedCart.items.map((item: any) => ({
          ...item,
          addedAt: new Date(item.addedAt)
        }));
        setCart(parsedCart);
      } catch (e) {
        console.error('Failed to parse saved cart:', e);
        setError('Failed to load saved cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('puredry-cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate estimated total
  const calculateEstimatedTotal = useCallback((items: CartItem[]): number => {
    return items.reduce((total, item) => {
      const product = item.product;
      let price = 0;
      
      if (product.price.value) {
        price = product.price.value;
      } else if (product.price.priceRange) {
        // Extract average price from range like "$2.50 - $3.20"
        const matches = product.price.priceRange.match(/\$(\d+\.?\d*)\s*-\s*\$(\d+\.?\d*)/);
        if (matches) {
          const min = parseFloat(matches[1]);
          const max = parseFloat(matches[2]);
          price = (min + max) / 2;
        }
      }
      
      return total + (price * item.quantity);
    }, 0);
  }, []);

  // Update cart totals
  const updateCartTotals = useCallback((items: CartItem[]) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const estimatedTotal = calculateEstimatedTotal(items);
    
    setCart(prev => ({
      ...prev,
      items,
      totalItems,
      estimatedTotal,
      updatedAt: new Date()
    }));
  }, [calculateEstimatedTotal]);

  const addItem = useCallback((product: Product, quantity: number, unit = 'kg', notes = '') => {
    setError(null);
    
    const existingItemIndex = cart.items.findIndex(item => 
      item.product.id === product.id && item.unit === unit
    );

    let newItems: CartItem[];
    
    if (existingItemIndex >= 0) {
      // Update existing item
      newItems = [...cart.items];
      newItems[existingItemIndex] = {
        ...newItems[existingItemIndex],
        quantity: newItems[existingItemIndex].quantity + quantity,
        notes: notes || newItems[existingItemIndex].notes
      };
    } else {
      // Add new item
      const newItem: CartItem = {
        id: `${product.id}-${unit}-${Date.now()}`,
        product,
        quantity,
        unit,
        notes,
        addedAt: new Date()
      };
      newItems = [...cart.items, newItem];
    }

    updateCartTotals(newItems);
  }, [cart.items, updateCartTotals]);

  const removeItem = useCallback((itemId: string) => {
    setError(null);
    const newItems = cart.items.filter(item => item.id !== itemId);
    updateCartTotals(newItems);
  }, [cart.items, updateCartTotals]);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    setError(null);
    
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    updateCartTotals(newItems);
  }, [cart.items, updateCartTotals, removeItem]);

  const updateUnit = useCallback((itemId: string, unit: string) => {
    setError(null);
    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, unit } : item
    );
    updateCartTotals(newItems);
  }, [cart.items, updateCartTotals]);

  const updateNotes = useCallback((itemId: string, notes: string) => {
    setError(null);
    const newItems = cart.items.map(item =>
      item.id === itemId ? { ...item, notes } : item
    );
    updateCartTotals(newItems);
  }, [cart.items, updateCartTotals]);

  const clearCart = useCallback(() => {
    setError(null);
    setCart(prev => ({
      ...prev,
      items: [],
      totalItems: 0,
      estimatedTotal: 0,
      updatedAt: new Date()
    }));
  }, []);

  const getCartSummary = useCallback((): CartSummary => {
    return {
      totalItems: cart.totalItems,
      totalQuantity: cart.items.reduce((sum, item) => sum + item.quantity, 0),
      estimatedTotal: cart.estimatedTotal,
      currency: cart.currency,
      itemCount: cart.items.length
    };
  }, [cart]);

  const requestQuote = useCallback(async (
    customerInfo: QuoteRequest['customerInfo'],
    requirements: QuoteRequest['requirements']
  ): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const quoteRequest: QuoteRequest = {
        id: `quote-${Date.now()}`,
        cartItems: [...cart.items],
        customerInfo,
        requirements,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // In a real app, this would be sent to your backend
      console.log('Quote request submitted:', quoteRequest);

      // Save quote request to localStorage for demo purposes
      const savedQuotes = localStorage.getItem('puredry-quotes');
      const quotes = savedQuotes ? JSON.parse(savedQuotes) : [];
      quotes.push(quoteRequest);
      localStorage.setItem('puredry-quotes', JSON.stringify(quotes));

      // Clear cart after successful quote request
      clearCart();

      return quoteRequest.id;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit quote request';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [cart.items, clearCart]);

  const value: CartContextType = {
    cart,
    isLoading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    updateUnit,
    updateNotes,
    clearCart,
    getCartSummary,
    requestQuote
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
