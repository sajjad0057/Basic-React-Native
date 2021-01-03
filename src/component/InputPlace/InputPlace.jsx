import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import PickImage from "../PickImage/PickImage";

const InputPlace = (props) => {
  return (
    <View>
      <View style={styles.inputView}>
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "orange",
            padding: 7,
          }}
          placeholder="Name of the Place"
          value={props.inputValue}
          onChangeText={(text) => props.setInputValue(text)}
        />
        
      </View>

    </View>
  );
};

export default InputPlace;

const styles = StyleSheet.create({
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
