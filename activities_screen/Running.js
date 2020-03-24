import React, { useState } from "react";
import { Container, Card, Content, Text } from "native-base";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

const Running = () => {
  const [burnt, setBurnt] = useState("");
  //change
  const jwt =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODQ5NDk1NTEsIm5iZiI6MTU4NDk0OTU1MSwianRpIjoiMzg0Nzc5MWQtNmY1ZS00MGQ3LWI1MmItNjg4MzIwYzc2M2UzIiwiZXhwIjoxNTg0OTUwNDUxLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.HD6a5kFZ60Sf5aUsUQLaL3i6UvrguWpZhP2YQywx_pM";
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      //change url
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        activity: "Running",
        duration: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setBurnt(value * 7.27);
        }
      })
      .catch(error => {
        setBurnt(value * 7.27);
        console.error(error.response);
      });
    console.log(burnt);
  };
  return (
    <Container>
      <Card style={{ margin: 20 }}>
        <Content>
          <Text>
            Running
            {"\n"}
            218kcal | 30 mins
            {"\n"}
            {"\n"}
          </Text>
          <Text>Duration:</Text>
          <RNPickerSelect
            onValueChange={value => update(value)}
            items={[
              { label: "15 mins", value: "15" },
              { label: "30 mins", value: "30" },
              { label: "45 mins", value: "45" },
              { label: "60 mins", value: "60" },
              { label: "75 mins", value: "75" },
              { label: "90 mins", value: "90" }
            ]}
          />
          <Text> {"\n"} Total Calories Burnt:</Text>
          <Text>{burnt}</Text>
        </Content>
      </Card>
    </Container>
  );
};

export default Running;
