import "react-native-gesture-handler";
import React from "react";
import MainComponent from "./src/MainComponent";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/component/Login/Login";
import navigationTab from "./src/component/navigationTab/navigationTab";




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={navigationTab} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
