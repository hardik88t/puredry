'use client';

import { useState, useMemo, useCallback } from 'react';
import { Product, ProductFilter } from '@/types/product';

interface UseSearchOptions {
  products: Product[];
  initialFilters?: ProductFilter;
}

interface SearchResult {
  products: Product[];
  totalCount: number;
  hasMore: boolean;
}

export const useSearch = ({ products, initialFilters = {} }: UseSearchOptions) => {
  const [filters, setFilters] = useState<ProductFilter>({
    sortBy: 'name',
    sortOrder: 'asc',
    ...initialFilters
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Text search
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(product => {
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.shortDescription.toLowerCase().includes(searchTerm) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          product.applications.some(app => app.toLowerCase().includes(searchTerm)) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.specifications.origin.toLowerCase().includes(searchTerm)
        );
      });
    }

    // Category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    // Availability filter
    if (filters.availability) {
      result = result.filter(product => product.availability === filters.availability);
    }

    // Featured filter
    if (filters.featured) {
      result = result.filter(product => product.featured);
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      result = result.filter(product =>
        filters.tags!.some(tag => product.tags.includes(tag))
      );
    }

    // Sort products
    result.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'price':
          // For price sorting, we'll use a simple heuristic based on price range
          const getPriceValue = (product: Product) => {
            if (product.price.value) return product.price.value;
            if (product.price.priceRange) {
              const match = product.price.priceRange.match(/\$(\d+\.?\d*)/);
              return match ? parseFloat(match[1]) : 0;
            }
            return 0;
          };
          comparison = getPriceValue(a) - getPriceValue(b);
          break;
        case 'popularity':
          // Use featured status and then alphabetical as popularity heuristic
          if (a.featured && !b.featured) comparison = -1;
          else if (!a.featured && b.featured) comparison = 1;
          else comparison = a.name.localeCompare(b.name);
          break;
        case 'newest':
          // For now, use reverse alphabetical as newest heuristic
          comparison = b.name.localeCompare(a.name);
          break;
        default:
          comparison = a.name.localeCompare(b.name);
      }

      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });

    return result;
  }, [products, filters]);

  // Paginated results
  const paginatedResult = useMemo((): SearchResult => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      totalCount: filteredProducts.length,
      hasMore: endIndex < filteredProducts.length
    };
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Update filters
  const updateFilters = useCallback((newFilters: Partial<ProductFilter>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset to first page when filters change
  }, []);

  // Clear filters
  const clearFilters = useCallback(() => {
    setFilters({
      sortBy: 'name',
      sortOrder: 'asc'
    });
    setCurrentPage(1);
  }, []);

  // Search by query
  const search = useCallback((query: string) => {
    updateFilters({ search: query });
  }, [updateFilters]);

  // Load more results (for infinite scroll)
  const loadMore = useCallback(() => {
    if (paginatedResult.hasMore) {
      setCurrentPage(prev => prev + 1);
    }
  }, [paginatedResult.hasMore]);

  // Go to specific page
  const goToPage = useCallback((page: number) => {
    const maxPage = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
    }
  }, [filteredProducts.length, itemsPerPage]);

  // Get search suggestions
  const getSearchSuggestions = useCallback((query: string, limit = 5) => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    const suggestions = new Set<string>();

    // Add product names that match
    products.forEach(product => {
      if (product.name.toLowerCase().includes(searchTerm)) {
        suggestions.add(product.name);
      }
    });

    // Add tags that match
    products.forEach(product => {
      product.tags.forEach(tag => {
        if (tag.toLowerCase().includes(searchTerm)) {
          suggestions.add(tag);
        }
      });
    });

    // Add applications that match
    products.forEach(product => {
      product.applications.forEach(app => {
        if (app.toLowerCase().includes(searchTerm)) {
          suggestions.add(app);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }, [products]);

  return {
    // Results
    result: paginatedResult,
    allFilteredProducts: filteredProducts,
    
    // State
    filters,
    currentPage,
    itemsPerPage,
    totalPages: Math.ceil(filteredProducts.length / itemsPerPage),
    
    // Actions
    updateFilters,
    clearFilters,
    search,
    loadMore,
    goToPage,
    getSearchSuggestions,
    
    // Computed values
    isEmpty: filteredProducts.length === 0,
    isFiltered: Object.keys(filters).some(key => 
      key !== 'sortBy' && key !== 'sortOrder' && filters[key as keyof ProductFilter]
    )
  };
};
