import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-full mr-2">
                <Leaf size={20} />
              </div>
              <span className="text-xl font-bold font-heading text-primary-800">Health'un</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Promoting healthy living and wellness across Algeria with trusted information and quality bio products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Home</Link></li>
              <li><Link to="/health-info" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Health Info</Link></li>
              <li><Link to="/health-plan" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Personalized Plans</Link></li>
              <li><Link to="/marketplace" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Bio Marketplace</Link></li>
              <li><Link to="/about-us" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">About Us</Link></li>
            </ul>
          </div>

          {/* Health Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Health Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Nutrition</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Fitness</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Mental Health</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Bio Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">Wellness Tips</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Wellness Street, Algiers, Algeria</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-600 flex-shrink-0" />
                <a href="mailto:contact@healthun.dz" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                  contact@healthun.dz
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-600 flex-shrink-0" />
                <a href="tel:+213123456789" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
                  +213 12 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-b border-gray-200 py-8 my-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-heading font-semibold text-xl mb-3">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 mb-4">Stay updated with our latest health tips and product offerings.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>© {currentYear} Health'un. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;