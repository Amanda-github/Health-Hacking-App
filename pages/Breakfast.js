import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

const BreakFast = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.52:5000/api/v1/meal/breakfast")
      .then(result => {
        console.log(result.data);
        setData(result.data);
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }, []);
  console.log(data);

  return (
    <RNPickerSelect onValueChange={value => console.log(value)} items={data} />
  );
};

export default BreakFast;
