import MainButton from "@/components/MainButton";
import SearchInput from "@/components/SearchInput";
import UserPicker from "@/components/UserSelect";
import { PageContainer, PageTitle, SafeArea } from "@/theme/commonStyles";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";

import { useUsers } from "@/context/UsersContext";
import ChatMessage from "@/types/chat";
import { BtnRow } from "./chatHistoryStyles";

export default function Profile() {
  const theme = useTheme();
  const [userId, setUserId] = useState<string>("");
  const [message, setMessage] = useState("");
  const { users, setChat, chat } = useUsers();

  const chatDisabled = !message.trim() || !userId;
  const sendMsg = () => {
    const selectedUser = users.find((user) => user.login.uuid === userId);

    if (!selectedUser) return;

    const newMessage: ChatMessage = {
      id: String(Date.now()),
      img: selectedUser.picture.thumbnail, // ou large se quiser
      createdAt: new Date().toISOString(),
      msg: message,
    };

    setChat((prev) => [newMessage, ...prev]);
    setMessage("");
  };

  useEffect(() => {
    console.log(chat);
  }, [chat]);

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
              disabled={chatDisabled}
            />
          </BtnRow>
        </PageContainer>
      </ScrollView>
    </SafeArea>
  );
}
