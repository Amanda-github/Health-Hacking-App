import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Picker } from 'react-native'
import { Image } from 'react-native-elements'
import axios from "axios"

class Signup extends Component {
   state = {
      username: '',
      email: '',
      password: ''
   }
   updateUser = (user) => {
      this.setState({ user: user })
   }
   handleUsername = (text) => {
     this.setState({ username: text})
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email,pass,username) => {
      axios({
         method: 'POST',
         url: 'http://192.168.1.52:5000/api/v1/users/create',
         data: {
           "username": username,
           "email": email,
           "password": pass
         }
       })
       .then(response => {
         console.log(response)
       })
       .catch(error => {
         console.error(error.response) // so that we know what went wrong if the request failed
       })
   }
   render() {
      return (
      <ImageBackground source={require('./img/background.jpg')} style = {styles.background}>
        <View style = {styles.container}>
        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image source={require('./img/Signup.png')} style={{width: 150, height: 150}}/>
        </View>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleUsername}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password, this.state.username)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      </ImageBackground>
      )
   }
}
export default Signup

const styles = StyleSheet.create({
   container:{
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 100
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: 'white',
      width: 335,
      alignContent: 'center',
      padding: 10,
   },
   submitButton: {
      backgroundColor: 'purple',
      padding: 10,
      margin: 15,
      height: 40,
      width: 335,
   },
   submitButtonText:{
      color: 'white'
   },
   background:{
     width: '100%',
    height: '100%',
   },
})