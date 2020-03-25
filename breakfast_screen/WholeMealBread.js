import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Text, View } from "native-base";
import axios from "axios";

const WholeMealBread = ({ jwt }) => {
  const [multiple, setMultiple] = useState("");
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        food: "Whole Meal Bread",
        serving: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setMultiple(value * 78);
        }
      })
      .catch(error => {
        setMultiple(value * 78);
        console.error(error.response);
      });
    console.log(multiple);
  };
  return (
    <Container>
      <Card>
        <Content>
          <View>
            <Text style={{ color: "darkblue" }}>
              <h2>
                Nutrition Facts:
                {"\n"}
                Amount per slice: 29g
                {"\n"}
                Calories: 78 kcal
                {"\n"}
                {"\n"}
              </h2>
            </Text>
          </View>
        </Content>
      </Card>
      <Card>
        <Content>
          <View>
            <Text> Quantity:</Text>
            <RNPickerSelect
              placeholderTextColor="darkblue"
              placeholder={{ label: "Select an option", value: "null" }}
              onValueChange={value => update(value)}
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
        <Content>
          <View>
            <Text>Total Calories Consumed:</Text>
            <Text>{multiple}</Text>
          </View>
        </Content>
      </Card>
    </Container>
  );
};

export default WholeMealBread;
