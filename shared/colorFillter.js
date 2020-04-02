import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
export default function Color(props) {
  const [icon, seticon] = useState('');
  return (
    <View style={styles.customview}>
      <View style={styles.view2}>
        <Text style={styles.txthearitem}>COLORS</Text>
        <Text style={styles.txtreset}>RESET</Text>
      </View>
      <View style={styles.view1}>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#1bb869'}]}
          onPress={() => seticon('button1')}>
          <Icon
            type="AntDesign"
            name={icon === 'button1' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#ea97fb'}]}
          onPress={() => seticon('button2')}>
          <Icon
            type="AntDesign"
            name={icon === 'button2' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#f6b63a'}]}
          onPress={() => seticon('button3')}>
          <Icon
            type="AntDesign"
            name={icon === 'button3' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#ef8642'}]}
          onPress={() => seticon('button4')}>
          <Icon
            type="AntDesign"
            name={icon === 'button4' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#e44549'}]}
          onPress={() => seticon('button5')}>
          <Icon
            type="AntDesign"
            name={icon === 'button5' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#bf4e79'}]}
          onPress={() => seticon('button6')}>
          <Icon
            type="AntDesign"
            name={icon === 'button6' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toucolor, {backgroundColor: '#70bcdb'}]}
          onPress={() => seticon('button7')}>
          <Icon
            type="AntDesign"
            name={icon === 'button7' ? 'check' : null}
            style={styles.icon}
          />
        </TouchableOpacity>
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
  icon: {
    color: 'white',
  },
  txtreset: {
    fontSize: 10,
    color: '#7a787b',
  },
  toucolor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 14,
  },
});
