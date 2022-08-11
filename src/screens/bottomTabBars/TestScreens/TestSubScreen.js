import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import MyHeaderButton from "../../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const TestSubScreen = (props) => {
  const [getSearch, setSearch] = useState("");
  const [getQuesName, setQuesName] = useState([]);
  const [getFilterData, setFilterData] = useState([]);

  useEffect(() => {
    setQuesName(TestSub);
    setFilterData(TestSub);
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = getQuesName.filter((el) => {
        const itemData = el.testSubQues
          ? el.testSubQues.toUpperCase()
          : " ".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(getQuesName);
      setSearch(text);
    }
  };

  const TestSub = [
    {
      id: 1,
      testSubQues: "Стрессийн түвшин",
      questionExplan:
        "Энэхүү тестээр та өөрийн стрессийн түвшинг бүрэн тодорхойлно.",
    },
    {
      id: 2,
      testSubQues: "Сэтгэл гутрал",
      questionExplan:
        "Энэхүү тестээр та өөрийн сэтгэл гутралыг бүрэн тодорхойлно.",
    },
    {
      id: 3,
      testSubQues: "Түгшүүр",
      questionExplan:
        "Энэхүү тестээр та өөрийн түгшүүрийн түвшинг бүрэн тодорхойлно.",
    },
    {
      id: 4,
      testSubQues: "Ганцаардал",
      questionExplan:
        "Энэхүү тестээр та өөрийн ганцаардалын түвшинг бүрэн тодорхойлно.",
    },
    {
      id: 5,
      testSubQues: "Нойргүйдэл",
      questionExplan:
        "Энэхүү тестээр та өөрийн нойргүйдэл түвшинг бүрэн тодорхойлно.",
    },
  ];

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
          placeholder="Тест, дасгал хайлт хийх "
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
                    props.navigation.navigate("TestQuestion", {
                      id: el.item.id,
                      testSubQues: el.item.testSubQues,
                      questionExplan: el.item.questionExplan,
                    })
                  }
                >
                  <Ionicons
                    name="ellipse"
                    size={10}
                    color={"#60bde8"}
                    style={{ marginLeft: 5, marginRight: 10 }}
                  />
                  <Text style={styles.line}> </Text>
                  <Text style={styles.textName}>{el.item.testSubQues}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default TestSubScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#60bde8",
    borderRadius: 20,
    margin: 1,
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
  buttonStyles: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#60bde8",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  viewStyles: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  textName: {
    paddingLeft: 20,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
  },
  line: {
    width: 2,
    backgroundColor: "#60bde8",
    marginRight: 3,
    height: "100%",
  },
});
