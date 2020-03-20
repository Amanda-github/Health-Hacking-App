import React from "react";
import { RNPickerSelect } from "react-native-picker-select";
import { Container, Content, Card, Button, Text, View } from "native-base";

const Egg = () => {
  return (
    <Container>
      <Card>
        <Content>
          <View>
            <Text>Please Enter your input unit:</Text>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" }
              ]}
            />
          </View>
        </Content>
      </Card>
      <Card></Card>
    </Container>
  );
};

export default Egg;
