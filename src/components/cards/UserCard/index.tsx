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
  user: User; // dados do usuário
  onPress: () => void;
};

function UserCard({ user, onPress }: Props) {
  const navigation = useNavigation<NavigationProps>();

  /**
   * Navega diretamente para a tela de chat com o usuário selecionado
   * useCallback evita recriação desnecessária da função
   */
  const handleGoToChat = useCallback(() => {
    navigation.navigate("ChatDetails", {
      selectedUser: user,
    });
  }, [navigation, user]);

  return (
    // Wrapper clicável do card (leva para perfil)
    <TouchableOpacity onPress={onPress}>
      <Container>
        {/* Avatar do usuário */}
        {user.picture?.thumbnail && (
          <Avatar source={{ uri: user.picture.thumbnail }} />
        )}

        {/* Informações do usuário */}
        <Info>
          <Name numberOfLines={1} ellipsizeMode="tail">
            {user.name.first} {user.name.last}
          </Name>

          <Email numberOfLines={1} ellipsizeMode="tail">
            {user.email}
          </Email>
        </Info>

        {/* Botão para ir direto ao chat */}
        <ChatButton onPress={handleGoToChat}>
          <Ionicons name="chatbubbles-outline" size={25} color="#fff" />
        </ChatButton>
      </Container>
    </TouchableOpacity>
  );
}

/**
 * Memoização do componente para evitar re-renderizações desnecessárias
 * Só re-renderiza se o UUID do usuário mudar
 */
export default React.memo(UserCard, (prev, next) => {
  return prev.user.login.uuid === next.user.login.uuid;
});
