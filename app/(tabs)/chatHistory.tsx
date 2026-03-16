import { SafeArea } from "@/theme/commonStyles";
import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Name } from "../profileStyles";

export default function Profile() {
  const theme = useTheme();

  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Container>
          <Name>Chat History</Name>
        </Container>
      </ScrollView>
    </SafeArea>
  );
}
