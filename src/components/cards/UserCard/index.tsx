import { RootStackParamList } from "@/types/RootStackParamList";
import User from "@/types/user";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, ChatButton, Container, Email, Info, Name } from "./styles";

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ChatDetails"
>;

type Props = {
  user: User;
  onPress: () => void;
};

function UserCard({ user, onPress }: Props) {
  const navigation = useNavigation<NavigationProps>();

  const handleGoToChat = useCallback(() => {
    navigation.navigate("ChatDetails", {
      selectedUser: user,
    });
  }, [navigation, user]);

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
