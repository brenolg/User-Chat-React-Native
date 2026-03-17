import MainButton from "@/components/buttons/MainButton";
import SearchInput from "@/components/inputs/SearchInput";
import { PageContainer, PageTitle, SafeArea } from "@/theme/commonStyles";
import React, { useState } from "react";
import { FlatList } from "react-native";

import ChatCard from "@/components/cards/ChatCard";
import ReturnHeader from "@/components/ReturnHeader";
import { useUsers } from "@/context/UsersContext";
import ChatMessage from "@/types/chat";
import { useLocalSearchParams } from "expo-router";
import { BtnRow } from "../(tabs)/chatHistory/styles";

export default function ChatDetails() {
  const [message, setMessage] = useState("");
  const { setChat, chat } = useUsers();
  const { selectedUser } = useLocalSearchParams();

  const parsedUser = selectedUser ? JSON.parse(selectedUser as string) : null;

  const chatDisabled = !message.trim() || !parsedUser;

  const sendMsg = () => {
    if (!parsedUser) return;

    const newMessage: ChatMessage = {
      id: String(Date.now()),
      userId: parsedUser.login.uuid,
      img: parsedUser.picture.thumbnail,
      name: `${parsedUser.name.first} ${parsedUser.name.last}`,
      createdAt: new Date().toLocaleString("pt-BR"),
      msg: message,
    };

    setChat((prev) => [newMessage, ...prev]);
    setMessage("");
  };

  const userMessages = chat.filter(
    (item) => item.userId === parsedUser?.login.uuid,
  );

  return (
    <SafeArea style={{ flex: 1 }}>
      <ReturnHeader />

      <PageContainer style={{ flex: 1 }}>
        <PageTitle>Chat com {parsedUser?.name.first}</PageTitle>

        <SearchInput
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem..."
          icon="chatbubbles-outline"
        />

        <BtnRow>
          <MainButton
            icon="send-outline"
            text="Enviar nova mensagem"
            onPress={sendMsg}
            disabled={chatDisabled}
          />
        </BtnRow>

        <FlatList
          data={userMessages}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          renderItem={({ item }) => (
            <ChatCard
              img={item.img}
              msg={item.msg}
              name={item.name}
              createdAt={item.createdAt}
            />
          )}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </PageContainer>
    </SafeArea>
  );
}
