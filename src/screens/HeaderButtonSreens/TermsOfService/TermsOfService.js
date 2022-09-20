import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import TermsOfServiceMain from "./TermsOfServiceMain";

const TermsOfService = (props) => {
  const termsButton = [
    {
      id: "1",
      iconName: "reader-outline",
      buttonName: "Аппликейшн ашиглах нөхцөл",
    },
    {
      id: "2",
      iconName: "alert-circle-outline",
      buttonName: "Анхаарах зүйлс",
    },
    {
      id: "3",
      iconName: "newspaper-outline",
      buttonName: "Хүлээх үүрэг",
    },
    {
      id: "4",
      iconName: "document-attach-outline",
      buttonName: "Мэдээллийн нууцлал",
    },
    {
      id: "5",
      iconName: "bulb-outline",
      buttonName: "Оюуны өмч",
    },
    {
      id: "6",
      iconName: "help-outline",
      buttonName: "Тусламж",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: "#f58d3f",
        borderRadius: 20,
        margin: 1,
      }}
    >
      <FlatList
        data={termsButton}
        renderItem={(el) => {
          return (
            <TouchableOpacity
              style={styles.termsButtonStyle}
              onPress={() =>
                props.navigation.navigate("MainScreen", {
                  id: el.item.id,
                  buttonName: el.item.buttonName,
                })
              }
            >
              <Ionicons
                name={el.item.iconName}
                size={22}
                color={"#f58d3f"}
                style={{ marginRight: 10 }}
              />
              <Text style={styles.buttonText}>{el.item.buttonName}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TermsOfService;

const styles = StyleSheet.create({
  termsButtonStyle: {
    borderWidth: 1,
    borderColor: "#f58d3f",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 16,
  },
});
