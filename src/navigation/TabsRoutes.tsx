import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";

import ChatHistory from "../screens/ChatHistory";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopWidth: 0.5,
          height: 105,
          paddingBottom: 10,
          borderTopColor: theme.colors.border,
        },

        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondaryText,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={18} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ChatHistory"
        component={ChatHistory}
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble" size={18} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
