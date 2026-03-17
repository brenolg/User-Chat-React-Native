import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
`;

export const SelectButton = styled.Pressable`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: flex-start;
  padding: 40px;
`;

export const ListContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  flex-shrink: 1;
`;

export const Option = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: 14px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;
