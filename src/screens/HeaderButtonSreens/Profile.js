import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [getProfile, setProfile] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfile(result.uri);
    }
  };

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
      <View
        style={{
          flex: 1.5,
          backgroundColor: "#F8D1B3",
          borderTopRightRadius: 18,
          borderTopLeftRadius: 18,
          borderBottomWidth: 2,
          borderBottomColor: "#f58d3f",
          alignItems: "center",
        }}
      >
        {getProfile && (
          <Image
            source={{ uri: getProfile.uri }}
            style={{
              marginTop: 10,

              width: 120,
              height: 120,
              borderRadius: 80,
              borderWidth: 5,
              borderColor: "#f58d3f",
            }}
          />
        )}
        {getProfile === null && (
          <Image
            source={require("../../../assets/profile.jpg")}
            style={{
              marginTop: 10,

              width: 120,
              height: 120,
              borderRadius: 80,
              borderWidth: 5,
              borderColor: "#f58d3f",
            }}
          />
        )}

        <TouchableOpacity onPress={pickImage}>
          <Ionicons
            name="camera-outline"
            size={24}
            color={"black"}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: 80,
              padding: 5,
              marginTop: -35,
              marginLeft: 80,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
        }}
      ></View>
      <View
        style={{
          flex: 8,
        }}
      >
        <View style={styles.profileInput}>
          <Ionicons
            name="business-outline"
            size={22}
            color={"black"}
            style={{ marginRight: 10, opacity: 0.5 }}
          />
          <Text
            style={{
              opacity: 0.5,
              marginRight: 20,
            }}
          >
            Анги :
          </Text>
          <Text>189 - анги </Text>
        </View>
        <View style={styles.profileInput2}>
          <Ionicons
            name="person-outline"
            size={22}
            color={"black"}
            style={{ marginRight: 10, opacity: 0.5 }}
          />
          <Text
            style={{
              opacity: 0.5,
              marginRight: 5,
            }}
          >
            Албан тушаал :
          </Text>
          <Text
            style={{
              flexShrink: 1,
              textAlign: "center",
            }}
          >
            Цахилгаан холбооны сургуулийн ротын Соёл хүмүүжлийн офицер
          </Text>
        </View>
        <View style={styles.profileInput}>
          <Ionicons
            name="star-outline"
            size={22}
            color={"black"}
            style={{ marginRight: 10, opacity: 0.5 }}
          />
          <Text
            style={{
              opacity: 0.5,
              marginRight: 20,
            }}
          >
            Цол :
          </Text>
          <Text>Дэслэгч</Text>
        </View>
        <View style={styles.profileInput}>
          <Ionicons
            name="person-circle-outline"
            size={22}
            color={"black"}
            style={{ marginRight: 10, opacity: 0.5 }}
          />
          <Text
            style={{
              opacity: 0.5,
              marginRight: 20,
            }}
          >
            Нэр :
          </Text>
          <Text>Д.Ууганбат </Text>
        </View>
        <View style={styles.profileInput}>
          <Ionicons
            name="call-outline"
            size={22}
            color={"black"}
            style={{ marginRight: 10, opacity: 0.5 }}
          />
          <Text
            style={{
              opacity: 0.5,
              marginRight: 20,
            }}
          >
            Утас :
          </Text>
          <Text>88778351 </Text>
        </View>
        <View style={styles.profileInput}>
          <Ionicons
            name="mail-outline"
            size={22}
            color={"black"}
            style={{ marginRight: 10, opacity: 0.5 }}
          />
          <Text
            style={{
              opacity: 0.5,
              marginRight: 20,
            }}
          >
            И-мэйл :
          </Text>
          <Text>uuganaa@gmail.com </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileInput: {
    borderBottomWidth: 2,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f58d3f",
    margin: 10,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  profileInput2: {
    borderBottomWidth: 2,
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f58d3f",
    margin: 10,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
