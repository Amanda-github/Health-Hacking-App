import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Linking
} from "react-native";

import { Image } from "react-native-elements";
import axios from "axios";
import HomePage from "./HomePage";
import SignUp from "./Signup";

class Login extends Component {
  state = {
    username: "",
    password: "",
    setLogin: false
  };
  handleUsername = text => {
    this.setState({ username: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (pass, username) => {
    console.log("hello");
    axios({
      method: "POST",
      url: "https://team-4.herokuapp.com/api/v1/users/login",
      data: {
        username: username,
        password: pass
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
    // if (this.state.setLogin)
    // return<SignUp onPress=
    return (
      <ImageBackground
        source={require("./img/background.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./img/Logo.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleUsername}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.setState({ setLogin: true })}
          >
            <Text style={styles.submitButtonText}> Log in </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.setState({ setLogin: false })}
          >
            <Text style={styles.submitButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
  }
});
