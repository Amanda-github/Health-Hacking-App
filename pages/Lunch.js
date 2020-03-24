import React from "react";
import { Container, Content, Card, Button, Text } from "native-base";
import { View } from "react-native";

const Lunch = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Card>
          <Button
            block
            bordered
            onPress={() => navigation.navigate("CaesarSaladScreen")}
          >
            <Text>Caesar Salad</Text>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};
export default Lunch;
