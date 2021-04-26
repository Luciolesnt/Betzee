import React from "react";
import { useDispatch } from "react-redux";
import { cleanAll } from "../store/actions/player";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";

import colors from "../constants/colors";
import { Button } from "../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";

// gives out the width and the height of the device
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: screen.width * 0.08,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 100,
  },
  logoText: {
    color: colors.orange,
    fontSize: 40,
    fontWeight: "800",
    textTransform: "uppercase",
    paddingLeft: 20,
  },
  text: {
    textAlign: "justify",
    color: colors.grey,
  },
});

export default ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <FontAwesome5 name="dice" size={100} color={colors.orange} />
              <Text style={styles.logoText}>Betzee</Text>
            </View>
            <Button
              text="Start"
              onPress={() => {
                navigation.push("Table");
                dispatch(cleanAll());
              }}
            />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem
              urna, finibus viverra interdum eu, gravida id neque. Sed sit amet
              leo vitae enim sodales tristique at ut lacus. Maecenas neque enim,
              bibendum ac imperdiet vel, sollicitudin nec eros. Proin sed
              vulputate metus, eget tincidunt nunc. Donec eros elit,
              pellentesque vitae nibh sed, mollis volutpat ex. Nulla varius
              magna eget molestie fringilla. Donec ut feugiat purus. Sed
              tristique ac mi non vehicula. Vivamus sapien magna, fringilla at
              risus eget, cursus mollis nisi. Nulla a bibendum est. Phasellus
              pretium nulla at lacinia cursus. Nullam dapibus, orci eget
              facilisis sagittis, enim nisl commodo risus, ut interdum dui odio
              id dolor. Suspendisse et metus fringilla, tempor purus vel,
              aliquam sapien. Donec ac sodales tortor, ut interdum dui. Aliquam
              volutpat turpis augue, eget pharetra massa faucibus vestibulum.
              Aliquam rutrum sed nibh ut malesuada. Nulla quis eros porta,
              tempor ipsum ultricies, tristique quam. Phasellus condimentum
              tortor tellus, eu auctor felis dictum non. Phasellus ut libero
              quis eros volutpat tincidunt molestie eget eros. Aenean varius
              mattis massa id feugiat. Praesent dictum mi at ipsum condimentum
              tincidunt sollicitudin at justo. Cras aliquet molestie fermentum.
              Aenean quis sapien ac turpis blandit tempor nec quis nisi.
              Phasellus tempus venenatis massa, in ultrices nisi placerat nec.
              Cras consequat vitae massa in elementum. Aenean cursus fringilla
              elit, a ullamcorper urna scelerisque sit amet. Integer eu nulla
              est. Fusce tempus consectetur sagittis. Cras et urna sagittis,
              venenatis lacus eu, imperdiet enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec a lacus lobortis, egestas
              lectus ac, consequat mi. Donec porttitor est eu risus rhoncus,
              eget bibendum dolor pharetra. Sed scelerisque elementum rhoncus.
              Nullam bibendum tellus ac augue efficitur blandit. Vivamus
              vehicula hendrerit diam a consequat. Sed euismod ante in felis
              semper tempus. Donec sed tortor mollis, consequat mauris vel,
              rutrum risus. Vestibulum ultricies urna turpis, sit amet mollis
              purus porta vel. Praesent posuere enim a nunc sodales, at cursus
              quam cursus. Sed nec semper ex.
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
