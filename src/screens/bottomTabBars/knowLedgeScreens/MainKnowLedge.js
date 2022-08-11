import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MainKnowLedge = (props) => {
  return (
    <View style={styles.mainView}>
      <Text style={{ padding: 10 }}>{props.route.params.questionName}</Text>
    </View>
  );
};

export default MainKnowLedge;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#8555e8",
    borderRadius: 20,
    margin: 1,
  },
});
