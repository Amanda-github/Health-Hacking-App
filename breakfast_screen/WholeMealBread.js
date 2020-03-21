import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Button, Text, View } from "native-base";

const WholeMealBread = () => {
  return (
    <Container>
      <Card>
        <Content>
          <View>
            <Text>
              Nutrition Facts:
              {"\n"}
              Amount per slice: 29g
              {"\n"}
              Calories: 78kcal
              {"\n"}
              {"\n"}
            </Text>
          </View>
        </Content>
      </Card>
      <Card>
        <Content>
          <View>
            <Text> Quantity:</Text>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                { label: "1 slice", value: "1" },
                { label: "2 slices", value: "2" },
                { label: "3 slices", value: "3" },
                { label: "4 slices", value: "4" }
              ]}
            />
          </View>
        </Content>
      </Card>
      <Card>
        <Content></Content>
      </Card>
    </Container>
  );
};

export default WholeMealBread;
