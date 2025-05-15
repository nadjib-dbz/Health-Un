import { Heart, ShieldCheck, Lightbulb, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: <Heart className="h-10 w-10 text-primary-600" />,
    title: 'Personalized Health Plans',
    description: 'Get customized wellness recommendations tailored to your unique needs, goals, and preferences.',
  },
  {
    id: 2,
    icon: <ShieldCheck className="h-10 w-10 text-primary-600" />,
    title: 'Trusted Health Information',
    description: 'Access verified, science-backed health content reviewed by medical professionals.',
  },
  {
    id: 3,
    icon: <Lightbulb className="h-10 w-10 text-primary-600" />,
    title: 'Expert Health Guidance',
    description: 'Learn from Algeria\'s top health experts with regularly updated tips and insights.',
  },
  {
    id: 4,
    icon: <ShoppingBag className="h-10 w-10 text-primary-600" />,
    title: 'Bio Product Marketplace',
    description: 'Shop certified organic and natural products from verified local producers.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="title-md text-gray-900 mb-4">Why Choose Health'un?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're more than just health information. Health'un provides a complete wellness ecosystem for Algerians.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={item}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;