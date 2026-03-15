import ThemeSwitch from "@/components/ThemeSwitch";
import { router } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <ThemeSwitch />

      <Button title="Ir para Profile" onPress={() => router.push("/profile")} />
    </SafeAreaView>
  );
}
