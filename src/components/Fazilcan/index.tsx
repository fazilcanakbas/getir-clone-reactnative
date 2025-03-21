import { Category } from '@/src/models';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from "../../../types"

const { width, height } = Dimensions.get('window');

type FazilcanProps = {
  item: Category;
};

function index({ item }: FazilcanProps) {
 
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails",{Category:item})}
      style={{
        width: width * 0.25,
        height: width * 0.25,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
      }}
    >
      <Image
        style={{
          width: width * 0.18,
          height: width * 0.18,
          borderRadius: 8,
        }}
        source={{ uri: item.src }}
      />
      <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

export default index;
