import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dinner from "../pages/Dinner";
import HomePage from "../pages/HomePage";
import CaesarSalad from "../dinner_screen/CaesarSalad";
import Coffee from "../dinner_screen/Coffee";
import InstantNoodles from "../dinner_screen/InstantNoodles";
import WhiteRice from "../dinner_screen/WhiteRice";

const Stack = createStackNavigator();

const DinnerNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DinnerScreen">
      <Stack.Screen
        name="Dinner"
        component={Dinner}
        options={{ title: "Dinner" }}
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

export default DinnerNavigator;
