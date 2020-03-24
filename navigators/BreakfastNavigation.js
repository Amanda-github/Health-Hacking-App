import React from "react";
import Breakfast from "../pages/Breakfast";
import Coffee from "../breakfast_screen/Coffee";
import Egg from "../breakfast_screen/Egg";
import RolledOats from "../breakfast_screen/RolledOats";
import WholeMealBread from "../breakfast_screen/WholeMealBread";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const BreakfastNavigator = ({jwt}) => {
  return (
    <Stack.Navigator initialRouteName="BreakfastScreen">
      <Stack.Screen name="BreakfastScreen" component={Breakfast} />
      <Stack.Screen
        name="CoffeeScreen"
        component={props => <Coffee {...props} jwt={jwt}/>}
        options={{ title: "Coffee " }}
      />
      <Stack.Screen
        name="EggScreen"
        component={props => <Egg {...props} jwt={jwt}/>}
        options={{ title: "Hard Boiled Egg" }}
      />
      <Stack.Screen
        name="RolledOatsScreen"
        component={props => <RolledOats {...props} jwt={jwt}/>}
        options={{ title: "RolledOats" }}
      />
      <Stack.Screen
        name="WholeMealBreadScreen"
        component={props => <WholeMealBread {...props} jwt={jwt}/>}
        options={{ title: "WholeMealBread" }}
      />
    </Stack.Navigator>
  );
};

export default BreakfastNavigator;
