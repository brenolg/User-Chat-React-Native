import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, ButtonText } from "./styles";

type Props = {
  onPress: () => void;
  text: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
};

export default function MainButton({ onPress, text, icon }: Props) {
  return (
    <Button onPress={onPress}>
      {icon && <Ionicons name={icon} size={18} color="#fff" />}

      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
