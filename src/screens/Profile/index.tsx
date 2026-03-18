import InfoGrid from "@/components/InfoGrid";
import ReturnHeader from "@/components/ReturnHeader";
import { formatDate } from "@/helper/dates";
import { PageTitle, SafeArea } from "@/styles/commonStyles";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

import { RootStackParamList } from "@/types/RootStackParamList";
type RouteProps = RouteProp<RootStackParamList, "Profile">;

export default function Profile() {
  const route = useRoute<RouteProps>();
  const { user } = route.params;
  const theme = useTheme();

  return (
    <SafeArea style={{ flex: 1 }}>
      <ReturnHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Container>
          <Image
            source={{ uri: user.picture.large }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 20,
            }}
          />

          <PageTitle>
            {user.name.first} {user.name.last}
          </PageTitle>

          <InfoGrid
            data={[
              { value: user.email, label: "E-mail" },
              { value: user.phone, label: "Telefone" },
              { value: user.cell, label: "Celular" },
              { value: user.gender, label: "Gênero" },
              {
                value: formatDate(user.dob.date),
                label: "Aniversário",
              },
              { value: user.dob.age, label: "Idade" },
              { value: user.location.country, label: "País" },
              { value: user.location.state, label: "Estado" },
              { value: user.location.city, label: "Cidade" },
              {
                value: `${user.location.street.number} ${user.location.street.name}`,
                label: "Rua",
              },
            ]}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
}
