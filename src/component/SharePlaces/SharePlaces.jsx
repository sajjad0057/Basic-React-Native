import React,{useState} from 'react'
import { View, Text } from 'react-native'
import InputPlace from "../InputPlace/InputPlace"
import { connect } from "react-redux";
import { addPlace } from '../../redux/actionCreators';


const mapDispatchToProps = dispatch =>{
    return {
      addPlace : place =>dispatch(addPlace(place)),
    }
  }

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState("");
    return (
        <InputPlace
          inputValue={inputValue}
          setInputValue={setInputValue}
          addPlace={props.addPlace}
        />
    )
}

export default connect(null,mapDispatchToProps)(SharePlaces)
