import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseClass = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    text: 'bg-transparent text-primary-600 hover:text-primary-700 hover:underline focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `
    ${baseClass}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${className || ''}
  `;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;