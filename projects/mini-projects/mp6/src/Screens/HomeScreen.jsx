import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }) => {
  const navigateToGameScreen = () => {
    return navigation.navigate("GameScreen");
  };
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeText}>Welcome! Let's play a game!</Text>
      <CustomButton
        title={"Play Game"}
        onPress={navigateToGameScreen}
      ></CustomButton>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    color: "#9f72dd",
    fontWeight: 600,
    fontSize: 21,
    marginBottom: 20,
  },
});
