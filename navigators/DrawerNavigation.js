import React from "react";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Activity from "./ActivityNavigation";
import BreakfastNavigator from "./BreakfastNavigation";
import Lunch from "./LunchNavigation";
import Dinner from "./DinnerNavigation";
import SideBar from "../pages/SideBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { set } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

const TabNavigation = ({setLogin,jwt}) => {
  
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
        component={props => <Profile {...props} setLogin={setLogin}/>}
        options={{ title: "My Profile" }}
      />
      <Drawer.Screen
        name="BreakfastScreen"
        component={props => <BreakfastNavigator {...props} jwt={jwt} />}
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
      <Drawer.Screen
        name="DrawerScreen"
        component={SideBar}
        options={{ title: "Menu" }}
      />
    </Drawer.Navigator>
  );
};

export default TabNavigation;
