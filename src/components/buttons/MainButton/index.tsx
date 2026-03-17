import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, ButtonText } from "./styles";

type Props = {
  onPress: () => void;
  text: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  disabled?: boolean;
};

export default function MainButton({ onPress, text, icon, disabled }: Props) {
  return (
    <Button onPress={onPress} disabled={disabled} $disabled={disabled}>
      {icon && (
        <Ionicons
          name={icon}
          size={18}
          color="#fff"
          disabled={disabled}
          $disabled={disabled}
        />
      )}

      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
