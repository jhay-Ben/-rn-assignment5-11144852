import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homescreen';
import SettingsScreen from './screens/settingscreen.js';
import MyCards from './screens/mycards.js';
import Statistics from './screens/statistics.js';



const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
initialRouteName="Home"
screenOptions={{
  tabBarStyle: { height: 100 },
  tabBarLabelStyle: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 13,
  },
}}
>
<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarLabel: "Home",
    tabBarIcon: ({ size }) => (
      <Image
        source={require("./assets/home.png")}
        style={{
          width: size,
          height: size,
          marginTop: 10,
        }}
      />
    ),
  }}
/>
<Tab.Screen
  name="My Cards"
  component={MyCards}
  options={{
    tabBarLabel: "My Cards",
    tabBarIcon: ({ size }) => (
      <Image
        source={require("./assets/myCards.png")}
        style={{
          width: size,
          height: size,
          marginTop: 10,
        }}
      />
    ),
  }}
/>
<Tab.Screen
  name="Statistics"
  component={Statistics}
  options={{
    tabBarLabel: "Statistics",
    tabBarIcon: ({ size }) => (
      <Image
        source={require("./assets/statictics.png")}
        style={{
          width: size,
          height: size,
          marginTop: 10,
        }}
      />
    ),
  }}
/>
<Tab.Screen
  name="Settings"
  component={SettingsScreen}
  options={{
    tabBarLabel: "Settings",
    tabBarIcon: ({ size }) => (
      <Image
        source={require("./assets/settings.png")}
        style={{
          width: size,
          height: size,
          marginTop: 10,
        }}
      />
    ),
  }}
/>
</Tab.Navigator>
</NavigationContainer>

);
};