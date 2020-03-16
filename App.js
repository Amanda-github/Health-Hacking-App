import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationNavigator from "./navigators/StackNavigation";
import DrawerNavigator from "./navigators/DrawerNavigation";
import {AsyncStorage} from 'react-native';
export default function App() {
  const [login, setLogin] = useState(AsyncStorage.getItem('jwt') !== null);

  return (
    <NavigationContainer>
      {login ? <DrawerNavigator /> : <AuthenticationNavigator setLogin={setLogin}/>}
    </NavigationContainer>
  );
}
