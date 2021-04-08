import React from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StackActions } from "@react-navigation/native";
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

const tableContent = {
  tableHead: [" ", "Lucie", "Gaëtan"],
  tableTitle: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "Total",
    "Bonus",
    "x3",
    "x4",
    "Full",
    "P Suite",
    "G Suite",
    "Yahtzee",
    "Chance",
    "Total",
  ],
  tableData: [
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
    ["5", "3"],
  ],
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  table: {
  },
  row: {
    height: 40,
  },
  tableWrapper: {
    flexDirection: "row",
  },
  col: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: colors.green,
  },
  rows: {
    height: 35,
    borderTopWidth: 1,
    borderColor: colors.red,
  },
  text: {
    textAlign: "center",
  },
});

export default () => {
  return (
    <SafeAreaView style={styles.tableContainer}>
      <StatusBar hidden />
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <Entypo name="cross" size={24} color={colors.grey} />
        </TouchableOpacity>
        <SimpleLineIcons name="options" size={24} color={colors.grey} />
      </View>
      <Table style={styles.table}>
        <Row
          data={tableContent.tableHead}
          style={styles.row}
          flexArr={[1,2,2]}
          textStyle={styles.text}
          onPress={() => Alert.alert("caca")}
        />
        <TableWrapper style={styles.tableWrapper}>
          <Col
            style={styles.col}
            heightArr={[
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
              35,
            ]}
            data={tableContent.tableTitle}
            textStyle={styles.text}
          />
          <Rows
            style={styles.rows}
            flexArr={[1,1]}
            data={tableContent.tableData}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </SafeAreaView>
  );
};
