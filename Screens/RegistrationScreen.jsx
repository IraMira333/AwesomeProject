import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import PhotoBG from "../Images/PhotoBG.png";

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
              <View style={styles.avatar}></View>
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
});

export default RegistrationScreen;
