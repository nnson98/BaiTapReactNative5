import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
function Product(props) {
  const [color, setcolor] = useState('');
  return (
    <View style={styles.customview}>
      <Text style={styles.txthearitem}>PRODUCTS FOR</Text>
      <View style={styles.view1}>
        <TouchableOpacity
          style={[
            styles.viewsex,
            {backgroundColor: color === 'but1' ? '#e44549' : null},
          ]}
          onPress={() => setcolor('but1')}>
          <Icon type="AntDesign" name="man" style={styles.icon} />
          <Text style={styles.txtsex}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.viewsex,
            {backgroundColor: color === 'but2' ? '#e44549' : null},
          ]}
          onPress={() => setcolor('but2')}>
          <Icon type="AntDesign" name="woman" style={styles.icon} />
          <Text style={styles.txtsex}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.viewsex,
            {backgroundColor: color === 'but3' ? '#e44549' : null},
          ]}
          onPress={() => setcolor('but3')}>
          <Icon type="FontAwesome" name="intersex" style={styles.icon} />
          <Text style={styles.txtsex}>Both</Text>
        </TouchableOpacity>
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
  viewsex: {
    marginTop: 10,
    flexDirection: 'row',
    padding: 8,
    marginLeft: 30,
  },
  txtsex: {
    color: '#bebac2',
    marginLeft: 10,
    fontSize: 18,
  },
  viewbrands: {
    flexDirection: 'row',
    padding: 8,
    marginLeft: 20,
    backgroundColor: '#f2f1f3',
    marginTop: 10,
  },
});
export default Product;
