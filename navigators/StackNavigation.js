import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{ title: "Log In Here" }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUp}
          options={{ title: "Sign Up Here" }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomePage}
          options={{ title: "Hello World" }}
        />
        <Stack.Screen
          name="BreakfastScreen"
          component={Breakfast}
          options={{ title: "Breakfast" }}
        />
        <Stack.Screen
          name="LunchScreen"
          component={Lunch}
          options={{ title: "Lunch" }}
        />
        <Stack.Screen
          name="DinnerScreen"
          component={Dinner}
          options={{ title: "Dinner" }}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
