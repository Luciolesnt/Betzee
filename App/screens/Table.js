import React, { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import { Col, Grid } from "react-native-easy-grid";
import Dialog from "react-native-dialog";
import RowItem from "../components/RowItem";
import DiceModal from "../components/DiceModal";
import NumModal from "../components/NumModal";
import { addResult, countTotal } from "../store/actions/player";

import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
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

const Table = ({ navigation, playerOne, playerTwo }) => {
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState("Lucie");
  const [player2, setPlayer2] = useState("Gaëtan");
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState(false);
  const [diceModalVisible, setDiceModalVisible] = useState(false);
  const [numModalVisible, setNumModalVisible] = useState(false);
  const [diceName, setDiceName] = useState("dice-1");
  const [downId, setDownId] = useState("");

  let newName;

  const showModal = (player) => {
    if (player === player1) {
      setVisible(!visible);
    }
    if (player === player2) {
      setInput(!input);
    }
  };

  const changeName = (event) => {
    newName = event;
  };

  const handleOK = (player) => {
    if (player === player1) {
      setVisible(!visible);
      if (newName === undefined) {
        setPlayer1(player1);
      } else {
        setPlayer1(newName);
      }
    }
    if (player === player2) {
      setInput(!input);
      if (newName === undefined) {
        setPlayer2(player2);
      } else {
        setPlayer2(newName);
      }
    }
  };

  const handleLongPress = (id, full) => {
    dispatch(addResult(id, full));
    if (id < 7 && id >= 0) {
      dispatch(countTotal());
    } else if (id > 8 && id < 16) {
      dispatch(countTotal());
    }
  };

  const handleOnPressUp = (id) => {
    if (id < 7 && id >= 0) {
      setDiceName("dice-" + id);
      setDiceModalVisible(!diceModalVisible);
    } else if (id > 8 && id < 16) {
      setDownId(id);
      setNumModalVisible(!numModalVisible);
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
        <NumModal
          onPress={() => setNumModalVisible(!numModalVisible)}
          numModalVisible={numModalVisible}
          downId={downId}
        />
        <Col style={styles.colTitles} size={1}>
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
          <RowItem
            text={<AntDesign name="plussquare" size={20} color="white" />}
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="equal" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="alpha-b-box"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="alpha-c-box"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="alpha-f-box"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="alpha-p-box"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="alpha-g-box"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="alpha-y-box"
                size={24}
                color="white"
              />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons name="clover" size={24} color="white" />
            }
          />
          <RowItem
            text={
              <MaterialCommunityIcons
                name="equal-box"
                size={24}
                color="white"
              />
            }
          />
        </Col>
        <Col style={styles.player1} size={2}>
          <RowItem onPress={() => showModal(player1)} text={player1} />
          <Dialog.Container visible={visible}>
            <Dialog.Title>Nouveau nom</Dialog.Title>
            <Dialog.Input placeholder={player1} onChangeText={changeName} />
            <Dialog.Button label="Annuler" onPress={() => showModal(player1)} />
            <Dialog.Button label="OK" onPress={() => handleOK(player1)} />
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
          <RowItem onPress={() => showModal(player2)} text={player2} />
          <Dialog.Container visible={input}>
            <Dialog.Title>Nouveau nom</Dialog.Title>
            <Dialog.Input placeholder={player2} onChangeText={changeName} />
            <Dialog.Button label="Annuler" onPress={() => showModal(player2)} />
            <Dialog.Button label="OK" onPress={() => handleOK(player2)} />
          </Dialog.Container>
          {/* {playerTwo.map((element) => (
            <RowItem
              key={element.id}
              text={element.result}
              onPress={() => handleOnPressUp(element.id)}
              onLongPress={() => handleLongPress(element.id, element.full)}
            />
          ))} */}
        </Col>
      </Grid>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  playerOne: state.results.playerOne,
  playerTwo: state.results.playerTwo,
});

export default connect(mapStateToProps)(Table);
