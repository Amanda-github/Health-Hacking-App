import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Image } from "react-native-elements";
import axios from "axios";

const Signup = ({navigation}) => {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const display = (e) => {
    console.log(e.target.value)
  }

  const handleEmail = (e) => {
    display(e)
    setEmail(e.target.value)
  }
  const handleUsername = (e) => {
    display(e)
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    display(e)
    setPassword(e.target.value)
  }

  const login = (e) => {
    e.preventDefault()
    console.log(username,password,email)
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/users/create",
      data: {
        username: username,
        email: email,
        password: password
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });
  }
 
    

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
              source={require("./img/Signup.png")}
              style={{ width: 150, height: 150 }}
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
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChange={handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            type= 'password'
            onChange={handlePassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onClick={login}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
          <Text
            style={{ color: "red", fontSize: 20 }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Log In
          </Text>
        </View>
      </ImageBackground>
    );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
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
