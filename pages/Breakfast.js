import React from "react";
import RNPickerSelect from "react-native-picker-select";

const BreakFast = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      items={[
        { label: "Bread - 100kcal", value: "Bread - 100kcal" },
        { label: "Milk - 20kcal", value: "Milk - 20kcal" },
        { label: "Coffee - 2kcal", value: "Coffee - 2kcal" }
      ]}
    />
  );
};

export default BreakFast;
