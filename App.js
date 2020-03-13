import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import Signup from "./Pages/signup";
import Login from "./Pages/login"
import Profile from "./Pages/profile"
import EditProfile from "./pages/EditProfile";

export default function App() {
  return (
    <ThemeProvider>
      {" "}
      <View style={styles.container}>
        <Login />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
