import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {Icon} from 'native-base';
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
        renderItem={({item}) => (
          <View style={styles.feedItem}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View style={styles.view1}>
              <View style={styles.view2}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.timestamp}>{item.time}</Text>
                </View>
                <Icon type="Feather" name="more-horizontal" size={24} />
              </View>
              <ImageBackground
                source={{uri: item.image}}
                style={styles.imgpost}>
                <Text style={styles.txtimg}>{item.cap}</Text>
              </ImageBackground>
              <View style={styles.viewicon}>
                <View style={styles.viewicon}>
                  <Icon type="AntDesign" name="heart" style={styles.icon} />
                  <Text style={styles.txticon}>2K</Text>
                </View>
                <View style={styles.viewicon}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="comment-text-outline"
                    style={styles.icon1}
                  />
                  <Text style={styles.txticon}>98</Text>
                </View>

                <View style={styles.viewicon}>
                  <Icon type="AntDesign" name="sharealt" style={styles.icon1} />
                  <Text style={styles.txticon}>68</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
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
  feedItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 6,
    flexDirection: 'row',
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#454D65',
  },
  timestamp: {
    fontSize: 11,
    color: '#C4C6CE',
    marginTop: 4,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgpost: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginVertical: 16,
    flexDirection: 'row',
  },
  viewicon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: 20,
    color: 'red',
  },
  icon1: {
    fontSize: 20,
  },
  txticon: {
    fontSize: 16,
    marginLeft: 5,
  },
  txtimg: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
