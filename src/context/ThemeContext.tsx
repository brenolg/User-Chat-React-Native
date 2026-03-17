import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";

type ThemeType = "light" | "dark";

type ThemeContextData = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeType>("light");

  async function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
