import React, { useState } from "react";
import { View, Text,Button } from "react-native";
import InputPlace from "../InputPlace/InputPlace";
import { connect } from "react-redux";
import { addPlace } from "../../redux/actionCreators";
import PickImage from "../PickImage/PickImage";

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (place) => dispatch(addPlace(place)),
  };
};

const SharePlaces = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [image,setImage] = useState(null)
  return (
    <View>
        <PickImage image={image} setImage={setImage}/>
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        addPlace={props.addPlace}
      />
      <View style={{alignItems:"center"}}>
      <View style={{width:"50%"}}>
        <Button
          title="ADD PLACE"
          color="#f50589"
          onPress={() => {
            if (inputValue !== "") {
              props.addPlace({
                key: Math.random().toString(),
                value:inputValue,
                image: {
                  uri:
                    "https://cdn-media-1.freecodecamp.org/images/1*e2uBLw946pDyqjdV5xAJpQ.png",
                },
              });
              setInputValue("");
            }
          }}
        />
      </View>
      </View>

    </View>
  );
};


export default connect(null, mapDispatchToProps)(SharePlaces);
