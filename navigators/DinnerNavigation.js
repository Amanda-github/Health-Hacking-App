import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dinner from "../pages/Dinner";
import HomePage from "../pages/HomePage";
import BrownRice from "../lunch_screen/BrownRice";
import Coffee from "../dinner_screen/Coffee";
import ChickenRice from "../dinner_screen/ChickenRice";
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

export default DinnerNavigator;
