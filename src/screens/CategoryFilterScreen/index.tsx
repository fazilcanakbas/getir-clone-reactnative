import React, {useState} from 'react'
import {ScrollView,Text,Dimensions} from 'react-native'
import { Category } from '@/src/models'
import CategoryFiltering from "../../components/CategoryFiltering"
import TypeFiltering from "../../components/TypeFiltering"
import ProductItem from "../../components/ProductItem"
import ProductsContainer from "../../components/ProductsContainer"



function index(props: { route: { params: { category: Category | (() => Category) } } }) {
  const [category,setCategory] = useState<Category>(props.route.params.category)
  return (
  <ScrollView>
   <CategoryFiltering  category={category}  />
   <TypeFiltering />
   <ProductsContainer/>
  </ScrollView>
   
  )
}


export default index;
