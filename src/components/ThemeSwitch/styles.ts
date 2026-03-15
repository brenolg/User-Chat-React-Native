import styled from "styled-components/native";
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  margin-right: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
