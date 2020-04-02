import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default function renderItem(item) {
  return (
    <View style={styles.feedItem}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.container}>
        <View style={[styles.view2, styles.view]}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.timestamp}>{item.time}</Text>
          </View>
          <Icon type="Feather" name="more-horizontal" />
        </View>
        <ImageBackground source={{uri: item.image}} style={styles.imgpost}>
          <Text style={styles.txtimg}>{item.cap}</Text>
        </ImageBackground>
        <View style={[styles.viewicon, styles.view]}>
          <View style={[styles.viewicon, styles.view]}>
            <Icon type="AntDesign" name="heart" style={styles.icon} />
            <Text style={styles.txticon}>2K</Text>
          </View>
          <View style={[styles.viewicon, styles.view]}>
            <Icon
              type="MaterialCommunityIcons"
              name="comment-text-outline"
              style={styles.icon}
            />
            <Text style={[styles.viewicon, styles.view]}>98</Text>
          </View>

          <View style={[styles.viewicon, styles.view]}>
            <Icon type="AntDesign" name="sharealt" style={styles.icon} />
            <Text style={styles.txticon}>68</Text>
          </View>
        </View>
      </View>
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
    color: '#454D65',
  },
  timestamp: {
    fontSize: 11,
    color: '#C4C6CE',
    marginTop: 4,
  },
  viewicon: {
    justifyContent: 'space-around',
  },
  view2: {
    justifyContent: 'space-between',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  txticon: {
    fontSize: 16,
    marginLeft: 5,
  },
  imgpost: {
    width: undefined,
    height: 200,
    borderRadius: 8,
    marginVertical: 16,
  },
  txtimg: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
