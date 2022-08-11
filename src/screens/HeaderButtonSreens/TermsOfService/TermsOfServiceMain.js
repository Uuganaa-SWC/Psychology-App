import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TermsOfServiceMain = (props) => {
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
      <Text style={{ padding: 10, fontSize: 20 }}>
        1. {props.route.params.buttonName}
      </Text>
      <Text></Text>
    </View>
  );
};

export default TermsOfServiceMain;

const styles = StyleSheet.create({});
