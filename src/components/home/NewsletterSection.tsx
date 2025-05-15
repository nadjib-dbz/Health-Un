import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div 
          className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-700 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Stay Updated with Health Tips
            </h2>
            <p className="text-primary-100 mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for the latest health information, wellness tips, and exclusive offers on bio products.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border-2 border-primary-300 bg-white bg-opacity-10 text-white placeholder-primary-200 focus:outline-none focus:border-white"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center whitespace-nowrap"
              >
                Subscribe
                <Send size={18} className="ml-2" />
              </button>
            </form>
            
            <p className="text-primary-100 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;