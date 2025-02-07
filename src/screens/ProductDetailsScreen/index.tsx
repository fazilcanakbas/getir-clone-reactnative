import { Product } from '@/src/models';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ImageCarosuel from '../../components/ImageCarousel';
import DetailBox from '../../components/DetailBox';
import DetailProperty from '../../components/DetailProperty';
import CardButton from '../../components/CardButton';
import { ScrollView } from 'react-native-gesture-handler';

function index(props) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (props.route.params?.product) {
      setProduct(props.route.params.product);
    }
  }, [props.route.params?.product]);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View>
      <ScrollView>
        <ImageCarosuel images={product?.images} />
        <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
        <Text style={{ paddingHorizontal: 10, paddingVertical: 14, color: '#848897', fontSize: 15, fontWeight: '700' }}>
          Detaylar
        </Text>
        <DetailProperty />
        <CardButton />
      </ScrollView>
    </View>
  );
}

export default index;
