import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

const ListItem = ({placeName}) => {
    return (
        <View style={styles.listItem}>
            <Text style={{textAlign:"center"}}>
                {placeName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem : {
        marginTop: 5,
        padding:8,
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "orange",
        color: "#20232a",
        fontSize: 30,
        fontWeight: "bold"

    }
    
})


export default ListItem
