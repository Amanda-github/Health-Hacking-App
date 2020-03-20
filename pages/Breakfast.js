import React, { useEffect, useState } from "react";
import { Container, Content, Card, Button, Text } from "native-base";
import { BrowserRouter, Link } from "react-router-dom";

const Breakfast = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Card>
          <Button
            block
            bordered
            onPress={() => navigation.navigate("EggScreen")}
          >
            <Text>Egg</Text>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export default Breakfast;

// import RNPickerSelect from "react-native-picker-select";
// import axios from "axios";

// const BreakFast = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://team-4.herokuapp.com/api/v1/meal/breakfast")
//       .then(result => {
//         console.log(result.data);
//         setData(result.data);
//       })
//       .catch(error => {
//         console.log("ERROR: ", error);
//       });
//   }, []);
//   console.log(data);

//   return (
//     <RNPickerSelect onValueChange={value => console.log(value)} items={data} />
//   );
// };

// export default BreakFast;
