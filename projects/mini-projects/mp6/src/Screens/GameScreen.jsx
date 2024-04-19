import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const GameScreen = ({ navigation }) => {
  const [randomNumber, setRandomNumber] = useState();
  const [input, setInput] = useState();
  const [displayMessage, setDisplayMessage] = useState("");
  const [score, setScore] = useState(0);

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
      return navigation.navigate("ResultScreen", { score: score });
    } else {
      if (guessedNumber > randomNumber) {
        setDisplayMessage("Lower. Try again!");
        setScore(score + 1);
      } else {
        setDisplayMessage("Higher. Try again!");
        setScore(score + 1);
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
    return (
      <Text
        style={[
          styles.displayMessage,
          { color: displayMessage[0] === "L" ? "#ff0000" : "#0000ff" },
        ]}
      >
        {displayMessage}
      </Text>
    );
  };

  const renderGameMessage = () => {
    return (
      <Text style={styles.gameMessage}>
        Guess the Number!{"\n"}(Natural Numbers)
      </Text>
    );
  };

  return (
    <View style={styles.gameContainer}>
      {renderGameMessage()}
      {displayMessage !== null && renderDisplayMessage()}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  displayMessage: {
    fontSize: 21,
    marginBottom: 20,
  },
  gameMessage: {
    color: "#9f72dd",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
});
