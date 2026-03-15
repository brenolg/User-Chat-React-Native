import { View, Text, Button } from "react-native";

export default function Profile({ navigation }: any) {
  return (
    <View>
      <Text>Profile Screen</Text>

      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
