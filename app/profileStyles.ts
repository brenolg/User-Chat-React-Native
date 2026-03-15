import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Email = styled.Text`
  font-size: 16px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
