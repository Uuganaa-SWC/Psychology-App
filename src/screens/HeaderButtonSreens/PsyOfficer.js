import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PsyOfficer = () => {
  const [getSearch, setSearch] = useState("");
  const [getOfficers, setOfficers] = useState([]);
  const [getFilterData, setFilterData] = useState([]);

  useEffect(() => {
    setOfficers(officers);
    setFilterData(officers);
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = getOfficers.filter((el) => {
        const itemData = el.officerName
          ? el.officerName.toUpperCase()
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

  const officers = [
    {
      img: require("../../../assets/profile.jpg"),
      unitID: "013",
      rank: "а/х",
      officerName: "Тулга",
      phoneNumber: "88995544",
    },
    {
      img: require("../../../assets/profile.jpg"),
      unitID: "011",
      rank: "д/ч",
      officerName: "Ганбаа",
      phoneNumber: "99775223",
    },
    {
      img: require("../../../assets/profile.jpg"),
      unitID: "150",
      rank: "а/д",
      officerName: "Баяраа",
      phoneNumber: "88995544",
    },
  ];

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
      <View style={styles.search}>
        <Ionicons
          name="search-outline"
          size={22}
          color={"black"}
          style={{ marginRight: 10 }}
        />
        <TextInput
          value={getSearch}
          placeholder="Сэтгэл зүйч офицер хайх "
          placeholderTextColor="gray"
          onChangeText={(text) => searchFilter(text)}
        />
      </View>
      <Text style={styles.textOfficers}>Сэтгэл зүйч офицерууд</Text>
      <FlatList
        data={getFilterData}
        renderItem={(el) => {
          return (
            <ScrollView>
              <View key={el.index} style={styles.itemContainer}>
                <Image source={el.item.img} style={styles.imageStyle} />
                <View>
                  <Text style={styles.textName}>{el.item.unitID}-р анги</Text>
                  <Text style={styles.textPhone}>
                    {el.item.rank} {el.item.officerName} {el.item.phoneNumber}
                  </Text>
                </View>
              </View>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

export default PsyOfficer;

const styles = StyleSheet.create({
  textOfficers: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textPhone: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  },
  search: {
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f58d3f",
    margin: 10,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  itemStyle: {
    padding: 10,
  },
});

// <View style={styles.itemContainer}>
//   <Image
//     source={require("../../../assets/flag.png")}
//     style={styles.image}
//   />
//   <View>
//     <Text style={styles.textName}>124-р анги </Text>
//     <Text style={styles.textPhone}>д/ч Б.Даваа - 88552266</Text>
//   </View>
// </View>
