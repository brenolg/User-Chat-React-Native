import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import InfoGrid from "@/components/InfoGrid";
import {
  BackButton,
  Container,
  Header,
  HeaderTitle,
  Name,
} from "./profileStyles";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
};

export default function Profile() {
  const { user } = useLocalSearchParams();
  const theme = useTheme();

  const parsedUser: User = JSON.parse(user as string);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <BackButton onPress={() => router.back()}>
          <Ionicons
            name="chevron-back"
            size={28}
            color={theme.colors.primary}
          />
        </BackButton>

        <HeaderTitle>Voltar</HeaderTitle>
      </Header>

      <Container>
        {parsedUser.avatar && (
          <Image
            source={{ uri: parsedUser.avatar }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 20,
            }}
          />
        )}

        <Name>
          {parsedUser.first_name} {parsedUser.last_name}
        </Name>

        <InfoGrid
          data={[
            { value: parsedUser.email, label: "Email" },
            { value: parsedUser.email, label: "Email" },
          ]}
        />
      </Container>
    </SafeAreaView>
  );
}
