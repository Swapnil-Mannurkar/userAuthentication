import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

let userData = [
  {
    username: "admin",
    email: "admin@gmail.com",
    phone: "9876543210",
    password: "admin",
  },
  {
    username: "qwe",
    email: "qwe@gmail.com",
    phone: "9876543210",
    password: "qwe",
  },
];

export const jsonData = () => {
  return userData;
};

const Credentials = ({ navigation }) => {
  const route = useRoute();
  const { param } = route.params;
  userData = param;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redirecting to login page...</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Credentials;
