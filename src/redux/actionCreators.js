import { navigate } from "../NavigationRoot";
import * as actionTypes from "./actionType"



const updatePlaceInState=(place)=>{
    return {
        type : actionTypes.ADD_PLACE,
        payload : place
    }
}



export const addPlace = place =>(dispatch,getState)=>{     
    // If we using redux-thunk middleware here 2nd parameter "getSate" give us global sate.
    let token = getState().token;
    fetch(`https://my-places-97beb-default-rtdb.firebaseio.com/places.json?auth=${token}`,{
        method:"POST",
        body:JSON.stringify(place)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('handle fetch post data :',data)
        dispatch(updatePlaceInState(place))
    })
    .catch(err=>{
        return console.log('hanlde fetch post err :',err)
    })
}

export const setPlaces = places =>{
    return {
        type : actionTypes.SET_PLACES,
        payload : places
    }
}



export const loadPlaces = () =>(dispatch,getState)=>{
    // If we using redux-thunk middleware here 2nd parameter "getSate" give us global sate.
    let token = getState().token;
    fetch(`https://my-places-97beb-default-rtdb.firebaseio.com/places.json?auth=${token}`)
    .then(res=>res.json())
    .then(data=>{
        //console.log("handle fetch get data :",data)
        const places = []
        for(let key in data){
            places.push({
                ...data[key],
                key:key
            })
        }
         
         dispatch(setPlaces(places))
    })
    .catch(err=>{
        alert("Something Went Wrong !")
        console.log("handle fetch get err :",err)
    })
}

const deletePlaceInState = key =>{
    return {
        type : actionTypes.DELETE_PLACE,
        payload : key
    }
}

export const DeletePlace = key =>(dispatch,getState)=>{
    // If we using redux-thunk middleware here 2nd parameter "getSate" give us global sate.
    let token = getState().token;
    fetch(`https://my-places-97beb-default-rtdb.firebaseio.com/places/${key}.json?auth=${token}`,{
        method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
        dispatch(deletePlaceInState(key))
        console.log("Delete Action success---->",data)

    })
    .catch(err=>console.log("Delete Action  error ---->",err))
}



export const setSelectedPlace = place =>{
    return {
        type : actionTypes.SELECT_PLACE,
        payload : place
    }
}

const ClearPlaceListInState = () =>{
    return {
        type : actionTypes.CLEAR_PLACELIST
    }
}



export const ClearPlaceList = () =>(dispatch,getState)=>{
    // If we using redux-thunk middleware here 2nd parameter "getSate" give us global sate.
    let token = getState().token;
    fetch(`https://my-places-97beb-default-rtdb.firebaseio.com/places.json?auth=${token}`,{
        method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
        dispatch(ClearPlaceListInState())
        console.log("Delete All Action success---->",data)

    })
    .catch(err=>console.log("Delete all Action  error ---->",err))
}

export const authUser = (token)=>{
    return {
        type : actionTypes.AUTHENTICATE_USER,
        payload : token

    }
}




export const tryAuth = (email,password,mode)=>(dispatch)=>{
    let URL = ""
    const API_KEY = "AIzaSyCSgyWbDTmR7g7Q6EiUZXvsbZ19ClNuQpk"
    if(!mode){
        URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
    }else{
        URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    }
    
    fetch(URL+API_KEY,{
        method:"POST",
        body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true,
        }),
        headers:{
            "Content-Type":"application/json"
        }
      
    })
    .catch(err=>{
        console.log("err------> :",err);
        alert("Authentication Failed!")
    })
    .then(res=>res.json())
    .then(data=>{
        //console.log("data----> :",data)
        if(data.error){
            alert(data.error.message)
        }else{
            dispatch(authUser(data.idToken))
            navigate("Places")
            
        }
    })
}

