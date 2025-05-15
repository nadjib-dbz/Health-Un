import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ArrowDown, Star, Check } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  onSortChange: (sortBy: string) => void;
  onOrganicFilterChange: (organic: boolean | null) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  onSelectCategory,
  onPriceRangeChange,
  onSortChange,
  onOrganicFilterChange
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [organicFilter, setOrganicFilter] = useState<boolean | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  const handlePriceChange = () => {
    onPriceRangeChange(minPrice, maxPrice);
  };

  const handleOrganicFilterChange = (value: boolean | null) => {
    setOrganicFilter(value);
    onOrganicFilterChange(value);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <button
          onClick={toggleMobileFilters}
          className="flex items-center text-gray-700 font-medium"
        >
          <Filter size={20} className="mr-2" />
          Filters
          <ArrowDown 
            size={16} 
            className={`ml-1 transition-transform duration-300 ${showMobileFilters ? 'rotate-180' : ''}`} 
          />
        </button>
        
        <div className="relative">
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
      
      {/* Mobile Filters */}
      <motion.div 
        className={`md:hidden overflow-hidden transition-all duration-300`}
        initial={false}
        animate={{ height: showMobileFilters ? 'auto' : 0, opacity: showMobileFilters ? 1 : 0 }}
      >
        <div className="p-4 bg-gray-50 rounded-lg mb-4">
          <div className="mb-4">
            <h3 className="font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="number"
                min="0"
                max="10000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-24 p-2 border border-gray-300 rounded-md"
              />
              <span>to</span>
              <input
                type="number"
                min="0"
                max="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 p-2 border border-gray-300 rounded-md"
              />
              <span>DA</span>
            </div>
            <button
              onClick={handlePriceChange}
              className="bg-primary-600 text-white px-4 py-1 rounded-lg text-sm"
            >
              Apply
            </button>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Organic Products</h3>
            <div className="flex gap-2">
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  organicFilter === true ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => handleOrganicFilterChange(true)}
              >
                <Check size={14} className="inline mr-1" />
                Organic Only
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  organicFilter === null ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => handleOrganicFilterChange(null)}
              >
                All Products
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Desktop Filters and Sort */}
      <div className="hidden md:flex justify-between items-start">
        <div className="flex flex-col gap-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {['All', ...categories].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="flex items-center gap-2 mb-3">
              <input
                type="number"
                min="0"
                max="10000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-24 p-2 border border-gray-300 rounded-md"
              />
              <span>to</span>
              <input
                type="number"
                min="0"
                max="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-24 p-2 border border-gray-300 rounded-md"
              />
              <span>DA</span>
            </div>
            <button
              onClick={handlePriceChange}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Apply
            </button>
          </div>
          
          {/* Organic Filter */}
          <div>
            <h3 className="font-medium mb-3">Product Type</h3>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  organicFilter === true ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => handleOrganicFilterChange(true)}
              >
                <Check size={16} className="inline mr-1" />
                Organic Only
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  organicFilter === null ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => handleOrganicFilterChange(null)}
              >
                All Products
              </button>
            </div>
          </div>
        </div>
        
        {/* Sort */}
        <div className="flex items-center">
          <span className="mr-2 text-gray-700">Sort by:</span>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;