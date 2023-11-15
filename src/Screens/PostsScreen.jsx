import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import avatarDefault from "../Images/photoAvatar.jpeg";
import Forest from "../Images/Forest.jpg";
import Venice from "../Images/Venice.jpeg";
import Sunset from "../Images/Sunset.jpeg";
import HomePosts from "../components/HomePosts";

const PostsScreen = () => {
  const posts = [
    {
      id: 1,
      image: Forest,
      title: "Ліс",
      location: "Ivano-Frankivs'k Region, Ukraine",
      comments: 8,
    },
    {
      id: 2,
      image: Sunset,
      title: "Захід на Чорному морі",
      location: "Ukraine",
      comments: 3,
    },
    {
      id: 3,
      image: Venice,
      title: "Старий будиночок у Венеції",
      location: "Italy",
      comments: 50,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image
          source={avatarDefault}
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
  userBox: {
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
  username: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
  },
  email: {
    color: "#212121",
    fontSize: 11,
  },
});

export default PostsScreen;
