import React from "react";
import { Container, Content, Card, Button, Text } from "native-base";
import { View } from "react-native";

const Breakfast = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Card>
          <Button
            block
            bordered
            onPress={() => navigation.navigate("CoffeeScreen")}
          >
            <Text>Coffee</Text>
          </Button>
          <Button
            block
            bordered
            onPress={() => navigation.navigate("EggScreen")}
          >
            <Text>Hard Boiled Egg</Text>
          </Button>
          <Button
            block
            bordered
            onPress={() => navigation.navigate("WholeMealBreadScreen")}
          >
            <Text>Wholemeal Bread</Text>
          </Button>
          <Button
            block
            bordered
            onPress={() => navigation.navigate("RolledOatsScreen")}
          >
            <Text>Rolled Oats</Text>
          </Button>
        </Card>
        <View style={{ alignItems: "center", top: 78 }}>
          <Button
            small
            info
            onPress={() => navigation.goBack("HomeScreen")}
            style={{ width: 140 }}
          >
            <Text>Home</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Breakfast;
