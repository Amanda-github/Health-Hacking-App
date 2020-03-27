import React, { useState } from "react";
import { View, Button, Input } from "native-base";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const askForPushPermission = setToken => async () => {};

const Reminder = () => {
  const [token, setToken] = useState();
  return (
    <View>
      <Input value={token} />
      <Button title="Click Me" onPress={() => askForPushPermission(setToken)} />
    </View>
  );
};

export default Reminder;
