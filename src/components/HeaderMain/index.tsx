import React from 'react';
import { StatusBar, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";
import Entypo from '@expo/vector-icons/Entypo';

function Index() {
  return (
    // <SafeAreaView style={styles.üstçentikboşluğu}>
      <View style={styles.headerMain}>
        <View style={styles.headerOne}>
          <Image style={styles.Image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
          <View style={styles.headerOneView}>
            <Text style={{fontWeight:'600',fontSize:16}}>Ev</Text>
            <Text style= {{fontWeight:'500',fontSize:13,color:'#6E7480',marginLeft:6,marginRight:3}}>Akdeniz Üniversitesi Teknik Bilimler....</Text>
            <Entypo name="chevron-small-right" size={25} color="#5D3EBD" />
          </View>
          <View style = {styles.headertwo}>
            <Text style = {{fontSize:10,fontWeight:'bold',color:'#5D3EBD'}}>TVS</Text>
            <Text style = {{fontSize:15,fontWeight:'bold',color:'#5D3EBD'}}>13<Text style = {{fontSize:17,color:'#5D3EBD'}}>dk</Text>
            </Text>
            
          </View>

        </View>
        <View>
          {/* Diğer içerikler buraya eklenebilir */}
        </View>
      </View>
    // </SafeAreaView>
  );
}

export default Index;
