'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProcessOverview = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Farm Selection',
      description: 'We carefully select premium farms with the best soil conditions and farming practices.',
      icon: '🚜',
      details: ['Quality soil assessment', 'Farmer partnerships', 'Seasonal planning']
    },
    {
      step: '02',
      title: 'Fresh Harvesting',
      description: 'Crops are harvested at peak ripeness to ensure maximum nutritional value and flavor.',
      icon: '🌾',
      details: ['Optimal timing', 'Gentle handling', 'Quick processing']
    },
    {
      step: '03',
      title: 'Quality Inspection',
      description: 'Rigorous quality checks ensure only the finest produce enters our processing facility.',
      icon: '🔍',
      details: ['Visual inspection', 'Lab testing', 'Grade classification']
    },
    {
      step: '04',
      title: 'Advanced Dehydration',
      description: 'State-of-the-art dehydration technology preserves nutrients while removing moisture.',
      icon: '⚙️',
      details: ['Controlled temperature', 'Optimal airflow', 'Nutrient retention']
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Multiple quality checkpoints ensure consistent product standards and safety.',
      icon: '✅',
      details: ['Moisture testing', 'Contamination checks', 'Standard compliance']
    },
    {
      step: '06',
      title: 'Packaging & Delivery',
      description: 'Products are carefully packaged and delivered fresh to customers worldwide.',
      icon: '📦',
      details: ['Protective packaging', 'Global shipping', 'Timely delivery']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Farm-to-Package Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From carefully selected farms to your doorstep, every step is designed to preserve 
            the natural goodness and quality of our dehydrated products.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`text-center ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center lg:justify-start text-sm text-gray-700">
                          {index % 2 === 0 ? (
                            <>
                              <span className="lg:order-2">{detail}</span>
                              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 lg:ml-2 lg:mr-0 lg:order-1"></span>
                            </>
                          ) : (
                            <>
                              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                              <span>{detail}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to Learn More About Our Process?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover the detailed steps we take to ensure every product meets our high standards. 
              Visit our facility virtually or schedule a tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/process"
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
              >
                Detailed Process
              </Link>
              <Link
                href="/quality"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Quality Standards
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessOverview;
