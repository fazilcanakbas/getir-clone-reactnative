import React,{useState} from 'react'
import {View,StyleSheet} from 'react-native'
import Fazilcan from "../Fazilcan"
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'
import { useNavigation } from 'expo-router'
import CategoryFilterScreen from "../../screens/CategoryFilterScreen"

export default function Index() {
    const [Categories,setCategories] =useState<Category[]>(categoriesGetir)

  return (
    <View>
        <View style = {styles.listContainer}>
            {
                Categories.map((item)=>(
                    <Fazilcan key={item.id} item={item} />
            ))
            }





            
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    listContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap'

    }

})