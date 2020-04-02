import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import renderItem from '../shared/renderItem';
export default function Feed({navigation}) {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Son',
      avatar:
        'https://anhdepfree.com/wp-content/uploads/2019/01/avatar-den-bo-vest-dep_015639142.jpg',
      cap: 'Parfois women light brown straw hat',
      image:
        'https://anhdepfree.com/wp-content/uploads/2019/01/avatar-den-bo-vest-dep_015639142.jpg',
      time: '3h',
    },
    {
      id: '2',
      name: 'Hoa',
      avatar:
        'https://img.lovepik.com/original_origin_pic/18/08/28/7de83194e0426999d5416119f632c7c3.png_wh860.png',
      cap: 'Vacation',
      image:
        'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_11_22/image003_4.jpg',
      time: '3h',
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.feed}
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.customTou}
        onPress={() => navigation.navigate('Filters')}>
        <Icon type="AntDesign" name="filter" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feed: {
    marginHorizontal: 16,
  },
  customTou: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#da4a4f',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  icon: {
    fontSize: 30,
    color: 'white',
    marginLeft: 15,
  },
});
