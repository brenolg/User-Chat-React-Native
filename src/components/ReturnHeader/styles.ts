import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px 36px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
