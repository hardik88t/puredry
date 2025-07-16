import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Dehydrated Vegetables', href: '/products?category=vegetables' },
        { name: 'Dehydrated Fruits', href: '/products?category=fruits' },
        { name: 'Herbs & Spices', href: '/products?category=herbs-spices' },
        { name: 'Custom Blends', href: '/products?category=custom' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Process', href: '/process' },
        { name: 'Quality & Certifications', href: '/quality' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Food Manufacturing', href: '/industries#food-manufacturing' },
        { name: 'Restaurants', href: '/industries#restaurants' },
        { name: 'Retail', href: '/industries#retail' },
        { name: 'Export', href: '/industries#export' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Recipe Ideas', href: '/resources/recipes' },
        { name: 'Storage Guidelines', href: '/resources/storage' },
        { name: 'Nutritional Charts', href: '/resources/nutrition' },
        { name: 'Downloads', href: '/resources/downloads' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Get the latest updates on our products and industry insights</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-amber-400 mb-4">
              PureDry
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Premium dehydrated food products for global markets. Quality assured, farm-fresh ingredients.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} PureDry. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
