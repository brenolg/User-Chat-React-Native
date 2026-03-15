import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, FilterButton, FilterText } from "./styles";

export type GenderFilterValue = "all" | "male" | "female";

type Props = {
  value: GenderFilterValue;
  onChange: (value: GenderFilterValue) => void;
};

export default function GenderFilter({ value, onChange }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <FilterButton active={value === "all"} onPress={() => onChange("all")}>
        <Ionicons
          name="people"
          size={18}
          color={
            value === "all"
              ? theme.colors.background
              : theme.colors.secondaryText
          }
        />
        <FilterText active={value === "all"}>Todos</FilterText>
      </FilterButton>

      <FilterButton active={value === "male"} onPress={() => onChange("male")}>
        <Ionicons
          name="male"
          size={18}
          color={
            value === "male"
              ? theme.colors.background
              : theme.colors.secondaryText
          }
        />
        <FilterText active={value === "male"}>Homens</FilterText>
      </FilterButton>

      <FilterButton
        active={value === "female"}
        onPress={() => onChange("female")}
      >
        <Ionicons
          name="female"
          size={18}
          color={
            value === "female"
              ? theme.colors.background
              : theme.colors.secondaryText
          }
        />
        <FilterText active={value === "female"}>Mulheres</FilterText>
      </FilterButton>
    </Container>
  );
}
