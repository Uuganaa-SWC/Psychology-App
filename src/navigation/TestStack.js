import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Test from "../screens/bottomTabBars/TestScreens/Test";
import TestSubScreen from "../screens/bottomTabBars/TestScreens/TestSubScreen";
import TestQuestion from "../screens/bottomTabBars/TestScreens/TestQuestion";
import TestResult from "../screens/bottomTabBars/TestScreens/TestResult";

const Stack = createStackNavigator();

const TestStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Test"}
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#60bde8",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="Test"
        component={Test}
        options={({ navigation }) => ({
          title: "Тест, дасгал",
        })}
      />
      <Stack.Screen
        name="TestSubScreen"
        component={TestSubScreen}
        options={({ navigation, route }) => ({
          headerTitle: route.params.questionName,
        })}
      />
      <Stack.Screen
        name="TestQuestion"
        component={TestQuestion}
        options={({ navigation, route }) => ({
          headerTitle: route.params.testSubQues,
        })}
      />
      <Stack.Screen
        name="TestResult"
        component={TestResult}
        options={({ navigation, route }) => ({
          headerTitle: route.params.questionName,
        })}
      />
    </Stack.Navigator>
  );
};

export default TestStack;
