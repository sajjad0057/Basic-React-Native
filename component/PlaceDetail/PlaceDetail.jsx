import React from 'react'
import { StyleSheet, Text, View,Modal,Image,Button} from 'react-native'

const PlaceDetail = (props) => {
    return (
        <Modal>
            <View>
                <Text>
                    {props.place.value}
                </Text>
                <View>
                    <Button title="delete"/>
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail

const styles = StyleSheet.create({})
