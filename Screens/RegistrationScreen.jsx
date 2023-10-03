import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
} from "react-native";
import PhotoBG from "../Images/PhotoBG.png";
import avatar from "../Images/ava-177.jpg";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
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
            </View>
            <View>
              <Text style={styles.formTitle}>{"Реєстрація"}</Text>
            </View>
            <TextInput
              placeholder="Логін"
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
            ></TextInput>
            <TextInput
              placeholder="Адреса електронної пошти"
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
            ></TextInput>
            <TextInput
              placeholder="Пароль"
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
            ></TextInput>
            <View>
              <Text style={styles.btnText}>{"Зареєстуватися"}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
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
  formTitle: {
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "500",
    marginBottom: 33,
  },
  btnText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default RegistrationScreen;
