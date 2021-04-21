import React, { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  Text,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import { Col, Grid } from "react-native-easy-grid";
import Dialog from "react-native-dialog";
import RowItem from "../components/RowItem";
import DiceModal from "../components/DiceModal";
import { addResult, countBonus, countTotal } from "../store/actions/player";

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
  grid: {
    padding: 5,
  },
  icons: {
    alignItems: "center",
    paddingTop: 5,
  },
  colTitles: {
    backgroundColor: colors.purple,
    borderRadius: 10,
  },
  player1: {
    marginLeft: 2,
    backgroundColor: colors.green,
    borderRadius: 10,
  },
  player2: {
    marginLeft: 2,
    backgroundColor: colors.red,
    borderRadius: 10,
  },
});

const Table = ({ navigation, playerOne }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [player1, setPlayer1] = useState("Lucie");
  const [visible, setVisible] = useState(false);
  const [diceModalVisible, setDiceModalVisible] = useState(false);
  const [diceName, setDiceName] = useState("dice-1");
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
    dispatch(addResult(id, full));
    if (id < 7 && id >= 0) {
      dispatch(countTotal());
    }
  };

  const handleOnPressUp = (id) => {
    if (id < 7 && id >= 0) {
      setDiceName("dice-" + id);
      setDiceModalVisible(!diceModalVisible);
    } else {
      Alert.alert("todo");
    }
  };


  return (
    <SafeAreaView style={styles.tableContainer}>
      <StatusBar hidden />
      <Grid style={styles.grid} size={1}>
        <DiceModal
          onPress={() => setDiceModalVisible(!diceModalVisible)}
          diceModalVisible={diceModalVisible}
          diceName={diceName}
        />
        <Col style={styles.colTitles}>
          <RowItem
            text={
              <View style={styles.icons}>
                <TouchableOpacity
                  onPress={() => navigation.dispatch(StackActions.popToTop())}
                >
                  <Entypo name="cross" size={34} color={colors.grey} />
                </TouchableOpacity>
              </View>
            }
          ></RowItem>
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
              onPress={() => handleOnPressUp(element.id)}
              onLongPress={() => handleLongPress(element.id, element.full)}
            />
          ))}
        </Col>
        <Col style={styles.player2} size={2}>
          <RowItem onPress={() => Alert.alert("Rename")} text="Gaëtan" />
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
  total: state.results.total,
});

export default connect(mapStateToProps)(Table);
