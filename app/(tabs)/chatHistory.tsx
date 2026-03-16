import UserPicker from "@/components/UserSelect";
import { SafeArea } from "@/theme/commonStyles";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Name } from "../profileStyles";

export default function Profile() {
  const theme = useTheme();
  const [userId, setUserId] = useState<string>("");

  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Container>
          <Name>Histórico de mensagens</Name>
          <UserPicker value={userId} onChange={(id) => setUserId(id)} />
        </Container>
      </ScrollView>
    </SafeArea>
  );
}
