import ChatMessage from "@/types/chat";
import User from "@/types/user";
import React, { createContext, useContext, useState } from "react";

type UsersContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;

  chat: ChatMessage[];
  setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
};

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [chat, setChat] = useState<ChatMessage[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers, chat, setChat }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within UsersProvider");
  }

  return context;
}
