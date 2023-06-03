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
import { jsonData } from "./Credentials";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhNum] = useState("");

  const handleSignup = () => {
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      phoneNumber === ""
    ) {
      Alert.alert("Please fill all the fields");
    } else {
      console.log(jsonData());
      const newUser = {
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
        phoneNumber: phoneNumber.trim(),
      };
      const updatedData = [...jsonData(), newUser];
      navigation.navigate("Credentials", { param: updatedData });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>User Authentication</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your user name"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your email-id"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Enter your phone number"
          onChangeText={setPhNum}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Create your new password"
          onChangeText={setPassword}
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
          onPress={() => handleSignup()}
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
