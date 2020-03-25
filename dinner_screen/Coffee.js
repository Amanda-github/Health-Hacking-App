import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Text, View } from "native-base";
import axios from "axios";

const Coffee = ({ jwt }) => {
  const [multiple, setMultiple] = useState("");
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        food: "Coffee",
        serving: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setMultiple(value * 0);
        }
      })
      .catch(error => {
        setMultiple(value * 0);
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
                Amount: 50g (equivalent to 1 large Coffee)
                {"\n"}
                Calories: 77 kcal
                {"\n"}
                {"\n"}* The main active compound in coffee is the stimulant
                caffeine. It can cause a short-term boost in energy levels,
                brain function, metabolic rate and exercise performance. Studies
                show that coffee drinkers have a much lower risk of dementia,
                Alzheimer's disease and Parkinson's disease in old age.
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
                { label: "1 cup", value: "1" },
                { label: "2 cups", value: "2" },
                { label: "3 cups", value: "3" },
                { label: "4 cups", value: "4" }
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

export default Coffee;
