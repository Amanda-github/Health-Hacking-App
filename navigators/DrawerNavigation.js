import React from "react";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Breakfast from "../pages/Breakfast";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Activities from "../pages/activities";
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
        component={Breakfast}
        options={{ title: "Breakfast" }}
      />
      <Drawer.Screen
        name="LunchScreen"
        component={Lunch}
        options={{ title: "Lunch" }}
      />
      <Drawer.Screen
        name="DinnerScreen"
        component={Dinner}
        options={{ title: "Dinner" }}
      />
      <Drawer.Screen
        name="ActivityScreen"
        component={Activities}
        options={{ title: "Activities" }}
      />
    </Drawer.Navigator>
  );
};

export default TabNavigation;
