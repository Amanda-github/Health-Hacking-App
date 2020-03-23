import React from "react";
import { Button, Text } from "native-base";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Dinner = ({ navigation }) => {
  return (
    <>
      <RNPickerSelect
        onValueChange={value => console.log(value)}
        items={[
          { label: "Rice - 100kcal", value: "Rice - 100kcal" },
          {
            label: "Chow Mein - 10kcal",
            value: "Chow Mein - 10kcal"
          },
          { label: "Coke - 100kcal", value: "Coke- 100kcal" }
        ]}
      />
      <View style={{ alignItems: "center", top: 78 }}>
        <Button
          small
          info
          onPress={() => navigation.goBack("HomeScreen")}
          style={{ width: 140 }}
        >
          <Text>Home</Text>
        </Button>
      </View>
    </>
  );
};
export default Dinner;
