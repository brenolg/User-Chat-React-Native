import User from "@/types/user";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, ChatButton, Container, Email, Info, Name } from "./styles";

type Props = {
  user: User;
  onPress: () => void;
};

function UserCard({ user, onPress }: Props) {
  const handleGoToChat = useCallback(() => {
    router.push({
      pathname: "/chatDetails",
      params: {
        selectedUser: JSON.stringify(user),
      },
    });
  }, [user]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        {user.picture?.thumbnail && (
          <Avatar source={{ uri: user.picture.thumbnail }} />
        )}

        <Info>
          <Name numberOfLines={1} ellipsizeMode="tail">
            {user.name.first} {user.name.last}
          </Name>

          <Email numberOfLines={1} ellipsizeMode="tail">
            {user.email}
          </Email>
        </Info>

        <ChatButton onPress={handleGoToChat}>
          <Ionicons name="chatbubbles-outline" size={25} color="#fff" />
        </ChatButton>
      </Container>
    </TouchableOpacity>
  );
}

export default React.memo(UserCard, (prev, next) => {
  return prev.user.login.uuid === next.user.login.uuid;
});
