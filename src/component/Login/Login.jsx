import React, { useState } from "react";
import backgroundImage from "../../Images/background.gif";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Login = (props) => {
  //console.log("props.navigation :",props.navigation);
  const [authState, setAuthState] = useState({
    mode: true,
    inputs: {
      email: "",
      password: "",
      confrimPassword: "",
    },
  });

  const updateInput = (value, name) => {
    setAuthState({
      ...authState,
      inputs: {
        ...authState.inputs,
        [name]: value,
      },
    });
  };

  const handleAuth = () => {
    const email = authState.inputs.email;
    const password = authState.inputs.password;
    const confrimPassword = authState.inputs.confrimPassword;

    if (email !== "" && password !== "") {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        if (authState.mode) {
          setAuthState({
            ...authState,
            inputs: {
              email: "",
              password: "",
              confrimPassword: "",
            },
          });
          props.navigation.navigate("Home");
        } else {
          if (password === confrimPassword) {
            setAuthState({
              ...authState,
              inputs: {
                email: "",
                password: "",
                confrimPassword: "",
              },
            });
            props.navigation.navigate("Home");
          } else {
            alert("password field doesn't match !");
          }
        }
      } else {
        alert("Invalid Email");
      }
    } else {
      alert("Input all the field");
    }
  };

  let conFrimPassFiled = null;
  if (!authState.mode) {
    conFrimPassFiled = (
      <TextInput
        placeholder="Confrim Password"
        value={authState.inputs.confrimPassword}
        style={styles.imputField}
        onChangeText={(value) => updateInput(value, "confrimPassword")}
      />
    );
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ width: "100%", flex: 1 }}
      blurRadius={3}
    >
      <View style={styles.loginView}>
        <TouchableOpacity
          style={{
            ...styles.btnContainer,
            backgroundColor: "#1167b1",
            width: "95%",
          }}
          onPress={() => setAuthState({ ...authState, mode: !authState.mode })}
        >
          <Text style={styles.btnStyle}>
            {authState.mode ? "Switch To Sign Up" : "Switch To Login"}
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Email Address"
          value={authState.inputs.email}
          style={styles.imputField}
          onChangeText={(value) => updateInput(value, "email")}
        />
        <TextInput
          placeholder="Password"
          value={authState.inputs.password}
          style={styles.imputField}
          onChangeText={(value) => updateInput(value, "password")}
        />
        {conFrimPassFiled}

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => handleAuth()}
        >
          <Text style={styles.btnStyle}>
            {authState.mode ? "Login" : "Sign-up"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imputField: {
    width: "95%",
    padding: 5,
    marginTop: 10,
    backgroundColor: "#eeee",
    borderWidth: 1,
    borderColor: "#009688",
    borderRadius: 4,
  },
  btnStyle: {
    fontSize: 16,
    color: "#ffff",
    alignSelf: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: 150,
    paddingVertical: 5,
    backgroundColor: "#009688",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
