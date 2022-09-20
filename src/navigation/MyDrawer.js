import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/HeaderButtonSreens/Profile";
import PsyOfficer from "../screens/HeaderButtonSreens/PsyOfficer";
import TermsOfService from "../screens/HeaderButtonSreens/TermsOfService/TermsOfService";
import PasswordReset from "../screens/HeaderButtonSreens/PasswordReset";
import LoginScreen from "../screens/componentScreens/LoginScreen";
import CustomDrawer from "./CustomDrawer";

import TermsOfServiceMain from "../screens/HeaderButtonSreens/TermsOfService/TermsOfServiceMain";
import BottomTabs from "./BottomTabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#ff6d00",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="Профайл"
        component={Profile}
        options={({ navigation }) => ({
          title: "Профайл",
          headerBackTitle: "Буцах",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function PsyOfficerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#ff6d00",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="Сэтгэл зүйч офицерууд"
        component={PsyOfficer}
        options={({ navigation }) => ({
          title: "Сэтгэл зүйч офицерууд",
          headerBackTitle: "Буцах",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function TermsOfServiceStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#ff6d00",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="Үйлчилгээний нөхцөл"
        component={TermsOfService}
        options={({ navigation }) => ({
          title: "Үйлчилгээний нөхцөл",
          headerBackTitle: "Буцах",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MainScreen"
        component={TermsOfServiceMain}
        options={({ navigation, route }) => ({
          headerTitle: route.params.buttonName,
          headerBackTitle: "Буцах",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function PasswordResetStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#ff6d00",
          borderBottomWidth: 2,
        },
        headerTintColor: "white",
        headerBackButtonMenuEnabled: true,
      }}
    >
      <Stack.Screen
        name="Нууц үг солих"
        component={PasswordReset}
        options={({ navigation }) => ({
          title: "Нууц үг солих",
          headerBackTitle: "Буцах",
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default () => (
  <Drawer.Navigator
    initialRouteName="Гарах"
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerStyle={{
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      width: "80%",
    }}
    drawerContentOptions={{
      activeTintColor: "#ff6d00",
      inactiveTintColor: "grey",
    }}
  >
    <Drawer.Screen
      name="Нүүр"
      component={BottomTabs}
      options={{
        swipeEnabled: false,
        drawerIcon: (config) => (
          <Ionicons name="home" size={22} color={"#ff6d00"} />
        ),
      }}
    />

    <Drawer.Screen
      name="Профайл"
      component={ProfileStack}
      options={{
        swipeEnabled: false,
        drawerIcon: (config) => (
          <Ionicons name="person-circle" size={22} color={"#ff6d00"} />
        ),
      }}
    />

    <Drawer.Screen
      name="Сэтгэл зүйч офицерууд"
      component={PsyOfficerStack}
      options={{
        swipeEnabled: false,
        drawerIcon: (config) => (
          <Ionicons name="people-circle" size={22} color={"#ff6d00"} />
        ),
      }}
    />

    <Drawer.Screen
      name="Үйлчилгээний нөхцөл"
      component={TermsOfServiceStack}
      options={{
        swipeEnabled: false,
        drawerIcon: (config) => (
          <Ionicons name="clipboard" size={22} color={"#ff6d00"} />
        ),
      }}
    />

    <Drawer.Screen
      name="Нууц үг солих"
      component={PasswordResetStack}
      options={{
        swipeEnabled: false,
        drawerIcon: (config) => (
          <Ionicons name="lock-closed" size={22} color={"#ff6d00"} />
        ),
      }}
    />

    <Drawer.Screen
      name="Гарах"
      component={LoginScreen}
      options={{
        swipeEnabled: false,
        drawerIcon: (config) => (
          <Ionicons name="exit" size={22} color={"#ff6d00"} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({});
