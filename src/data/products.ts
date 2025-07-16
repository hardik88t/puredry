import { Product, ProductCategory } from '@/types/product';

export const productCategories: ProductCategory[] = [
  {
    id: 'vegetables',
    name: 'Dehydrated Vegetables',
    slug: 'vegetables',
    description: 'Premium quality vegetables dried to perfection, retaining maximum nutrition and flavor.',
    image: '/images/categories/vegetables.jpg',
    icon: '🥕',
    color: 'from-green-400 to-green-600',
    productCount: 45,
    featured: true
  },
  {
    id: 'fruits',
    name: 'Dried Fruits',
    slug: 'fruits',
    description: 'Natural sweetness preserved through careful dehydration processes.',
    image: '/images/categories/fruits.jpg',
    icon: '🍎',
    color: 'from-red-400 to-red-600',
    productCount: 32,
    featured: true
  },
  {
    id: 'herbs-spices',
    name: 'Herbs & Spices',
    slug: 'herbs-spices',
    description: 'Aromatic herbs and spices that add authentic flavors to any cuisine.',
    image: '/images/categories/herbs-spices.jpg',
    icon: '🌿',
    color: 'from-amber-400 to-amber-600',
    productCount: 28,
    featured: true
  },
  {
    id: 'custom',
    name: 'Custom Blends',
    slug: 'custom',
    description: 'Tailored blends created to meet specific customer requirements.',
    image: '/images/categories/custom.jpg',
    icon: '⚗️',
    color: 'from-purple-400 to-purple-600',
    productCount: 15,
    featured: false
  }
];

export const sampleProducts: Product[] = [
  // Vegetables
  {
    id: 'dehydrated-onions-white',
    name: 'Dehydrated White Onions',
    category: 'vegetables',
    description: 'Premium quality white onions carefully dehydrated to preserve their natural flavor and nutritional value. Perfect for soups, stews, sauces, and seasoning blends.',
    shortDescription: 'Premium white onions with preserved natural flavor',
    image: '/images/products/white-onions.jpg',
    images: ['/images/products/white-onions.jpg', '/images/products/white-onions-2.jpg'],
    specifications: {
      moisture: '6-8%',
      shelfLife: '24 months',
      packaging: ['25kg bags', '50kg bags', 'Custom packaging'],
      origin: 'India',
      certifications: ['ISO 22000', 'HACCP', 'Organic']
    },
    nutritionalInfo: {
      calories: 40,
      protein: 1.1,
      carbs: 9.3,
      fiber: 1.7,
      vitamins: ['Vitamin C', 'Vitamin B6', 'Folate']
    },
    applications: ['Food manufacturing', 'Restaurant kitchens', 'Seasoning blends', 'Ready meals'],
    minOrderQuantity: '500kg',
    price: {
      currency: 'USD',
      unit: 'per kg',
      priceRange: '$2.50 - $3.20'
    },
    availability: 'in-stock',
    featured: true,
    tags: ['onions', 'vegetables', 'dehydrated', 'white', 'premium'],
    seoTitle: 'Premium Dehydrated White Onions - Bulk Supply | PureDry',
    seoDescription: 'High-quality dehydrated white onions with 24-month shelf life. Perfect for food manufacturing and commercial kitchens. ISO certified.'
  },
  {
    id: 'dehydrated-garlic-granules',
    name: 'Dehydrated Garlic Granules',
    category: 'vegetables',
    description: 'Finely processed garlic granules that deliver intense flavor and aroma. Essential ingredient for seasoning mixes, marinades, and culinary applications.',
    shortDescription: 'Intense flavor garlic granules for culinary use',
    image: '/images/products/garlic-granules.jpg',
    images: ['/images/products/garlic-granules.jpg'],
    specifications: {
      moisture: '5-7%',
      shelfLife: '36 months',
      packaging: ['20kg bags', '25kg bags', 'Bulk containers'],
      origin: 'China',
      certifications: ['ISO 22000', 'HACCP', 'FDA']
    },
    nutritionalInfo: {
      calories: 331,
      protein: 16.3,
      carbs: 72.7,
      fiber: 9.0,
      vitamins: ['Vitamin C', 'Vitamin B6', 'Manganese']
    },
    applications: ['Spice blends', 'Marinades', 'Sauces', 'Instant foods'],
    minOrderQuantity: '200kg',
    price: {
      currency: 'USD',
      unit: 'per kg',
      priceRange: '$4.80 - $6.20'
    },
    availability: 'in-stock',
    featured: true,
    tags: ['garlic', 'granules', 'seasoning', 'aromatic'],
  },
  // Fruits
  {
    id: 'dried-mango-slices',
    name: 'Dried Mango Slices',
    category: 'fruits',
    description: 'Sweet and chewy mango slices dried naturally to preserve tropical flavor. No added sugars or preservatives, perfect for snacking and food applications.',
    shortDescription: 'Natural sweet mango slices without preservatives',
    image: '/images/products/mango-slices.jpg',
    images: ['/images/products/mango-slices.jpg'],
    specifications: {
      moisture: '18-22%',
      shelfLife: '18 months',
      packaging: ['10kg boxes', '20kg boxes', 'Consumer packs'],
      origin: 'Philippines',
      certifications: ['Organic', 'Non-GMO', 'Fair Trade']
    },
    nutritionalInfo: {
      calories: 319,
      protein: 2.8,
      carbs: 78.6,
      fiber: 9.9,
      vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin E']
    },
    applications: ['Snack foods', 'Bakery products', 'Cereals', 'Trail mixes'],
    minOrderQuantity: '100kg',
    price: {
      currency: 'USD',
      unit: 'per kg',
      priceRange: '$8.50 - $12.00'
    },
    availability: 'seasonal',
    featured: true,
    tags: ['mango', 'tropical', 'sweet', 'natural', 'organic'],
  },
  // Herbs & Spices
  {
    id: 'dried-basil-leaves',
    name: 'Dried Basil Leaves',
    category: 'herbs-spices',
    description: 'Aromatic basil leaves carefully dried to maintain their distinctive flavor and color. Essential herb for Mediterranean cuisine and Italian dishes.',
    shortDescription: 'Aromatic basil leaves for Mediterranean cuisine',
    image: '/images/products/basil-leaves.jpg',
    images: ['/images/products/basil-leaves.jpg'],
    specifications: {
      moisture: '8-12%',
      shelfLife: '24 months',
      packaging: ['5kg bags', '10kg bags', 'Glass jars'],
      origin: 'Turkey',
      certifications: ['Organic', 'EU Organic', 'USDA Organic']
    },
    nutritionalInfo: {
      calories: 233,
      protein: 14.4,
      carbs: 47.8,
      fiber: 37.7,
      vitamins: ['Vitamin K', 'Vitamin A', 'Iron']
    },
    applications: ['Italian cuisine', 'Pizza toppings', 'Pasta sauces', 'Herb blends'],
    minOrderQuantity: '50kg',
    price: {
      currency: 'USD',
      unit: 'per kg',
      priceRange: '$15.00 - $22.00'
    },
    availability: 'in-stock',
    featured: false,
    tags: ['basil', 'herbs', 'mediterranean', 'aromatic', 'organic'],
  }
];
