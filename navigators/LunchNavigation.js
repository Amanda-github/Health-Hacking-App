import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Lunch from "../pages/Lunch";
import HomePage from "../pages/HomePage";
import BrownRice from "../lunch_screen/BrownRice";
import Coffee from "../lunch_screen/Coffee";
import ChickenRice from "../lunch_screen/ChickenRice";
import WhiteRice from "../lunch_screen/WhiteRice";

const Stack = createStackNavigator();

const LunchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LunchScreen">
      <Stack.Screen
        name="LunchScreen"
        component={Lunch}
        options={{ title: "Lunch Menu" }}
      />
      <Stack.Screen
        name="CoffeeScreen"
        component={Coffee}
        options={{ title: "Coffee" }}
      />
      <Stack.Screen
        name="ChickenRiceScreen"
        component={ChickenRice}
        options={{ title: "Chicken Rice" }}
      />
      <Stack.Screen
        name="WhiteRiceScreen"
        component={WhiteRice}
        options={{ title: "White Rice" }}
      />
      <Stack.Screen
        name="BrownRiceScreen"
        component={BrownRice}
        options={{ title: "Brown Rice" }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

export default LunchNavigator;
