import React,{useState }from 'react'
import { View, Text,Button,TextInput,StyleSheet,TouchableOpacity } from 'react-native'


const Login = props => {
    const [authState,setAuthState] = useState({
        mode : "login",
        inputs : {
            email : "",
            password : "",
            confrimPassword : "",
        }
    })
    //console.log("props.navigation :",props.navigation);
    return (
        <View style={styles.loginView}>
            <TextInput 
            placeholder="Email Address"
            value={authState.inputs.email}
            style={styles.imputField}
            />
            <TextInput
            placeholder="Password"
            value={authState.inputs.password}
            style={styles.imputField}
            />
            <TextInput
            placeholder="Confrim Password"
            value={authState.inputs.confrimPassword}
            style={styles.imputField}
            />
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnStyle}>
                    {authState.mode==="login"?"Login":"Sign-up"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    loginView :{
        flex : 1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    imputField:{
        width:"95%",
        padding:5,
        marginTop:10,
        backgroundColor:"#eeee",
        borderWidth:1,
        borderColor:"#009688",
        borderRadius:4
    },
    btnStyle :{
        fontSize:16,
        color:"#ffff",
        alignSelf:"center",

    },
    btnContainer :{
        flexDirection:"row",
        width:150,
        paddingVertical:5,
        backgroundColor:"#009688",
        borderRadius:5,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"

    }
})
