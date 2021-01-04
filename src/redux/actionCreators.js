import * as actionTypes from "./actionType"


export const addPlace = place =>dispatch=>{
    fetch("https://my-places-97beb-default-rtdb.firebaseio.com/places.json",{
        method:"POST",
        body:JSON.stringify(place)
    })
    .then(response=>response.json())
    .then(data=>console.log('handle fetch post data :',data))
    .catch(err=>{
        return console.log('Error to fetch post data :',err)
    })
}

export const DeletePlace = key =>{
    return {
        type : actionTypes.DELETE_PLACE,
        payload : key
    }
}

export const setSelectedPlace = place =>{
    return {
        type : actionTypes.SELECT_PLACE,
        payload : place
    }
}

export const ClearPlaceList = () =>{
    return {
        type : actionTypes.CLEAR_PLACELIST
    }
}


