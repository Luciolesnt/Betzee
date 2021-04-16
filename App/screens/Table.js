import React, { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { StackActions } from "@react-navigation/native";
import { Col, Grid } from "react-native-easy-grid";
import Dialog from "react-native-dialog";
import RowItem from "../components/RowItem";
import { addResult } from "../store/actions/player";

import {
  Entypo,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
});

const Table = ({ navigation, playerOne }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [player1, setPlayer1] = useState("Lucie");
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
    if (newName === undefined) {
      setPlayer1(player1);
    } else {
      setPlayer1(newName);
    }
  };

  const handleLongPress = (id, full) => {
    console.log("caca");
    dispatch(addResult(id, full));
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
          <RowItem
            text={
              <MaterialCommunityIcons name="dice-1" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="dice-2" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="dice-3" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="dice-4" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="dice-5" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="dice-6" size={24} color="white" />
            }
          />
          <RowItem text="Bonus" />
          <RowItem text="Total" />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="numeric-3-box-multiple"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="numeric-4-box-multiple"
                size={24}
                color="white"
              />
            }
          />
          <RowItem text="Full" />
          <RowItem text="P Suite" />
          <RowItem text="G Suite" />
          <RowItem text="Yahtzee" />
          <RowItem text="Chance" />
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
          {playerOne.map((element) => (
            <RowItem
              key={element.id}
              text={element.result}
              onPress={() => Alert.alert("todo")}
              onLongPress={() => handleLongPress(element.id, element.full)}
            />
          ))}
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
          <RowItem />
        </Col>
      </Grid>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  playerOne: state.results.playerOne,
});

// const mapDispatchToProps = (dispatch) => ({
//     addResult: (id, full) => {
//       console.log("pipi");
//       dispatch(addResult(id, full));
//     },
//   });

export default connect(mapStateToProps)(Table);
