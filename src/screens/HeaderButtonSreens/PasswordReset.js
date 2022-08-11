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
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const PasswordReset = ({ navigation }) => {
  const [data, setData] = React.useState({
    password: "",
    isValidPassword: true,
  });

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
      <ScrollView style={styles.mainView}>
        <View style={styles.bodyView}>
          <Text style={styles.bodyText}>Хуучин нууц үг</Text>
          <View style={styles.passReset}>
            <Ionicons name="lock-closed-outline" size={22} color={"#f58d3f"} />
            <TextInput
              placeholder="Хуучин нууц үгээ оруулна уу !!"
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
                  color={"#f58d3f"}
                  style={{ justifyContent: "flex-end" }}
                />
              ) : (
                <Ionicons
                  name="eye-outline"
                  size={22}
                  color={"#f58d3f"}
                  style={{ justifyContent: "flex-end" }}
                />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Хуучин нууц үгээ оруулна уу !! / 8-аас дээш тэмдэгт /
              </Text>
            </Animatable.View>
          )}
          <Text style={styles.bodyText}>Шинэ нууц үг</Text>
          <View style={styles.passReset}>
            <Ionicons name="lock-closed-outline" size={22} color={"#f58d3f"} />
            <TextInput
              placeholder="Шинэ нууц үгээ оруулна уу !!"
              placeholderTextColor="gray"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Таны нууц үг 8 -аас дээш тэмдэгт агуулах ёстой.
              </Text>
            </Animatable.View>
          )}
          <Text style={styles.bodyText}>Нууц үг давтах</Text>
          <View style={styles.passReset}>
            <Ionicons name="lock-closed-outline" size={22} color={"#f58d3f"} />
            <TextInput
              placeholder="Нууц үгээ давтаж оруулна уу !!"
              placeholderTextColor="gray"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Нууц үгээ давтаж оруулна уу !!
              </Text>
            </Animatable.View>
          )}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => Alert.alert("Нууц үг амжилттай солигдлоо!!")}
            >
              <LinearGradient
                colors={["#F1AA6B", "#f58d3f"]}
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
                  Нууц үг солих
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordReset;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#f58d3f",
    borderRadius: 20,
    margin: 1,
  },
  bodyView: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  passReset: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f58d3f",
    borderRadius: 18,
    borderWidth: 2,
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
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
  passView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
