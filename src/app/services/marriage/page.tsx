'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowLeft, FiCheck } from 'react-icons/fi';

export default function MarriagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
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
              <div className="p-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl text-white">
                <FiHeart size={48} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
                Marriage and Love Analysis
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
              It is said that marriages are made in heaven. But are you sure that the one you want to 
              spend your life with or already spending your life with is the special one made for you?
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              It is in your hands to find out whether he or she is the one destined for you - whether 
              you are choosing Mr. Right or Ms. Right for yourself or not. If you choose the right partner, 
              life seems to be a cakewalk. But if your selection is wrong, it can even shatter the charm 
              and the zest of life.
            </p>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Analyze</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Birth Chart Compatibility',
                  'Guna Milan (Ashtakuta)',
                  'Manglik Dosha Analysis',
                  'Nadi Dosha Check',
                  'Planetary Positions',
                  'Dasha Compatibility',
                  'Love vs Arranged Marriage',
                  'Marriage Timing',
                  'Partner Characteristics',
                  'Relationship Longevity',
                  'Children & Family Life',
                  'Remedial Measures'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheck className="text-pink-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through detailed astrological analysis of both partners&apos; birth charts, we provide 
              comprehensive insights into:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-pink-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Compatibility Score:</strong> Detailed matching of horoscopes based on 
                  traditional Vedic astrology methods
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-pink-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Strengths & Challenges:</strong> Identify areas of harmony and potential 
                  conflicts in the relationship
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-pink-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Remedial Solutions:</strong> Specific remedies to strengthen the relationship 
                  and overcome obstacles
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-pink-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Marriage Timing:</strong> Auspicious dates and times (Muhurtham) for 
                  wedding ceremonies
                </span>
              </li>
            </ul>

            <div className="bg-white border-l-4 border-pink-600 p-6 my-8 shadow-md rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Choose Our Service?</h3>
              <p className="text-gray-700 leading-relaxed">
                With decades of experience in Vedic astrology and thousands of successful marriage 
                consultations, we provide accurate and practical guidance that helps you make one of 
                life&apos;s most important decisions with confidence and clarity.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get a detailed marriage compatibility analysis today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transform hover:scale-105 transition-all duration-200"
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

