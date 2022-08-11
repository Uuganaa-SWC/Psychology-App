import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyHeaderButton from "../../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MainKnowLedge from "./MainKnowLedge";

const Knowledge = (props) => {
  const Questions = [
    {
      img: require("../../../../assets/profile.jpg"),
      questionName: "Сэтгэл зүйн гэмтэл",
      id: "1",
    },
    {
      img: require("../../../../assets/back.jpg"),
      questionName: "Өөрийгөө үнэлэх тухай",
      id: "2",
    },
    {
      img: require("../../../../assets/profile1.jpg"),
      questionName: "Хамт олны уур амьсгал",
      id: "3",
    },
    {
      img: require("../../../../assets/logo.png"),
      questionName: "Ажлын байрны асуудал",
      id: "4",
    },
    {
      img: require("../../../../assets/hee1.png"),
      questionName: "Ажлын байрны асуудал",
      id: "5",
    },
    {
      img: require("../../../../assets/flag.png"),
      questionName: "Ажлын байрны асуудал",
      id: "6",
    },
  ];

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

  return (
    <View style={styles.mainView}>
      <View style={styles.search}>
        <Ionicons
          name="search-outline"
          size={22}
          color={"black"}
          style={{ marginRight: 10 }}
        />
        <TextInput
          value={getSearch}
          placeholder="Сэтгэл зүйн мэдлэгт асуулт хайх "
          placeholderTextColor="gray"
          onChangeText={(text) => searchFilter(text)}
        />
      </View>
      <FlatList
        data={getFilterData}
        renderItem={(el) => {
          return (
            <ScrollView>
              <View style={styles.viewStyles}>
                <TouchableOpacity
                  key={el.index}
                  style={styles.buttonStyles}
                  onPress={() =>
                    props.navigation.navigate("MainKnowLedges", {
                      id: el.item.id,
                      questionName: el.item.questionName,
                      img: el.item.img,
                    })
                  }
                >
                  <Image source={el.item.img} style={styles.imageStyles} />
                  <Text style={styles.line}> </Text>
                  <Text style={styles.textName}>{el.item.questionName}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default Knowledge;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#8555e8",
    borderRadius: 20,
    margin: 1,
  },
  buttonStyles: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8555e8",
    alignItems: "center",
    width: "100%",
    height: 80,
  },
  imageStyles: {
    resizeMode: "stretch",
    borderRadius: 7,
    width: "30%",
    height: "100%",
  },
  textName: {
    padding: 5,
    flexShrink: 1,
    fontSize: 17,
    fontWeight: "600",
  },
  search: {
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#8555e8",
    margin: 10,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  viewStyles: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  line: {
    width: 2,
    backgroundColor: "#8555e8",
    marginRight: 3,
    height: "100%",
  },
});
