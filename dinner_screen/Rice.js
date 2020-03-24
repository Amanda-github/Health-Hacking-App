import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Button, Text, View } from "native-base";

const Rice = () => {
  return (
    <Container>
      <Card>
        <Content>
          <View>
            <Text>Bowls:</Text>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                { label: "1/2", value: "1/2" },
                { label: "1", value: "1" }
              ]}
            />
          </View>
        </Content>
      </Card>
    </Container>
  );
};

export default Rice;
