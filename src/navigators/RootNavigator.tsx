import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/HomeScreen'

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

type CustomTabBarButtonProps = {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

function CustomTabBarButton({ children, onPress }: CustomTabBarButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 68,
        height: 68,
        backgroundColor: '#5C3EBC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        borderWidth: 2,
        marginTop:-15,
        borderColor: 'white',
      }}>
      {children}
    </TouchableOpacity>
  );
}

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AnaSayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="AnaSayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="List"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Entypo name="list" size={38} color="#FFD00C" />
            </CustomTabBarButton>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="gift" size={27} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
