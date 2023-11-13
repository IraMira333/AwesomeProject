import {
  Pressable,
  Text,
  View,
  Alert,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Forest from "../Images/Forest.jpg";

import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = () => {
  return (
    <View>
      <Pressable onPress={() => Alert.alert("Button pressed")}>
        <Feather name="arrow-left" size={24} color="#212121CC" />
      </Pressable>

      <Text>Створити публікацію</Text>

      <Image source={Forest} style={{ width: 343, height: 240 }} />
      <Pressable>
        <Text>Редагувати фото</Text>
      </Pressable>

      <TextInput></TextInput>
      <TextInput></TextInput>
      <Pressable
        onPress={() => Alert.alert("Button pressed")}
        style={({ pressed }) => [
          styles.primaryBtn,
          pressed && styles.primaryBtnPressed,
        ]}
      >
        <Text style={styles.btnText}>{"Опублікувати"}</Text>
      </Pressable>
      <View>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
});
export default CreatePostsScreen;
