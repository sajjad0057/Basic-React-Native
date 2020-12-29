import React from 'react'
import { View,TextInput,Button,StyleSheet } from 'react-native'


const InputPlace = (props) => {
    return (
        <View style={styles.inputView}>
        <TextInput
          style={{
            width: "85%",
            borderBottomWidth: 1,
            borderColor: "orange",
            padding: 7,
          }}
          placeholder="Add a place .."
          value={props.inputValue}
          onChangeText={(text) => props.setInputValue(text)}
        />

        <Button
          title="ADD"
          color="#2E8B57"
          onPress={() => {
            if (props.inputValue !== "") {
              props.setPlaceState([
                ...props.placeList,
                { 
                    key: Math.random().toString(),
                    value: props.inputValue,
                    image : {
                        uri : "https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png"
                    },
                 },
              ]);
              props.setInputValue("");
            }
          }}
        />
      </View>
    )
}

export default InputPlace


const styles = StyleSheet.create({
    inputView: {
      padding: 20,
      width: "100%",
      marginTop: 50,
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
