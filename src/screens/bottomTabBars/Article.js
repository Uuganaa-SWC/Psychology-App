import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import MyHeaderButton from "../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Article = (props) => {
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
      <Text>Article</Text>
    </View>
  );
};

export default Article;
