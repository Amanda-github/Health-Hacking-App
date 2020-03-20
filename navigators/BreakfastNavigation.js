import React from "react";
import Breakfast from "../pages/Breakfast";
import Coffee from "../breakfast_screen/Coffee";
import Egg from "../breakfast_screen/Egg";
import RolledOats from "../breakfast_screen/RolledOats";
import WholeMealBread from "../breakfast_screen/WholeMealBread";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const BreakfastNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BreakfastScreen">
      <Stack.Screen name="BreakfastScreen" component={Breakfast} />
      <Stack.Screen
        name="CoffeeScreen"
        component={Coffee}
        options={{ title: "Coffee " }}
      />
      <Stack.Screen
        name="EggScreen"
        component={Egg}
        options={{ title: "Hard Boiled Egg" }}
      />
      <Stack.Screen
        name="RolledOatsScreen"
        component={RolledOats}
        options={{ title: "RolledOats" }}
      />
      <Stack.Screen
        name="WholeMealBread"
        component={WholeMealBread}
        options={{ title: "WholeMealBread" }}
      />
    </Stack.Navigator>
  );
};

export default BreakfastNavigator;
