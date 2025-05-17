import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeImage from '../../assets/Home.jpeg';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full -z-10" style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05
      }}></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="title-lg text-gray-900 dark:text-white leading-tight mb-6">
              Your Path to <span className="text-primary-600 dark:text-primary-400">Wellness</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover personalized health guidance, trusted information, and premium bio products that empower your wellness journey.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/health-plan" className="btn btn-primary">
                Explore Plans
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/marketplace" className="btn btn-secondary">
                Visit Marketplace
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={homeImage}
              alt="Young people using Health'un app on their phones"
              className="w-full h-auto rounded-lg shadow-xl object-cover max-h-[400px]"
            />
            {/* Floating stat cards */}
            <motion.div
              className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Trusted By</p>
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">5000+</p>
              <p className="text-sm font-medium dark:text-gray-300">Algerians</p>
            </motion.div>
            <motion.div
              className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Bio Products</p>
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">100+</p>
              <p className="text-sm font-medium dark:text-gray-300">Verified</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;