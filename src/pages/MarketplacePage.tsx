import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

// Components
import ProductCard from '../components/marketplace/ProductCard';
import ProductFilters from '../components/marketplace/ProductFilters';

// Data
import {
  Product,
  products,
  getProductCategories,
  filterProductsByCategory,
  filterProductsByPrice,
  sortProducts
} from '../data/products';

const MarketplacePage = () => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products);
  const [categories, setCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Get unique categories
    setCategories(getProductCategories());
  }, []);

  const handleCategorySelect = (category: string) => {
    let filtered = filterProductsByCategory(category);

    // Apply current sort
    filtered = sortProducts(filtered, sortBy);

    setDisplayedProducts(filtered);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    let filtered = filterProductsByPrice(min, max);

    // Apply current sort
    filtered = sortProducts(filtered, sortBy);

    setDisplayedProducts(filtered);
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    setDisplayedProducts(sortProducts(displayedProducts, newSortBy));
  };

  const handleOrganicFilterChange = (organic: boolean | null) => {
    let filtered;

    if (organic === null) {
      filtered = products;
    } else {
      filtered = products.filter(product => product.organic === organic);
    }

    // Apply current sort
    filtered = sortProducts(filtered, sortBy);

    setDisplayedProducts(filtered);
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
        <title>Bio Marketplace - Health'un</title>
        <meta name="description" content="Shop quality bio products, organic foods, natural cosmetics, and wellness items from verified Algerian producers." />
      </Helmet>

      <section className="py-12 md:py-16 bg-primary-50 dark:bg-primary-900/20">
        <div className="container-custom">
          <div className="text-center mb-8">
            <motion.h1
              className="title-md text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bio Product Marketplace
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover quality bio products from verified local Algerian producers. Every purchase supports sustainable farming and traditional practices.
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-primary-600 text-white py-3 px-6 rounded-full inline-flex items-center text-sm font-medium">
              <ShoppingBag size={16} className="mr-2" />
              <span>All products are verified for quality and authenticity</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-semibold text-xl mb-6 dark:text-white">Filter Products</h2>
                <ProductFilters
                  categories={categories}
                  onSelectCategory={handleCategorySelect}
                  onPriceRangeChange={handlePriceRangeChange}
                  onSortChange={handleSortChange}
                  onOrganicFilterChange={handleOrganicFilterChange}
                />
              </motion.div>
            </div>

            {/* Product Grid */}
            <div className="col-span-1 lg:col-span-3">
              {/* Sort Dropdown - Desktop & Mobile */}
              <div className="flex justify-between items-center mb-6">
                <div className="md:hidden">
                  <h2 className="font-heading font-semibold text-lg dark:text-white">Products</h2>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-gray-700 dark:text-gray-300 hidden md:inline">Sort by:</span>
                  <select
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {displayedProducts.length === 0 ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-heading font-medium text-gray-700 dark:text-gray-300 mb-2">No products found</h3>
                  <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters or browse different categories.</p>
                </motion.div>
              ) : (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {displayedProducts.map((product) => (
                    <motion.div key={product.id} variants={item}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketplacePage;