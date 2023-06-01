import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

const Signup = ({ navigation }) => {
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
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account?
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Home")}
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
