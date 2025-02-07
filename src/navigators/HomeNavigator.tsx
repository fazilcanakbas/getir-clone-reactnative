import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationAction, useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { Image, StatusBar, View, Text, TouchableOpacity,Dimensions } from 'react-native';
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';


import { RouteProp } from '@react-navigation/native';
import CartScreen from "../screens/CartScreen"
import Feather from '@expo/vector-icons/Feather';
import { Product } from '../models';
const {width,height} = Dimensions.get('window')

type MyStackParamList = {
  Home: undefined;
  CategoryDetails: undefined;
  ProductDetails: { product: Product }; // Burada parametreyi belirtiyoruz
  CartScreen: undefined;
};

const tabHiddenRoutes = ['ProductDetails', 'CartScreen']; // Bu ekranlarda gizleyeceğiz
const Stack = createStackNavigator<MyStackParamList>();

function MyStack({ navigation, route }: any) {
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    if (tabHiddenRoutes.includes(routeName)) {
      // Alt navigasyon çubuğunu gizle
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      // Alt navigasyon çubuğunu göster
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
          getComponent={CategoryFilterScreen}
          options={({ navigation }) => ({
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#5C3EBC",
              height:height*0.070,
              
              
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  style={{
                    paddingBottom:30,
                    position:'absolute',
                    fontSize: 16.5,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Ürünler
                </Text>
              </View>
            ),
            
            
            headerLeft: () => (
              
              <TouchableOpacity style={{ width:width*0.26,height:35,marginLeft:width*0.02,marginBottom:22 }} onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back-sharp" size={24} color="white" />
              </TouchableOpacity>
             
            ),
            headerRight: () => (
      
                <TouchableOpacity onPress={()=> navigation.navigate("CartScreen")}style={{ width:width*0.26,height:35,backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',marginRight:width*0.015,borderRadius:9,marginBottom:33 }} >
                  <Image
                source={require("../../assets/images/cart.png")}
                style={{ width: 30, height: 30, marginLeft:5}}
                 />
                 <View style={{
                    height:33,
                    width:3.5,
                    backgroundColor:'white',
                   
                    }}>
                  </View>
                 <View style={{flex:1,height:33,backgroundColor:'#F3EFFE',
                  borderBottomRightRadius:9,
                  justifyContent:'center',
                  alignItems:'center',borderTopRightRadius:9}}>
                  

                  
                   <Text style={{color:'#5D3EBD',fontWeight:'bold',fontSize:12}}>
                   {"\u20BA"}24,00
                   </Text>
                 </View>
                  
                </TouchableOpacity>
              
            ),
          })}
        />

        <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
          options={({ navigation }) => ({
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#5C3EBC",
              height:height*0.070
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
          
        />
        <Stack.Screen
         name='CartScreen'
         component={CartScreen}
         options={({ navigation }) => ({
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#5C3EBC",
            height:height*0.070
          },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text
              style={{
                position: 'absolute',
                top: -33,
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
              Sepetim
            </Text>
          ),
          headerTitleContainerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerLeft: () => (
            <View>
              <TouchableOpacity style={{ bottom: 20, paddingLeft: 10,marginBottom:-2 }} onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View>
              <TouchableOpacity style={{bottom:20, paddingRight: 15,marginBottom:-5  }}>
              <Feather name="trash-2" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
        })}
       
     
        
        />

      </Stack.Navigator>
    </>
  );
}


export default function HomeNavigator({ navigation, route }: any) {
  return <MyStack navigation={navigation} route={route} />;
}
