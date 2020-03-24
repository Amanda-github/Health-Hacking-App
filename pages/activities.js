import React from "react";
import { Container, Content, Card, Button, Text } from "native-base";
import "react-native-gesture-handler";

const Activities = ({ navigation }) => {
  return (
    <Container style={{ margin: 20 }}>
      <Content>
        <Card>
          <Content>
            <Button
              block
              bordered
              onPress={() => navigation.navigate("RunningScreen")}
            >
              <Text>Running</Text>
            </Button>
            <Button
              block
              bordered
              info
              onPress={() => navigation.navigate("WalkingScreen")}
            >
              <Text>Walking</Text>
            </Button>
            <Button
              block
              bordered
              onPress={() => navigation.navigate("CyclingScreen")}
            >
              <Text>Cycling</Text>
            </Button>
            <Button
              block
              bordered
              info
              onPress={() => navigation.navigate("SwimmingScreen")}
            >
              <Text>Swimming</Text>
            </Button>
            <Button
              block
              bordered
              onPress={() => navigation.navigate("Hiking Screen")}
            >
              <Text>Hiking</Text>
            </Button>
            <Button
              block
              bordered
              info
              onPress={() => navigation.navigate("Treadmill")}
            >
              <Text>Treadmill</Text>
            </Button>
            <Button
              block
              bordered
              info
              onPress={() => navigation.navigate("ExerciseBikeScreen")}
            >
              <Text>Exercise Bike</Text>
            </Button>
            <Button
              block
              bordered
              onPress={() => navigation.navigate("WeightsScreen")}
            >
              <Text>Weight Machines</Text>
            </Button>
            <Button
              block
              bordered
              info
              onPress={() => navigation.navigate("CircuitScreen")}
            >
              <Text>Circuit Training</Text>
            </Button>
          </Content>
        </Card>
      </Content>
    </Container>
  );
};

export default Activities;
