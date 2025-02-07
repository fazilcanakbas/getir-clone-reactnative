import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationAction, useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { Image, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Parametreler için tipler tanımlanacak
type MyStackParamList = {
  Home: undefined;
  CategoryDetails: undefined;
  ProductDetails: undefined;
};

type HomeNavigatorProps = {
  navigation: StackNavigationProp<MyStackParamList, 'Home'>;
  route: RouteProp<MyStackParamList, 'Home'>;
};

const tabHiddenRoutes = ["ProductDetails"];
const Stack = createStackNavigator();

function MyStack({ navigation, route }: HomeNavigatorProps) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName && tabHiddenRoutes.includes(routeName)) {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <>
      {useIsFocused() && (
        <StatusBar backgroundColor="#5C3EBC" barStyle="light-content" />
      )}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: "#5C3EBC", height: 60 },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                source={require("../../assets/getirlogo.png")}
                style={{ width: 70, height: 30, marginBottom: 35 }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="CategoryDetails"
          component={CategoryFilterScreen}
          options={({ navigation }) => ({
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#5C3EBC",
              height: 70,
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Text
                style={{
                  position: 'absolute',
                  top: -45,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Ürünler
              </Text>
            ),
            headerTitleContainerStyle: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            headerLeft: () => (
              <View>
                <TouchableOpacity style={{ paddingLeft: 10, bottom: 25 }} onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back-sharp" size={24} color="white" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />

        <Stack.Screen
          options={({ navigation }) => ({
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#5C3EBC",
              height: 80,
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Text
                style={{
                  position: 'absolute',
                  top: -45,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Ürün Detayı
              </Text>
            ),
            headerTitleContainerStyle: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            headerLeft: () => (
              <View>
                <TouchableOpacity style={{ bottom: 25, paddingLeft: 10 }} onPress={() => navigation.goBack()}>
                  <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ paddingRight: 10, marginVertical: -35 }}>
                  <AntDesign name="heart" size={24} color="#32177a" />
                </TouchableOpacity>
              </View>
            ),
          })}
          name="ProductDetails"
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </>
  );
}

function HomeNavigator({ navigation, route }: HomeNavigatorProps) {
  return <MyStack navigation={navigation} route={route} />;
}

export default(HomeNavigator);
