import * as actionTypes from "./actionType"


export const addPlace = place =>{
    return {
        type : actionTypes.ADD_PLACE,
        payload : place
    }
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


