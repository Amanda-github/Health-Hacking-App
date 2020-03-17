import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Running from "../activities_screen/Running";

const Stack = createStackNavigator();

const ActivitiesNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="RunningScreen">
      <Stack.Screen
        name="RunningScreen"
        component={running}
        options={{ title: "Running" }}
      />
    </Stack.Navigator>
  );
};

export default ActivitiesNavigation;
