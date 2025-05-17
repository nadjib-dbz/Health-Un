import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  ShoppingBag,
  FileText,
  BookOpen,
  User,
  Menu
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const BottomNavigation = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  // Handle scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isScrollingSignificantly = Math.abs(prevScrollPos - currentScrollPos) > 10;

      if (isScrollingDown && isScrollingSignificantly && currentScrollPos > 100) {
        setVisible(false);
        setMoreMenuOpen(false);
      } else if (isScrollingUp && isScrollingSignificantly) {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close more menu when route changes
  useEffect(() => {
    setMoreMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/health-plan', label: 'Plan', icon: <FileText size={20} /> },
    { path: '/marketplace', label: 'Shop', icon: <ShoppingBag size={20} /> },
    { path: '/health-info', label: 'Health', icon: <BookOpen size={20} /> },
    { path: '/auth', label: 'Account', icon: <User size={20} /> }
  ];

  return (
    <>
      <AnimatePresence>
        {moreMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMoreMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className="fixed bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 shadow-xl rounded-3xl z-50 md:hidden backdrop-blur-md border border-gray-100 dark:border-gray-800"
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.8
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 25,
          bounce: 0.3
        }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center justify-center w-full h-full text-xs font-medium
                relative px-2 py-1 transition-all duration-300
                ${isActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
                ${isActive ? 'nav-item-active' : ''}
              `}
            >
              {({ isActive }) => (
                <>
                  <div className="relative z-10">
                    {isActive ? (
                      <motion.div
                        className="absolute -inset-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl"
                        layoutId="bottomNavBackground"
                        transition={{
                          type: 'spring',
                          stiffness: 600,
                          damping: 30,
                          bounce: 0.4,
                          duration: 0.6
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          boxShadow: '0 0 15px rgba(0, 0, 0, 0.08)'
                        }}
                      />
                    ) : null}
                    <motion.div
                      whileTap={{ scale: 0.7, rotate: -10 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15
                      }}
                      className="relative"
                    >
                      <motion.div
                        animate={isActive ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0],
                          y: [0, -2, 0]
                        } : {}}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                          repeat: 0
                        }}
                        className={isActive ? "text-glow" : ""}
                      >
                        {item.icon}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-primary-500/10 dark:bg-primary-400/10 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: [0.8, 1.5, 0.8],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          />
                        )}
                      </motion.div>

                      {isActive && (
                        <motion.span
                          className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: 1,
                            scale: [0, 1.5, 1],
                            y: [0, -2, 0]
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                          style={{ x: '-50%' }}
                        />
                      )}
                    </motion.div>
                  </div>
                  <motion.span
                    className="mt-1 relative z-10"
                    animate={isActive ? {
                      y: -1,
                      scale: 1.05,
                      fontWeight: "600" as any
                    } : {
                      y: 0,
                      scale: 1,
                      fontWeight: "400" as any
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default BottomNavigation;
