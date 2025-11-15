'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiHeart, 
  FiBook, 
  FiTrendingUp, 
  FiBriefcase, 
  FiHome, 
  FiStar,
  FiPhone,
  FiArrowRight 
} from 'react-icons/fi';

const services = [
  {
    icon: FiHeart,
    title: 'Marriage and Love Analysis',
    description: 'Discover if you have chosen the right partner. Find out if Mr. Right or Ms. Right is destined for you through detailed astrological analysis.',
    link: '/services/marriage',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: FiBook,
    title: 'Education',
    description: 'Get guidance on educational pursuits, competitive exams, stream selection, and solutions to academic challenges through divine astrological wisdom.',
    link: '/services/education',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: FiTrendingUp,
    title: 'Finance',
    description: 'Pinpoint and analyze the causes of financial problems with remedial measures to improve your financial situation and prosperity.',
    link: '/services/finance',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FiBriefcase,
    title: 'Career / Job',
    description: 'In-depth astrological analysis for business or job prospects. Get comprehensive career guidance to flourish in your professional life.',
    link: '/services/career',
    color: 'from-orange-500 to-amber-500'
  },
];

const allServices = [
  'Casting Personal Horoscopes',
  'Setting Muhoorthams',
  'On-Phone Consultation',
  'Matching Birth Charts for Marriage',
  'Vastu Consultation',
  'Remedies & Solutions',
  'Astrology Training'
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                Welcome to <span className="text-primary-600">Sri Krishna Sai</span><br />
                <span className="text-secondary-600">Jyothishalayam</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Expert Vedic Astrology & Vastu Consultation Services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <FiArrowRight />
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 flex items-center justify-center space-x-2 text-gray-600"
            >
              <FiStar className="text-yellow-500" />
              <FiStar className="text-yellow-500" />
              <FiStar className="text-yellow-500" />
              <FiStar className="text-yellow-500" />
              <FiStar className="text-yellow-500" />
              <span className="ml-2 text-sm">Trusted by thousands of clients worldwide</span>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive astrological guidance for all aspects of life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <service.icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
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

      {/* All Services List */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Complete Service Portfolio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {allServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vastu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <FiHome className="text-primary-600" size={40} />
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                  Vastu Shastra
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Sri Krishna Sai Jyothishalayam undertakes personal field surveys to determine 
                the Vastu-compatibility of your plots, flats, and structures.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Vastu reports are professionally prepared with computerized mapping, 
                point-wise descriptions, suggestions, cautions, and construction guidelines.
              </p>
              <Link
                href="/vastu"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200"
              >
                <span>Explore Vastu Services</span>
                <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Vastu Services Include:</h3>
                <ul className="space-y-4">
                  {[
                    'Residential Vastu Analysis',
                    'Commercial Space Evaluation',
                    'Plot Selection Guidance',
                    'Construction Timeline (Muhoortham)',
                    'Vastu Defect Remedies',
                    'Interior Design Consultation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Astrologer Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              About Our Astrologer
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                T. Bhaskaraiah Sindhanthi
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Jyotish Ratna
                </span>
                <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Jyothisha Praveena
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Jyothisha Vastu
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Vidya Bhaskara
                </span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Famous Indian Astrologer Thatha Bhaskaraiah is a Qualified Indian Astrologer & 
                top Vastu Consultant who is well known for his astrological readings and remedies. 
                He has done intensive research in the fields of Indian astrology, the knowledge of 
                which has helped him serve many of his clients all over the globe.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
              >
                <span>Learn More About Us</span>
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
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
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get personalized astrological guidance and Vastu consultation from our expert astrologer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book Your Consultation
              </Link>
              <a
                href="tel:+919966012402"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-200"
              >
                +91 9966012402
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

