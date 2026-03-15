import styled from "styled-components/native";

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  position: relative;
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
  padding-top: 12px;
  background-color: ${({ theme }) => theme.colors.background};
`;
