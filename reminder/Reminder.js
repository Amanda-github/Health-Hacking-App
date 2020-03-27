import React, { useState } from "react";
import { View, Button, Input, Text } from "native-base";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import axios from "axios";

const askForPushPermission = setToken => async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const status = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  console.log(`push notification status`, finalStatus);
  if (finalStatus !== "granted") {
    setToken(token);
  }
};

const Reminder = ({ jwt }) => {
  const [token, setToken] = useState();
  const reminder = () => {
    axios({
      method: "POST",
      url: "...",
      headers: { Authorization: `Bearer ${jwt}` },
      data: {
        task: task,
        date: date,
        time: time
      }
    })
      .then(response => {
        console.log(response.data);
        if (response.data.success) setToken(token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Input value={token} />
      <Button title="Click Me" onPress={askForPushPermission(setToken)} />
      <Text>{reminder}</Text>
    </View>
  );
};

export default Reminder;
