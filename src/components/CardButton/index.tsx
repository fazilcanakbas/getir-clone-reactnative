import React from 'react'
import {View,Text,Dimensions,TouchableOpacity} from 'react-native'

const {width,height} = Dimensions.get('window')

export default function index() {
  return (
    <TouchableOpacity style={{
        justifyContent:'center',
        marginTop:40,
        height:height*0.1,
        width:'100%',
        backgroundColor:'white',
    }}>
        <View style={{
        alignItems:'center',
        justifyContent:'center',
        height:height*0.06,
        width:'90%',
        backgroundColor:'#5D39C1',
        marginHorizontal:'5%',
        borderRadius:8
    }}>
        <Text style = {{
            fontWeight:'bold',
            color:'white',
            fontSize:16,
        }}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  )
}
