import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(236, 240, 241, 0.8)",
        borderRightWidth: 2,
        borderRightColor: "#4fc2f8",
      }}
    >
      <View
        style={{
          borderTopWidth: 2,
          borderTopColor: "#4fc2f8",
          marginTop: 30,
        }}
      ></View>
      <ImageBackground
        source={require("../../assets/back.jpg")}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#4fc2f8",
        }}
      >
        <View
          style={{
            margin: 10,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              marginTop: 10,
            }}
          ></Image>
          <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
            <Text
              style={{ fontSize: 16, color: "#341d64", fontWeight: "bold" }}
            >
              Дэслэгч Д.Ууганбат
            </Text>
          </View>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1, marginTop: -20 }}>
          <DrawerItemList
            {...props}
            labelStyle={{
              marginLeft: -20,
              fontSize: 17,
              color: "#341d64",
              fontWeight: "bold",
            }}
          />
        </View>
      </DrawerContentScrollView>
      <ImageBackground
        source={require("../../assets/back1.jpg")}
        style={{
          padding: 5,
          borderTopWidth: 2,
          borderTopColor: "#4fc2f8",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              opacity: 1,
              color: "#341d64",
            }}
          >
            Зэвсэгт хүчний © Программ Хангамжийн төв
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
