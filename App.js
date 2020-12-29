import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import InputPlace from "./component/InputPlace/InputPlace";
import PlaceDetail from "./component/PlaceDetail/PlaceDetail";
import PlaceList from "./component/PlaceList/PlaceList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceState] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  console.log("placeList :", placeList);
  console.log("selectedPlace :", selectedPlace);

  const handleSelectedPlace = (key) => {
    const place = placeList.find((place) => {
      return place.key === key;
    });
    setSelectedPlace(place);
  };

  const handleHideModal = () => {
    setSelectedPlace(null);
  };

  const handleDeleteItem = (key) => {
    //console.log("key :",key);
    const newplaceList = placeList.filter((place) => (
      place.key !== key
    ));
    //console.log("newplaceList :",newplaceList);
    setPlaceState(newplaceList);
    setSelectedPlace(null);
  };

  let placeDetail = null;
  if (selectedPlace !== null) {
    placeDetail = (
      <PlaceDetail
        place={selectedPlace}
        handleDeleteItem={handleDeleteItem}
        handleHideModal={handleHideModal}
      />
    );
  }

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

            console.log("press clear Button");
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {placeDetail}
      <InputPlace
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeList={placeList}
        setPlaceState={setPlaceState}
      />
      <PlaceList
        placeList={placeList}
        handleSelectedPlace={handleSelectedPlace}
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
  clrBtn: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 6,
    position: "relative",
  },
});
