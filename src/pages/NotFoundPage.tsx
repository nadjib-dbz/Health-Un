import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Search } from 'lucide-react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Health'un</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <section className="py-16 md:py-24 min-h-[70vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center bg-primary-100 text-primary-600 w-20 h-20 rounded-full mb-8">
                <MapPin size={40} />
              </div>
            </motion.div>
            
            <motion.h1
              className="title-md text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/" className="btn btn-primary">
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Link>
              
              <Link to="/health-info" className="btn btn-secondary">
                <Search size={18} className="mr-2" />
                Browse Health Articles
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <h3 className="font-heading font-semibold text-lg mb-2">Health Information</h3>
              <p className="text-gray-600 mb-3">Discover trustworthy health content reviewed by professionals.</p>
              <Link to="/health-info" className="text-primary-600 hover:underline">View Articles</Link>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading font-semibold text-lg mb-2">Health Plan</h3>
              <p className="text-gray-600 mb-3">Create your personalized wellness plan based on your goals.</p>
              <Link to="/health-plan" className="text-primary-600 hover:underline">Get Your Plan</Link>
            </div>
            
            <div className="text-center">
              <h3 className="font-heading font-semibold text-lg mb-2">Marketplace</h3>
              <p className="text-gray-600 mb-3">Shop quality bio products from verified local producers.</p>
              <Link to="/marketplace" className="text-primary-600 hover:underline">Shop Now</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;