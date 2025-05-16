import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutUsImage from '../../assets/abtus.jpeg';

const benefits = [
  'Science-backed health information',
  'Local Algerian experts and producers',
  'Personalized wellness guidance',
  'Quality-certified bio products',
  'Community of health-conscious individuals',
];

const AboutSection = () => {
  return (
    <section className="section dark:bg-gray-950">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={aboutUsImage}
              alt="About Health'un"
              className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[400px]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="title-md text-gray-900 dark:text-white mb-4">About Health'un</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Founded in Algeria with a mission to make trusted health information and natural products accessible to everyone, Health'un combines local expertise with global wellness standards.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Our platform connects you with verified health content, personalized wellness plans, and quality bio products from local producers, all in one place.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span className="dark:text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/about-us" className="btn btn-primary">Learn More About Us</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;