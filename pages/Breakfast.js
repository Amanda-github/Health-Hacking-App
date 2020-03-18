import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Card,
  Header,
  Button,
  Text,
  Icon
} from "native-base";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";

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

const BreakFast = () => {
  return (
    <Container>
      <Content>
        <Card>
          <Button block bordered>
            <Text>Hello</Text>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export default BreakFast;
