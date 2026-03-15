import type { lightTheme } from "@/theme/light";
import { useTheme as useStyledTheme } from "styled-components/native";

export type ThemeType = typeof lightTheme;

export function useTheme(): ThemeType {
  return useStyledTheme() as ThemeType;
}
