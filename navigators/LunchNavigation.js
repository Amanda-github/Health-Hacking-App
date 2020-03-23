import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Lunch from "../pages/Lunch";
import CaesarSalad from "../lunch_screen/CaesarSalad";
import Coffee from "../lunch_screen/Coffee";
import InstantNoodle from "../lunch_screen/InstantNoodles";
import Rice from "../lunch_screen/Rice";

const Stack = createStackNavigator();

const LunchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LunchScreen">
      <Stack.Screen name="LunchScreen" component={Lunch} />
      <Stack.Screen name="CaesarSalad" component={CaesarSalad} />
      <Stack.Screen name="Coffee" component={Coffee} />
    </Stack.Navigator>
  );
};

export default LunchNavigator;
