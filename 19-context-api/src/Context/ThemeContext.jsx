import { useState, createContext } from 'react';

// Create the context
export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  // State for theme
  const [theme, setTheme] = useState('light'); // Default "light"

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Provide context value to children
    <ThemeDataContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
