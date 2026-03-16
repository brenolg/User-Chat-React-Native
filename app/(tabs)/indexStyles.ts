import styled from "styled-components/native";

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  padding: 12px 36px;
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
  padding: 16px 36px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;
