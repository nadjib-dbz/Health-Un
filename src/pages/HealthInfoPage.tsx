import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Components
import SearchBar from '../components/health-info/SearchBar';
import CategoryTabs from '../components/health-info/CategoryTabs';
import ArticleCard from '../components/health-info/ArticleCard';

// Data
import { Article, articles, getArticleCategories, searchArticles, filterArticlesByCategory } from '../data/articles';

const HealthInfoPage = () => {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>(articles);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Get unique categories
    setCategories(getArticleCategories());
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setDisplayedArticles(articles);
    } else {
      setDisplayedArticles(searchArticles(query));
    }
  };

  const handleCategorySelect = (category: string) => {
    setDisplayedArticles(filterArticlesByCategory(category));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Health Information - Health'un</title>
        <meta name="description" content="Explore trustworthy health articles, tips, and in-depth information on nutrition, fitness, mental health, and wellness." />
      </Helmet>

      <section className="py-12 md:py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h1 
              className="title-md text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Evidence-Based Health Information
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover trustworthy health content reviewed by Algerian medical professionals. Stay informed with our latest articles and research.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CategoryTabs categories={categories} onSelectCategory={handleCategorySelect} />
          </motion.div>

          {displayedArticles.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-heading font-medium text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or browse different categories.</p>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {displayedArticles.map((article) => (
                <motion.div key={article.id} variants={item}>
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default HealthInfoPage;