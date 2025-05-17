import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  FileText,
  BookOpen,
  Users,
  Heart,
  ArrowRight
} from 'lucide-react';

// Define the shortcuts
const shortcuts = [
  {
    id: 1,
    title: 'Health Plan',
    description: 'Get your personalized plan',
    icon: <FileText className="h-6 w-6 text-white" />,
    path: '/health-plan',
    color: 'bg-primary-600 dark:bg-primary-700'
  },
  {
    id: 2,
    title: 'Marketplace',
    description: 'Shop bio products',
    icon: <ShoppingBag className="h-6 w-6 text-white" />,
    path: '/marketplace',
    color: 'bg-emerald-600 dark:bg-emerald-700'
  },
  {
    id: 3,
    title: 'Health Info',
    description: 'Explore health articles',
    icon: <BookOpen className="h-6 w-6 text-white" />,
    path: '/health-info',
    color: 'bg-blue-600 dark:bg-blue-700'
  },
  {
    id: 4,
    title: 'About Us',
    description: 'Meet our team',
    icon: <Users className="h-6 w-6 text-white" />,
    path: '/about-us',
    color: 'bg-amber-600 dark:bg-amber-700'
  },
  {
    id: 5,
    title: 'Wellness Tips',
    description: 'Daily health advice',
    icon: <Heart className="h-6 w-6 text-white" />,
    path: '/health-info?category=Wellness',
    color: 'bg-rose-600 dark:bg-rose-700'
  }
];

const ShortcutsSection = () => {
  return (
    <section className="py-8 md:py-10 md:hidden bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-6">
          Our Services
        </h2>

        <div className="overflow-x-auto pb-4 hide-scrollbar -mx-4">
          <div className="flex space-x-4 px-4">
            {shortcuts.map((shortcut, index) => (
              <motion.div
                key={shortcut.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-[160px] flex-shrink-0"
              >
                <Link
                  to={shortcut.path}
                  className="block h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className={`${shortcut.color} p-4`}>
                    {shortcut.icon}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-medium text-gray-900 dark:text-white mb-1">
                      {shortcut.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      {shortcut.description}
                    </p>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 text-xs font-medium">
                      <span>Access</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortcutsSection;
