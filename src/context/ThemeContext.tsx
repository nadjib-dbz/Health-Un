import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Check for user preference in localStorage or default to light mode
  const getInitialTheme = (): Theme => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) {
        return storedTheme;
      }

      // Default to light mode regardless of system preference
      return 'light';
    }

    // Default to light if window is not defined
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first
    root.classList.remove('light', 'dark');

    // Add the current theme class
    root.classList.add(theme);

    // Store the theme preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // We're not automatically changing theme based on system preference anymore
  // But we'll keep this effect in case we want to re-enable it in the future
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      // This is now disabled - we always default to light mode
      // Only uncomment if we want to re-enable system preference detection
      /*
      if (!localStorage.getItem('theme')) {
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      }
      */
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
