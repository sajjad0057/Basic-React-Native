import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SharePlaces from "../SharePlaces/SharePlaces";
import FindPlaces from "../FindPlaces/FindPlaces";

const Tab = createBottomTabNavigator();

const navigationTab = (props) => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Share Places" component={SharePlaces} />
        <Tab.Screen name="Find Places" component={FindPlaces} />
      </Tab.Navigator>
      
  );
};

export default navigationTab;
