'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function IndustriesPage() {
  const industries = [
    {
      id: 'food-manufacturing',
      title: 'Food Manufacturing',
      icon: '🏭',
      description: 'Large-scale food production companies requiring consistent, high-quality dehydrated ingredients for their products.',
      benefits: [
        'Consistent quality and supply',
        'Extended shelf life reduces waste',
        'Cost-effective bulk pricing',
        'Custom specifications available',
        'Reliable delivery schedules'
      ],
      applications: [
        'Instant soups and noodles',
        'Seasoning mixes and blends',
        'Snack food production',
        'Ready-to-eat meals',
        'Sauce and condiment manufacturing'
      ],
      caseStudy: {
        company: 'Global Instant Foods Ltd.',
        challenge: 'Needed consistent supply of dehydrated vegetables for instant noodle production across 15 countries.',
        solution: 'Established dedicated supply chain with quality-matched products and synchronized delivery schedules.',
        result: '99.8% on-time delivery rate and 25% cost reduction over 3 years.'
      }
    },
    {
      id: 'restaurants',
      title: 'Restaurant Chains',
      icon: '🍽️',
      description: 'Restaurant chains and commercial kitchens seeking premium ingredients that maintain flavor and reduce prep time.',
      benefits: [
        'Reduced kitchen prep time',
        'Consistent flavor profiles',
        'Lower storage requirements',
        'Reduced food waste',
        'Year-round availability'
      ],
      applications: [
        'Pizza toppings and garnishes',
        'Soup and stew ingredients',
        'Salad bar components',
        'Sauce and marinade bases',
        'Specialty dish preparations'
      ],
      caseStudy: {
        company: 'Premium Pizza Chain',
        challenge: 'Maintaining consistent vegetable quality across 200+ locations while reducing prep costs.',
        solution: 'Implemented standardized dehydrated vegetable program with portion-controlled packaging.',
        result: '40% reduction in prep time and 15% improvement in food cost margins.'
      }
    },
    {
      id: 'retail',
      title: 'Retail & Distribution',
      icon: '🛒',
      description: 'Retail distributors and specialty food stores offering premium dehydrated products to end consumers.',
      benefits: [
        'Premium packaging options',
        'Extended shelf life',
        'High profit margins',
        'Growing market demand',
        'Brand partnership opportunities'
      ],
      applications: [
        'Gourmet cooking ingredients',
        'Health food store products',
        'Camping and outdoor supplies',
        'Emergency food storage',
        'Specialty ethnic ingredients'
      ],
      caseStudy: {
        company: 'Organic Retail Network',
        challenge: 'Sourcing certified organic dehydrated products for health-conscious consumers.',
        solution: 'Developed exclusive organic product line with premium packaging and marketing support.',
        result: '300% growth in dehydrated product sales within 18 months.'
      }
    },
    {
      id: 'export',
      title: 'Export Markets',
      icon: '🌍',
      description: 'International traders and distributors expanding global reach with quality dehydrated food products.',
      benefits: [
        'International certifications',
        'Competitive export pricing',
        'Flexible packaging solutions',
        'Documentation support',
        'Quality assurance programs'
      ],
      applications: [
        'International food distribution',
        'Private label manufacturing',
        'Bulk ingredient supply',
        'Specialty market penetration',
        'Regional cuisine adaptation'
      ],
      caseStudy: {
        company: 'European Food Importer',
        challenge: 'Meeting EU organic standards while maintaining competitive pricing for specialty ingredients.',
        solution: 'Established certified organic supply chain with full traceability and documentation.',
        result: 'Became leading supplier of organic dehydrated vegetables in 8 European countries.'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              From large-scale food manufacturing to specialty retail, we provide tailored solutions 
              for diverse industries worldwide, ensuring quality and reliability at every scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple sectors, each with unique requirements and challenges. 
              We deliver customized solutions that drive success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {industry.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {industry.applications.slice(0, 3).map((application, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href={`#${industry.id}`}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="text-6xl mb-4">{industry.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {industry.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {industry.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                <ul className="space-y-3">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-amber-600">{industry.caseStudy.company}</h4>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Challenge:</span>
                    <p className="text-gray-600 text-sm mt-1">{industry.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Solution:</span>
                    <p className="text-gray-600 text-sm mt-1">{industry.caseStudy.solution}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Result:</span>
                    <p className="text-green-600 text-sm mt-1 font-medium">{industry.caseStudy.result}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust PureDry for their dehydrated food ingredient needs. 
              Let&apos;s discuss how we can support your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Get Industry Solutions
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
