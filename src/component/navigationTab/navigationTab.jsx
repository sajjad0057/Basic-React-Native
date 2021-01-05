import React,{useEffect} from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SharePlaces from "../SharePlaces/SharePlaces";
import FindPlaces from "../FindPlaces/FindPlaces";
import Icons from "react-native-vector-icons/Ionicons";
import { loadPlaces } from "../../redux/actionCreators";




const Tab = createBottomTabNavigator();

const test=()=>{
  console.log("fhsfgs");
}




const navigationTab = (props) => {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Share Places"
        component={SharePlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="arrow-redo-sharp" color={color} size={size} onPress={test()}/>
            
          ),
          
        
        }}
      >  
        
      </Tab.Screen>
      <Tab.Screen
        name="Find Places"
        component={FindPlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="md-map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default navigationTab;
