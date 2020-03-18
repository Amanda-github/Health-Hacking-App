import React from "react";
import { RNPickerSelect } from "react-native-picker-select";
import { Container, Content, Card, Button, Text } from "native-base";

const Egg = () => {
  return (
    <Container>
      <Content>
        <Card style={{ margin: 20 }}>
          <Text>Please enter your intake amount:</Text>
          <RNPickerSelect
            onChangeValue={value => console.log(value)}
            items={[
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
              { label: 4, value: 4 }
            ]}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default Egg;
