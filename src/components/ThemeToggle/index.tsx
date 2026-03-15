import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme as useStyledTheme } from "styled-components/native";
import { useTheme } from "../../theme/ThemeProvider";
import { Container, StyledSwitch } from "./styles";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const styledTheme = useStyledTheme();

  const isDark = theme === "dark";

  return (
    <Container>
      <Ionicons
        name="sunny"
        size={18}
        color={!isDark ? styledTheme.colors.primary : styledTheme.colors.text}
      />

      <StyledSwitch value={isDark} onValueChange={toggleTheme} />

      <Ionicons
        name="moon"
        size={18}
        color={isDark ? styledTheme.colors.primary : styledTheme.colors.text}
      />
    </Container>
  );
}
