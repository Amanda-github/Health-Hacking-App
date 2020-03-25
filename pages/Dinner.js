import React from "react";
import { Container, Content, Card, Button, Text } from "native-base";
import { View } from "react-native";

const Dinner = ({ navigation }) => {
  return (
    <>
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
                onPress={() => navigation.navigate("WhiteRiceScreen")}
              >
                <Text>WhiteRice</Text>
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
          </View>
        </Content>
      </Container>
    </>
  );
};
export default Dinner;
