import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationNavigator from "./navigators/StackNavigation";
import DrawerNavigator from "./navigators/DrawerNavigation";

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      {login ? <DrawerNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
}
