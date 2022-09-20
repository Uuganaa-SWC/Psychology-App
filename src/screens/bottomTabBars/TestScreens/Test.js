import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import MyHeaderButton from "../../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const screenWidth = Dimensions.get("window").width;
var cardWith = screenWidth - 230;
const Test = (props) => {
  const [getSearch, setSearch] = useState("");
  const [getOfficers, setOfficers] = useState([]);
  const [getFilterData, setFilterData] = useState([]);

  useEffect(() => {
    setOfficers(Questions);
    setFilterData(Questions);
  }, []);

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

  const searchFilter = (text) => {
    if (text) {
      const newData = getOfficers.filter((el) => {
        const itemData = el.questionName
          ? el.questionName.toUpperCase()
          : " ".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(getOfficers);
      setSearch(text);
    }
  };
  const Questions = [
    {
      img: require("../../../../assets/profile.jpg"),
      questionName: "Сэтгэл зүй",
      id: "1",
    },
    {
      img: require("../../../../assets/profile.jpg"),
      questionName: "Хүний эрх",
      id: "2",
    },
    {
      img: require("../../../../assets/profile1.jpg"),
      questionName: "Ажлын байр",
      id: "3",
    },
    {
      img: require("../../../../assets/profile.jpg"),
      questionName: "Ажлын байр Ажлын байр",
      id: "4",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        borderColor: "#60bde8",
        borderRadius: 20,
        margin: 1,
      }}
    >
      <View style={styles.search}>
        <Ionicons
          name="search-outline"
          size={22}
          color={"black"}
          style={{ marginRight: 10 }}
        />
        <TextInput
          value={getSearch}
          placeholder="Тест, дасгал хайлт хийх "
          placeholderTextColor="gray"
          onChangeText={(text) => searchFilter(text)}
        />
      </View>
      <FlatList
        numColumns={2}
        data={getFilterData}
        renderItem={(el) => {
          return (
            <ScrollView>
              <View style={styles.viewStyles}>
                <TouchableOpacity
                  key={el.index}
                  style={styles.buttonStyles}
                  onPress={() =>
                    props.navigation.navigate("TestSubScreen", {
                      id: el.item.id,
                      questionName: el.item.questionName,
                      img: el.item.img,
                    })
                  }
                >
                  <ImageBackground
                    source={el.item.img}
                    style={styles.imageStyles}
                  >
                    <Text style={styles.textName}>{el.item.questionName}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#60bde8",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    width: cardWith,
    height: 110,
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
    overflow: "hidden",
  },
  textName: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
  },
  search: {
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#60bde8",
    margin: 10,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  viewStyles: {
    flexDirection: "row",
    width: "50%",
  },
});
