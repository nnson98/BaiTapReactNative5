import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default function DetailProduct(props) {
  const [color, setcolor] = useState({like: false});
  const toggleLike = () => setcolor({like: !color.like});
  return (
    <TouchableOpacity
      style={[styles.viewsex, {backgroundColor: color.like ? '#e44549' : null}]}
      onPress={toggleLike}>
      <Icon type={props.type} name={props.name} />
      <Text style={styles.txtsex}>{props.txt}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
});
