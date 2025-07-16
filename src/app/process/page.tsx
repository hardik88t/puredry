'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 'sourcing',
      title: 'Premium Sourcing',
      icon: '🚜',
      description: 'We partner with trusted farmers who follow sustainable farming practices to source the finest raw materials.',
      details: [
        'Direct partnerships with certified farms',
        'Soil quality assessment and monitoring',
        'Seasonal crop planning and selection',
        'Sustainable farming practice verification',
        'Regular farm audits and quality checks'
      ],
      image: '🌾'
    },
    {
      id: 'inspection',
      title: 'Quality Inspection',
      icon: '🔍',
      description: 'Every batch undergoes rigorous quality inspection to ensure only premium produce enters our facility.',
      details: [
        'Visual inspection for defects and quality',
        'Laboratory testing for contaminants',
        'Nutritional content verification',
        'Moisture and ripeness assessment',
        'Grade classification and sorting'
      ],
      image: '🔬'
    },
    {
      id: 'preparation',
      title: 'Preparation & Cleaning',
      icon: '🧽',
      description: 'Raw materials are carefully cleaned and prepared using food-grade processes and equipment.',
      details: [
        'Multi-stage washing and cleaning',
        'Removal of foreign materials',
        'Size grading and sorting',
        'Pre-treatment for optimal dehydration',
        'Sanitization and quality control'
      ],
      image: '💧'
    },
    {
      id: 'dehydration',
      title: 'Advanced Dehydration',
      icon: '⚙️',
      description: 'State-of-the-art dehydration technology removes moisture while preserving nutrients and flavor.',
      details: [
        'Controlled temperature dehydration',
        'Optimal airflow management',
        'Continuous monitoring systems',
        'Nutrient preservation techniques',
        'Energy-efficient processing'
      ],
      image: '🌡️'
    },
    {
      id: 'quality-control',
      title: 'Quality Control',
      icon: '✅',
      description: 'Multiple quality checkpoints ensure consistent product standards and food safety compliance.',
      details: [
        'Moisture content verification',
        'Microbiological testing',
        'Color and texture assessment',
        'Flavor profile evaluation',
        'Packaging integrity checks'
      ],
      image: '📊'
    },
    {
      id: 'packaging',
      title: 'Packaging & Storage',
      icon: '📦',
      description: 'Products are packaged in protective materials and stored in optimal conditions for maximum shelf life.',
      details: [
        'Food-grade packaging materials',
        'Modified atmosphere packaging',
        'Proper labeling and traceability',
        'Climate-controlled storage',
        'Inventory management systems'
      ],
      image: '🏪'
    }
  ];

  const qualityStandards = [
    {
      title: 'ISO 22000',
      description: 'Food Safety Management System certification ensuring the highest safety standards.',
      icon: '🏆'
    },
    {
      title: 'HACCP',
      description: 'Hazard Analysis Critical Control Points system for food safety risk management.',
      icon: '🛡️'
    },
    {
      title: 'FDA Approved',
      description: 'Facilities and processes approved by the Food and Drug Administration.',
      icon: '✅'
    },
    {
      title: 'Organic Certified',
      description: 'Certified organic processing for organic product lines.',
      icon: '🌱'
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
              Our Process
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              From farm to package, discover how we transform fresh produce into premium dehydrated products 
              while maintaining the highest quality and safety standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
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
              Farm-to-Package Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product follows our meticulously designed 6-step process to ensure consistent quality and safety
            </p>
          </motion.div>

          {/* Process Steps Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-sm font-medium">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{processSteps[activeStep].icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {processSteps[activeStep].title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
                <ul className="space-y-2">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">{processSteps[activeStep].image}</div>
                <div className="text-sm text-gray-600">
                  Step {activeStep + 1} of {processSteps.length}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by international certifications and rigorous standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                <p className="text-gray-600 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment */}
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
                Advanced Technology
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art facility is equipped with the latest dehydration technology, 
                ensuring optimal processing conditions and consistent product quality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🌡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Temperature Control</h4>
                    <p className="text-gray-600 text-sm">Precise temperature management for optimal dehydration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">💨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Airflow Systems</h4>
                    <p className="text-gray-600 text-sm">Advanced airflow technology for uniform drying</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Monitoring</h4>
                    <p className="text-gray-600 text-sm">Continuous monitoring and quality control systems</p>
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
                ⚙️
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Experience Our Quality Process
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to see how our meticulous process can benefit your business? 
              Contact us for samples or schedule a facility tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Request Samples
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Schedule Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
