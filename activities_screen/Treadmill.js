import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Text } from "native-base";
import axios from "axios";

const Treadmill = ({ jwt }) => {
  const [burnt, setBurnt] = useState("");
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        activity: "Treadmill",
        duration: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setBurnt(value * 3.16);
        }
      })
      .catch(error => {
        setBurnt(value * 3.16);
        console.error(error.response);
      });
    console.log(burnt);
  };
  return (
    <Container>
      <Card style={{ margin: 20 }}>
        <Content>
          <Text>
            Treadmill
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

export default Treadmill;
