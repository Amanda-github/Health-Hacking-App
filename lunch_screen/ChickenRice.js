import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Text, View } from "native-base";
import axios from "axios";

const ChickenRice = ({ jwt }) => {
  const [multiple, setMultiple] = useState("");
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        food: "ChickenRice",
        serving: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setMultiple(value * 343.7);
        }
      })
      .catch(error => {
        setMultiple(value * 343.7);
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
                Amount: 1 serving
                {"\n"}
                Calories: 343.7 kcal
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
                { label: "1 serving", value: "1" },
                { label: "2 servings", value: "2" },
                { label: "3 servings", value: "3" },
                { label: "4 servings", value: "4" }
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

export default ChickenRice;
