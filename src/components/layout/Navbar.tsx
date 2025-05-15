import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Leaf, User, ShoppingCart, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Health Info', path: '/health-info' },
    { name: 'Health Plan', path: '/health-plan' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-2'
          : 'bg-transparent dark:bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-primary-600 text-white p-2 rounded-full mr-2">
              <Leaf size={20} />
            </div>
            <span className="text-xl font-bold font-heading text-primary-800 dark:text-primary-300">Health'un</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : isScrolled
                        ? 'text-gray-800 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Auth Buttons & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle className="mr-2" />

            <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <User size={20} className="mr-1" />
                  <span className="font-medium">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400"
                >
                  <LogOut size={20} className="mr-1" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth" className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">
                  <User size={20} className="mr-1" />
                  <span>Login</span>
                </Link>
                <Link to="/auth" className="btn btn-primary py-2">Sign Up</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />

            <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-400">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="text-gray-700 dark:text-gray-300 p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 absolute top-full left-0 right-0 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col py-4 container-custom">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-3 px-4 font-medium ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 px-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center text-gray-700 dark:text-gray-300 py-2">
                    <User size={20} className="mr-2" />
                    <span className="font-medium">{user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center text-gray-700 dark:text-gray-300 py-2"
                  >
                    <LogOut size={20} className="mr-2" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/auth"
                    className="flex items-center text-gray-700 dark:text-gray-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={20} className="mr-2" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/auth"
                    className="btn btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;