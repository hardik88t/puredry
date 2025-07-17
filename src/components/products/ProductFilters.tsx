'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductFilter, ProductCategory, Product } from '@/types/product';
import AdvancedSearch from '@/components/ui/AdvancedSearch';

interface ProductFiltersProps {
  filters: ProductFilter;
  onFiltersChange: (filters: ProductFilter) => void;
  categories: ProductCategory[];
  products: Product[];
  productCount: number;
  onProductSelect?: (product: Product) => void;
}

const ProductFilters = ({ filters, onFiltersChange, categories, products, productCount, onProductSelect }: ProductFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [selectedTags, setSelectedTags] = useState<string[]>(filters.tags || []);
  const [nutritionFilters, setNutritionFilters] = useState({
    minProtein: 0,
    maxCalories: 1000,
    highFiber: false,
    organic: false
  });

  const handleFilterChange = (key: keyof ProductFilter, value: string | boolean | string[] | undefined) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    handleFilterChange('tags', newTags.length > 0 ? newTags : undefined);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    // You can implement price filtering logic here
  };

  const handleNutritionFilterChange = (key: string, value: number | boolean) => {
    setNutritionFilters(prev => ({ ...prev, [key]: value }));
    // You can implement nutrition filtering logic here
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setPriceRange({ min: 0, max: 100 });
    setNutritionFilters({
      minProtein: 0,
      maxCalories: 1000,
      highFiber: false,
      organic: false
    });
    onFiltersChange({
      sortBy: 'name',
      sortOrder: 'asc'
    });
  };

  // Get popular tags from products
  const getPopularTags = () => {
    const tagCounts: { [key: string]: number } = {};
    products.forEach(product => {
      product.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 12)
      .map(([tag]) => tag);
  };

  const popularTags = getPopularTags();

  const availabilityOptions = [
    { value: '', label: 'All Availability' },
    { value: 'in-stock', label: 'In Stock' },
    { value: 'limited', label: 'Limited Stock' },
    { value: 'seasonal', label: 'Seasonal' },
    { value: 'out-of-stock', label: 'Out of Stock' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'newest', label: 'Newest' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <span className="font-semibold text-gray-900 dark:text-gray-100">Filters ({productCount} products)</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Desktop Title */}
      <div className="hidden lg:block p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">Filters</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{productCount} products found</p>
      </div>

      {/* Filter Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="p-4 space-y-6">
              {/* Advanced Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search Products
                </label>
                <AdvancedSearch
                  products={products}
                  categories={categories}
                  onSearch={(query) => handleFilterChange('search', query)}
                  onProductSelect={onProductSelect}
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Category
                </label>
                <select
                  value={filters.category || 'all'}
                  onChange={(e) => handleFilterChange('category', e.target.value === 'all' ? undefined : e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Availability
                </label>
                <select
                  value={filters.availability || ''}
                  onChange={(e) => handleFilterChange('availability', e.target.value || undefined)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                >
                  {availabilityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Featured Filter */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.featured || false}
                    onChange={(e) => handleFilterChange('featured', e.target.checked || undefined)}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Featured products only</span>
                </label>
              </div>

              {/* Tags Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Popular Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-900/20 dark:border-amber-600 dark:text-amber-400'
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price Range (USD per kg)
                </label>
                <div className="space-y-2">
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange.max)}
                      className="col-span-2 px-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    <span className="text-center text-xs text-gray-500 dark:text-gray-400">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => handlePriceRangeChange(priceRange.min, Number(e.target.value))}
                      className="col-span-2 px-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Nutrition Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nutritional Preferences
                </label>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Minimum Protein (g per 100g)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={nutritionFilters.minProtein}
                      onChange={(e) => handleNutritionFilterChange('minProtein', Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{nutritionFilters.minProtein}g</span>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Maximum Calories (per 100g)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={nutritionFilters.maxCalories}
                      onChange={(e) => handleNutritionFilterChange('maxCalories', Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{nutritionFilters.maxCalories} kcal</span>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={nutritionFilters.highFiber}
                        onChange={(e) => handleNutritionFilterChange('highFiber', e.target.checked)}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">High Fiber (&gt;5g per 100g)</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={nutritionFilters.organic}
                        onChange={(e) => handleNutritionFilterChange('organic', e.target.checked)}
                        className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Organic Certified</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Sort By
                </label>
                <div className="space-y-2">
                  <select
                    value={filters.sortBy || 'name'}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleFilterChange('sortOrder', 'asc')}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                        filters.sortOrder === 'asc'
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      Ascending
                    </button>
                    <button
                      onClick={() => handleFilterChange('sortOrder', 'desc')}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                        filters.sortOrder === 'desc'
                          ? 'bg-amber-600 text-white border-amber-600'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      Descending
                    </button>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 text-sm text-amber-600 border border-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Filter Content - Always Visible */}
      <div className="hidden lg:block p-4 space-y-6">
        {/* Advanced Search */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Search Products
          </label>
          <AdvancedSearch
            products={products}
            categories={categories}
            onSearch={(query) => handleFilterChange('search', query)}
            onProductSelect={onProductSelect}
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Category
          </label>
          <select
            value={filters.category || 'all'}
            onChange={(e) => handleFilterChange('category', e.target.value === 'all' ? undefined : e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Availability
          </label>
          <select
            value={filters.availability || ''}
            onChange={(e) => handleFilterChange('availability', e.target.value || undefined)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            {availabilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Filter */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.featured || false}
              onChange={(e) => handleFilterChange('featured', e.target.checked || undefined)}
              className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Featured products only</span>
          </label>
        </div>

        {/* Tags Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Popular Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-900/20 dark:border-amber-600 dark:text-amber-400'
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Price Range (USD per kg)
          </label>
          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-2 items-center">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange.max)}
                className="col-span-2 px-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <span className="text-center text-xs text-gray-500 dark:text-gray-400">to</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceRangeChange(priceRange.min, Number(e.target.value))}
                className="col-span-2 px-2 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Nutrition Filters */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Nutritional Preferences
          </label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                Minimum Protein (g per 100g)
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={nutritionFilters.minProtein}
                onChange={(e) => handleNutritionFilterChange('minProtein', Number(e.target.value))}
                className="w-full"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{nutritionFilters.minProtein}g</span>
            </div>

            <div>
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                Maximum Calories (per 100g)
              </label>
              <input
                type="range"
                min="0"
                max="500"
                value={nutritionFilters.maxCalories}
                onChange={(e) => handleNutritionFilterChange('maxCalories', Number(e.target.value))}
                className="w-full"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{nutritionFilters.maxCalories} kcal</span>
            </div>

            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={nutritionFilters.highFiber}
                  onChange={(e) => handleNutritionFilterChange('highFiber', e.target.checked)}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">High Fiber (&gt;5g per 100g)</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={nutritionFilters.organic}
                  onChange={(e) => handleNutritionFilterChange('organic', e.target.checked)}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Organic Certified</span>
              </label>
            </div>
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Sort By
          </label>
          <div className="space-y-2">
            <select
              value={filters.sortBy || 'name'}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <button
                onClick={() => handleFilterChange('sortOrder', 'asc')}
                className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                  filters.sortOrder === 'asc'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Ascending
              </button>
              <button
                onClick={() => handleFilterChange('sortOrder', 'desc')}
                className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                  filters.sortOrder === 'desc'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                Descending
              </button>
            </div>
          </div>
        </div>

        {/* Clear Filters */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 text-sm text-amber-600 dark:text-amber-400 border border-amber-600 dark:border-amber-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
