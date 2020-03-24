import React from "react";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Activity from "./ActivityNavigation";
import BreakfastNavigator from "./BreakfastNavigation";
import Lunch from "./LunchNavigation";
import Dinner from "../pages/Dinner";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const TabNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerStyle={{
        backgroundColor: "#c6cbef",
        width: 240
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomePage}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ title: "My Profile" }}
      />
      <Drawer.Screen
        name="BreakfastScreen"
        component={BreakfastNavigator}
        options={{ title: "Breakfast Menu" }}
      />
      <Drawer.Screen
        name="LunchScreen"
        component={Lunch}
        options={{ title: "Lunch Menu" }}
      />
      <Drawer.Screen
        name="DinnerScreen"
        component={Dinner}
        options={{ title: "Dinner" }}
      />
      <Drawer.Screen
        name="ActivityScreen"
        component={Activity}
        options={{ title: "Workouts" }}
      />
    </Drawer.Navigator>
  );
};

export default TabNavigation;
