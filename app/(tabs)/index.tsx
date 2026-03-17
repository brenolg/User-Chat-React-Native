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
import { FlatList, RefreshControl } from "react-native";
import { useTheme } from "styled-components";
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
  const theme = useTheme();

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
            nat: country === "all" ? undefined : country,
            gender: gender === "all" ? undefined : gender,
          },
        },
      );

      console.log(pageNumber);
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
    if (loadingMore || loading) return;

    fetchUsers(page + 1);
  };

  const onRefresh = () => {
    fetchUsers(1, true);
  };

  const handleSearch = () => {
    fetchUsers(1, true);
  };

  const handlePress = useCallback((item: User) => {
    router.push({
      pathname: "/profile",
      params: { user: JSON.stringify(item) },
    });
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: User }) => {
      return <UserCard user={item} onPress={() => handlePress(item)} />;
    },
    [handlePress],
  );

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
          keyExtractor={(item) => item.login.uuid}
          renderItem={renderItem}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loadingMore ? <PageLoading /> : null}
          refreshing={loading}
          onRefresh={onRefresh}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          showsVerticalScrollIndicator={false}
          getItemLayout={(_, index) => ({
            length: 98,
            offset: 98 * index,
            index,
          })}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
              colors={[theme.colors.primary]} // Android
              tintColor={theme.colors.primary} //  iOS
              progressBackgroundColor={theme.colors.card}
            />
          }
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
