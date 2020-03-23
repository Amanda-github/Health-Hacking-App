import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Button, Text, View } from "native-base";
import axios from 'axios'

const WholeMealBread = () => {
  const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODQ5NDk1NTEsIm5iZiI6MTU4NDk0OTU1MSwianRpIjoiMzg0Nzc5MWQtNmY1ZS00MGQ3LWI1MmItNjg4MzIwYzc2M2UzIiwiZXhwIjoxNTg0OTUwNDUxLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.HD6a5kFZ60Sf5aUsUQLaL3i6UvrguWpZhP2YQywx_pM"
  const update = (value) => {
    console.log(value)
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
      })
      .catch(error => {
        console.error(error.response); // so that we know what went wrong if the request failed
      });
  }

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
                Calories: 78kcal
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
        <Content>
          <View>
            <Text>Total Calories Consumed:</Text>
          </View>
        </Content>
      </Card>
    </Container>
  );
};

export default WholeMealBread;
