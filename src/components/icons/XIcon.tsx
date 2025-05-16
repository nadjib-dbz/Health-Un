import React from 'react';

interface XIconProps {
  size?: number;
  className?: string;
}

const XIcon: React.FC<XIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 4l16 16" />
      <path d="M4 20L20 4" />
    </svg>
  );
};

export default XIcon;
