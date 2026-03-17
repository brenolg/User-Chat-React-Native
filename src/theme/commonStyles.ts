import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageContainer = styled.View`
  flex: 1;

  justify-content: flex-start;
  padding: 16px 36px;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const PageTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
