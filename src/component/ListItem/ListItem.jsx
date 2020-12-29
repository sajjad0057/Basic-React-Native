import React from "react";
import { StyleSheet, View, Text, Pressable,Image  } from "react-native";

const ListItem = ({ placeName, onItemPressed,image }) => {
  return (
    <Pressable  onPress={onItemPressed}>
      <View style={styles.listItem} >
        <Image source={image} style={styles.ImgStyle}/>
        <Text style={{ textAlign: "center" }}>{placeName}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 5,
    padding: 8,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "orange",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
  ImgStyle : {
    width : "100%",
    height : 150,
}
});

export default ListItem;
