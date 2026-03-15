import React from "react";
import { Modal } from "react-native";
import {
  Button,
  ButtonText,
  Message,
  ModalContainer,
  Overlay,
  Title,
} from "./styles";

type Props = {
  visible: boolean;
  message: string | null;
  onClose: () => void;
};

export default function ErrorModal({ visible, message, onClose }: Props) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay>
        <ModalContainer>
          <Title>Ocorreu um erro</Title>

          <Message>{message}</Message>

          <Button onPress={onClose}>
            <ButtonText>Fechar</ButtonText>
          </Button>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
}
