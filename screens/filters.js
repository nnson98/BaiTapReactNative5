import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '../shared/CustomMarker';
import CustomLabel from '../shared/CustomLabel';
export default function Filters() {
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = useState([0, 100]);
  const nonCollidingMultiSliderValuesChange = values =>
    setNonCollidingMultiSliderValue(values);
  const [icon, seticon] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.customview}>
        <Text style={styles.txthearitem}>PRODUCTS FOR</Text>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.viewsex}>
            <Icon
              type="AntDesign"
              name="man"
              style={{fontSize: 20, color: '#bebac2'}}
            />
            <Text style={styles.txtsex}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewsex}>
            <Icon
              type="AntDesign"
              name="woman"
              style={{fontSize: 20, color: '#bebac2'}}
            />
            <Text style={styles.txtsex}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewsex}>
            <Icon
              type="FontAwesome"
              name="intersex"
              style={{fontSize: 20, color: '#bebac2'}}
            />
            <Text style={styles.txtsex}>Both</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.customview}>
        <View style={styles.view2}>
          <Text style={styles.txthearitem}>BRANDS</Text>
          <Icon type="Feather" name="more-horizontal" style={styles.hearicon} />
        </View>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>Parfois</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>Adidas</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>Imara</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>Fyxed</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.customview}>
        <View style={styles.view2}>
          <Text style={styles.txthearitem}>CATEGORIES</Text>
          <Icon type="Feather" name="more-horizontal" style={styles.hearicon} />
        </View>
        <View style={styles.view1}>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>Tops</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>T-Shirts</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewbrands}>
            <Text>Tunics</Text>
            <Icon type="Feather" name="x" style={{fontSize: 20}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.customview}>
        <View style={styles.view2}>
          <Text style={styles.txthearitem}>PRICE RANGE</Text>
          <Text style={styles.txtreset}>RESET</Text>
        </View>
        <View style={styles.view1}>
          <View style={styles.customview2}>
            <Text style={{fontSize: 14}}>
              {nonCollidingMultiSliderValue[0]}$
            </Text>
          </View>

          <MultiSlider
            containerStyle={{height: 40}}
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
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              {nonCollidingMultiSliderValue[1]}$
            </Text>
          </View>
        </View>
      </View>
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
              style={{color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#ea97fb'}]}
            onPress={() => seticon('button2')}>
            <Icon
              type="AntDesign"
              name={icon === 'button2' ? 'check' : null}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#f6b63a'}]}
            onPress={() => seticon('button3')}>
            <Icon
              type="AntDesign"
              name={icon === 'button3' ? 'check' : null}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#ef8642'}]}
            onPress={() => seticon('button4')}>
            <Icon
              type="AntDesign"
              name={icon === 'button4' ? 'check' : null}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#e44549'}]}
            onPress={() => seticon('button5')}>
            <Icon
              type="AntDesign"
              name={icon === 'button5' ? 'check' : null}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#bf4e79'}]}
            onPress={() => seticon('button6')}>
            <Icon
              type="AntDesign"
              name={icon === 'button6' ? 'check' : null}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#70bcdb'}]}
            onPress={() => seticon('button7')}>
            <Icon
              type="AntDesign"
              name={icon === 'button7' ? 'check' : null}
              style={{color: 'white'}}
            />
          </TouchableOpacity>
        </View>
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
    //marginVertical: 8,
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
  hearicon: {
    color: '#9a999b',
  },
  txtreset: {
    fontSize: 10,
    color: '#7a787b',
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
  toucolor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 14,
  },
  customview2: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderWidth: 0,
  },
});
