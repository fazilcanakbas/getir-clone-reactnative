import { Product } from '@/src/models'
import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

type CartItemProps = {
  product: Product
}

function index({ product }: CartItemProps) {
  return (
    <View style={{width:'100%',backgroundColor:'white'}}>
      <View style={{
        borderBottomWidth: 0.4,
        borderBottomColor: 'lightgray', 
        height: height * 0.13, 
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:width*0.92,
        marginHorizontal:width*0.04,

      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{borderWidth:0.45,borderColor:'lightgray',borderRadius:8,padding:10}}>

          <Image style={{ height: height * 0.09, width: height * 0.09 }} source={{ uri: product.image }} />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', maxWidth: width * 0.45 }}>{product.name}</Text>
            <Text style={{ fontSize: 12, marginTop: 3, color: '#848887', fontWeight: '600' }} >{product.miktar}</Text>
            <Text style={{ color: '#5C3EBC', fontWeight: 'bold', fontSize: 15, marginTop: 4 }}>{"\u20BA"}{product.fiyat}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: width * 0.21, borderColor: 'lightgrey', borderWidth: 0.5, height: height * 0.037, borderRadius: 10 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>-</Text>
          </View>
          <View style={{ shadowOpacity: 0.04, shadowRadius: 7, shadowColor: 'black', flex: 1, alignItems: 'center', backgroundColor: '#5C3EBC', height: height * 0.037, justifyContent: 'center', elevation: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>1</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }} >
            <Text>+</Text>
          </View>
        </View>
      </View>

    </View>


  )
}

export default index
