import React, { useState } from 'react';
import { Dimensions, FlatList, Image, View, StyleSheet, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Index({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = React.useRef((info: { viewableItems: Array<{ index: number | null }> }) => {
    if (info.viewableItems.length > 0) {
      setActiveIndex(info.viewableItems[0].index ?? 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 20 });

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.32, 
        paddingLeft:60,
        paddingRight:40,
        paddingTop: 25,
      }}
    >
      <FlatList
        data={images}
        style={{ width: '100%', height: height * 0.2 }} 
        renderItem={({ item }) => (
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ uri: item }}
              style={{ width: width * 0.8, height: height * 0.2 }} 
              resizeMode="contain"
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5} 
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 30,
          height: 12,
          justifyContent: 'space-around',
        }}
      >
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: activeIndex === index ? '#5D3EBD' : '#F2F0FD',
              },
            ]}
          />
        ))}
      </View>

      {/* Eğer burada activeIndex gibi bir metin gösterecekseniz, bunu bir Text bileşeniyle yapmalısınız */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    top:-70,
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});
