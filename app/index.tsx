import ErrorModal from "@/components/ErrorModal";
import PageLoading from "@/components/PageLoading";
import UserCard from "@/components/UserCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../src/theme/ThemeProvider";
import { usersMock } from "./usersMock";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

type UsersResponse = {
  data: User[];
};

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await axios.get<UsersResponse>(
          "https://reqres.in/api/users",
          {
            params: {
              page: 1,
              per_page: 6,
            },
            headers: {
              "x-api-key": "reqres_ddb02a73c6e54d11ad596201bbc7306e",
            },
          },
        );

        setUsers(response.data.data);
      } catch (err) {
        let message = "Erro ao buscar usuários";

        if (axios.isAxiosError(err)) {
          message =
            err.response?.data?.error ||
            err.response?.data?.message ||
            err.response?.statusText ||
            err.message;
        }

        setError(message);
        setShowError(true);
      } finally {
        setLoading(false);
      }
    };
    setUsers(usersMock);
    // fetchUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Switch value={isDark} onValueChange={toggleTheme} />

      {loading ? (
        <PageLoading />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserCard
              user={item}
              onPress={() => console.log("User pressed:", item)}
            />
          )}
        />
      )}
      <ErrorModal
        visible={showError}
        message={error}
        onClose={() => setShowError(false)}
      />
    </SafeAreaView>
  );
}
