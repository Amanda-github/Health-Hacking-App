import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from "./navigators/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
