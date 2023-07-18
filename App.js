import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ResultDetailScreen from "./screens/ResultDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerTitle: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Business Search" component={HomeScreen} />
        <Stack.Screen name="Details" component={ResultDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
