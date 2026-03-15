import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  margin: 16px;
  padding: 6px 12px;
  border-radius: 14px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
