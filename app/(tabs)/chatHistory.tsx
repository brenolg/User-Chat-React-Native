import MainButton from "@/components/buttons/MainButton";
import SearchInput from "@/components/inputs/SearchInput";
import UserPicker from "@/components/inputs/UserSelect";
import { PageContainer, PageTitle, SafeArea } from "@/theme/commonStyles";
import React, { useState } from "react";
import { FlatList } from "react-native";

import ChatCard from "@/components/cards/ChatCard";
import { useUsers } from "@/context/UsersContext";
import ChatMessage from "@/types/chat";
import { BtnRow } from "./chatHistoryStyles";

export default function ChatHistory() {
  const [userId, setUserId] = useState<string>("");
  const [message, setMessage] = useState("");
  const { users, setChat, chat } = useUsers();

  const chatDisabled = !message.trim() || !userId;
  const sendMsg = () => {
    const selectedUser = users.find((user) => user.login.uuid === userId);

    if (!selectedUser) return;

    const newMessage: ChatMessage = {
      id: String(Date.now()),
      img: selectedUser.picture.thumbnail,
      userId: selectedUser.login.uuid,
      name: `${selectedUser.name.first} ${selectedUser.name.last}`,
      createdAt: Date.now(),
      msg: message,
    };

    console.log(newMessage);

    setChat((prev) => [newMessage, ...prev]);
    setMessage("");
  };

  return (
    <SafeArea style={{ flex: 1 }}>
      <PageContainer style={{ flex: 1 }}>
        <PageTitle style={{ marginTop: 24 }}>Histórico de mensagens</PageTitle>

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

        <FlatList
          data={chat}
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
