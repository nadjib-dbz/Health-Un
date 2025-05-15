import { motion } from 'framer-motion';
import { ShoppingBag, Star, Check } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-medium text-lg">Out of Stock</span>
          </div>
        )}
        {product.organic && (
          <div className="absolute top-0 left-0 m-3">
            <span className="bg-success-500 text-white text-xs font-medium px-2.5 py-1 rounded">
              Organic
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-semibold text-lg line-clamp-1">{product.name}</h3>
          <div className="text-lg font-bold text-primary-600">{product.price} DA</div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.rating.toFixed(1)}</span>
          </div>
          
          {product.seller.verified && (
            <div className="flex items-center text-primary-600 text-sm">
              <Check size={16} className="mr-1" />
              <span>Verified Seller</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {product.seller.name}, {product.seller.location}
          </span>
          
          <button 
            className={`btn py-2 px-3 text-sm ${product.inStock ? 'btn-primary' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            disabled={!product.inStock}
          >
            <ShoppingBag size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;