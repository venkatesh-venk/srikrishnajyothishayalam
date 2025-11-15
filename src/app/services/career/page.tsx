'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBriefcase, FiArrowLeft, FiCheck } from 'react-icons/fi';

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
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
              <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl text-white">
                <FiBriefcase size={48} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
                Career & Job Guidance
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
              This detailed report will consist of in-depth astrological analysis and remedial 
              suggestions for every aspect of your business or job. This report would prove to be 
              a detailed guide of your career for the year ahead.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Let ancient astrological wisdom help you flourish your career. Whether you're seeking 
              job opportunities, planning a career change, starting a business, or looking for 
              promotion timing, our comprehensive career analysis provides the insights you need.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Consultation Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Career Direction & Path',
                  'Job vs Business Decision',
                  'Best Career Fields',
                  'Job Change Timing',
                  'Promotion Prospects',
                  'Foreign Job Opportunities',
                  'Business Success Analysis',
                  'Partnership Business',
                  'Government Job Prospects',
                  'Private Sector Opportunities',
                  'Self-Employment Viability',
                  'Career Obstacles & Solutions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheck className="text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Astrological Career Indicators</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-orange-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  10th House - Career & Profession
                </h3>
                <p className="text-gray-700">
                  The most important house for career. Its lord, planets placed in it, and aspects 
                  to it determine your professional life, career success, and public recognition.
                </p>
              </div>

              <div className="bg-white border-l-4 border-amber-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  6th House - Service & Competition
                </h3>
                <p className="text-gray-700">
                  Represents service, daily work, colleagues, and ability to overcome competition. 
                  Strong 6th house indicates success in competitive fields and service sectors.
                </p>
              </div>

              <div className="bg-white border-l-4 border-orange-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Saturn - Career Significator
                </h3>
                <p className="text-gray-700">
                  Saturn is the karaka (significator) of career. Its placement, strength, and 
                  aspects significantly influence your professional life and career stability.
                </p>
              </div>

              <div className="bg-white border-l-4 border-amber-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sun & Mars - Authority & Leadership
                </h3>
                <p className="text-gray-700">
                  Sun represents authority and government positions, while Mars indicates technical 
                  fields, engineering, and leadership abilities in your career.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Fields Based on Planets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Sun</h4>
                <p className="text-gray-600 text-sm">Government, Politics, Administration, Medicine</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Moon</h4>
                <p className="text-gray-600 text-sm">Hospitality, Healthcare, Psychology, Public Relations</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Mars</h4>
                <p className="text-gray-600 text-sm">Engineering, Military, Sports, Real Estate, Surgery</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Mercury</h4>
                <p className="text-gray-600 text-sm">Business, Communication, Writing, Accounting, IT</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Jupiter</h4>
                <p className="text-gray-600 text-sm">Teaching, Law, Finance, Religious Work, Counseling</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Venus</h4>
                <p className="text-gray-600 text-sm">Arts, Entertainment, Fashion, Luxury, Hospitality</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Saturn</h4>
                <p className="text-gray-600 text-sm">Labor, Mining, Construction, Agriculture, Research</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Rahu</h4>
                <p className="text-gray-600 text-sm">Technology, Aviation, Foreign Trade, Innovation</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Career Report Includes</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Comprehensive Career Analysis:</strong> Detailed examination of 10th house, 
                  career planets, and professional prospects
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Best Career Fields:</strong> Identification of suitable career paths based 
                  on planetary positions and strengths
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Favorable Time Periods:</strong> Predictions for job changes, promotions, 
                  business start-ups, and career advancement
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Obstacle Analysis:</strong> Identification of career obstacles and 
                  challenges with effective remedial solutions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Yearly Predictions:</strong> Detailed career forecast for the year ahead 
                  with month-wise guidance
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Remedial Measures:</strong> Specific remedies including mantras, gemstones, 
                  and rituals for career success
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get comprehensive career guidance and astrological insights today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200"
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

