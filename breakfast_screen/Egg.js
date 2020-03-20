import React from "react";
import { RNPickerSelect } from "react-native-picker-select";
import { Container, Content, Card, Button, Text } from "native-base";

const Egg = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        { label: "Football", value: "football" },
        { label: "Baseball", value: "baseball" },
        { label: "Hockey", value: "hockey" }
      ]}
    />
  );
};

export default Egg;
