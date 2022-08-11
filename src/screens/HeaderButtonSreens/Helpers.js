import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Helpers = () => {
  const helpersButton = [
    {
      id: "1",
      iconName: "checkbox-outline",
      buttonName: "Тест хэрхэн бөглөх вэ?",
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
        data={helpersButton}
        renderItem={(el) => {
          return (
            <TouchableOpacity style={styles.helpersButtonStyle}>
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

export default Helpers;

const styles = StyleSheet.create({
  helpersButtonStyle: {
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
