import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Container, Content, Card } from "native-base";
import { Calendar } from "react-native-calendars";

const activities = () => {
  return (
    <Container style={{ margin: 20 }}>
      <Content>
        <Card>
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
            onPressArrowLeft={substractMonth => substractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            disableArrowLeft={false}
            disableArrowRight={false}
          />
        </Card>
        <Card>
          <RNPickerSelect
            style={{ margin: 20 }}
            onValueChange={value => console.log(value)}
            items={[
              { label: "Running on treadmill", value: "Running on treadmill" }
            ]}
          />
        </Card>
      </Content>
    </Container>
  );
};

export default activities;
