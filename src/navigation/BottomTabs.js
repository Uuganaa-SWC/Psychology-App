import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import Home from "./HomeStack";
import Article from "../screens/bottomTabBars/Article";
import Research from "../screens/bottomTabBars/Research";
import KnowledgeStack from "./KnowledgeStack";
import TestStack from "./TestStack";

// Screen names
const knowledge = "Мэдлэгт";
const test = "Тест";
const settingsName = "Нийтлэл";
const homeName = "Нүүр";
const post = "Судалгаа";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#ff6d00",
        tabBarInactiveTintColor: "#341d64",
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 5,
          paddingTop: 5,
          height: 70,
          borderTopWidth: 2,
          backgroundColor: "#F8F9F9",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === knowledge) {
            iconName = focused ? "book-sharp" : "book-outline";
            size = focused ? size + 15 : size + 3;
            color = focused ? "#8555e8" : "#341d64";
          } else if (rn === test) {
            iconName = focused
              ? "checkmark-done-circle-sharp"
              : "checkmark-done-circle-outline";
            size = focused ? size + 15 : size + 3;
            color = focused ? "#60bde8" : "#341d64";
          } else if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
            size = focused ? size + 15 : size + 3;
            color = focused ? "#2f55c0" : "#341d64";
          } else if (rn === settingsName) {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
            size = focused ? size + 15 : size + 3;
            color = focused ? "#f58d3f" : "#341d64";
          } else if (rn === post) {
            iconName = focused ? "create" : "create-outline";
            size = focused ? size + 15 : size + 3;
            color = focused ? "#f73155" : "#341d64";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Тест"
        component={TestStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Мэдлэгт"
        component={KnowledgeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Нүүр"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Нийтлэл"
        component={Article}
        options={{
          headerTintColor: "white",
          headerTitle: "Нийтлэлүүд",
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "#f58d3f",
            borderBottomWidth: 2,
          },
        }}
      />
      <Tab.Screen
        name="Судалгаа"
        component={Research}
        options={{
          headerTintColor: "white",
          headerStyle: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "#f73155",
            borderBottomWidth: 2,
          },
          headerTitle: "Нэгдсэн судалгаа",
          tabBarBadge: 10,
          tabBarBadgeStyle: {
            marginTop: 3,
            marginLeft: -28,
            fontSize: 9,
            position: "absolute",
            backgroundColor: "#f7cc4a",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
