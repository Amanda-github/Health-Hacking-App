import React, { useState } from "React";
import { Text } from "native-base";
import Coffee from "../breakfast_screen/Coffee";
import Egg from "../breakfast_screen/Egg";
import RolledOats from "../breakfast_screen/RolledOats";
import WholeMealBread from "../breakfast_screen/WholeMealBread";

const Consumed = ({ value }) => {
  return <Text>{Coffee.value}</Text>;
};

export default Consumed;
