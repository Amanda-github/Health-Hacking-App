import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Text, View } from "native-base";
import axios from "axios";

const Egg = ({ jwt }) => {
  const [multiple, setMultiple] = useState("");
  const update = value => {
    console.log(value);
    axios({
      method: "POST",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        food: "Egg",
        serving: value
      }
    })
      .then(response => {
        console.log(response);
        if (response.data.success) {
          setMultiple(value * 77);
        }
      })
      .catch(error => {
        setMultiple(value * 77);
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
                Amount: 50g (equivalent to 1 large egg)
                {"\n"}
                Calories: 77 kcal
                {"\n"}
                {"\n"}* Eggs pack a complete range of amino acids, which means
                they are a complete protein source
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
                { label: "1 ", value: "1" },
                { label: "2 ", value: "2" },
                { label: "3 ", value: "3" },
                { label: "4 ", value: "4" }
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

export default Egg;
