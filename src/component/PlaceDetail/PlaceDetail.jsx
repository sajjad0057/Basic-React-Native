import React from 'react'
import { StyleSheet, Text, View,Modal,Image,Button,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = (props) => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={styles.ImgStyle}/>
                <Text style={styles.TextStyle}>
                    {props.place.value}
                </Text>
                <View style={{margin:4,alignItems:"center"}}>
                    <TouchableOpacity
                    onPress = {()=>props.handleDeleteItem(props.place.key)} 
                    >
                        <Icon name="trash" size={60} color="red"/>
                    </TouchableOpacity>
                </View>
                <View style={{margin:4,alignItems:"center"}}>
                <TouchableOpacity
                onPress = {()=>props.handleHideModal()}
                >
                    <Icon name="times-circle" size={60}color="green"/>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail

const styles = StyleSheet.create({
    ImgStyle : {
        width : "100%",
        height : 200
    },
    TextStyle : {
        textAlign : "center",
        fontSize : 40
    },

})