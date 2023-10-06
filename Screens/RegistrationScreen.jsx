import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
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
import { AntDesign } from "@expo/vector-icons";
import PhotoBG from "../Images/PhotoBG.png";
import avatar from "../Images/ava-177.jpg";

//const avatar = null;

const RegistrationScreen = () => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-147}
        style={styles.container}
      >
        <ImageBackground
          style={styles.background}
          source={PhotoBG}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.regFormaBox}>
              <View style={styles.avatarBox}>
                <View style={styles.avatar}>
                  <Image source={avatar} style={styles.avatar} />
                </View>
                {avatar ? (
                  <Pressable
                    onPress={() => alert("Delete image")}
                    style={({ pressed }) => [
                      styles.avatarBtn,
                      pressed && styles.avatarBtnPressed,
                    ]}
                  >
                    <View style={styles.svgContainer}>
                      <AntDesign
                        name="closecircleo"
                        size={24}
                        color="#BDBDBD"
                      />
                    </View>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => alert("Add image")}
                    style={({ pressed }) => [
                      styles.avatarBtn,
                      pressed && styles.avatarBtnPressed,
                    ]}
                  >
                    <View style={styles.svgContainer}>
                      <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                    </View>
                  </Pressable>
                )}
              </View>
              <View>
                <Text style={styles.formTitle}>{"Реєстрація"}</Text>
              </View>
              <TextInput
                autoFocus
                placeholder="Логін"
                onChangeText={setLogin}
                onFocus={() => setFocusedInput("login")}
                onBlur={() => setFocusedInput(null)}
                placeholderTextColor={"#BDBDBD"}
                style={[
                  styles.input,
                  focusedInput === "login" && styles.focusedInput,
                ]}
              ></TextInput>
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
                style={styles.primaryBtn}
              >
                <Text style={styles.btnText}>{"Зареєстуватися"}</Text>
              </Pressable>
              <TouchableOpacity
                style={styles.secTextBtn}
                onPress={() => alert("Login exist pressed")}
              >
                <Text style={styles.secText}>Вже є акаунт? </Text>
                <Text style={[styles.secText, styles.underlined]}>Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
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
    bottom: 0,
    top: 0,
    flex: 1,
    width: "100%",
  },
  regFormaBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 16,
    paddingTop: 92,
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
    top: 16,
  },
  hideBtnText: { color: "#1B4371", fontSize: 16 },
});

export default RegistrationScreen;
