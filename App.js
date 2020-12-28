import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import ListItem from "./component/ListItem";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceState] = useState([]);

  let ClearBtn = null;
  if (placeList.length > 0) {
    ClearBtn = (
      <View style={styles.clrBtn}>
        <Button
          title="clear"
          color="#2E8B57"
          onPress={() => {
            setTimeout(() => {
              setPlaceState([]);
              setInputValue("");
            }, 200);

            console.log("press");
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={{
            width: "85%",
            borderBottomWidth: 1,
            borderColor: "orange",
            padding: 7,
          }}
          placeholder="Add a place .."
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <Button
          title="ADD"
          color="#2E8B57"
          onPress={() => {
            if (inputValue !== "") {
              setPlaceState([
                ...placeList,
                { key: Math.random().toString(), value: inputValue },
              ]);
              setInputValue("");
            }
          }}
        />
      </View>
      <FlatList
        data={placeList}
        renderItem={({ item, index }) => {
          //console.log("item, index :", item, index);
          return (
            <ListItem
              placeName={item.value}
              onItemPressed={() => alert(`Hello ${item} !`)}
            />
          );
        }}
      />
      {ClearBtn}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
  },
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clrBtn: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 6,
    position: "relative",
  },
});
