import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Container, Email, Info, Name } from "./styles";

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
      </Container>
    </TouchableOpacity>
  );
}
