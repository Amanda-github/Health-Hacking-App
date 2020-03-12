import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";

class Profile extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleUsername = text => {
    this.setState({ username: text });
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };
  render() {
    return (
      <ImageBackground
        source={require("./img/background.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="#9A73EF"
            autoCapitalize="none"
            onChangeText={this.handleUsername}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9A73EF"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9A73EF"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
export default Profile;
const styles = StyleSheet.create({
  container: {
    paddingTop: 300
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7A42F4",
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: "white"
  },
  submitButton: {
    backgroundColor: "#7A42F4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  },
  background: {
    width: "100%",
    height: "100%"
  }
});
