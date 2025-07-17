'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductCategory } from '@/types/product';
import Icon from '@/components/ui/Icon';

interface SearchSuggestion {
  id: string;
  type: 'product' | 'category' | 'tag' | 'application';
  title: string;
  subtitle?: string;
  category?: string;
}

interface AdvancedSearchProps {
  products: Product[];
  categories: ProductCategory[];
  onSearch: (query: string) => void;
  onProductSelect?: (product: Product) => void;
  placeholder?: string;
  className?: string;
}

const AdvancedSearch = ({
  products,
  categories,
  onSearch,
  onProductSelect,
  placeholder = "Search products, categories, or applications...",
  className = ""
}: AdvancedSearchProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate search suggestions
  const suggestions = useMemo(() => {
    if (!query.trim()) {
      // Show recent searches and popular categories when no query
      const recent = recentSearches.slice(0, 3).map((search, index) => ({
        id: `recent-${index}`,
        type: 'tag' as const,
        title: search,
        subtitle: 'Recent search'
      }));

      const popularCategories = categories.filter(cat => cat.featured).map(cat => ({
        id: cat.id,
        type: 'category' as const,
        title: cat.name,
        subtitle: `${cat.productCount} products`
      }));

      return [...recent, ...popularCategories];
    }

    const searchTerm = query.toLowerCase();
    const results: SearchSuggestion[] = [];

    // Product matches
    products.forEach(product => {
      const score = getSearchScore(product, searchTerm);
      if (score > 0) {
        results.push({
          id: product.id,
          type: 'product',
          title: product.name,
          subtitle: product.shortDescription,
          category: product.category
        });
      }
    });

    // Category matches
    categories.forEach(category => {
      if (category.name.toLowerCase().includes(searchTerm) || 
          category.description.toLowerCase().includes(searchTerm)) {
        results.push({
          id: category.id,
          type: 'category',
          title: category.name,
          subtitle: `${category.productCount} products`
        });
      }
    });

    // Tag matches
    const tagMatches = new Set<string>();
    products.forEach(product => {
      product.tags.forEach(tag => {
        if (tag.toLowerCase().includes(searchTerm) && !tagMatches.has(tag)) {
          tagMatches.add(tag);
          results.push({
            id: `tag-${tag}`,
            type: 'tag',
            title: tag,
            subtitle: 'Product tag'
          });
        }
      });
    });

    // Application matches
    const applicationMatches = new Set<string>();
    products.forEach(product => {
      product.applications.forEach(app => {
        if (app.toLowerCase().includes(searchTerm) && !applicationMatches.has(app)) {
          applicationMatches.add(app);
          results.push({
            id: `app-${app}`,
            type: 'application',
            title: app,
            subtitle: 'Application'
          });
        }
      });
    });

    return results.slice(0, 8); // Limit to 8 suggestions
  }, [query, products, categories, recentSearches]);

  // Calculate search relevance score
  const getSearchScore = (product: Product, searchTerm: string): number => {
    let score = 0;
    const term = searchTerm.toLowerCase();

    // Exact name match gets highest score
    if (product.name.toLowerCase() === term) score += 100;
    else if (product.name.toLowerCase().includes(term)) score += 50;

    // Description matches
    if (product.description.toLowerCase().includes(term)) score += 20;
    if (product.shortDescription.toLowerCase().includes(term)) score += 30;

    // Tag matches
    product.tags.forEach(tag => {
      if (tag.toLowerCase().includes(term)) score += 15;
    });

    // Application matches
    product.applications.forEach(app => {
      if (app.toLowerCase().includes(term)) score += 10;
    });

    return score;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < suggestions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && suggestions[selectedIndex]) {
            handleSuggestionSelect(suggestions[selectedIndex]);
          } else if (query.trim()) {
            handleSearch();
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, suggestions, query]);

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('puredry-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent searches:', e);
      }
    }
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;

    // Add to recent searches
    const newRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newRecent);
    localStorage.setItem('puredry-recent-searches', JSON.stringify(newRecent));

    onSearch(query);
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
    if (suggestion.type === 'product') {
      const product = products.find(p => p.id === suggestion.id);
      if (product && onProductSelect) {
        onProductSelect(product);
      }
    } else {
      setQuery(suggestion.title);
      onSearch(suggestion.title);
    }
    
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'product': return 'package';
      case 'category': return 'grid';
      case 'tag': return 'tag';
      case 'application': return 'briefcase';
      default: return 'search';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
        />
        
        <Icon
          name="search"
          size="sm"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Icon name="close" size="sm" />
          </button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      <AnimatePresence>
        {isOpen && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
          >
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={suggestion.id}
                onClick={() => handleSuggestionSelect(suggestion)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                  index === selectedIndex ? 'bg-amber-50 dark:bg-amber-900/20' : ''
                }`}
                whileHover={{ x: 4 }}
              >
                <Icon
                  name={getSuggestionIcon(suggestion.type)}
                  size="sm"
                  className="text-gray-400 mr-3 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
                    {suggestion.title}
                  </div>
                  {suggestion.subtitle && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {suggestion.subtitle}
                    </div>
                  )}
                </div>
                {suggestion.type === 'product' && (
                  <Icon
                    name="arrow-right"
                    size="sm"
                    className="text-gray-400 ml-2 flex-shrink-0"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedSearch;
