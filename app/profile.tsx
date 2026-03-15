import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import InfoGrid from "@/components/InfoGrid";
import User from "@/types/user";
import {
  BackButton,
  Container,
  Header,
  HeaderTitle,
  Name,
} from "./profileStyles";

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Image
            source={{ uri: parsedUser.picture.large }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 20,
            }}
          />

          <Name>
            {parsedUser.name.first} {parsedUser.name.last}
          </Name>

          <InfoGrid
            data={[
              { value: parsedUser.email, label: "E-mail" },
              { value: parsedUser.phone, label: "Telefone" },
              { value: parsedUser.cell, label: "Celular" },
              { value: parsedUser.gender, label: "Gênero" },
              {
                value: new Date(parsedUser.dob.date).toLocaleDateString(
                  "pt-BR",
                ),
                label: "Aniversário",
              },
              { value: parsedUser.dob.age, label: "Idade" },
              { value: parsedUser.location.country, label: "País" },
              { value: parsedUser.location.state, label: "Estado" },
              { value: parsedUser.location.city, label: "Cidade" },
              {
                value: `${parsedUser.location.street.number} ${parsedUser.location.street.name}`,
                label: "Rua",
              },
            ]}
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
