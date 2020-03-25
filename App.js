import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationNavigator from "./navigators/StackNavigation";
import DrawerNavigator from "./navigators/DrawerNavigation";
import { set } from "react-native-reanimated";

export default function App() {
  const [login, setLogin] = useState(true);
  const [jwt, setJwt] = useState("");
  return (
    <NavigationContainer>
      {login ? (
        <DrawerNavigator setLogin={setLogin} jwt={jwt} />
      ) : (
        <AuthenticationNavigator setLogin={setLogin} setJwt={setJwt} />
      )}
    </NavigationContainer>
  );
}
