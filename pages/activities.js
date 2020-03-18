import React from "react";
import {
  Container,
  Content,
  Card,
  Header,
  Button,
  Text,
  Icon
} from "native-base";
import "react-native-gesture-handler";

const activities = ({ navigation }) => {
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
            <Button block bordered info>
              <Text>Walking</Text>
            </Button>
            <Button block bordered>
              <Text>Cycling</Text>
            </Button>
            <Button block bordered info>
              <Text>Swimming</Text>
            </Button>
            <Button block bordered>
              <Text>Hiking</Text>
            </Button>
            <Button block bordered info>
              <Text>Treadmill</Text>
            </Button>
            <Button block bordered>
              <Text>Weight Machines</Text>
            </Button>
            <Button block bordered info>
              <Text>Circuit Training</Text>
            </Button>
          </Content>
        </Card>
      </Content>
    </Container>
  );
};

export default activities;
