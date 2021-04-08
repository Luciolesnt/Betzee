import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Table from "../screens/Table";

const MainStack = createStackNavigator();

// This contain the Home page where you can press START and read the rules
const MainStackScreen = () => (
  <MainStack.Navigator headerMode="screen" initialRouteName="Table">
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Table"
      component={Table}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>

  // @TODO : ADD THE GAME PAGE
);

const ModalStack = createStackNavigator();

const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
  </ModalStack.Navigator>
  // @TODO : ADD OTHER MODAL : THE CONFIG MODAL, THE END MODAL, THE HISTORIC MODAL, THE ENTRY UP MODAL AND THE ENTRY DOWN MODAL
);

export default () => (
  // gives out the {navigation} prop to its children, useful to navigate between pages and modals
  // @TODO : CREATE A CONTEXT
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
