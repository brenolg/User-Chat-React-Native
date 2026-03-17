import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";

import InfoGrid from "@/components/InfoGrid";
import ReturnHeader from "@/components/ReturnHeader";
import { formatDate } from "@/helper/dates";
import { PageTitle, SafeArea } from "@/theme/commonStyles";
import User from "@/types/user";
import { Container } from "./profileStyles";

export default function Profile() {
  const { user } = useLocalSearchParams();
  const theme = useTheme();

  const parsedUser: User = JSON.parse(user as string);

  return (
    <SafeArea style={{ flex: 1 }}>
      <ReturnHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
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

          <PageTitle>
            {parsedUser.name.first} {parsedUser.name.last}
          </PageTitle>

          <InfoGrid
            data={[
              { value: parsedUser.email, label: "E-mail" },
              { value: parsedUser.phone, label: "Telefone" },
              { value: parsedUser.cell, label: "Celular" },
              { value: parsedUser.gender, label: "Gênero" },
              {
                value: formatDate(parsedUser.dob.date),
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
    </SafeArea>
  );
}
