import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import DetailProduct from '../shared/detailproduct';

function Product(props) {
  return (
    <View style={styles.customview}>
      <Text style={styles.txthearitem}>PRODUCTS FOR</Text>
      <View style={styles.view1}>
        <DetailProduct but="but1" type="AntDesign" name="man" txt="Men" />
        <DetailProduct but="but2" type="AntDesign" name="woman" txt="Women" />
        <DetailProduct
          but="but3"
          type="FontAwesome"
          name="intersex"
          txt="Both"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  customview: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 6,
  },
  view1: {
    flexDirection: 'row',
  },
});
export default Product;
