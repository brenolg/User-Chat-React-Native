import styled from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 80%;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Message = styled.Text`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 6px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
