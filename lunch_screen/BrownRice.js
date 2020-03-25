import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Text, View } from "native-base";
import axios from "axios";

const BrownRice = ({ jwt }) => {
  const [multiple, setMultiple] = useState("");
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        food: "BrownRice",
        serving: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setMultiple(value * 1.11);
        }
      })
      .catch(error => {
        setMultiple(value * 1.11);
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
                Amount: 100g
                {"\n"}
                Calories: 111 kcal
                {"\n"}
                {"\n"}* Choosing brown rice over refined grains can help people
                with diabetes control their blood sugar and reduce the chances
                of developing diabetes at all.
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
                { label: "50g ", value: "50" },
                { label: "100g ", value: "100" },
                { label: "150g ", value: "150" },
                { label: "200g ", value: "200" }
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

export default BrownRice;
