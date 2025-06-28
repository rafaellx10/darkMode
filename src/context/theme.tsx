import { createContext, useState, useContext, ReactNode } from "react";

interface ThemeContextProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    // console.log("Toggling theme");
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default ThemeContext;
