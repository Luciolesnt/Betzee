import React from "react";
import { View, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

import { Entypo, SimpleLineIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    backgroundColor: colors.orange,
    borderColor: "black",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  table: {
    paddingTop: 10,
  }
});

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.tableContainer}>
      <StatusBar hidden />
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Entypo name="cross" size={24} color={colors.grey} />
        </TouchableOpacity>
        <SimpleLineIcons name="options" size={24} color={colors.grey} />
      </View>
      <Table style={styles.table}>
        <Row data={[" ", "Lucie", "Gaëtan"]}></Row>
        <Rows />
      </Table>
    </SafeAreaView>
  );
};
