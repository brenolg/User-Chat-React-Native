import EmptyState from "@/components/EmptyState";
import ErrorModal from "@/components/ErrorModal";
import PageLoading from "@/components/PageLoading";
import Filter from "@/components/buttons/Filter";
import SearchButton from "@/components/buttons/MainButton";
import UserCard from "@/components/cards/UserCard";
import ThemeToggle from "@/components/inputs/ThemeToggle";
import { useUsers } from "@/context/UsersContext";
import { PageContainer, SafeArea } from "@/styles/commonStyles";
import { RootStackParamList } from "@/types/RootStackParamList";
import User from "@/types/user";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios, { isAxiosError } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { useTheme } from "styled-components";
import { Header } from "./styles";

type UsersResponse = {
  results: User[];
};
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Profile">;

export default function Home() {
  const [loading, setLoading] = useState(false); // Loading inicial / refresh
  const [error, setError] = useState<string | null>(null); // Mensagem de erro
  const [showError, setShowError] = useState(false); // Controle do modal de erro

  // Estados de filtros
  const [gender, setGender] = useState<"all" | "male" | "female">("all");
  const [country, setCountry] = useState<"all" | "BR" | "US">("all");

  // Controle de paginação
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false); // Loading ao carregar mais itens

  // Contexto global de usuários
  const { users, setUsers } = useUsers();

  const theme = useTheme();
  const navigation = useNavigation<NavigationProps>();

  /**
   * Função responsável por buscar usuários da API
   * @param pageNumber número da página
   * @param isRefresh define se é refresh (substitui lista) ou paginação (append)
   */
  const fetchUsers = async (pageNumber = 1, isRefresh = false) => {
    try {
      // Define loading dependendo do contexto
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
            nat: country === "all" ? undefined : country, // filtro por país
            gender: gender === "all" ? undefined : gender, // filtro por gênero
          },
        },
      );

      // Atualiza lista de usuários
      setUsers((prev) =>
        isRefresh ? response.data.results : [...prev, ...response.data.results],
      );

      setPage(pageNumber);
    } catch (err) {
      // Tratamento de erro com fallback
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

  // Carregamento inicial ao montar o componente
  useEffect(() => {
    fetchUsers(1, true);
  }, []);

  // Função chamada ao chegar no final da lista (infinite scroll)
  const loadMore = () => {
    if (loadingMore || loading) return; // evita múltiplas chamadas

    fetchUsers(page + 1);
  };

  // Pull-to-refresh
  const onRefresh = () => {
    fetchUsers(1, true);
  };

  // Botão de busca aplica filtros e recarrega lista
  const handleSearch = () => {
    fetchUsers(1, true);
  };

  // Navega para tela de perfil do usuário
  const handlePress = useCallback(
    (item: User) => {
      navigation.navigate("Profile", {
        user: item,
      });
    },
    [navigation],
  );

  // Renderização de cada item da lista (otimizada com useCallback)
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
          onEndReached={loadMore} // Infinite scroll
          onEndReachedThreshold={0.5}
          ListFooterComponent={loadingMore ? <PageLoading /> : null} // Loading no final da lista
          refreshing={loading}
          onRefresh={onRefresh} // Pull to refresh
          initialNumToRender={10} // Otimizações de performance
          maxToRenderPerBatch={10} // Otimizações de performance
          windowSize={5} // Otimizações de performance
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyState
              title="Nenhum usuário encontrado"
              description="Tente ajustar os filtros ou buscar novamente"
              icon="people-outline"
            />
          }
          getItemLayout={(_, index) => ({
            // Melhora performance com altura fixa
            length: 98,
            offset: 98 * index,
            index,
          })}
          refreshControl={
            // Customização do refresh (Android/iOS)
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
