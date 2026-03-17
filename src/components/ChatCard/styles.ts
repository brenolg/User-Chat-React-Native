import styled from "styled-components/native";

export const CardContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  padding: 12px;
  border-radius: 12px;
  margin-top: 10px;

  background-color: ${({ theme }) => theme.colors.card};
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 12px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between; /* 👈 nome esquerda, data direita */
  align-items: center;
  margin-bottom: 4px;
`;
export const NameText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 14px;
`;
export const MessageText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;
