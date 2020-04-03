import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default function DetailColor(props) {
  const [check, setcheck] = useState({like: false});
  const toggleCheck = () => setcheck({like: !check.like});
  return (
    <TouchableOpacity
      style={[styles.toucolor, {backgroundColor: props.color}]}
      onPress={toggleCheck}>
      <Icon
        type="AntDesign"
        name={check.like ? 'check' : null}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  toucolor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 14,
  },
});
