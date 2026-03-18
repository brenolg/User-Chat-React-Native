import { Ionicons } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import { useTheme } from "styled-components/native";
import { Container, FilterButton, FilterText } from "./styles";

type Option<T> = {
  label: string;
  value: T;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

type Props<T> = {
  value: T;
  onChange: Dispatch<SetStateAction<T>>;
  options: Option<T>[];
};

export default function Filter<T>({ value, onChange, options }: Props<T>) {
  const theme = useTheme();

  return (
    <Container>
      {options.map((option) => {
        const active = value === option.value;

        return (
          <FilterButton
            key={option.value}
            active={active}
            onPress={() => onChange(option.value)}
          >
            <Ionicons
              name={option.icon}
              size={18}
              color={
                active ? theme.colors.background : theme.colors.secondaryText
              }
            />
            {option.label && (
              <FilterText active={active}>{option.label}</FilterText>
            )}
          </FilterButton>
        );
      })}
    </Container>
  );
}
