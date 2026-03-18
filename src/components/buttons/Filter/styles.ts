import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const FilterButton = styled.Pressable<{ active: boolean }>`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border-radius: 12px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.card};
`;

export const FilterText = styled.Text<{ active: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme, active }) => {
    if (theme.mode === "dark") {
      return theme.colors.text;
    }
    return active ? theme.colors.background : theme.colors.text;
  }};
`;
