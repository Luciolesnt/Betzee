import React, { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import { Col, Grid } from "react-native-easy-grid";
import Dialog from "react-native-dialog";
import RowItem from "../components/RowItem";

import { Entypo, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  grid: {
    marginTop: 10,
  },
  colTitles: {
    backgroundColor: colors.purple,
    borderRadius: 5,
  },
  player1: {
    marginLeft: 2,
    backgroundColor: colors.green,
    borderRadius: 5,
  },
  player2: {
    marginLeft: 2,
    backgroundColor: colors.red,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation }) => {
  const [value, setValue] = useState("");
  const [player1, setPlayer1] = useState("Lucie")
  const [visible, setVisible] = useState(false);
  let newName;

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  
  const changeName = (event) => {
    console.log(event);
    newName = event;
  };

  const handleOK = () => {
    setVisible(false);
    if(newName === undefined){
      setPlayer1(player1);
    }
    else{
      setPlayer1(newName);
    }
  };


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
      <Grid style={styles.grid} size={1}>
        <Col style={styles.colTitles}>
          <RowItem />
          <RowItem text={<MaterialCommunityIcons name="dice-1" size={24} color="white" />} />
          <RowItem text={<MaterialCommunityIcons name="dice-2" size={24} color="white" />} />
          <RowItem text={<MaterialCommunityIcons name="dice-3" size={24} color="white" />} />
          <RowItem text={<MaterialCommunityIcons name="dice-4" size={24} color="white" />} />
          <RowItem text={<MaterialCommunityIcons name="dice-5" size={24} color="white" />} />
          <RowItem text={<MaterialCommunityIcons name="dice-6" size={24} color="white" />} />
          <RowItem text="Bonus" />
          <RowItem text="Total" />
          <RowItem text={<MaterialCommunityIcons name="numeric-3-box-multiple" size={24} color="white" />} />
          <RowItem text={<MaterialCommunityIcons name="numeric-4-box-multiple" size={24} color="white" />} />
          <RowItem text="Full" />
          <RowItem text="P Suite" />
          <RowItem text="G Suite" />
          <RowItem text="Yahtzee" />
          <RowItem text="Total" />
        </Col>
        <Col style={styles.player1} size={2}>
          <RowItem onPress={showModal} text={player1} />
          <Dialog.Container visible={visible}>
            <Dialog.Title>Nouveau nom</Dialog.Title>
            <Dialog.Input placeholder={player1} onChangeText={changeName} />
            <Dialog.Button label="Annuler" onPress={handleCancel} />
            <Dialog.Button label="OK" onPress={handleOK} />
          </Dialog.Container>
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
        </Col>
        <Col style={styles.player2} size={2}>
          <RowItem
            onPress={() => Alert.alert("Rename")}
            onLongPress={() => console.log("caca")}
            text="Gaëtan"
          />
          <RowItem
            onPress={() => Alert.alert("Modal")}
            onLongPress={() => setValue("3")}
            text={value}
          />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
          <RowItem />
        </Col>
      </Grid>
    </SafeAreaView>
  );
};
