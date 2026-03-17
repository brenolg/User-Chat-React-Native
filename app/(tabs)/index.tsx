import ErrorModal from "@/components/ErrorModal";
import PageLoading from "@/components/PageLoading";
import SearchButton from "@/components/buttons/MainButton";
import Filter from "@/components/buttons/MainButton/Filter";
import UserCard from "@/components/cards/UserCard";
import ThemeToggle from "@/components/inputs/ThemeToggle";
import { useUsers } from "@/context/UsersContext";
import { PageContainer, SafeArea } from "@/theme/commonStyles";
import User from "@/types/user";
import axios, { isAxiosError } from "axios";
import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "./indexStyles";

type UsersResponse = {
  results: User[];
};

export default function ThemeSwitch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [gender, setGender] = useState<"all" | "male" | "female">("all");
  const [country, setCountry] = useState<"all" | "BR" | "US">("all");
  const { users, setUsers } = useUsers();
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchUsers = async (pageNumber = 1, isRefresh = false) => {
    try {
      if (isRefresh) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await axios.get<UsersResponse>(
        "https://randomuser.me/api",
        {
          params: {
            page: pageNumber,
            results: 20,
            seed: "app", // 🔥 importante pra paginação funcionar
            nat: country === "all" ? undefined : country,
            gender: gender === "all" ? undefined : gender,
          },
        },
      );

      setUsers((prev) =>
        isRefresh ? response.data.results : [...prev, ...response.data.results],
      );

      setPage(pageNumber);
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
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchUsers(1, true);
  }, []);

  const loadMore = () => {
    if (loadingMore) return;

    fetchUsers(page + 1);
  };

  const onRefresh = () => {
    fetchUsers(1, true);
  };

  const handleSearch = () => {
    fetchUsers(1, true);
  };

  const renderItem = useCallback(({ item }: { item: User }) => {
    return (
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
    );
  }, []);

  return (
    <SafeArea>
      <Header>
        <ThemeToggle />
      </Header>

      <PageContainer>
        <Filter
          value={gender}
          onChange={setGender}
          options={[
            { label: "Todos", value: "all", icon: "people" },
            { label: "Homens", value: "male", icon: "male" },
            { label: "Mulheres", value: "female", icon: "female" },
          ]}
        />

        <Filter
          value={country}
          onChange={setCountry}
          options={[
            { label: "Todos", value: "all", icon: "globe-outline" },
            { label: "Brasil", value: "BR", icon: "location-outline" },
            { label: "EUA", value: "US", icon: "location-outline" },
          ]}
        />
        <SearchButton onPress={handleSearch} text="Buscar" icon="search" />

        <FlatList
          data={users}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.login.uuid}
          renderItem={renderItem}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loadingMore ? <PageLoading /> : null}
          refreshing={loading}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
        />

        <ErrorModal
          visible={showError}
          message={error}
          onClose={() => setShowError(false)}
        />
      </PageContainer>
    </SafeArea>
  );
}
