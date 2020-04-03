import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '../shared/CustomMarker';
import CustomLabel from '../shared/CustomLabel';
function Price(props) {
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = useState([0, 100]);
  const nonCollidingMultiSliderValuesChange = values =>
    setNonCollidingMultiSliderValue(values);
  return (
    <View style={styles.customview}>
      <View style={styles.view2}>
        <Text style={styles.txthearitem}>PRICE RANGE</Text>
        <Text style={styles.txtreset}>RESET</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.customview2}>
          <Text style={styles.txthearitem}>
            {nonCollidingMultiSliderValue[0]}$
          </Text>
        </View>
        <MultiSlider
          selectedStyle={{backgroundColor: '#e44549'}}
          values={[
            nonCollidingMultiSliderValue[0],
            nonCollidingMultiSliderValue[1],
          ]}
          sliderLength={280}
          onValuesChange={nonCollidingMultiSliderValuesChange}
          min={100}
          max={2000}
          step={100}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          customMarker={CustomMarker}
          customLabel={CustomLabel}
        />
        <View style={styles.customview2}>
          <Text style={styles.txthearitem}>
            {nonCollidingMultiSliderValue[1]}$
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  customview: {
    borderRadius: 5,
    padding: 6,
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
  customview2: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default Price;
