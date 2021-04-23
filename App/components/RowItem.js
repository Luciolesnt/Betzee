import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
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
    justifyContent: "space-between",
    fontSize: 16,
    },
});

export default ({ text, onPress, onLongPress }) => {
   const dispatch = useDispatch();
  return (
    <Row onPress={onPress} style={styles.row} onLongPress={onLongPress}>
      <Text style={styles.text}>{text}</Text>
    </Row>
  );
};
