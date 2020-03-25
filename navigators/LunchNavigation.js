import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Lunch from "../pages/Lunch";
import HomePage from "../pages/HomePage";
import CaesarSalad from "../lunch_screen/CaesarSalad";
import Coffee from "../lunch_screen/Coffee";
import InstantNoodles from "../lunch_screen/InstantNoodles";
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
        name="CaesarSaladScreen"
        component={CaesarSalad}
        options={{ title: "Caesar Salad" }}
      />
      <Stack.Screen
        name="CoffeeScreen"
        component={Coffee}
        options={{ title: "Coffee" }}
      />
      <Stack.Screen
        name="InstantNoodleScreen"
        component={InstantNoodles}
        options={{ title: "Instant Noodles" }}
      />
      <Stack.Screen
        name="WhiteRiceScreen"
        component={WhiteRice}
        options={{ title: "White Rice" }}
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
