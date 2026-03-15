import PageLoading from "@/components/PageLoading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../src/theme/ThemeProvider";

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
  const [loading, setLoading] = useState(true);
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
      } catch (err: any) {
        setError(err.message || "Erro ao buscar usuários");
        setShowError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
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
            <View style={{ padding: 10 }}>
              <Text>
                {item.first_name} {item.last_name}
              </Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      )}

      <Modal visible={showError} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Ocorreu um erro
            </Text>

            <Text style={{ marginBottom: 20 }}>{error}</Text>

            <Pressable
              onPress={() => setShowError(false)}
              style={{
                backgroundColor: "#007AFF",
                padding: 10,
                borderRadius: 6,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff" }}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
