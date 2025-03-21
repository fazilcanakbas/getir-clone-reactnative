import React from 'react'
import {View,Text,Image,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { Product } from '@/src/models';
import { RootParamList } from '../../../types'; 
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { connect } from 'react-redux';
import *as actions from "../../redux/actions/cartActions"
import index from '@/src/screens/ProductDetailsScreen';

const {width,height} =Dimensions.get ('window')
type ProductItemProps = {
    item: Product;
    addItemToCart: (a: Product) => void;
  };
  
  const ProductItem = ({ item, addItemToCart }: ProductItemProps) => {
    const navigation = useNavigation<NavigationProp<RootParamList, 'ProductDetails'>>();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetails",{product:item})

    }
     style={{
        width:width*0.28,
        marginTop:12,
        height:height*0.23,
        marginLeft:12,
        marginBottom:20}}>
        <Image style={{
        width:width*0.28,
        height:width*0.28,
        borderRadius:15,
        borderWidth:0.2,
        borderColor:'gray'}} 
        source={{uri:item.image}}/>
        <View style={{
            flexDirection:'row',
            marginTop:10,
            alignItems:'center',}}>
            <Text style={{
                fontSize:12,
                color:"#747990",textDecorationLine:'line-through'}}>
                <Text>{"\u20BA"}</Text>{item.fiyat}
            </Text>
            <Text style={{
                color:'#5C3EBC',
                fontWeight:'bold',
                fontSize:13,
                marginLeft:4
            }}>
            <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
            </Text>
        </View>
        
        <Text style={{fontSize:13,fontWeight:'700',marginTop:4}}>
            {item.name}
        </Text>
        <Text style={{color:'#747990', fontSize:12,marginTop:4,fontWeight:500}}>{item.miktar}</Text>
        <TouchableOpacity onPress={() => {
            console.log("Adding item to cart:", item);
            addItemToCart(item)}} style={{
            width:35,
            height:35,
            shadowRadius:5,
            shadowOpacity:1,
            borderWidth:1,
            borderColor:'lightgray',backgroundColor:'white',position:'absolute',
            right:-6,
            top:-6,
            borderRadius:6,

            justifyContent:'center',
            alignItems:'center',}}>
        <Entypo name="plus" size={24} color="#5C3EBC"/>

        </TouchableOpacity>
    </TouchableOpacity>
  )
}
const mapDispatchToProps = (dispatch: any) => {
    return {
      addItemToCart: (product: Product) =>
        dispatch(actions.addToCart({ quantity: 1, product })) 
    };
  };


export default connect(null, mapDispatchToProps)(index);
