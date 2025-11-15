import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">
              Sri Krishna Sai Jyothishalayam
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Expert astrology and Vastu consultation services by T. Bhaskaraiah Sindhanthi, 
              a qualified Indian Astrologer with extensive research in Vedic astrology.
            </p>
            <div className="flex space-x-2 text-xs">
              <span className="bg-primary-600 text-white px-2 py-1 rounded">Jyotish Ratna</span>
              <span className="bg-secondary-600 text-white px-2 py-1 rounded">Jyothisha Praveena</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/vastu" className="hover:text-primary-400 transition-colors duration-200">
                  Vastu Shastra
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Door No: 16-12-172/1, Haranadhapuram, 2nd Street,<br />
                  Near Kalpana Indian Gas Godown,<br />
                  S.P.S.R Nellore - 524003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919966012402" className="hover:text-primary-400 transition-colors duration-200">
                    +91 9966012402
                  </a>
                  <br />
                  <a href="tel:+919866841250" className="hover:text-primary-400 transition-colors duration-200">
                    +91 9866841250
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:srikrishna.jyothishyam@gmail.com" 
                  className="text-sm hover:text-primary-400 transition-colors duration-200"
                >
                  srikrishna.jyothishyam@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            Copyright © {currentYear} SRIKRISHNASAIJYOTHISHALAYAM.COM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

