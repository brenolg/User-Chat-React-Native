import User from "@/types/user";

export type RootStackParamList = {
  Tabs: undefined;
  ChatDetails: { selectedUser: User };
  Profile: { user: User };
};
