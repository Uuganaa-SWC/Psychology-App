import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainView}>
        <Animatable.View animation="fadeInDownBig" style={styles.header}>
          <Image
            source={require("../../../assets/gsmaf_logo.png")}
            style={{
              width: 70,
              height: 70,
            }}
          />
          <Text style={styles.TextStyle}>Нэвтрэх хэсэг</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUpBig" style={styles.body}>
          <Text style={styles.bodyText}>Бүртгэлтэй мэйл хаяг</Text>
          <View style={styles.emailInput}>
            <Ionicons
              name="person-circle-outline"
              size={22}
              color={"#05375a"}
            />
            <TextInput
              placeholder="Бүртгэлтэй мэйл хаягаа оруулна уу !!"
              placeholderTextColor="gray"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Ionicons
                  name="checkmark-done-circle-outline"
                  size={22}
                  color={"green"}
                  style={{ justifyContent: "flex-end" }}
                />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Та өөрийн бүргэлтэй мэйл хаягаа оруулна уу!!
              </Text>
            </Animatable.View>
          )}
          <Text style={styles.bodyText}>Нууц үг</Text>
          <View style={styles.emailInput}>
            <Ionicons name="lock-closed" size={22} color={"#05375a"} />
            <TextInput
              placeholder="Нууц үгээ оруулна уу !!"
              placeholderTextColor="gray"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Ionicons
                  name="eye-off-outline"
                  size={22}
                  color={"grey"}
                  style={{ justifyContent: "flex-end" }}
                />
              ) : (
                <Ionicons
                  name="eye-outline"
                  size={22}
                  color={"grey"}
                  style={{ justifyContent: "flex-end" }}
                />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Таны нууц үг 8 -аас дээш тэмдэгт агуулах ёстой.
              </Text>
            </Animatable.View>
          )}

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => navigation.navigate("Нүүр")}
            >
              <LinearGradient
                colors={["#6388EE", "#2f55c0"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Нэвтрэх
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#2f55c0",
  },
  TextStyle: {
    paddingLeft: 20,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  body: {
    paddingHorizontal: 20,
    flex: 8,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  emailInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "gray",
    margin: 10,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
  },
  bodyText: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 15,
    color: "#05375a",
    marginTop: 0,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
