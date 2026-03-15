import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <Text>Profile Screen</Text>

      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
}
