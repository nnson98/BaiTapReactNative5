import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import DetailColor from '../shared/detailColor';
export default function Color(props) {
  const [icon, seticon] = useState('');
  return (
    <View style={styles.customview}>
      <View style={styles.view2}>
        <Text style={styles.txthearitem}>COLORS</Text>
        <Text style={styles.txtreset}>RESET</Text>
      </View>
      <View style={styles.view1}>
        <DetailColor color="#1bb869" button="button1" />
        <DetailColor color="#ea97fb" button="button2" />
        <DetailColor color="#f6b63a" button="button3" />
        <DetailColor color="#ef8642" button="button4" />
        <DetailColor color="#e44549" button="button5" />
        <DetailColor color="#bf4e79" button="button6" />
        <DetailColor color="#70bcdb" button="button7" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  customview: {
    borderRadius: 5,
    padding: 6,
  },
  view1: {
    flexDirection: 'row',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txthearitem: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  txtreset: {
    fontSize: 10,
    color: '#7a787b',
  },
});
