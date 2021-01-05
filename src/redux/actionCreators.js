import * as actionTypes from "./actionType"
import { navigate } from "../../App";


export const addPlace = place =>dispatch=>{
    fetch("https://my-places-97beb-default-rtdb.firebaseio.com/places.json",{
        method:"POST",
        body:JSON.stringify(place)
    })
    .then(response=>response.json())
    .then(data=>console.log('handle fetch post data :',data))
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



export const loadPlaces = () =>dispatch=>{
    fetch("https://my-places-97beb-default-rtdb.firebaseio.com/places.json")
    .then(res=>res.json())
    .then(data=>{
        console.log("handle fetch get data :",data)
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
        console.log("handle fetch post err :",err)
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

export const authUser = ()=>{
    return {
        type : actionTypes.AUTHENTICATE_USER,

    }
}




export const tryAuth = (email,password,mode)=>dispatch=>{
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
        console.log("data----> :",data)
        if(data.error){
            alert(data.error.message)
        }else{
            navigate("Home")
            dispatch(authUser())
        }
    })
}

