import MainButton from "@/components/MainButton";
import SearchInput from "@/components/SearchInput";
import UserPicker from "@/components/UserSelect";
import { PageContainer, PageTitle, SafeArea } from "@/theme/commonStyles";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";

import { BtnRow } from "./chatHistoryStyles";

export default function Profile() {
  const theme = useTheme();
  const [userId, setUserId] = useState<string>("");
  const [message, setMessage] = useState("");

  const sendMsg = () => {
    console.log("search, gender");
  };

  return (
    <SafeArea>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <PageContainer>
          <PageTitle>Histórico de mensagens</PageTitle>

          <SearchInput
            value={message}
            onChangeText={setMessage}
            placeholder="Digite sua mensagem..."
            icon="chatbubbles-outline"
          />
          <BtnRow>
            <UserPicker value={userId} onChange={(id) => setUserId(id)} />
            <MainButton
              icon="send-outline"
              text="Enviar mensagem"
              onPress={sendMsg}
            />
          </BtnRow>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
}
