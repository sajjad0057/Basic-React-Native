import React from "react";
import { View, Button,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const PickImage = (props) => {
    //console.log("PickImage props--->",props);
    const handleImagePick = async ()=>{
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing:true,
              aspect : [4,3],
              quality : 1
            })
            if(!result.cancelled){
                //console.log("result --->",result);
                props.setImage(result.uri)
            }
        }
        catch(err){
            console.log("err--->",err);
        }
    }
    let showImage =null
    if(props.image !==null){
        showImage = <Image source={{ uri : props.image  }} style={{width:"100%",height:200}}/>
    }

  return (
    <View>
        {showImage}
      <View style={{padding:4}}>
        <Button 
        title="Pick an Image" 
        color="orange"
        onPress={handleImagePick} 
        />
      </View>
    </View>
  );
};

export default PickImage;
