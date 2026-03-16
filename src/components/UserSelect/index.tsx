import { useUsers } from "@/context/UsersContext";
import React, { useState } from "react";
import { FlatList, Modal, Pressable } from "react-native";
import {
  Avatar,
  Container,
  Label,
  ListContainer,
  ModalContainer,
  Option,
  Row,
  SelectButton,
} from "./styles";

type Props = {
  value?: string;
  onChange: (id: string) => void;
};

export default function UserSelect({ value, onChange }: Props) {
  const { users } = useUsers();
  const [open, setOpen] = useState(false);

  const selected = users.find((u) => u.login.uuid === value);

  return (
    <Container>
      <SelectButton onPress={() => setOpen(true)}>
        <Row>
          <Avatar
            source={{
              uri: selected
                ? selected.picture.thumbnail
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            }}
          />

          <Label>
            {selected
              ? `${selected.name.first} ${selected.name.last}`
              : "Selecione o usuário"}
          </Label>
        </Row>
      </SelectButton>

      <Modal visible={open} transparent animationType="fade">
        <ModalContainer>
          <Pressable
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            onPress={() => setOpen(false)}
          />

          <ListContainer>
            <FlatList
              data={users}
              keyExtractor={(item) => item.login.uuid}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 10 }}
              renderItem={({ item }) => (
                <Option
                  onPress={() => {
                    onChange(item.login.uuid);
                    setOpen(false);
                  }}
                >
                  <Avatar source={{ uri: item.picture.thumbnail }} />

                  <Label>
                    {item.name.first} {item.name.last}
                  </Label>
                </Option>
              )}
            />
          </ListContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
