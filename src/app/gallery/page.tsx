'use client';

import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';

export default function GalleryPage() {
  // Placeholder for gallery items
  const galleryCategories = [
    {
      title: 'Consultation Sessions',
      description: 'Personal consultation and client interactions',
      count: 12
    },
    {
      title: 'Vastu Surveys',
      description: 'On-site Vastu inspection and analysis',
      count: 8
    },
    {
      title: 'Events & Seminars',
      description: 'Astrology workshops and public seminars',
      count: 15
    },
    {
      title: 'Remedial Ceremonies',
      description: 'Puja and ritual ceremonies',
      count: 10
    }
  ];

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
              Our <span className="text-primary-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into our consultations, events, and astrological services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiImage size={80} className="text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 mb-2">
                    {category.description}
                  </p>
                  <span className="text-sm text-gray-300">
                    {category.count} photos
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl p-12 shadow-xl"
          >
            <div className="inline-flex p-6 bg-primary-100 rounded-full mb-6">
              <FiImage size={48} className="text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re currently updating our gallery with new photos from recent consultations, 
              events, and Vastu surveys. Check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919966012402"
                className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200"
              >
                Book Consultation
              </a>
              <a
                href="mailto:srikrishna.jyothishyam@gmail.com"
                className="bg-gray-200 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-300 transform hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                feedback: 'Excellent guidance for my career. The predictions were accurate and the remedies really helped!',
                service: 'Career Consultation'
              },
              {
                name: 'Priya Sharma',
                feedback: 'The marriage compatibility analysis was very detailed. Thank you for the wonderful service!',
                service: 'Marriage Analysis'
              },
              {
                name: 'Venkat Reddy',
                feedback: 'Professional Vastu consultation. Our business has improved significantly after implementing the suggestions.',
                service: 'Vastu Consultation'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.feedback}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

