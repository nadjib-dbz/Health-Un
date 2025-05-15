import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  
  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Your Cart - Health'un</title>
          <meta name="description" content="View and manage items in your Health'un shopping cart" />
        </Helmet>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 w-20 h-20 rounded-full mb-8">
                <ShoppingCart size={40} />
              </div>
              
              <h1 className="title-md text-gray-900 dark:text-white mb-4">Your Cart is Empty</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              
              <Link to="/marketplace" className="btn btn-primary">
                <ShoppingBag size={18} className="mr-2" />
                Browse Products
              </Link>
            </motion.div>
          </div>
        </section>
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Your Cart - Health'un</title>
        <meta name="description" content="View and manage items in your Health'un shopping cart" />
      </Helmet>
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-white">Your Cart</h1>
                <span className="text-gray-600 dark:text-gray-400">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-6 flex flex-col sm:flex-row items-center"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow sm:ml-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{item.name}</h3>
                        {item.seller && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Seller: {item.seller.name}, {item.seller.location}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-full">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 text-center text-gray-700 dark:text-gray-300">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-gray-900 dark:text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mb-8">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="font-medium text-gray-900 dark:text-white">$0.00</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">Total</span>
                    <span className="text-lg font-bold text-primary-600 dark:text-primary-400">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Link
                  to="/marketplace"
                  className="btn btn-secondary flex items-center justify-center"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Continue Shopping
                </Link>
                
                <Link
                  to={isAuthenticated ? "/checkout" : "/auth"}
                  className="btn btn-primary flex items-center justify-center"
                >
                  {isAuthenticated ? 'Proceed to Checkout' : 'Sign in to Checkout'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
