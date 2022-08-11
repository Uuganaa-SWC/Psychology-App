import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/bottomTabBars/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#2f55c0",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Сэтгэл зүйн мэдлэгт",
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
