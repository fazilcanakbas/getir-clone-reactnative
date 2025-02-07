import React from 'react'
import { View,Text,ScrollView,TouchableOpacity } from 'react-native'
import ProductItem from "../../components/ProductItem"
import productsGetir from '@/assets/productsGetir'




export default function index() {
  return (
    //ana main view
    
    <View>

      <View>
      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white',
        }}>
          {productsGetir.slice(0,2).map((item) => (
            <ProductItem key={item.id} item={item}/>
          ))}

        </View>

            <Text style={{color:'gray',fontSize:15,fontWeight:'800',padding:14}}>Çubuk</Text>

        </View>
          <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',flex:1,backgroundColor:'white',paddingVertical:10,paddingLeft:10,}}>
          {productsGetir.slice(2).map((item) => (
            <ProductItem key={item.id} item={item}/>
          ))}
          </View>


    </View>

   
  )
}
