import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Stack = createStackNavigator();

const MainStack = ({ setLogin, setJwt }) => {
  return (
    <>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={props => (
            <Login {...props} setLogin={setLogin} setJwt={setJwt} />
          )}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUp}
          options={{ title: "Sign Up Here" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
