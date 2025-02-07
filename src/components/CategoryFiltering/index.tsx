import React, { useState } from 'react';
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import categoriesGetir from '../../../assets/categoriesGetir';
import { Category } from '../../models';

const { height } = Dimensions.get('window');

const CategoryBox = ({ active, item, onPress }: { active: string; item: string; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            flexDirection: 'row',
            height:'100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
            
          },
          item === active && { borderBottomColor: '#FFD00C', borderBottomWidth: 2.5 },
        ]}
      >
        <Text style={{ fontSize: 15, color: 'white', fontWeight: '800',textAlign:'center' }}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

function Index({ category }: { category: Category }) {
  const [categories, setCategories] = useState(categoriesGetir);
  const [activeCategory, setActiveCategory] = useState<string>(''); // Başlangıçta boş

  return (
    <ScrollView
      style={{ width: '100%' }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      contentContainerStyle={{ height: height * 0.065, backgroundColor: '#7849F7' }}
    >
      {categories.map((item) => (
        <CategoryBox
          key={item.name}
          item={item.name}
          active={activeCategory}
          onPress={() => setActiveCategory(item.name)} // Seçilen kategori
        />
      ))}
    </ScrollView>
  );
}

export default Index;
