import React from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import colors from "../constants/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { addSelect, countTotal } from "../store/actions/player";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalGrid: {
    flex: 0.55,
  },
  modalRow: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    margin: 2,
    height: 50,
    paddingLeft: 20,
  },
});

export default ({ onPress, diceModalVisible, diceName }) => {
  const dispatch = useDispatch();
  const setDiceModalVisibleFunction = onPress;
  const dispatchOnPress = (num) => {
    dispatch(addSelect(diceName, num));
    dispatch(countTotal());
  };
  const mergeFunc = (num) => {
    setDiceModalVisibleFunction(), dispatchOnPress(num);
  };
  return (
    <Modal aninationType="slide" transparent={true} visible={diceModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onPress}>
            <Entypo name="cross" size={34} color="white" />
          </TouchableOpacity>
          <Grid style={styles.modalGrid}>
            <Col>
              <TouchableOpacity
                onPress={() => {
                  mergeFunc(0);
                }}
              >
                <Row style={styles.modalRow}></Row>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  mergeFunc(1);
                }}>
                <Row style={styles.modalRow}>
                  <Text>
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                  </Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  mergeFunc(2);
                }}>
                <Row style={styles.modalRow}>
                  <Text>
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                  </Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  mergeFunc(3);
                }}>
                <Row style={styles.modalRow}>
                  <Text>
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                  </Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  mergeFunc(4);
                }}
              >
                <Row style={styles.modalRow}>
                  <Text>
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                  </Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  mergeFunc(5);
                }}
              >
                <Row style={styles.modalRow}>
                  <Text>
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                    <MaterialCommunityIcons
                      name={diceName}
                      size={34}
                      color="white"
                    />
                  </Text>
                </Row>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      </View>
    </Modal>
  );
};
