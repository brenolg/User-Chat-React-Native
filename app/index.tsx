import ErrorModal from "@/components/ErrorModal";
import GenderFilter from "@/components/GenderFilter";
import PageLoading from "@/components/PageLoading";
import SearchInput from "@/components/SearchInput";
import ThemeToggle from "@/components/ThemeToggle";
import UserCard from "@/components/UserCard";
import User from "@/types/user";
import axios, { isAxiosError } from "axios";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, Header } from "./indexStyles";
import usersMock from "./usersMock";

type UsersResponse = {
  data: User[];
};

export default function ThemeSwitch() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState<"all" | "male" | "female">("all");

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
              "x-api-key": "reqres_dd1f705049a9464783a7628eaa861b48",
            },
          },
        );

        setUsers(response.data.data);
      } catch (err) {
        let message = "Erro ao buscar usuários";

        if (isAxiosError(err)) {
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
    setUsers(usersMock.results);
    //fetchUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <ThemeToggle />
      </Header>

      <Container>
        <SearchInput value={search} onChangeText={setSearch} />

        <GenderFilter value={gender} onChange={setGender} />

        {loading ? (
          <PageLoading />
        ) : (
          <FlatList
            data={users}
            style={{ flex: 1 }}
            keyExtractor={(item) => item.login.uuid}
            renderItem={({ item }) => (
              <UserCard
                user={{
                  id: item.login.uuid,
                  first_name: item.name.first,
                  last_name: item.name.last,
                  email: item.email,
                  avatar: item.picture.medium,
                }}
                onPress={() =>
                  router.push({
                    pathname: "/profile",
                    params: { user: JSON.stringify(item) },
                  })
                }
              />
            )}
          />
        )}
        <ErrorModal
          visible={showError}
          message={error}
          onClose={() => setShowError(false)}
        />
      </Container>
    </SafeAreaView>
  );
}
