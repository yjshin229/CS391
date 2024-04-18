import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

const CustomTextInput = ({ value, onChangeText, onFocus }) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        returnKeyType="done"
        keyboardType="numeric"
        placeholder="99"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
      ></TextInput>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: "flex-start",
    width: 200,
    padding: 10,
  },
});
