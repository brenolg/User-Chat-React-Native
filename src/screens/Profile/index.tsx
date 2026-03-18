import InfoGrid from "@/components/InfoGrid";
import ReturnHeader from "@/components/ReturnHeader";
import { formatDate } from "@/helper/dates";
import { PageTitle, SafeArea } from "@/styles/commonStyles";
import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, UserImage } from "./styles";

import { RootStackParamList } from "@/types/RootStackParamList";
type RouteProps = RouteProp<RootStackParamList, "Profile">;

export default function Profile() {
  // Acessa os parâmetros da rota
  const route = useRoute<RouteProps>();
  const { user } = route.params;

  const theme = useTheme();

  return (
    <SafeArea style={{ flex: 1 }}>
      {/* Header com navegação de retorno */}
      <ReturnHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Container>
          {/* Imagem do usuário */}
          <UserImage source={{ uri: user.picture.large }} />

          {/* Nome completo */}
          <PageTitle>
            {user.name.first} {user.name.last}
          </PageTitle>

          {/* Grid com informações detalhadas do usuário */}
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
