import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import Home from "../screens/bottomTabBars/Home";
import Test from "../screens/bottomTabBars/Test";
import Article from "../screens/bottomTabBars/Article";
import Knowledge from "../screens/bottomTabBars/Knowledge";
import Research from "../screens/bottomTabBars/Research";

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
        tabBarActiveTintColor: "#ff6d00",
        tabBarInactiveTintColor: "#341d64",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: {
          position: "absolute",
          height: 57,
          bottom: 10,
          right: 16,
          left: 16,
          borderRadius: 10,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: "#F8F9F9",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === knowledge) {
            iconName = focused ? "book" : "book-outline";
            size = focused ? size + 10 : size + -2;
            color = focused ? "#ff6d00" : "#341d64";
          } else if (rn === test) {
            iconName = focused
              ? "checkmark-done-circle"
              : "checkmark-done-circle-outline";
            size = focused ? size + 10 : size + -2;
            color = focused ? "#ff6d00" : "#341d64";
          } else if (rn === settingsName) {
            iconName = focused ? "newspaper" : "newspaper-outline";
            size = focused ? size + 10 : size + -2;
            color = focused ? "#ff6d00" : "#341d64";
          } else if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
            size = focused ? size + 10 : size + -2;
            color = focused ? "#ff6d00" : "#341d64";
          } else if (rn === post) {
            iconName = focused ? "create" : "create-outline";
            size = focused ? size + 10 : size + -2;
            color = focused ? "#ff6d00" : "#341d64";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Тест" component={Test} />
      <Tab.Screen name="Мэдлэгт" component={Knowledge} />
      <Tab.Screen name="Нүүр" component={Home} />
      <Tab.Screen name="Нийтлэл" component={Article} />
      <Tab.Screen
        name="Судалгаа"
        component={Research}
        options={{
          tabBarBadge: 10,
          tabBarBadgeStyle: {
            marginTop: -6,
            marginLeft: -25,
            fontSize: 10,
            position: "absolute",
            backgroundColor: "#f40057",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
