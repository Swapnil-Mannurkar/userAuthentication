import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import {jsonData}  from './Test'

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      let usersData = jsonData();
      console.log(usersData)
      
      /*if (value != null) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Login failed.", "Invalid email or password.");
      }*/
    } catch (error) {
      console.error('Login failed.', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>User Authentication</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your user name"
          name = "username"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
          onChangeText={setPassword}
        />
        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handleLogin()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "black",
    // marginTop: 250,
    // marginLeft: 40,
    // marginRight: 40,
    // marginBottom: 250,
  },

  inputField: {
    borderWidth: 1,
    borderColor: "black",
    width: 200,
    padding: 5,
    marginTop: 20,
    color: "black",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 110,
    marginLeft: 110,
  },

  buttonContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },

  buttonText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },

  forgotPassword: {
    color: "blue",
    marginTop: 10,
    marginRight: 90,
  },
});

export default Login;
