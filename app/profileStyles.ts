import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
`;

export const BackButton = styled.Pressable`
  padding: 4px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
