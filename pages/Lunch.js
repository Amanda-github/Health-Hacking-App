import React from "react";
import RNPickerSelect from "react-native-picker-select";
const Lunch = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        { label: "Rice - 100kcal", value: "Rice - 100kcal" },
        {
          label: "Instant Noodles - 10kcal",
          value: "Instant Noodles - 10kcal"
        },
        { label: "Coffee - 2kcal", value: "Coffee - 2kcal" }
      ]}
    />
  );
};
export default Lunch;
