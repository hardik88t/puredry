'use client';

import { motion } from 'framer-motion';

const ValuePropositions = () => {
  const values = [
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Rigorous quality control ensures every product meets international food safety standards.',
      features: ['ISO 22000 Certified', 'HACCP Compliant', 'Regular Lab Testing']
    },
    {
      icon: '🌱',
      title: 'Farm Fresh',
      description: 'Direct sourcing from trusted farmers ensures the freshest ingredients for dehydration.',
      features: ['Direct Farm Sourcing', 'Seasonal Selection', 'Traceability']
    },
    {
      icon: '🚚',
      title: 'Global Delivery',
      description: 'Reliable supply chain with timely delivery to over 50 countries worldwide.',
      features: ['50+ Countries', 'Timely Delivery', 'Bulk Orders']
    },
    {
      icon: '🔬',
      title: 'Advanced Processing',
      description: 'State-of-the-art dehydration technology preserves nutrients and natural flavors.',
      features: ['Modern Equipment', 'Nutrient Preservation', 'Flavor Retention']
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
            Why Choose PureDry?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine traditional expertise with modern technology to deliver the finest dehydrated food products 
            that meet the highest quality standards.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
              
              <ul className="space-y-2">
                {value.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust PureDry for their dehydrated food needs. 
              Get a custom quote for your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Request Sample
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200">
                Download Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositions;
