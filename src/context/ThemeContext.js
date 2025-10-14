import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#121212',
  color: '#fff',
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
