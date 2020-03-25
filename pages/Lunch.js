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
              onPress={() => navigation.navigate("BrownRiceScreen")}
            >
              <Text>Brown Rice</Text>
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
              onPress={() => navigation.navigate("ChickenRiceScreen")}
            >
              <Text>Chicken Rice</Text>
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
  );
};
export default Lunch;
