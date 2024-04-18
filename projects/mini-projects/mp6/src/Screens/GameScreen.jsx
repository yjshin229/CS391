import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const GameScreen = ({ navigation }) => {
  const [randomNumber, setRandomNumber] = useState();
  const [input, setInput] = useState();
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    getRandomNumber();
  }, []);

  const getRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  const guessNumber = () => {
    const guessedNumber = parseInt(input);
    if (guessedNumber === randomNumber) {
      setInput("");
      return navigation.navigate("ResultScreen");
    } else {
      if (guessedNumber > randomNumber) {
        setDisplayMessage("Too Big. Try again!");
      } else {
        setDisplayMessage("Too small. Try again!");
      }
      renderDisplayMessage();
      return;
    }
  };

  const onChangeText = (text) => {
    setDisplayMessage("");
    setInput(text);
  };

  const renderDisplayMessage = () => {
    return <Text style={styles.displayMessage}>{displayMessage}</Text>;
  };

  return (
    <View style={styles.gameContainer}>
      {displayMessage !== null && renderDisplayMessage()}
      <View style={styles.textInputContainer}>
        <Text style={{ marginRight: 10 }}>Enter a Number: </Text>
        <CustomTextInput
          value={input}
          onChangeText={onChangeText}
          onFocus={() => setInput("")}
        />
      </View>
      <CustomButton title={"Guess"} onPress={guessNumber} disabled={!input} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  displayMessage: {
    color: "#ff0000",
    fontSize: 21,
    marginBottom: 20,
  },
});
