import { useState } from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {['All', ...categories].map((category) => (
        <motion.button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          onClick={() => handleCategoryClick(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryTabs;