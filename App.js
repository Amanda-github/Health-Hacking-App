import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigators/StackNavigation";
import DrawerNavigation from "./navigators/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <DrawerNavigation />
    </NavigationContainer>
  );
}
