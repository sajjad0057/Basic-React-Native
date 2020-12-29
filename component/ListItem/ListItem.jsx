import React from "react";
import { StyleSheet, View, Text, Pressable  } from "react-native";

const ListItem = ({ placeName, onItemPressed }) => {
  return (
    <Pressable  onPress={onItemPressed}>
      <View style={styles.listItem} >
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
});

export default ListItem;
