import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components/native";

import { Container, Description, Title } from "./styles";

type Props = {
  title?: string;
  description?: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function EmptyState({
  title = "Nada por aqui",
  description = "Ainda não há mensagens",
  icon = "chatbubble-outline",
}: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Ionicons
        name={icon}
        size={60}
        color={theme.colors.secondaryText}
        style={{ marginBottom: 16 }}
      />

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
