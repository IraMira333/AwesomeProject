import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const HomePosts = ({ post }) => {
  const navigation = useNavigation();
  const commentsExist = post.comments > 0;
  const foto = post.image;
  return (
    <View style={styles.postContainer}>
      <Image style={styles.postImage} source={foto} />
      <View style={styles.titleWrap}>
        <Text style={styles.postTitle}>{post.title}</Text>
      </View>
      <View style={styles.postInfoBox}>
        <View style={styles.commentsBox}>
          <Pressable
            onPress={() => navigation.navigate("Comments", { postID: post.id })}
            style={({ pressed }) => [
              styles.wrapGap6,
              pressed && styles.pressed,
            ]}
          >
            <Feather
              name="message-circle"
              size={24}
              color={commentsExist ? "#FF6C00" : "#BDBDBD"}
              style={styles.iconRotateY}
            />
            <Text
              style={[
                styles.commentsAmount,
                commentsExist && styles.commentsExist,
              ]}
            >
              {post.comments}
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Map")}
          style={({ pressed }) => [styles.wrapGap6, pressed && styles.pressed]}
        >
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={styles.location}>{post.location}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 16,
  },
  postImage: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    marginBottom: 2,
  },
  postTitle: {
    paddingVertical: 8,
    color: "#212121",
    fontSize: 16,
    fontWeight: "400",
  },

  titleWrap: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  commentsBox: {
    flexDirection: "row",
    columnGap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  iconRotateY: {
    transform: [{ rotateY: "180deg" }],
  },
  commentsAmount: {
    color: "#BDBDBD",
    fontSize: 16,
    paddingRight: 4,
  },
  commentsExist: {
    color: "#212121",
  },
  wrapGap6: {
    flexDirection: "row",
    gap: 6,
  },

  location: {
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },

  pressed: {
    backgroundColor: "#bdbdbd7a",
    borderRadius: 8,
  },

  postInfoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomePosts;
