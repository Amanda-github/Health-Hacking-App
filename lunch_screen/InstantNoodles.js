import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Button, Text, View } from "native-base";

const InstantNoodles = () => {
  return (
    <Container>
      <Card>
        <Content>
          <View>
            <Text>Bowls:</Text>
            <RNPickerSelect onValueChange={value} />
          </View>
        </Content>
      </Card>
    </Container>
  );
};
