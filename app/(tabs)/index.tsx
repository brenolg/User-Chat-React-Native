import ErrorModal from "@/components/ErrorModal";
import PageLoading from "@/components/PageLoading";
import SearchButton from "@/components/buttons/MainButton";
import GenderFilter from "@/components/buttons/MainButton/GenderFilter";
import UserCard from "@/components/cards/UserCard";
import SearchInput from "@/components/inputs/SearchInput";
import ThemeToggle from "@/components/inputs/ThemeToggle";
import { useUsers } from "@/context/UsersContext";
import { PageContainer, SafeArea } from "@/theme/commonStyles";
import User from "@/types/user";
import axios, { isAxiosError } from "axios";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "./indexStyles";

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

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get<UsersResponse>(
        "https://randomuser.me/api",
        {
          params: {
            page: 1,
            nat: "BR",
            results: 10,
            gender: gender === "all" ? undefined : gender,
          },
        },
      );
      console.log(response.data.results);
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
  useEffect(() => {
    //setUsers(usersMock.results);
    fetchUsers();
  }, []);

  const handleSearch = () => {
    fetchUsers();
  };

  return (
    <SafeArea>
      <Header>
        <SearchButton onPress={handleSearch} text="Buscar" icon="search" />
        <ThemeToggle />
      </Header>

      <PageContainer>
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
      </PageContainer>
    </SafeArea>
  );
}
