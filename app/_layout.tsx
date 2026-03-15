import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "../src/theme/dark";
import { lightTheme } from "../src/theme/light";
import { AppThemeProvider, useTheme } from "../src/theme/ThemeProvider";

function Layout() {
  const { theme } = useTheme();

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <Layout />
    </AppThemeProvider>
  );
}
