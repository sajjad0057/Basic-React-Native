import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/component/Login/Login";
import navigationTab from "./src/component/navigationTab/navigationTab";


const navigationRef = React.createRef()

export const navigate = (name,params)=>{
  navigationRef.current && navigationRef.current.navigate(name,params)
}




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={navigationTab} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
