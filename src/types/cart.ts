import { Product } from './product';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  unit: string; // 'kg', 'tons', etc.
  notes?: string;
  addedAt: Date;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalItems: number;
  estimatedTotal: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartSummary {
  totalItems: number;
  totalQuantity: number;
  estimatedTotal: number;
  currency: string;
  itemCount: number;
}

export interface QuoteRequest {
  id: string;
  cartItems: CartItem[];
  customerInfo: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    country: string;
  };
  requirements: {
    deliveryDate?: Date;
    shippingAddress: string;
    specialRequirements?: string;
    paymentTerms?: string;
  };
  status: 'pending' | 'processing' | 'quoted' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface CartActions {
  addItem: (product: Product, quantity: number, unit?: string, notes?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  updateUnit: (itemId: string, unit: string) => void;
  updateNotes: (itemId: string, notes: string) => void;
  clearCart: () => void;
  getCartSummary: () => CartSummary;
  requestQuote: (customerInfo: QuoteRequest['customerInfo'], requirements: QuoteRequest['requirements']) => Promise<string>;
}
