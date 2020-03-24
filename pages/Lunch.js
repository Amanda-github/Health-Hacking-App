import React from "react";
import { Container, Content, Card, Button, Text } from "native-base";
import { View } from "react-native";

const Lunch = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <View>
          <Card>
            <Button
              block
              bordered
              onPress={() => navigation.navigate("CaesarSaladScreen")}
            >
              <Text>Caesar Salad</Text>
            </Button>
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
              onPress={() => navigation.navigate("InstantNoodleScreen")}
            >
              <Text>Instant Noodles</Text>
            </Button>
            <Button
              block
              bordered
              onPress={() => navigation.navigate("RiceScreen")}
            >
              <Text>Rice</Text>
            </Button>
          </Card>
        </View>
      </Content>
    </Container>
  );
};
export default Lunch;
