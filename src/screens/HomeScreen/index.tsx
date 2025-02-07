import React from 'react';
import HeaderMain from "../../components/HeaderMain"
import BannerCarosuel from "../../components/BannerCarosuel"
import MainCategories from "../../components/mainCategories"
import { ScrollView } from 'react-native'

function Index() {


  return (
    
      <ScrollView stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
        
        <HeaderMain/>
        <BannerCarosuel />
        <MainCategories/>
      
      </ScrollView>

  );
}

export default Index;
