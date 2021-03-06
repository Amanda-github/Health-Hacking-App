import React from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import Consumed from "../summary/Consumed";
import Reminder from "../reminder/Reminder";
import { Button, Icon } from "react-native-elements";
import "react-native-gesture-handler";

const HomePage = ({ navigation }) => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const Day = date + "-" + month + "-" + year;

  return (
    <>
      <View
        style={{
          backgroundColor: "mintcream",
          overflow: "hidden"
        }}
      >
        <View style={{ borderWidth: 1, borderColor: "black", padding: 20 }}>
          <Button onPress={() => navigation.navigate("DrawerScreen")} />
          <Text style={{ textAlign: "center" }}>
            <b>Today</b>
          </Text>
          <Text style={{ textAlign: "center" }}>{Day}</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: "black" }}>
          <Text style={{ textAlign: "center", paddingTop: 80 }}>
            Summary Here
          </Text>
          <View style={{ alignItems: "center", top: 78, borderColor: "black" }}>
            <Button
              style={{ borderRadius: 100, width: 140 }}
              title="Activities Page"
              onPress={() => navigation.navigate("ActivityScreen")}
            />
            <Image
              style={styles.running}
              source={require("./img/running.png")}
            />
          </View>
        </View>
        <View style={{ padding: 40, width: "100%" }}>
          <Text
            style={{ paddingBottom: 20, fontSize: 20, textAlign: "center" }}
          >
            Track Your Daily Meal Below :-
          </Text>
          <Icon name="arrow-down" color="black" type="font-awesome" />
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <View style={styles.breakfast}>
            <TouchableHighlight
              style={styles.imageContainer}
              onPress={() => navigation.navigate("BreakfastScreen")}
            >
              <Image
                style={styles.image}
                source={require("./img/breakfast.png")}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.lunch}>
            <TouchableHighlight
              style={styles.imageContainer}
              onPress={() => navigation.navigate("LunchScreen")}
            >
              <Image style={styles.image} source={require("./img/lunch.png")} />
            </TouchableHighlight>
          </View>
          <View style={styles.dinner}>
            <TouchableHighlight
              style={styles.imageContainer}
              onPress={() => navigation.navigate("DinnerScreen")}
            >
              <Image
                style={styles.image}
                source={require("./img/dinner.png")}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.breakfastword}>
            <Text style={{ textAlign: "center" }}>Breakfast</Text>
          </View>
          <View style={styles.lunchword}>
            <Text style={{ textAlign: "center" }}>Lunch</Text>
          </View>
          <View style={styles.dinnerword}>
            <Text style={{ textAlign: "center" }}>Dinner</Text>
          </View>
        </View>
        <View style={styles.medication}>
          <Text style={{ textAlign: "center" }}>Medication Reminder</Text>
          <Reminder />
        </View>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  imageContainer: {},
  image: {
    height: 80,
    borderRadius: 64
  },
  summary: {
    paddingTop: 100
  },
  breakfast: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    right: 120,
    top: 2
  },
  lunch: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    bottom: 83
  },
  dinner: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    left: 120,
    bottom: 167
  },
  running: {
    height: 80,
    width: 80,
    left: 100,
    bottom: 60
  },
  breakfastword: {
    borderWidth: 1,
    borderColor: "black",
    bottom: 160,
    width: 100,
    right: 120
  },
  lunchword: {
    borderWidth: 1,
    borderColor: "black",
    bottom: 181,
    width: 100
  },
  dinnerword: {
    borderWidth: 1,
    borderColor: "black",
    bottom: 200,
    width: 100,
    left: 120
  },
  medication: {
    bottom: 100,
    borderWidth: 1,
    borderColor: "black",
    height: 100,
    bottom: 180
  }
});
