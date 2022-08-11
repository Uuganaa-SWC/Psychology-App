import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Knowledge from "../screens/bottomTabBars/knowLedgeScreens/Knowledge";
import MainKnowLedge from "../screens/bottomTabBars/knowLedgeScreens/MainKnowLedge";

const Stack = createStackNavigator();

const KnowledgeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Knowledge"}
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#8555e8",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="Knowledge"
        component={Knowledge}
        options={({ navigation }) => ({
          title: "Сэтгэл зүйн мэдлэгт",
        })}
      />
      <Stack.Screen
        name="MainKnowLedges"
        component={MainKnowLedge}
        options={({ navigation, route }) => ({
          headerTitle: route.params.questionName,
        })}
      />
    </Stack.Navigator>
  );
};

export default KnowledgeStack;
