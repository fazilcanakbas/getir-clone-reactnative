import React from 'react'
import {View,Text,Dimensions,TouchableOpacity,ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import productsGetir from '@/assets/productsGetir'
import CartItem from "../../components/CartItem"
import ProductItem from '@/src/components/ProductItem'
import { connect, Connect } from 'react-redux'
import cartItems from '@/src/redux/reducers/cartItems'
import { Product } from '@/src/models'
import { addToCart } from '@/src/redux/actions/cartActions'



const {width,height} = Dimensions.get('window')

function index({cartItems}:{cartItems:{product:Product, quantity:number}[]}) {
  return (
    <View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
    <FlatList 
    style={{}}
    data={cartItems}
    renderItem={({item}) => <CartItem product={item.product} />}
    keyExtractor={(item, index) => index.toString()}
/>

 
    <Text style={{fontSize:14,fontWeight:'bold',padding:15,color:'#5d3ebd'}}>Önerilen Ürünler</Text>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} style={{backgroundColor:'white'}}>
      {productsGetir.map((item,index)=>
        <ProductItem  key={index} item={item} />
      )}
    </ScrollView>

    
    </ScrollView>
    <View style={{height:height*0.12,flexDirection:'row',alignItems:'center',paddingHorizontal:4,}}>
       <TouchableOpacity style={{
        height:height*0.06,
        flex:3,
        backgroundColor:'#5d3ebd',justifyContent:'center',
        alignItems:'center',
        marginTop:12,     
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:1,
        borderTopRightRadius:1
        }}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> Devam </Text>
       </TouchableOpacity>
       <View style={{
        flex:1,
        backgroundColor:'white',justifyContent:'center',
        alignItems:'center',
        marginTop:12,
        height:height*0.06,
        borderTopRightRadius:8,
        borderBottomRightRadius:8
        }}>
          <Text style={{color:'#5d3ebd',fontSize:15,fontWeight:'bold'}}>
            {'\u20BA'} 24,00
          </Text>
       </View>
    </View>
    </View>
  )
}
const mapStateToProps = (state: any) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToCart: (item: any) => dispatch(addToCart(item)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(index);
