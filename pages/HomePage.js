import React from "react";
import { Text, View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements"
import { addListener } from "expo/build/Updates/Updates";
import { Left } from "native-base";

const HomePage = ({ navigation }) => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <View style={{ width: '100%' }}>
        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
          <View>
            <Image
              source={require("./img/homepage.jpg")}
              style={{
                height: 200,
                width: '100%'
              }}
            />
          </View>
          <View style={{ padding: 10, width: '100%' }}>
            <Text style={{ color: 'green', paddingTop: 5, fontSize: 30, textAlign: 'center'}}>
              Be Healthy & Live Forever
            </Text>
          </View>
          <View style={{ padding: 20, width: '100%', backgroundColor: "#eee", textAlign: 'center'}}>
            <Text style={{fontSize: 20}}>
              Enter Your Activities Below :-
            </Text>
           
            <Icon name='arrow-down' color='black' type='font-awesome'/>
          
            <View>
              <Button
                style={{borderRadius:100, width:140}}
                raised
                title='Activities Page' />
            </View>
          </View>
          <View style={{ padding: 30, width: '100%' }}>
            <Text style={{ paddingTop: 5, fontSize: 20, textAlign: 'center'}}>
              Track Your Daily Meal Below :-
            </Text>
          
            <Icon name='arrow-down' color='black' type='font-awesome'/>
          
          </View>
          <View>
            <TouchableHighlight style={ styles.imageContainer }>
              <Image style={ styles.image } source={require('./img/breakfast.png')}/>
            </TouchableHighlight>
            <Text>
              Breakfast
            </Text>
          </View>
>>>>>>> be6145f613004f47995d2b9f0c3b148420abc8c2
        </View>
      </View>

    </>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  imageContainer: {
    height:80,
    width: 80,
    borderRadius: 64,
  },
  imageContainer2: {
    height:80,
    width: 80,
    borderRadius: 64,
    bottom: 90,
    paddingLeft: 150
  },
  imageContainer3: {
    height:80,
    width: 80,
    borderRadius: 64,
    bottom: 200,
    paddingLeft: 320
  },
  image: {
    height:80,
    width: 80,
    borderRadius: 64,
  },

});
