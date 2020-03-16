import React from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  Container,
  Content,
  Card,
  CardItem,
  Icon,
  Text,
  Body,
  Button,
  View
} from "native-base";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const activities = () => {
  return (
    <Container style={{ margin: 20 }}>
      <Content>
        <Card>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[{ label: "Running on treadmill", value: "text" }]}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default activities;
