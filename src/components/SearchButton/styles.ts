import styled from "styled-components/native";

export const Button = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;
