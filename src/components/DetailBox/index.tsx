import React from 'react'
import { View ,Text} from 'react-native'
import { Product } from '@/src/models'

type DetailBoxProps = {
    price:number
    name:string 
    quantity:string 
}



function index({price,name,quantity}:DetailBoxProps) {
  return (
    <View style = {{
        width:'100%',
        height:40,
        backgroundColor:'white',alignItems:'center'}}>
        <Text style={{
            color:'#5D3EBD',
            fontWeight:'bold',
            marginTop:-55,
            fontSize:20,
            }}>
            <Text>{"\u20BA"}</Text>
            {price}
        </Text>
        <Text style={{
            color:'black',
            fontWeight:'700',
            fontSize:16,
            marginTop:8,
            }}>
            {name}
        </Text>
        <Text style={{
            color:'#848897',
            fontWeight:'600',
            marginTop:8
            }}>
            {quantity}
        </Text>
    </View>
  )
}





export default index