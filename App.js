import "react-native-gesture-handler";

// import { StatusBar } from "expo-status-bar";

import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import MapScreen from "./src/Screens/MapScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import HeaderPosts from "./src/components/HeaderPosts";

const MainStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });
  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={PostsScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            header: () => <HeaderPosts title="Comments" />,
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: true,
            header: () => <HeaderPosts title="Map" />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
