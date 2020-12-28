import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [inputValue,setInputValue] = useState("");
  const [placeList,setPlaceState] = useState([])
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
          value = {inputValue}
          onChangeText = {(text)=>setInputValue(text)}
        />

          <Button
          title="ADD"
          color="#2E8B57"
          onPress={()=>{
            if (inputValue !==""){
              setPlaceState([...placeList,inputValue])
              setInputValue("")
            }
            
          }} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  inputView: {
    padding: 20,
    width :"100%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",

  },
});
