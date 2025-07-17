'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import ThemeToggle from '@/components/ui/ThemeToggle';
import CartIcon from '@/components/ui/CartIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Industries', href: '/industries' },
    { name: 'Quality', href: '/quality' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-amber-600 dark:text-amber-400"
            >
              PureDry
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    isActive
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button, Cart, and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <CartIcon />
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile cart, theme toggle and menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <CartIcon />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon
                name={isMenuOpen ? 'close' : 'menu'}
                size="md"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="block w-full text-center bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
