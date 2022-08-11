import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestQuestion = (props) => {
  return (
    <View style={styles.mainView}>
      <Text>{props.route.params.questionExplan}</Text>
    </View>
  );
};

export default TestQuestion;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#60bde8",
    borderRadius: 20,
    margin: 1,
  },
});
