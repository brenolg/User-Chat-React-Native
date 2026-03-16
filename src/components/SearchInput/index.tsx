import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components/native";
import { Container, Input } from "./styles";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
};

export default function SearchInput({
  value,
  onChangeText,
  placeholder,
  icon,
}: Props) {
  const theme = useTheme();

  return (
    <Container>
      {icon && (
        <Ionicons name={icon} size={20} color={theme.colors.secondaryText} />
      )}

      <Input
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondaryText}
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  );
}
