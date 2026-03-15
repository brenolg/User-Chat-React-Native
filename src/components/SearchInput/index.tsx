import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Input } from "./styles";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchInput({ value, onChangeText }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Ionicons name="search" size={20} color={theme.colors.secondaryText} />

      <Input
        placeholder="Buscar pessoas..."
        placeholderTextColor={theme.colors.secondaryText}
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  );
}
