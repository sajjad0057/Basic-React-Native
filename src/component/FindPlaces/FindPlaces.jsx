import React, { useState,useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";

import PlaceDetail from "../PlaceDetail/PlaceDetail";
import PlaceList from "../PlaceList/PlaceList";
import { connect } from "react-redux";
import {ClearPlaceList,DeletePlace,setSelectedPlace,loadPlaces} from "../../redux/actionCreators";



const mapStateToProps = state =>{
  return {
    placeList : state.placeList,
    selectedPlace : state.selectedPlace
  }
}



const mapDispatchToProps = dispatch =>{
  return {
    ClearPlaceList : () =>dispatch(ClearPlaceList()),
    DeletePlace : key =>dispatch(DeletePlace(key)),
    setSelectedPlace : place =>dispatch(setSelectedPlace(place)),
    loadPlaces:()=>dispatch(loadPlaces())
  }
}




const FindPlaces = (props) =>{

    // console.log("placeList :", props.placeList);
    // console.log("selectedPlace :",props.selectedPlace);

    //console.log("FindPlace Props --->",props);

    useEffect(()=>{
      console.log("called useEffet");
      props.loadPlaces()
    },[])
  
    const handleSelectedPlace = (key) => {
      const place = props.placeList.find((place) => {
        return place.key === key;
      });
      props.setSelectedPlace(place);
    };
  
    const handleHideModal = () => {
      props.setSelectedPlace(null);
    };
  
    const handleDeleteItem = (key) => {
      //console.log("key :",key);
      props.setSelectedPlace(null);
      props.DeletePlace(key)
    };
  
    let placeDetail = null;
    if (props.selectedPlace !== null) {
      placeDetail = (
        <PlaceDetail
          place={props.selectedPlace}
          handleDeleteItem={handleDeleteItem}
          handleHideModal={handleHideModal}
        />
      );
    }
  
    let ClearBtn = null;
    if (props.placeList.length > 0) {
      ClearBtn = (
        <View style={styles.clrBtn}>
          <Button
            title="clear"
            color="#2E8B57"
            onPress={() => {
              setTimeout(() => {
                props.ClearPlaceList()
                props.navigation.navigate("Share Places")
              }, 200);
  
              //console.log("press clear Button");
            }}
          />
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        {placeDetail}

        <PlaceList
          placeList={props.placeList}
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


  export default connect(mapStateToProps,mapDispatchToProps)(FindPlaces)
