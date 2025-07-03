import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Load theme from localStorage, default to light theme (matching Flutter default)
    const saved = localStorage.getItem('THEMESTATUS');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('THEMESTATUS', JSON.stringify(newTheme));
  };

  // Apply theme to document root for global CSS variables
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light'); 
      root.classList.remove('dark');
    }
  }, [isDark]);

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: '#C0392B', // Same as Flutter kPrimaryColor (#C0392B)
      secondary: isDark ? '#C0392B' : '#000000',
      background: isDark ? '#000000' : '#FFFFFF',
      surface: isDark ? '#1E1E1E' : '#FFFFFF',
      cardBackground: isDark ? '#1E1E1E' : '#F8F9FA',
      inputBackground: isDark ? '#2A2A2A' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#000000',
      textSecondary: isDark ? '#B0B0B0' : '#666666',
      subtext: isDark ? '#B0B0B0' : '#666666',
      heading: isDark ? '#FFFFFF' : '#000000',
      border: isDark ? '#333333' : '#E0E0E0',
      success: '#4bec59', // Same as Flutter kSuccessColor (#00C853)
      failure: '#f04d4d',
      accent: '#FFC107'
    },
    fonts: {
      primary: "'Montserrat', sans-serif", // Same as Flutter
      secondary: "'Agustina', sans-serif"
    },
    breakpoints: {
      mobile: '768px',
      tablet: '1024px', 
      desktop: '1200px'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
