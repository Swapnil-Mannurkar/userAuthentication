import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";
import ForgotPassword from "./Screens/ForgotPassword";
import Credentials from "./Screens/Credentials";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ title: "Create your new account" }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ title: "Change your password" }}
          />
          <Stack.Screen
            name="Credentials"
            component={Credentials}
            options={{ title: "Password reset successful" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
