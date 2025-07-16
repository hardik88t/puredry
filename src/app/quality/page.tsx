'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function QualityPage() {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      title: 'ISO 22000:2018',
      description: 'Food Safety Management System',
      details: 'Comprehensive food safety management system covering the entire food chain from farm to fork.',
      icon: '🏆',
      validUntil: '2025',
      certifyingBody: 'SGS International'
    },
    {
      title: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      details: 'Systematic preventive approach to food safety addressing physical, chemical, and biological hazards.',
      icon: '🛡️',
      validUntil: '2024',
      certifyingBody: 'Bureau Veritas'
    },
    {
      title: 'FDA Registration',
      description: 'US Food and Drug Administration',
      details: 'Registered facility with FDA for food manufacturing and processing operations.',
      icon: '🇺🇸',
      validUntil: '2024',
      certifyingBody: 'FDA'
    },
    {
      title: 'EU Organic',
      description: 'European Union Organic Certification',
      details: 'Certified for organic food processing according to EU regulations.',
      icon: '🌱',
      validUntil: '2025',
      certifyingBody: 'Control Union'
    },
    {
      title: 'USDA Organic',
      description: 'United States Department of Agriculture',
      details: 'Certified organic processor for US market compliance.',
      icon: '🌿',
      validUntil: '2024',
      certifyingBody: 'CCOF'
    },
    {
      title: 'Kosher Certified',
      description: 'Orthodox Union Kosher',
      details: 'Kosher certification for products meeting Jewish dietary laws.',
      icon: '✡️',
      validUntil: '2024',
      certifyingBody: 'Orthodox Union'
    }
  ];

  const qualityTests = [
    {
      category: 'Physical Tests',
      tests: [
        'Moisture Content Analysis',
        'Color Measurement',
        'Texture Analysis',
        'Size Distribution',
        'Foreign Matter Detection'
      ]
    },
    {
      category: 'Chemical Tests',
      tests: [
        'Pesticide Residue Analysis',
        'Heavy Metals Testing',
        'Nutritional Analysis',
        'pH Level Testing',
        'Preservative Content'
      ]
    },
    {
      category: 'Microbiological Tests',
      tests: [
        'Total Plate Count',
        'Pathogen Detection',
        'Yeast & Mold Count',
        'E. coli Testing',
        'Salmonella Testing'
      ]
    },
    {
      category: 'Sensory Tests',
      tests: [
        'Flavor Profile Analysis',
        'Aroma Evaluation',
        'Visual Inspection',
        'Texture Assessment',
        'Overall Quality Rating'
      ]
    }
  ];

  const storageGuidelines = [
    {
      title: 'Temperature Control',
      description: 'Store in cool, dry conditions between 15-25°C (59-77°F)',
      icon: '🌡️'
    },
    {
      title: 'Humidity Management',
      description: 'Maintain relative humidity below 60% to prevent moisture absorption',
      icon: '💧'
    },
    {
      title: 'Light Protection',
      description: 'Keep away from direct sunlight and UV exposure',
      icon: '☀️'
    },
    {
      title: 'Pest Control',
      description: 'Implement integrated pest management systems',
      icon: '🐛'
    },
    {
      title: 'Air Quality',
      description: 'Ensure proper ventilation and air filtration',
      icon: '💨'
    },
    {
      title: 'Packaging Integrity',
      description: 'Regular inspection of packaging for damage or contamination',
      icon: '📦'
    }
  ];

  const tabs = [
    { id: 'certifications', label: 'Certifications' },
    { id: 'testing', label: 'Quality Testing' },
    { id: 'storage', label: 'Storage Guidelines' }
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
              Quality & Certifications
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Our unwavering commitment to quality is demonstrated through rigorous testing, 
              international certifications, and adherence to the highest food safety standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Quality Promise
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At PureDry, quality isn&apos;t just a goal—it&apos;s our foundation. Every product that leaves our facility
                has undergone rigorous testing and quality control measures to ensure it meets the highest 
                international standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">100% Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm">Every batch tested and certified before shipment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Testing</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art laboratory facilities</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Traceability</h4>
                    <p className="text-gray-600 text-sm">Complete supply chain transparency</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-8xl">
                🏆
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'certifications' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    International Certifications
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our certifications demonstrate our commitment to food safety, quality, and regulatory compliance
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-4xl mb-4 text-center">{cert.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                        {cert.title}
                      </h3>
                      <p className="text-amber-600 font-medium text-center mb-4">
                        {cert.description}
                      </p>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {cert.details}
                      </p>
                      <div className="border-t pt-4 text-sm text-gray-500">
                        <div className="flex justify-between mb-1">
                          <span>Valid Until:</span>
                          <span className="font-medium">{cert.validUntil}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Certified By:</span>
                          <span className="font-medium">{cert.certifyingBody}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testing' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Comprehensive Quality Testing
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Every product undergoes extensive testing to ensure safety, quality, and consistency
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {qualityTests.map((category, index) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg p-6"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                        {category.category}
                      </h3>
                      <ul className="space-y-2">
                        {category.tests.map((test, testIndex) => (
                          <li key={testIndex} className="flex items-center text-sm text-gray-600">
                            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                            {test}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Testing Frequency
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-amber-600 mb-2">Every Batch</div>
                      <div className="text-gray-600">Physical & Chemical Tests</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-600 mb-2">Daily</div>
                      <div className="text-gray-600">Microbiological Testing</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-600 mb-2">Weekly</div>
                      <div className="text-gray-600">Comprehensive Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'storage' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Storage Guidelines
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Proper storage is essential for maintaining product quality and extending shelf life
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {storageGuidelines.map((guideline, index) => (
                    <motion.div
                      key={guideline.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg p-6 text-center"
                    >
                      <div className="text-4xl mb-4">{guideline.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {guideline.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {guideline.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Storage Consultation?
                  </h3>
                  <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                    Our experts can provide detailed storage recommendations for your specific products and conditions.
                  </p>
                  <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Our Experts
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
