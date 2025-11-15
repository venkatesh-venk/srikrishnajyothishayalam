'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBook, FiArrowLeft, FiCheck } from 'react-icons/fi';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
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
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl text-white">
                <FiBook size={48} />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900">
                Education Guidance
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
              Divine wisdom of astrology can prove to be of much help when it comes to queries related 
              to education. Our astute and experienced astrologers can provide valuable insights into 
              your educational journey.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 my-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Can Help With</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Stream Selection (Science/Commerce/Arts)',
                  'Career Path Guidance',
                  'Competitive Exam Success',
                  'Study Abroad Opportunities',
                  'Higher Education Timing',
                  'Concentration Issues',
                  'Academic Performance',
                  'Course Selection',
                  'Professional Courses',
                  'Research & Ph.D.',
                  'Memory Enhancement',
                  'Exam Anxiety Solutions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheck className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Questions We Answer</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Will I be able to pursue higher education?
                </h3>
                <p className="text-gray-700">
                  Through analysis of your 4th house (education), 5th house (intelligence), and 
                  Jupiter&apos;s position, we determine your educational prospects and best timing.
                </p>
              </div>

              <div className="bg-white border-l-4 border-indigo-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Which stream should I choose?
                </h3>
                <p className="text-gray-700">
                  Based on planetary positions and your natural inclinations shown in the birth chart, 
                  we guide you towards the most suitable educational stream.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Can I clear competitive exams?
                </h3>
                <p className="text-gray-700">
                  We analyze the strength of Mercury (communication), Jupiter (wisdom), and relevant 
                  planetary periods to predict exam success and provide remedies for enhancement.
                </p>
              </div>

              <div className="bg-white border-l-4 border-indigo-600 p-6 shadow-md rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Why am I facing academic difficulties?
                </h3>
                <p className="text-gray-700">
                  We identify astrological obstacles affecting your studies and provide specific 
                  remedies to overcome concentration issues, memory problems, and other challenges.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Educational Analysis Includes</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Planetary Analysis:</strong> Examination of Mercury, Jupiter, and 4th/5th 
                  house lords for educational prospects
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Best Study Periods:</strong> Identification of favorable Dashas and 
                  transits for examinations and admissions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Career Alignment:</strong> Ensuring your educational choices align with 
                  your destined career path
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Remedial Measures:</strong> Specific mantras, gemstones, and rituals to 
                  enhance academic performance
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
            className="mt-12 text-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Need Educational Guidance?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized astrological insights for academic success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
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

