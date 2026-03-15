import { View, Text, Button } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Ir para Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
