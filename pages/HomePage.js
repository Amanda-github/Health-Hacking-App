import React from "react";

import { Text, View, Image, TouchableHighlight, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements"
import { addListener } from "expo/build/Updates/Updates";
import { Left } from "native-base";


const HomePage = ({ navigation }) => {
  return (
    <>
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
            <br/>
            <Icon name='arrow-down' color='black' type='font-awesome'/>
            <br/>
            <View>
              <Text>
              <Button
                style={{borderRadius:100, width:140}}
                raised
                title='Activities Page' />
              </Text>
            </View>
          </View>
          <View style={{ padding: 30, width: '100%' }}>
            <Text style={{ paddingTop: 5, fontSize: 20, textAlign: 'center'}}>
              Track Your Daily Meal Below :-
            </Text>
            <br/>
            <Icon name='arrow-down' color='black' type='font-awesome'/>
            <br/>
          </View>
          <View>
            <TouchableHighlight style={ styles.imageContainer }>
              <Image style={ styles.image } source={require('./img/breakfast.png')}/>
            </TouchableHighlight>
            <Text>
              Breakfast
            </Text>
          </View>
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
