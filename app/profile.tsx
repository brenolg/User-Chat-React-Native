import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Profile() {
  return (
    <View>
      <Text>Profile Screen</Text>

      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
}
