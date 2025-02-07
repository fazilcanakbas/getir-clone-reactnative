import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const { width, height } = Dimensions.get('window')

function index() {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçaçıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler"
  ])

  const TextComponent = ({ detail,index }: { detail: string,index:number }) => {
    return (
      <View style={{
        paddingVertical:12,
        borderBottomWidth:index === details.length -1 ? 0: 0.4 ,
        borderBottomColor:'lightgray',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        
    }}  >
        <Text style={{
        color:index === 0 ? 'black:': '#687482',
        fontSize:index === 0 ?  13 : 15,
        fontWeight:index === 0 ? '600' : '600',
    }}>{detail}</Text>
        {index != 0 && <Feather name="chevron-down" size={24} color="#9f9f9f" /> }
      </View>
    )
  }

  return (
    <View style={{
        backgroundColor:'white',
        paddingHorizontal:16,
        paddingVertical:8

    }}>
      {details.map((item, index) => {
        return <TextComponent key={index} index={index} detail={item} /> // return ekledim ve key prop ekledim
      })}
    </View>
  )
}

export default index
