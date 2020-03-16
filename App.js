import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationNavigator from "./navigators/StackNavigation";
import DrawerNavigator from "./navigators/DrawerNavigation";
// import Login from "./pages/Login";
// import HomePage from "./pages/HomePage";
// import SignUp from "./pages/Signup";

export default function App() {
  const [login, setLogin] = useState(true);
  return (
    <NavigationContainer>
      {login ? <DrawerNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
}

// state = {
//   isLoggedIn: falsew
// };
// export default function App() {
//   if (this.state.login)
//     return <Login onSignupPress={() => this.setLogin({ login: false })} />;
//   else return <Login onLoginPress={() => this.setLogin({ login: true })} />;
// }

// export default function App() {
//   const [login, setLogin] = useState(false);
//   return (
//     <>
//       <Login />
//       <NavigationContainer>
//         {login ? (
//           <SignUp onSignupPress={() => setLogin(false)} />
//         ) : (
//           <HomePage onLoginPress={() => setLogin(true)} />
//         )}
//       </NavigationContainer>
//     </>
//   );
// }
