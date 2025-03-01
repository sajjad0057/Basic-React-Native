import React from "react";
import { FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = (props) => {
  return (
    <FlatList
      data={props.placeList}
      renderItem={({ item, index }) => {
        //console.log("item, index :", item, id);
        return (
          <ListItem
            placeName={item.value}
            onItemPressed={()=>props.handleSelectedPlace(item.key)}
            image = {item.image}
          />
        );
      }}
    />
  );
};

export default PlaceList;
