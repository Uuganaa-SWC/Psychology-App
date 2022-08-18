import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyHeaderButton from "../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Research = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="ios-menu"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  return (
    <View style={styles.mainView}>
      <Text>Нэгдсэн судалгаа</Text>
    </View>
  );
};

export default Research;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#f73155",
    borderRadius: 20,
    margin: 1,
  },
});
