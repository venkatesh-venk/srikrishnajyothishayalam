'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHeart, FiBook, FiTrendingUp, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const services = [
  {
    icon: FiHeart,
    title: 'Marriage and Love Analysis',
    description: 'Discover if you have chosen the right partner through detailed astrological compatibility analysis. Find out if Mr. Right or Ms. Right is destined for you.',
    link: '/services/marriage',
    color: 'from-pink-500 to-rose-500',
    features: ['Birth Chart Matching', 'Love Compatibility', 'Marriage Timing', 'Relationship Guidance']
  },
  {
    icon: FiBook,
    title: 'Education',
    description: 'Divine wisdom of astrology for educational queries. Get guidance on competitive exams, stream selection, and academic excellence.',
    link: '/services/education',
    color: 'from-blue-500 to-indigo-500',
    features: ['Stream Selection', 'Exam Success Timing', 'Study Problems Solutions', 'Career in Education']
  },
  {
    icon: FiTrendingUp,
    title: 'Finance',
    description: 'Analyze causes of financial problems and get remedial measures to improve your financial situation and achieve prosperity.',
    link: '/services/finance',
    color: 'from-green-500 to-emerald-500',
    features: ['Wealth Analysis', 'Investment Timing', 'Debt Solutions', 'Financial Planning']
  },
  {
    icon: FiBriefcase,
    title: 'Career / Job',
    description: 'In-depth astrological analysis for business or job. Comprehensive career guidance to help you flourish professionally.',
    link: '/services/career',
    color: 'from-orange-500 to-amber-500',
    features: ['Career Direction', 'Job Changes', 'Business Success', 'Promotion Timing']
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
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
              Our <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive astrological guidance for all aspects of your life journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={service.link}>
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-8">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon size={40} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <span className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More <FiArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete astrological solutions under one roof
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Personal Horoscope Casting',
              'Muhurtham (Auspicious Timing)',
              'On-Phone Consultation',
              'Birth Chart Matching',
              'Vastu Consultation',
              'Remedies & Solutions',
              'Gemstone Recommendation',
              'Puja & Rituals Guidance',
              'Astrology Training Classes'
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
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
              Need Expert Guidance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your consultation today and get personalized astrological insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Book Consultation
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

