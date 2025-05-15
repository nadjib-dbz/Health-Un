import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = true
}) => {
  const baseClasses = 'bg-white rounded-xl overflow-hidden transition-all duration-300';
  const hoverClasses = hoverable ? 'hover:shadow-lg transform hover:-translate-y-1' : '';
  const shadowClass = 'shadow-md';
  
  return (
    <motion.div
      className={`${baseClasses} ${shadowClass} ${hoverClasses} ${className}`}
      onClick={onClick}
      whileHover={hoverable ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;