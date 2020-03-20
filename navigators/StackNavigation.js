import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Stack = createStackNavigator();

const MainStack = ({ setLogin }) => {
  return (
    <>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={props => <Login {...props} setLogin={setLogin} />}
          options={{ title: "Log In Here" }}
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
