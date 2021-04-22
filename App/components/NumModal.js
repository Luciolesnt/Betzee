import React from "react";
import { View, StyleSheet, TouchableOpacity, Modal, Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
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
    justifyContent: "center",
    height: 50,
    margin: 3,
  },
  text: {
    color: "white",
    fontWeight: "bold"
  },
});

export default ({ onPress, numModalVisible, downId }) => {
  const dispatch = useDispatch(

  );
  return (
    <Modal aninationType="slide" transparent={true} visible={numModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onPress}>
            <Entypo name="cross" size={34} color="white" />
          </TouchableOpacity>
          <Grid style={styles.modalGrid}>
            <Col>
            <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>0</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>5</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>6</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>7</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>8</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>9</Text>
                </Row>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>10</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>11</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>12</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>13</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>14</Text>
                </Row>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>15</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>16</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>17</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>18</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>19</Text>
                </Row>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>20</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>21</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>22</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>23</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>24</Text>
                </Row>
              </TouchableOpacity>
            </Col>
            <Col>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>25</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>26</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>27</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>28</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>29</Text>
                </Row>
              </TouchableOpacity>
              <TouchableOpacity>
                <Row style={styles.modalRow}>
                  <Text style={styles.text}>30</Text>
                </Row>
              </TouchableOpacity>
            </Col>
          </Grid>
        </View>
      </View>
    </Modal>
  );
};
