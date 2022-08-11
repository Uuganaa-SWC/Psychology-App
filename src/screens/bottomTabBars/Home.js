import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MyHeaderButton from "../../components/headerButton/MyHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const Home = (props) => {
  const [setAnswer, getAnswer] = useState("");

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
    <View
      style={{
        flex: 1,
        margin: 1,
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: "#2f55c0",
          padding: 10,
          borderRadius: 20,
          flex: 3,
        }}
      >
        <ScrollView>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{ color: "#341d64", fontWeight: "bold", fontSize: 16 }}
            >
              Та өнөөдөр хэр байна?
            </Text>
          </View>
          <TextInput
            style={{
              justifyContent: "flex-start",
              padding: 5,
            }}
            underlineColorAndroid="transparent"
            placeholder="Асуудлаа нууцлалтайгаар хуваалцаарай?"
            placeholderTextColor="gray"
            multiline={true}
          />
        </ScrollView>
      </View>
      <View
        style={{
          position: "relative",
          marginTop: 2,
          borderWidth: 2,
          borderColor: "#2f55c0",
          padding: 5,
          borderRadius: 20,
          flex: 7,
        }}
      >
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="happy-outline" size={24} color={"#ff6d00"} />
          <Text
            style={{
              color: "#341d64",
              fontWeight: "bold",
              fontSize: 16,
              paddingLeft: 10,
            }}
          >
            Асуумж
          </Text>
        </View>
        <Text style={{ textAlign: "justify", fontSize: 16 }}>
          Хар цагаан хоёр хаан дайтаж гэнэ. Хар хаан маргаашийн шийдвэрлэх
          тулаанд өөрийгөө ялах боловуу яах бол хэмээн шөнөжин цурам хийсэнгүй.
          Үүрээр гадагш гарахдаа үүднийхээ харуулаас би өнөөдрийн тулаанд ялах
          боловуу эсвэл ялагдах боловуу хэмээн асуужээ. Харуулын цэрэг хариуд нь
          та энэ дайнд ялна би таныг ялж байна гэж урд шөнө зүүдэлсэн хэмээн
          баяртайгаар хариулжээ. Хар хаан ихэд хилэгнэж түүнийг тэр даруйд нь
          цаазаар авахыг тушаажээ. Яагаад вэ
        </Text>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.ansButton}>
              <Text>Цэрэг унтахгүй</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ansButton}>
              <Text>Мэдэхгүй</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.ansButton}>
              <Text>Зүүд учираас</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ansButton}>
              <Text>Бүгд зөв</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ansButton: {
    position: "relative",
    borderWidth: 2,
    borderColor: "#2f55c0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginTop: 10,
    width: 180,
    alignItems: "center",
    height: "auto",
  },
});
