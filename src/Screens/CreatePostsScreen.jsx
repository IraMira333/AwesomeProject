import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  Alert,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Forest from "../Images/Forest.jpg";

import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  const [postData, setPostData] = useState({});
  const [imgURI, setImgURI] = useState(null);
  const [focusedInput, setFocusedInput] = useState({});

  const onFocus = (field) => {
    setFocusedInput((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };
  const onBlur = (field) => {
    setFocusedInput((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };
  const handleInputChange = (field, newText) => {
    setPostData({ ...postData, [field]: newText.trim() });
  };
  const onDeletePost = () => {
    setPostData({});
    setImgURI(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <Pressable onPress={() => Alert.alert("Button pressed")}>
            <Feather name="arrow-left" size={24} color="#212121CC" />
          </Pressable>

          <Text>Створити публікацію</Text>
          <View style={styles.postImgContainer}>
            <Image source={imgURI} style={styles.image} />

            <View style={styles.cameraWrap}>
              <Pressable
                style={[
                  styles.cameraRoundBox,
                  postData.image && styles.cameraWithImage,
                ]}
              >
                <FontAwesome
                  name="camera"
                  size={24}
                  color={postData.image ? "#FFFFFF" : "#BDBDBD"}
                />
              </Pressable>
            </View>
          </View>
          <Text style={styles.addFotoText}>
            {imgURI ? "Завантажте фотоo" : "Редагувати фото"}
          </Text>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              style={[styles.input, focusedInput.title && styles.focusedInput]}
              onFocus={() => onFocus("title")}
              onBlur={() => onBlur("title")}
              onChangeText={(text) => handleInputChange("title", text)}
            ></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
            <TextInput
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              onFocus={() => onFocus("location")}
              onBlur={() => onBlur("location")}
              onChangeText={(text) => handleInputChange("location", text)}
              defaultValue={postData.location}
              style={[
                styles.input,
                styles.locationInput,
                focusedInput.location && styles.focusedInput,
              ]}
            ></TextInput>
          </View>

          <Pressable
            onPress={() => Alert.alert("Button pressed")}
            style={({ pressed }) => [
              styles.primaryBtn,
              pressed && styles.primaryBtnPressed,
            ]}
          >
            <Text style={styles.btnText}>{"Опублікувати"}</Text>
          </Pressable>
        </View>

        <View style={styles.trashWrap}>
          <Pressable
            onPress={onDeletePost}
            style={({ pressed }) => [
              styles.trashButton,
              pressed && styles.trashButtonPressed,
            ]}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: "space-between",
  },
  postImgContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  inputWrap: {
    position: "relative",
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  cameraWrap: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
  },
  cameraRoundBox: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  cameraWithImage: {
    backgroundColor: "rgba(255, 255, 255, 0.30)",
  },
  addFotoText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 16,
    marginTop: 8,
  },
  input: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "500",
    height: 19,
  },
  locationIcon: {
    position: "absolute",
    top: 13,
  },
  locationInput: {
    marginLeft: 28,
  },
  primaryBtn: {
    marginTop: 32,
    marginBottom: 16,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#F6F6F6",
    height: 51,
  },
  primaryBtnPressed: { backgroundColor: "#ff6a00ab" },
  btnText: {
    color: "#BDBDBD",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },
  trashWrap: { alignItems: "center", justifyContent: "center" },
  trashButton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  trashButtonPressed: { backgroundColor: "#FF6C00" },
});
export default CreatePostsScreen;
