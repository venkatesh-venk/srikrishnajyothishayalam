'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiArrowLeft, FiCheck } from 'react-icons/fi';

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <FiArrowLeft className="mr-2" />
            Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white">
                <FiTrendingUp size={48} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
                Finance & Wealth
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Divine astrological wisdom gives you the opportunity to pinpoint and analyze the cause 
              of financial problems, and it also suggests remedial measures required to be taken in 
              order to get out of hot waters.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Astrology is the science that not only advises the amelioration of financial ailments, 
              but also provides guidance for wealth accumulation, investment timing, and financial 
              planning for a prosperous future.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Analysis Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Wealth Accumulation Potential',
                  'Income Sources Analysis',
                  'Investment Opportunities',
                  'Property & Assets',
                  'Business Profitability',
                  'Debt Management',
                  'Financial Crisis Solutions',
                  'Inheritance Prospects',
                  'Stock Market Timing',
                  'Partnership Finance',
                  'Loan Approval Timing',
                  'Savings & Growth'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheck className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Financial Houses in Astrology</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-green-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2nd House - Wealth & Assets
                </h3>
                <p className="text-gray-700">
                  Represents accumulated wealth, savings, family assets, and financial resources. 
                  Strong 2nd house indicates good wealth accumulation capacity.
                </p>
              </div>

              <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  11th House - Gains & Income
                </h3>
                <p className="text-gray-700">
                  Governs all types of gains, profits, income sources, and financial growth. 
                  Analysis helps determine income potential and best income sources.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  9th House - Fortune & Prosperity
                </h3>
                <p className="text-gray-700">
                  Represents luck, fortune, and prosperity. Strong 9th house brings unexpected 
                  financial gains and divine blessings.
                </p>
              </div>

              <div className="bg-white border-l-4 border-emerald-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Jupiter & Venus - Wealth Significators
                </h3>
                <p className="text-gray-700">
                  Jupiter represents expansion and prosperity, while Venus governs luxury and 
                  material comforts. Their placement is crucial for financial success.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Financial Consultation Includes</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Wealth Potential Analysis:</strong> Comprehensive evaluation of your 
                  financial prospects based on planetary positions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Best Investment Periods:</strong> Identification of favorable times for 
                  investments, property purchase, and business ventures
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Debt Solutions:</strong> Astrological remedies to overcome debt, 
                  financial losses, and monetary obstacles
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Income Enhancement:</strong> Strategies and remedies to improve income 
                  sources and financial stability
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Remedial Measures:</strong> Specific mantras, yantras, gemstones, and 
                  charitable acts to improve financial situation
                </span>
              </li>
            </ul>

            <div className="bg-white border border-green-200 rounded-2xl p-6 my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why Financial Astrology Works
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Financial astrology has been used for centuries to predict market trends, identify 
                profitable periods, and understand wealth patterns. Our experienced astrologers 
                combine traditional Vedic wisdom with practical financial understanding to provide 
                actionable insights that can transform your financial situation.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Improve Your Finances?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get expert astrological guidance for financial prosperity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
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

