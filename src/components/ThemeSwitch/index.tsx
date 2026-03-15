import React from "react";
import { Switch } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { Container, Label } from "./styles";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Container>
      <Label>{isDark ? "Dark" : "Light"}</Label>

      <Switch value={isDark} onValueChange={toggleTheme} />
    </Container>
  );
}
