import { lightTheme } from "@/theme/light";
import "styled-components/native";

type Theme = typeof lightTheme;

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}

export {};
