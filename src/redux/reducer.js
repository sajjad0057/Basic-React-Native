import * as actionTypes from "./actionType"


const initState = {
    placeList : [],
    selectedPlace : null,
    isAuth:false,
}



export const rootReducer = (state=initState,action)=>{
    switch(action.type){
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                placeList : state.placeList.concat(action.payload)
            }
        case actionTypes.CLEAR_PLACELIST:
            return {
                ...state,
                placeList : []
            }
        case actionTypes.DELETE_PLACE:
            const newplaceList = state.placeList.filter((place) => (
                place.key !== action.payload
              ));

            return {
                ...state,
                placeList : newplaceList
            }

        case actionTypes.SELECT_PLACE:
            return {
                ...state,
                selectedPlace : action.payload
            }
        case actionTypes.SET_PLACES:
            return {
                ...state,
                placeList : action.payload
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth : true
            }
        default:
            return state
    }
}