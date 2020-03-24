import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card, Button, Text, View } from "native-base";

const RolledOats = ({jwt}) => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" }
      ]}
    />
  );
};

export default RolledOats;
