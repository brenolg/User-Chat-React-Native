import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin: 8px 0px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 12px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Email = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;
