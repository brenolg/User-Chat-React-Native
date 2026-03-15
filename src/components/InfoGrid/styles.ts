import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 24px;
`;

export const Item = styled.View`
  width: 50%;
  margin-bottom: 20px;
`;

export const LeftItem = styled(Item)`
  align-items: flex-start;
`;

export const RightItem = styled(Item)`
  align-items: flex-end;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
