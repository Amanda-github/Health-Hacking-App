import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Text,
  Body,
  Button,
  View
} from "native-base";

const HomePage = ({ navigation }) => {
  return (
    <>
      <Container
        style={{
          flex: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Header />
        <Content>
          <Card style={{ width: 500 }}>
            <CardItem header>
              <View>
                <Text>Daily Activities</Text>
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text>Put in activity icon</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <View>
                <Text>
                  <Button
                    onPress={() => navigation.navigate("ActivitiesScreen")}
                  >
                    <Icon name="arrow-forward" />
                  </Button>
                </Text>
              </View>
            </CardItem>
          </Card>
          <Card style={{ width: 500 }}>
            <Button
              onPress={() => navigation.navigate("BreakfastScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text>Breakfast</Text>
            </Button>
            <Button onPress={() => navigation.navigate("LunchScreen")} iconLeft>
              <Icon name="home" />
              <Text>Lunch</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate("DinnerScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text>Dinner</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    </>
  );
};
export default HomePage;
