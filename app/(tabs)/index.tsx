import ErrorModal from "@/components/ErrorModal";
import GenderFilter from "@/components/GenderFilter";
import PageLoading from "@/components/PageLoading";
import SearchButton from "@/components/MainButton";
import SearchInput from "@/components/SearchInput";
import ThemeToggle from "@/components/ThemeToggle";
import UserCard from "@/components/UserCard";
import { useUsers } from "@/context/UsersContext";
import { SafeArea } from "@/theme/commonStyles";
import User from "@/types/user";
import axios, { isAxiosError } from "axios";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import usersMock from "../../src/mocks/usersMock";
import { Container, Header } from "./indexStyles";

type UsersResponse = {
  results: User[];
};

export default function ThemeSwitch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState<"all" | "male" | "female">("all");
  const { users, setUsers } = useUsers();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await axios.get<UsersResponse>(
          "https://randomuser.me/api",
          {
            params: {
              page: 1,
              results: 10,
            },
          },
        );
        console.log(response.data);
        setUsers(response.data.results);
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

  const handleSearch = () => {
    console.log(search, gender);
  };

  return (
    <SafeArea>
      <Header>
        <SearchButton onPress={handleSearch} />
        <ThemeToggle />
      </Header>

      <Container>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Digite uma mensagem"
          icon="search"
        />

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
    </SafeArea>
  );
}
