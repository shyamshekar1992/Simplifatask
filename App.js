import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployerDetails from "./EmployerDetails";
import SingleData from "./SingleData";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Simplifa GMBH" component={HomeScreen} />
        <Stack.Screen name="Details" component={EmployerDetails} />
        <Stack.Screen name="SingleData" component={SingleData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
