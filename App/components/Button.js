import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    width: screen.width * 0.6,
    height: screen.height * 0.1,
    backgroundColor: colors.orange,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 100,
  },
  buttonText: {
    color: colors.blue,
    fontSize: 50,
    textTransform: "uppercase",
    fontWeight: "800",
    textAlign: "center",
  },
});

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
