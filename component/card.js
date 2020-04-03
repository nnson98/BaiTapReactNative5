import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
function Card(props) {
  return (
    <View style={styles.customview}>
      <View style={styles.view2}>
        <Text style={styles.txthearitem}>{props.header}</Text>
        <Icon type="Feather" name="more-horizontal" style={styles.hearicon} />
      </View>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.viewbrands}>
          <Text>{props.header1}</Text>
          <Icon type="Feather" name="x" style={{fontSize: 20}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewbrands}>
          <Text>{props.header2}</Text>
          <Icon type="Feather" name="x" style={{fontSize: 20}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewbrands}>
          <Text>{props.header3}</Text>
          <Icon type="Feather" name="x" style={{fontSize: 20}} />
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
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1: {
    flexDirection: 'row',
  },
  txthearitem: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  hearicon: {
    color: '#9a999b',
  },
  txtreset: {
    fontSize: 10,
    color: '#7a787b',
  },
  viewbrands: {
    flexDirection: 'row',
    padding: 8,
    marginLeft: 20,
    backgroundColor: '#f2f1f3',
    marginTop: 10,
  },
});
export default Card;
