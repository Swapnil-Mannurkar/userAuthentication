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

const ForgotPassword = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleResetPassword = async () => {
    let usersData = jsonData();
    let flag = false;

    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i]["username"] === username.trim()) {
        if (password == "") {
          Alert.alert("Password cannot be empty");
          flag = true;
        } else {
          usersData[i]["password"] = password.trim();
          flag = true;
          try {
            navigation.navigate("Credentials", { param: usersData });
          } catch (error) {
            console.error("Failed to update JSON file:", error);
            Alert.alert("Password reset failed.", "An error occurred.");
          }
          break;
        }
      }
    }
    if (!flag) {
      Alert.alert("Username is not found");
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
          placeholder="Enter your new password"
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handleResetPassword()}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
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
});

export default ForgotPassword;
