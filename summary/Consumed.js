import React, { useState, useEffect } from "React";
import { Text } from "native-base";
import axios from "axios";

const Consumed = ({ jwt }) => {
  const [morning, setMorning] = useState("");
  const [noon, setNoon] = useState("");
  const [night, setNight] = useState("");

  let header = {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  };
  //update url
  let breakfast = "http://team-4.herokuapp.com/api/v1/user_meal/create";
  let lunch = "http://team-4.herokuapp.com/api/v1/user_meal/create";
  let dinner = "http://team-4.herokuapp.com/api/v1/user_meal/create";

  const requestBreakfast = axios.get(breakfast, header);
  const requestLunch = axios.get(lunch, header);
  const requestDinner = axios.get(dinner, header);

  useEffect(() => {
    axios
      .all([requestBreakfast, requestLunch, requestDinner])
      .then(
        axios.spread((...response) => {
          console.log(response);
          const responseBreakfast = response[0];
          const responseLunch = response[1];
          const responseDinner = response[2];
          console.log(responseBreakfast);
          console.log(responseLunch);
          console.log(responseDinner);
          setMorning(responseBreakfast.data);
          setNoon(responseLunch.data);
          setNight(responseDinner.data);
        })
      )
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  return (
    <View>
      <Text>{morning}</Text>
      <Text>{noon}</Text>
      <Text>{night}</Text>
    </View>
  );
};

export default Consumed;
