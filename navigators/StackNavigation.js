import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "../navigators/DrawerNavigation";
import HomePage from "../pages/HomePage";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator>
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
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="SideBar" component={TabNavigation} />
        </Drawer.Navigator>
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
