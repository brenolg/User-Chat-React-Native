import { Ionicons } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { FilterButton, FilterText } from "./styles";

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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
      style={{
        alignSelf: "center", // 🔥 centraliza o bloco inteiro
      }}
    >
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
    </ScrollView>
  );
}
