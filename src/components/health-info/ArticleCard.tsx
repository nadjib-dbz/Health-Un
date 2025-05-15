import { motion } from 'framer-motion';
import { CalendarIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 m-3">
          <span className="bg-primary-600 text-white text-xs font-medium px-2.5 py-1 rounded">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <CalendarIcon size={14} className="mr-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <Link
          to={`/health-info/${article.id}`}
          className="text-primary-600 font-medium hover:text-primary-700 hover:underline inline-flex items-center"
        >
          Read More
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;