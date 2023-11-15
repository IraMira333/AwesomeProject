import { Text } from "react-native";
const CommentsScreen = ({ route }) => {
  const { postID } = route.params;
  return <Text>`CommentsScreen ${postID}` </Text>;
};

export default CommentsScreen;
