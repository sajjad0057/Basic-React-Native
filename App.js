import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button,ScrollView } from "react-native";
import ListItem from "./component/ListItem";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceState] = useState([]);

  const list = placeList.map((item, i) => {
    return <ListItem placeName={item} key={i}  onItemPressed={()=>alert(`Hello ${item} !`)}/>;
  });
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
              setPlaceState([...placeList, inputValue]);
              setInputValue("");
            }
          }}
        />
      </View >
      <ScrollView>
      {list}
      </ScrollView>


      <View style={styles.clrBtn}>
      <Button
      title="clear"
      color="#2E8B57"
      
      onPress={()=>{
        setPlaceState([])
        setInputValue("")
        console.log("press");
      }}
      />
      </View>

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
  clrBtn :{
    marginTop : 5,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 6,

  }
});
