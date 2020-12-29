import React from 'react'
import { StyleSheet, Text, View,Modal,Image,Button} from 'react-native'

const PlaceDetail = (props) => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={styles.ImgStyle}/>
                <Text style={styles.TextStyle}>
                    {props.place.value}
                </Text>
                <View>
                    <Button 
                    title="delete" 
                    color = "red"
                    onPress = {()=>props.handleDeleteItem(props.place.key)}
                    />
                </View>
                <View>
                    <Button 
                    title="close"
                    color = "green"
                    onPress = {()=>props.handleHideModal()}
                    />
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