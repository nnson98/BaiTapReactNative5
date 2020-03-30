import React from 'react';
import {StyleSheet, Image} from 'react-native';

function CustomMarker(props) {
  return (
    <Image
      style={styles.image}
      source={
        props.pressed ? require('./circle1.png') : require('./circle.png')
      }
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
});

export default CustomMarker;
