import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ProgressBarAndroid,
} from 'react-native';
import {Icon} from 'native-base';

export default function Filters() {
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
          <Text style={{marginLeft: 10, fontSize: 18}}>X</Text>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            style={{marginLeft: 10, width: '80%', height: '100%'}}
          />
          <Text style={{fontSize: 18, marginLeft: 10}}>Y</Text>
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
          />
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#ea97fb'}]}
          />
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#f6b63a'}]}
          />
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#ef8642'}]}
          />
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#e44549'}]}
          />
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#bf4e79'}]}
          />
          <TouchableOpacity
            style={[styles.toucolor, {backgroundColor: '#70bcdb'}]}
          />
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
});
