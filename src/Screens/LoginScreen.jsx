import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import PhotoBG from "../Images/PhotoBG.png";

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={PhotoBG}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-170}
          >
            <View style={styles.container}>
              <View style={styles.regFormaBox}>
                <Text style={styles.formTitle}>{"Увійти"}</Text>

                <TextInput
                  placeholder="Адреса електронної пошти"
                  onChangeText={setEmail}
                  inputMode="email"
                  keyboardType="email-address"
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  placeholderTextColor={"#BDBDBD"}
                  style={[
                    styles.input,
                    focusedInput === "email" && styles.focusedInput,
                  ]}
                ></TextInput>
                <View>
                  <TextInput
                    placeholder="Пароль"
                    onChangeText={setPassword}
                    secureTextEntry={hidePassword}
                    placeholderTextColor={"#BDBDBD"}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput(null)}
                    style={[
                      styles.input,
                      focusedInput === "password" && styles.focusedInput,
                    ]}
                  ></TextInput>
                  <TouchableOpacity
                    onPress={() => setHidePassword(!hidePassword)}
                    style={styles.hideBtn}
                  >
                    <Text style={styles.hideBtnText}>
                      {hidePassword ? "Показати" : "Сховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Pressable
                  onPress={() => Alert.alert("Button pressed")}
                  style={({ pressed }) => [
                    styles.primaryBtn,
                    pressed && styles.primaryBtnPressed,
                  ]}
                >
                  <Text style={styles.btnText}>{"Увійти"}</Text>
                </Pressable>
                <TouchableOpacity
                  style={styles.secTextBtn}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.secText}>Немає акаунту? </Text>
                  <Text style={[styles.secText, styles.underlined]}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    width: "100%",
  },
  regFormaBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 78,
  },
  avatar: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  avatarBox: {
    position: "absolute",
    flex: 1,
    zIndex: 2,
    top: -60,
    alignSelf: "center",
  },
  avatarBtn: {
    position: "absolute",
    zIndex: 3,
    top: 76,
    right: -12.5,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  focusedInput: { borderColor: "#FF6C00", backgroundColor: "#FFFFFF" },

  svgContainer: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  formTitle: {
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    marginBottom: 33,
  },
  primaryBtn: {
    marginTop: 27,
    marginBottom: 16,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    height: 51,
  },
  primaryBtnPressed: { backgroundColor: "#ff6a00ab" },
  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  secTextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  secText: {
    fontSize: 16,
    color: "#1B4371",
  },
  underlined: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#1B4371",
  },
  hideBtn: {
    position: "absolute",
    right: 16,
    top: 13,
  },
  hideBtnText: { color: "#1B4371", fontSize: 16 },
});

export default LoginScreen;
