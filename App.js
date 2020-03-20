import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationNavigator from "./navigators/StackNavigation";
import DrawerNavigator from "./navigators/DrawerNavigation";
import { AsyncStorage } from "react-native";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Breakfast from "./pages/Breakfast";
import Egg from "./breakfast_screen/Egg";

export default function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <NavigationContainer>
        {login ? (
          <>
            <DrawerNavigator />;
          </>
        ) : (
          <AuthenticationNavigator />
        )}
      </NavigationContainer>
    </>
  );
}

// {
//   /* <BrowserRouter>
//               <Switch>
//                 <Route exact path="/breakfast">
//                   <Breakfast />
//                 </Route>
//                 <Route exact path="/breakfast/eggs">
//                   <Egg />
//                 </Route>
//               </Switch>
//             </BrowserRouter> */
// }

// {
//   /* <BrowserRouter>
//               <Link to="/breakfast">
//                 <TouchableHighlight
//                   style={styles.imageContainer}
//                   // onPress={() => navigation.navigate("BreakfastScreen")}
//                 >
//                   <Image
//                     style={styles.image}
//                     source={require("./img/breakfast.png")}
//                   />
//                 </TouchableHighlight>
//                 <Text>Breakfast</Text>
//               </Link>
//             </BrowserRouter> */
// }
