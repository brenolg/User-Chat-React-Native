import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, ButtonText } from "./styles";

type Props = {
  onPress: () => void;
};

export default function SearchButton({ onPress }: Props) {
  return (
    <Button onPress={onPress}>
      <Ionicons name="search" size={18} color="#fff" />
      <ButtonText>Buscar</ButtonText>
    </Button>
  );
}
