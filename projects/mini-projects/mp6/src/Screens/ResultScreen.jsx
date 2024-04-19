import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const ResultScreen = ({ navigation, route }) => {
  const score = route.params.score;

  const onPress = () => {
    return navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.scoreMessage}>
        You Won! {"\n"} Your score is: {score}
      </Text>
      <CustomButton title={"Back to HomeScreen"} onPress={onPress} />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreMessage: {
    color: "#00ff15",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 20,
  },
});
