import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>User Authentication</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your user name"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
        />
        <Text
          style={styles.forgotPassword}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          Forgot password?
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Alert.alert("Simple Button pressed")}
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
