import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Picker,
  AsyncStorage
} from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";

class Signup extends Component {
  state = {
    gender: "Male",
    age: "",
    height: "",
    weight: ""
  };
  updateUser = user => {
    this.setState({ user: user });
  };
  gender = text => {
    this.setState({ gender: text });
  };
  handleAge = text => {
    this.setState({ age: text });
  };
  handleHeight = text => {
    this.setState({ height: text });
  };
  handleWeight = text => {
    this.setState({ weight: text });
  };
  login = (gender, age, height, weight) => {
    console.log(gender, age, height, weight);
    axios({
      method: "POST",
      url: "http://192.168.1.52:5000/api/v1/users/edit",
      data: {
        gender: gender,
        age: age,
        height: height,
        weight: weight
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });
  };
  render() {
    return (
      <ImageBackground
        source={require("./img/Ashbackground.jpg")}
        style={styles.background}
      >
        <View style={styles.mainbody}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={styles.username}>Edit Profile</Text>
            <Text style={styles.selectoptions}>Select Your Gender:-</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={this.gender}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Rather Not Say" value="Rather Not Say" />
              </Picker>
            </View>
            <Text style={styles.enteroption}>Enter Your Age:-</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Age"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleAge}
            />
            <Text style={styles.enteroption}>Enter Your Height:-</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Height (CM)"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleHeight}
            />
            <Text style={styles.enteroption}>Enter Your Weight:-</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Weight (KG)"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleWeight}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() =>
                this.login(
                  this.state.gender,
                  this.state.age,
                  this.state.height,
                  this.state.weight
                )
              }
            >
              <Text style={styles.submitButtonText}> Update Profile </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    width: 335,
    alignContent: "center",
    padding: 10
  },
  submitButton: {
    backgroundColor: "purple",
    padding: 10,
    margin: 15,
    height: 40,
    width: 335
  },
  submitButtonText: {
    color: "white"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  labelitem: {
    paddingTop: 100
  },
  username: {
    paddingTop: 50,
    fontSize: 50
  },
  btnsignout: {
    paddingTop: 50
  },
  picker: {
    width: 335,
    paddingBottom: 20
  },
  selectoptions: {
    color: "black",
    paddingRight: 200,
    paddingTop: 50
  },
  enteroption: {
    color: "black",
    paddingRight: 220,
    paddingTop: 10
  }
});
