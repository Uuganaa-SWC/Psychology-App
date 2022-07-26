import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import BottomTabs from "../../navigation/BottomTabs";

const Profile = (props) => {
  return (
    <View>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/flag.png")}
              style={{ width: 30, height: 30 }}
            />
            <View></View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
