import MainButton from "@/components/buttons/MainButton";
import ChatCard from "@/components/cards/ChatCard";
import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/inputs/SearchInput";
import UserPicker from "@/components/inputs/UserSelect";
import { useUsers } from "@/context/UsersContext";
import { PageContainer, PageTitle, SafeArea } from "@/styles/commonStyles";
import ChatMessage from "@/types/chat";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { BtnRow } from "../../styles/commonStyles";

export default function ChatHistory() {
  const [userId, setUserId] = useState<string>(""); // ID do usuário selecionado
  const [message, setMessage] = useState(""); // Mensagem digitada
  const { users, setChat, chat } = useUsers(); // Dados globais (usuários e mensagens)

  /**
   * Função responsável por enviar mensagem
   */
  const sendMsg = () => {
    // Busca o usuário selecionado na lista
    const selectedUser = users.find((user) => user.login.uuid === userId);

    if (!selectedUser) return; // Se não encontrar, não envia

    // Cria nova mensagem
    const newMessage: ChatMessage = {
      id: String(Date.now()),
      img: selectedUser.picture.thumbnail,
      userId: selectedUser.login.uuid,
      name: `${selectedUser.name.first} ${selectedUser.name.last}`,
      createdAt: new Date().toString(),
      msg: message,
    };

    setChat((prev) => [newMessage, ...prev]);
    setMessage("");
  };

  // Desabilita envio se não houver mensagem ou usuário selecionado
  const chatDisabled = !message.trim() || !userId;

  return (
    <SafeArea style={{ flex: 1 }}>
      <PageContainer style={{ flex: 1 }}>
        {/* Título da tela */}
        <PageTitle style={{ marginTop: 24 }}>Histórico de mensagens</PageTitle>

        {/* Lista de mensagens */}
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
          ListEmptyComponent={
            <EmptyState
              title="Sem mensagens"
              description="Envie a primeira mensagem para iniciar a conversa"
              icon="chatbubbles-outline"
            />
          }
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        />

        {/* Input de mensagem */}
        <SearchInput
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem..."
          icon="chatbubbles-outline"
        />
        <BtnRow>
          {/* Seleção de usuário */}
          <UserPicker value={userId} onChange={(id) => setUserId(id)} />

          {/* Botão de envio */}
          <MainButton
            icon="send-outline"
            text="Enviar mensagem"
            onPress={sendMsg}
            disabled={chatDisabled}
          />
        </BtnRow>
      </PageContainer>
    </SafeArea>
  );
}
