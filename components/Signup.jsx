import React from "react";
import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

const Signup = () => {
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
          placeholder="Enter your email-id"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your phone number"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Create your new password"
        />
        <Text
          style={styles.forgotPassword}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          Already have an account?
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.buttonText}>Signup</Text>
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
    marginRight: 50,
    marginLeft: 50,
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
    marginRight: 50,
  },
});

export default Signup;
