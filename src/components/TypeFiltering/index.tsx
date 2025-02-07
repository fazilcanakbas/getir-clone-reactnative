import React from 'react'
import { useState } from 'react'
import {Text,View,ScrollView,Dimensions,TouchableOpacity,} from 'react-native'

const {height,width} = Dimensions.get('window')
const TypeBox = ({setCat,item,active}:{setCat:any,item:string,active:string}) => {
    return (
        <TouchableOpacity onPress= {() =>setCat(item)}style={[{flexDirection:'row',paddingHorizontal:12,alignItems:'center',borderRadius:6,marginHorizontal:9},item==active? {backgroundColor:'#5C3EBC'}:{borderColor:'#f0eff7',borderWidth:1}]}>
          <Text style={[{fontSize:14,color:'#7849F7',fontWeight:'600',marginRight:12},item==active && {color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}
export default function index() {
    const [category,setCategory] = useState<String>("Birlikte İyi Gider")
  return (
   <View>
    <ScrollView style={{width:'100%',height:height*0.065,flexDirection:'row',paddingVertical:height*0.014,backgroundColor:'white',paddingHorizontal:6,
    borderBottomColor:'lightgrey',
    borderBottomWidth:1,
   
    
    }}
    showsHorizontalScrollIndicator={false}
    bounces={true}
    horizontal={true}>
        {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item)=>(
            <TypeBox setCat={setCategory} item = {item} active = {category}/>
        ))}
    </ScrollView>
   </View>
  )
}
