import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
// import {
//   useFonts,
//   Roboto_500Medium,
//   Roboto_400Regular,
// } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";

import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Roboto_500Medium,
  //   Roboto_400Regular,
  // });
  // if (!fontsLoaded) {
  //   SplashScreen.hideAsync();
  // }
  let [fontsLoaded] = useFonts({
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
