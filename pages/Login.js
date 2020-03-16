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

const Login = ({navigation}) => {
  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const display = (e) => {
    console.log(e.target.value)
  }

  const handleUsername = (e) => {
    display(e)
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    display(e)
    setPassword(e.target.value)
  }

  const login = () => {
    console.log(username, password);
    axios({
      method: "POST",
      url: "https://team-4.herokuapp.com/api/v1/users/login",
      data: {
        username: username,
        password: password
      }
    })
      .then(response => {
        console.log(response.data);
        if (response.data.status) {
          localStorage.setItem('jwt', response.data.access_token)
          navigation.navigate("LoginScreen")
        };
      })
      .catch(error => {
        console.log(error); 
      });
  };
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
            onChange={handleUsername}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChange={handlePassword}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onClick={login}
          >
            <Text style={styles.submitButtonText}> Log in </Text>
          </TouchableOpacity>
          <Text
            style={{ color: "red", fontSize: 20 }}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Sign Up
          </Text>
        </View>
      </ImageBackground>
    );
  
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
