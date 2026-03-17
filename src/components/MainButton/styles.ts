import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? "#94A3B8" : theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;
