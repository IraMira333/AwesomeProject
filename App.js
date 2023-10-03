import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  return <RegistrationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
