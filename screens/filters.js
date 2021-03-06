import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../component/card';
import Product from '../component/productFor';
import Price from '../component/priceRange';
import Color from '../component/colorFillter';
export default function Filters(props) {
  return (
    <View style={styles.container}>
      <Product />
      <Card
        header={'BRANDS'}
        header1={'Parfois'}
        header2={'Adidas'}
        header3={'Imara'}
      />
      <Card
        header={'CATEGORIES'}
        header1={'Tops'}
        header2={'T-Shirts'}
        header3={'Tunics'}
      />
      <Price />
      <Color />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
