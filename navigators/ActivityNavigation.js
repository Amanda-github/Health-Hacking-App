import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Running from "../activities_screen/Running";

const Stack = createStackNavigator();

const ActivityNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ActivityScreen">
      <Stack.Screen
        name="RunningScreen"
        component={Running}
        options={{ title: "Running" }}
      />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;
