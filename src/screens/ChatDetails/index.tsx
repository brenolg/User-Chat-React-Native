import MainButton from "@/components/buttons/MainButton";
import ChatCard from "@/components/cards/ChatCard";
import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/inputs/SearchInput";
import ReturnHeader from "@/components/ReturnHeader";
import { useUsers } from "@/context/UsersContext";
import { PageContainer, PageTitle, SafeArea } from "@/styles/commonStyles";
import ChatMessage from "@/types/chat";
import { RootStackParamList } from "@/types/RootStackParamList";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { BtnRow } from "../../styles/commonStyles";

type RouteProps = RouteProp<RootStackParamList, "ChatDetails">;

export default function ChatDetails() {
  const [message, setMessage] = useState("");
  const { setChat, chat } = useUsers();
  const route = useRoute<RouteProps>();
  const { selectedUser } = route.params;

  const chatDisabled = !message.trim() || !selectedUser;

  const sendMsg = () => {
    if (!selectedUser) return;

    const newMessage: ChatMessage = {
      id: String(Date.now()),
      userId: selectedUser.login.uuid,
      img: selectedUser.picture.thumbnail,
      name: `${selectedUser.name.first} ${selectedUser.name.last}`,
      createdAt: new Date().toString(),
      msg: message,
    };

    setChat((prev) => [newMessage, ...prev]);
    setMessage("");
  };

  const userMessages = chat.filter(
    (item) => item.userId === selectedUser?.login.uuid,
  );

  return (
    <SafeArea style={{ flex: 1 }}>
      <ReturnHeader />

      <PageContainer style={{ flex: 1 }}>
        <PageTitle>Chat com {selectedUser?.name.first}</PageTitle>

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
          ListEmptyComponent={
            <EmptyState
              title="Sem mensagens"
              description="Envie a primeira mensagem para iniciar a conversa"
              icon="chatbubbles-outline"
            />
          }
        />

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
      </PageContainer>
    </SafeArea>
  );
}
