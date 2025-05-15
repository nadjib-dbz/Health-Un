import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Amina Benali',
    role: 'Wellness Enthusiast',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120',
    content: 'Health\'un has transformed my approach to wellness. The personalized health plan really works for my lifestyle, and the bio products are amazing quality.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Karim Hadj',
    role: 'Fitness Coach',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120',
    content: 'As a fitness professional, I appreciate the science-backed information Health\'un provides. I recommend it to all my clients seeking reliable health guidance.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Lina Messaoudi',
    role: 'Nutrition Student',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120',
    content: 'The articles are informative and easy to understand. I love that Health\'un connects me with local producers for fresh, organic ingredients.',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-primary-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16 w-full">
          <h2 className="title-md text-gray-900 dark:text-white mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from Health'un users who have transformed their health and wellness journey with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}
                  />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;