import React from "react";
import { Container, Content, Button, Text, View } from "native-base";

const SideBar = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <View>
          <Button onPress={() => navigation.navigate("HomeScreen")}>
            <Text>Home</Text>
          </Button>
          <Button onPress={() => navigation.navigate("BreakfastScreen")}>
            <Text>Breakfast Menu</Text>
          </Button>
          <Button onPress={() => navigation.navigate("LunchScreen")}>
            <Text>Lunch Menu</Text>
          </Button>
          <Button onPress={() => navigation.navigate("DinnerScreen")}>
            <Text>Dinner Menu</Text>
          </Button>
          <Button onPress={() => navigation.navigate("ActivityScreen")}>
            <Text>WorkOut Activities </Text>
          </Button>
          <Button onPress={() => navigation.navigate("ProfileScreen")}>
            <Text>Settings</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default SideBar;
