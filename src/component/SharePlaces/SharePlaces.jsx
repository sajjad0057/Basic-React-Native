import React, { useState } from "react";
import { View, Text, Button } from "react-native";
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
  const [image, setImage] = useState(null);
  //console.log("image :",image);
  //console.log("SharePlaces props --->",props);

  const handleAddingPlace = () => {
    if (inputValue === "" || image === null) {
      if (image === null) {
        alert("Pick an Image !");
      } else {
        alert("Add place name !");
      }
    }else{
        
        props.addPlace({
            key: Math.random().toString(),
            value:inputValue,
            image: image
          });
          setInputValue("");
          setImage(null)
          props.navigation.navigate("Find Places")
    }
  };

  return (
    <View>
      <PickImage image={image} setImage={setImage} />
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        addPlace={props.addPlace}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "50%" }}>
          <Button
            title="ADD PLACE"
            color="#f50589"
            onPress={() => {
              handleAddingPlace();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default connect(null, mapDispatchToProps)(SharePlaces);
