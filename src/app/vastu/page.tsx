'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiCheck, FiCompass, FiMapPin } from 'react-icons/fi';

export default function VastuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white">
                <FiHome size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Vastu <span className="text-green-600">Shastra</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ancient Science of Architecture for Harmony, Prosperity, and Well-being
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                About Vastu Shastra
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sri Krishna Sai Jyothishalayam undertakes personal field surveys to determine the 
                Vastu-compatibility of your plots, flats, and structures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vastu reports are professionally prepared on the same lines as our birth charts, 
                with computerized mapping, point-wise description, suggestions, cautions as also 
                non-Vastu-related construction generalia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Vastu Shastra is an ancient Indian science of architecture and space planning that 
                ensures harmony between nature and built environments, promoting health, wealth, 
                and happiness for occupants.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FiCompass className="mr-3 text-green-600" size={28} />
                  Five Elements (Pancha Bhootas)
                </h3>
                <div className="space-y-4">
                  {[
                    { element: 'Earth (Prithvi)', description: 'Stability and grounding energy' },
                    { element: 'Water (Jal)', description: 'Flow and prosperity' },
                    { element: 'Fire (Agni)', description: 'Energy and transformation' },
                    { element: 'Air (Vayu)', description: 'Movement and communication' },
                    { element: 'Space (Akash)', description: 'Expansion and possibilities' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-semibold text-gray-900">{item.element}:</span>
                        <span className="text-gray-600"> {item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Vastu Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Vastu',
                description: 'Complete analysis of homes, apartments, and villas for optimal living conditions and family harmony.',
                icon: FiHome
              },
              {
                title: 'Commercial Vastu',
                description: 'Office, shop, and business space evaluation to enhance productivity and profitability.',
                icon: FiMapPin
              },
              {
                title: 'Plot Selection',
                description: 'Guidance on choosing the right plot based on direction, shape, slope, and surroundings.',
                icon: FiCompass
              },
              {
                title: 'Construction Timing',
                description: 'Muhurtham (auspicious time) for groundbreaking, foundation, and housewarming ceremonies.',
                icon: FiCheck
              },
              {
                title: 'Interior Design',
                description: 'Room placement, furniture arrangement, and color recommendations as per Vastu principles.',
                icon: FiHome
              },
              {
                title: 'Vastu Corrections',
                description: 'Remedies for existing Vastu defects without major demolition or reconstruction.',
                icon: FiCompass
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-green-100 text-green-600 mb-4">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Directional Significance
            </h2>
            <p className="text-xl text-gray-600">
              Each direction has specific ruling deities and influences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { direction: 'North (Kuber)', influence: 'Wealth & Prosperity', color: 'blue' },
              { direction: 'South (Yama)', influence: 'Stability & Strength', color: 'red' },
              { direction: 'East (Indra)', influence: 'Health & Growth', color: 'yellow' },
              { direction: 'West (Varuna)', influence: 'Profits & Gains', color: 'gray' },
              { direction: 'North-East (Ishanya)', influence: 'Spirituality & Wisdom', color: 'purple' },
              { direction: 'South-East (Agni)', influence: 'Energy & Fire', color: 'orange' },
              { direction: 'South-West (Nairitya)', influence: 'Relationships & Support', color: 'pink' },
              { direction: 'North-West (Vayu)', influence: 'Movement & Change', color: 'green' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className={`bg-${item.color}-50 border-2 border-${item.color}-200 rounded-xl p-6 text-center`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.direction}</h3>
                <p className="text-sm text-gray-700">{item.influence}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Benefits of Vastu Compliance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Enhanced health and well-being',
              'Improved financial prosperity',
              'Harmonious family relationships',
              'Career growth and success',
              'Mental peace and clarity',
              'Better sleep and rest',
              'Increased positive energy',
              'Protection from negative influences',
              'Academic excellence for children',
              'Business growth and profits',
              'Spiritual development',
              'Overall life satisfaction'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-md"
              >
                <FiCheck className="text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-800">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Features */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-green-200 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Vastu Report Includes
            </h2>
            <div className="space-y-4">
              {[
                'Computerized plot/floor plan mapping',
                'Directional analysis and compass readings',
                'Point-wise Vastu compliance assessment',
                'Identification of Vastu defects',
                'Room-wise recommendations',
                'Color and material suggestions',
                'Furniture placement guidance',
                'Remedial measures (without major changes)',
                'Construction dos and don\'ts',
                'Auspicious dates for activities',
                'Personalized consultation',
                'Follow-up support'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FiCheck className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get expert Vastu consultation for your home or business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Request Vastu Survey
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
              >
                Call: +91 9966012402
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

