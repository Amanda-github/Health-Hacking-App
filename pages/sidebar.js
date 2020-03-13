import React from "react";
import { Image, View } from "react-native";
import { Text, Container, List, ListItem, Content } from "native-base";

const Routes = ["HomePage"];

const SideBar = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
          }}
          style={{
            height: 120,
            width: "100%",
            alignSelf: "stretch",
            position: "absolute"
          }}
        />
        <Image
          square
          style={{
            height: 80,
            width: 70,
            position: "absolute",
            alignSelf: "center",
            top: 20
          }}
          source={{
            uri:
              "https://www.nicepng.com/png/detail/139-1396003_satisfied-customer-png-download-happy-customer-icon-png.png"
          }}
        />
        <List
          dataArray={Routes}
          contentContainerStyle={{ marginTop: 120 }}
          renderRow={data => {
            return (
              <ListItem button onPress={() => navigation.navigate(data)}>
                <View>
                  <Text>{data}</Text>
                </View>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default SideBar;
