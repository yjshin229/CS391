import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const navigateToGameScreen = () => {
    return navigation.navigate("GameScreen");
  };
  return (
    <View style={styles.homeContainer}>
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
});
