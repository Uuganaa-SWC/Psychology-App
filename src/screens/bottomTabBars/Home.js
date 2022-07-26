import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyHeaderButton from "../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TextInput } from "react-native-gesture-handler";

const Home = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="menu"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View>
        <Text>Та өнөөдөр хэр байна</Text>
        <TextInput
          placeholder="Өөрийн сэтгэгдэлээ үлдээнэ үү"
          style={{ backgroundColor: "#f5f4f2", fontWeight: "600" }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
