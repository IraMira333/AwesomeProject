import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import avatarDefault from "../Images/photoAvatar.@2xjpeg.jpeg";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrap}>
        <Image
          source={avatarURL ? { uri: avatarURL } : avatarDefault}
          style={styles.avatar}
          resizeMethod="scale"
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        extraData={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <HomePosts post={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "white",
  },
  profileWrap: {
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 16,
  },
  userInfo: {
    justifyContent: "center",
    height: 60,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
  username: { color: "#212121", fontSize: 13, fontWeight: "700" },
  email: { color: "#212121", fontSize: 11 },
});

export default PostsScreen;
