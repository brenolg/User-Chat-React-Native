import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabsRoutes from "./TabsRoutes";

import ChatDetails from "../screens/ChatDetails";
import Profile from "../screens/Profile";

import { UsersProvider } from "@/context/UsersContext";
import { RootStackParamList } from "@/types/RootStackParamList";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "../theme/dark";
import { lightTheme } from "../theme/light";
import { AppThemeProvider, useTheme } from "../theme/ThemeProvider";

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  const { theme } = useTheme();

  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <UsersProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={TabsRoutes} />
            <Stack.Screen name="ChatDetails" component={ChatDetails} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </UsersProvider>
    </ThemeProvider>
  );
}

export default function Navigation() {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}
