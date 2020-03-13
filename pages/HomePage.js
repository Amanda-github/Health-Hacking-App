import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Icon,
  Text,
  Body,
  Button,
  View
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
const HomePage = ({ navigation }) => {
  return (
    <>
      <Container
        style={{
          flex: "center",
          alignItems: "center",
          justifyContent: "center",
          // width:Dimensions.get('window').width
          width: "99%"
        }}
      >
        <View
          style={{
            flex: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Card style={{ width: "80%" }}>
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
                  <Button transparent>
                    <Icon name="arrow-forward" />
                  </Button>
                </Text>
              </View>
            </CardItem>
          </Card>
          <Card
            style={{
              width: "80%",
              alignContent: "center",
              bottom: 30,
              paddingTop: 50,
              paddingLeft: 100
            }}
          >
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("BreakfastScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text>Breakfast</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("LunchScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text style={{ paddingLeft: 200 }}>Lunch</Text>
              <Text></Text>
            </Button>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("DinnerScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text>Dinner</Text>
            </Button>
          </Card>
        </View>
      </Container>
    </>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  button: {
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 300,
    right: 48
  }
});
