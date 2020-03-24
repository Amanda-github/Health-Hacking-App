import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image, Button } from "react-native-elements";

class Profile extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  logoutprofile = () => {
    console.log('logged out')
    const setLogin = this.props.setLogin
    console.log(setLogin)
    setLogin(false)
  }

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
            <Image
              source={require("./img/profile.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text style={styles.username}>YOUR NAME</Text>
            <View style={styles.icon}>
              <Icon
                name="user"
                size={24}
                color="black"
                style={{ marginRight: 350 }}
              />
            </View>
            <View style={styles.itemprofile}>
              <Text style={styles.labelitem}>Update Profile</Text>
              <Text style={styles.sublabelitem}>Eligible</Text>
              <Button
                onPress={this.logoutprofile}
                style={styles.btnsmall}
                title="Edit"
              ></Button>
            </View>
            <View style={styles.icon2}>
              <Icon
                name="trophy"
                size={24}
                color="black"
                style={{ marginRight: 350 }}
              />
            </View>
            <View style={styles.itemprofile}>
              <Text style={styles.labelitem2}>My Archievement</Text>
              <Text style={styles.sublabelitem2}>To Be Updated :)</Text>
              <Button
                disabled
                style={styles.btnsmall}
                title="Disabled"
              ></Button>
            </View>
            <View>
              <Button
                onPress={this.logoutprofile}
                style={styles.btnsignout}
                title="Log Out"
              >
                <Text style={styles.labelbtn}>Log Out</Text>
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  mainbody: {
    paddingTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  profileimg: {
    marginLeft: 100,
    marginTop: 50,
    height: 200,
    width: 200
  },
  username: {
    color: "black",
    fontSize: 16,
    marginTop: 10
  },
  labelitem: {
    marginTop: -20,
    marginLeft: -150,
    fontSize: 16,
    color: "black"
  },
  labelitem2: {
    marginTop: -30,
    marginLeft: -150,
    fontSize: 16,
    color: "black"
  },
  sublabelitem: {
    marginTop: 4,
    marginLeft: -150,
    fontSize: 16,
    color: "green"
  },
  imgitem: {
    width: 50,
    height: 50
  },
  icon: {
    marginTop: 100
  },
  icon2: {
    marginTop: 50
  },
  labelbtn: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  btnsignout: {
    marginTop: 150,
    width: 300
  },
  sublabelitem2: {
    marginTop: 4,
    marginLeft: -150,
    fontSize: 16,
    color: "red"
  },
  btnsmall: {
    width: 100,
    height: 10,
    backgroundColor: "blue",
    position: "absolute",
    left: 80,
    bottom: 30
  }
});
