import React from "react";
import Activities from "../pages/activities";
import { createStackNavigator } from "@react-navigation/stack";
import Running from "../activities_screen/Running";
import Circuit from "../activities_screen/Circuit";
import Cycling from "../activities_screen/Cycling";
import ExerciseBike from "../activities_screen/ExerciseBike";
import Hiking from "../activities_screen/Hiking";
import Swimming from "../activities_screen/Swimming";
import Treadmill from "../activities_screen/Treadmill";
import Walking from "../activities_screen/Walking";
import Weights from "../activities_screen/Weights";

const Stack = createStackNavigator();

const ActivityNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ActivityScreen">
      <Stack.Screen name="Activities" component={Activities} />
      <Stack.Screen
        name="WalkingScreen"
        component={Walking}
        options={{ title: "Walking" }}
      />
      <Stack.Screen
        name="CyclingScreen"
        component={Cycling}
        options={{ title: "Cycling" }}
      />
      <Stack.Screen
        name="RunningScreen"
        component={Running}
        options={{ title: "Running" }}
      />
      <Stack.Screen
        name="HikingScreen"
        component={Hiking}
        options={{ title: "Hiking" }}
      />
      <Stack.Screen
        name="SwimmingScreen"
        component={Swimming}
        options={{ title: "Swimming" }}
      />
      <Stack.Screen
        name="CircuitScreen"
        component={Circuit}
        options={{ title: "Circuit Training" }}
      />
      <Stack.Screen
        name="WeightsScreen"
        component={Weights}
        options={{ title: "Weight Training" }}
      />
      <Stack.Screen
        name="TreadmillScreen"
        component={Treadmill}
        options={{ title: "Treadmill" }}
      />
      <Stack.Screen
        name="ExerciseBikeScreen"
        component={ExerciseBike}
        options={{ title: "Exercise Bike" }}
      />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;
