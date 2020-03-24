import React, { useState } from "React";
import { Text } from "native-base";
import Coffee from "../breakfast_screen/Coffee";
import Egg from "../breakfast_screen/Egg";
import RolledOats from "../breakfast_screen/RolledOats";
import WholeMealBread from "../breakfast_screen/WholeMealBread";
import axios from "axios";

const Consumed = () => {
  const jwt =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODQ5NDk1NTEsIm5iZiI6MTU4NDk0OTU1MSwianRpIjoiMzg0Nzc5MWQtNmY1ZS00MGQ3LWI1MmItNjg4MzIwYzc2M2UzIiwiZXhwIjoxNTg0OTUwNDUxLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.HD6a5kFZ60Sf5aUsUQLaL3i6UvrguWpZhP2YQywx_pM";
  const retrieve = value => {
    console.log(value);
    axios({
      method: "GET",
      url: "http://team-4.herokuapp.com/api/v1/user_meal/create"
    });
  };
};

export default Consumed;
