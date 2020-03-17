import React from "react";
import {
  Container,
  Content,
  Card,
  Header,
  Button,
  Text,
  Icon
} from "native-base";
import "react-native-gesture-handler";
// import { Calendar, CalendarList } from "react-native-calendars";

const activities = ({ navigation }) => {
  return (
    <Container style={{ margin: 20 }}>
      <Content>
        {/* <Card>
          <CalendarList
            horizontal={true}
            pagingEnabled={true}
            calendarWidth={320}
          >
            <Calendar
              current={"2020-03-16"}
              onDayPress={day => {
                console.log("selected day", day);
              }}
              onDayLongPress={day => {
                console.log("selected day", day);
              }}
              monthFormat={"yyyy MM"}
              onMonthChange={month => {
                console.log("month changed", month);
              }}
              hideArrows={true}
              renderArrow={direction => {
                if (direction == "left" && this.state.prevMonthAvailable)
                  return (
                    <Icon name="chevron-left" size={30} color={colors.blue} />
                  );
                if (direction == "right" && this.state.nextMonthAvailable)
                  return (
                    <Icon name="chevron-right" size={30} color={colors.blue} />
                  );
              }}
              onMonthChange={month => {
                if (moment(month.dateString).isAfter(this.state.maxDate)) {
                  this.setState({
                    nextMonthAvailable: false
                  });
                }
              }}
              hideExtraDays={true}
              disableMonthChange={true}
              firstDay={1}
              hideDayNames={false}
              showWeekNumbers={false}
            />
          </CalendarList>
        </Card> */}
        <Card>
          <Content>
            <Button
              onPress={() => navigation.navigate("RunningScreen")}
              block
              bordered
            >
              <Text>Running</Text>
            </Button>
            <Button block bordered info>
              <Text>Walking</Text>
            </Button>
            <Button block bordered>
              <Text>Cycling</Text>
            </Button>
            <Button block bordered info>
              <Text>Swimming</Text>
            </Button>
            <Button block bordered>
              <Text>Hiking</Text>
            </Button>
            <Button block bordered info>
              <Text>Treadmill</Text>
            </Button>
            <Button block bordered>
              <Text>Weight Machines</Text>
            </Button>
            <Button block bordered info>
              <Text>Circuit Training</Text>
            </Button>
          </Content>
        </Card>
      </Content>
    </Container>
  );
};

export default activities;
