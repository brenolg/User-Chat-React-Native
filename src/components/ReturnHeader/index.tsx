import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { useTheme } from "styled-components/native";
import { BackButton, Header, HeaderTitle } from "./styles";

type Props = {
  title?: string;
};

export default function ReturnHeader({ title = "Voltar" }: Props) {
  const theme = useTheme();

  return (
    <Header>
      <BackButton onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={28} color={theme.colors.primary} />
      </BackButton>

      <HeaderTitle>{title}</HeaderTitle>
    </Header>
  );
}
