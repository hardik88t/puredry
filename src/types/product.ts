export interface Product {
  id: string;
  name: string;
  category: 'vegetables' | 'fruits' | 'herbs-spices' | 'custom';
  description: string;
  shortDescription: string;
  image: string;
  images: string[];
  specifications: {
    moisture: string;
    shelfLife: string;
    packaging: string[];
    origin: string;
    certifications: string[];
  };
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fiber: number;
    vitamins: string[];
  };
  applications: string[];
  minOrderQuantity: string;
  price: {
    currency: string;
    unit: string;
    value?: number;
    priceRange?: string;
  };
  availability: 'in-stock' | 'limited' | 'out-of-stock' | 'seasonal';
  featured: boolean;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  productCount: number;
  featured: boolean;
}

export interface ProductFilter {
  category?: string;
  availability?: string;
  featured?: boolean;
  search?: string;
  tags?: string[];
  sortBy?: 'name' | 'price' | 'popularity' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

export interface ProductComparison {
  products: Product[];
  attributes: string[];
}
