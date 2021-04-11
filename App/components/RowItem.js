import React from "react";
import { Text, StyleSheet } from "react-native";
import { Row } from "react-native-easy-grid";

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
  },
});

export default ({ text, onPress, onLongPress }) => {
  return (
    <Row onPress={onPress} style={styles.row} onLongPress={onLongPress}>
      <Text style={styles.text}>{text}</Text>
    </Row>
  );
};
