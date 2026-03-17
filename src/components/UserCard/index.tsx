import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, ChatButton, Container, Email, Info, Name } from "./styles";

type Props = {
  user: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar?: string;
  };
  onPress: () => void;
};

export default function UserCard({ user, onPress }: Props) {
  const goToChat = () => {
    router.push({
      pathname: "/chatDetails",
      params: {
        selectedUser: JSON.stringify(user),
      },
    });
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        {user.avatar && <Avatar source={{ uri: user.avatar }} />}

        <Info>
          <Name>
            {user.first_name} {user.last_name}
          </Name>

          <Email>{user.email}</Email>
        </Info>

        <ChatButton onPress={goToChat}>
          <Ionicons name="chatbubbles-outline" size={25} color="#fff" />
        </ChatButton>
      </Container>
    </TouchableOpacity>
  );
}
