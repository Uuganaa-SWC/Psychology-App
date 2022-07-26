import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import MyHeaderButton from "../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Test = (props) => {
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
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
