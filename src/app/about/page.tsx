'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiStar } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in astrological guidance and Vastu consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Astrologer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    T. Bhaskaraiah Sindhanthi
                  </h2>
                  <p className="text-xl text-gray-700 mb-6">
                    Famous Indian Astrologer & Top Vastu Consultant
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Jyotish Ratna
                    </span>
                    <span className="bg-secondary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Jyothisha Praveena
                    </span>
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Jyothisha Vastu
                    </span>
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Vidya Bhaskara
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                A Legacy of Astrological Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Famous Indian Astrologer Thatha Bhaskaraiah is a Qualified Indian Astrologer & 
                top Vastu Consultant who is well known for his astrological readings and remedies. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                He has done intensive research in the fields of Indian astrology, the knowledge of 
                which has helped him serve many of his clients all over the globe. With decades of 
                experience and thousands of satisfied clients, our astrologer has become a trusted 
                name in Vedic astrology and Vastu consultation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His deep understanding of ancient Vedic sciences combined with practical wisdom 
                makes him uniquely qualified to provide accurate predictions and effective remedies 
                for life's challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              Our Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiUsers,
                number: '10,000+',
                label: 'Satisfied Clients',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: FiStar,
                number: '25+',
                label: 'Years of Experience',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: FiAward,
                number: '4',
                label: 'Prestigious Titles',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: FiBookOpen,
                number: '100+',
                label: 'Research Papers',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
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
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive astrological services rooted in ancient Vedic wisdom
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Vedic Astrology',
                description: 'Traditional Indian astrology based on ancient texts and proven methodologies for accurate predictions.'
              },
              {
                title: 'Horoscope Analysis',
                description: 'Detailed birth chart readings covering all aspects of life including career, marriage, health, and finances.'
              },
              {
                title: 'Vastu Shastra',
                description: 'Scientific space planning for homes and businesses to ensure harmony and prosperity.'
              },
              {
                title: 'Muhurtham Selection',
                description: 'Auspicious timing for important life events like marriage, business launches, and property purchases.'
              },
              {
                title: 'Remedial Measures',
                description: 'Effective solutions including mantras, gemstones, yantras, and charitable acts for planetary afflictions.'
              },
              {
                title: 'Compatibility Matching',
                description: 'Comprehensive marriage matching using traditional methods for long-lasting relationships.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              'Decades of experience in Vedic astrology',
              'Thousands of satisfied clients worldwide',
              'Accurate predictions backed by research',
              'Personalized consultations',
              'Effective and practical remedies',
              'Traditional methods combined with modern understanding',
              'Confidential and professional service',
              'On-phone and in-person consultations available'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Get Expert Guidance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your consultation today and experience the transformative power of Vedic astrology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200"
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

