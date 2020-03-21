import React from "react";
import RNPickerSelect from "react-native-picker-select";

const Dinner = () => {
  return (
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
  );
};
export default Dinner;
