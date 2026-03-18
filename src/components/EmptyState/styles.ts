import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
`;
