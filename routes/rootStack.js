import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Events from '../screens/About';
import Post from '../screens/Post';
import Notifications from '../screens/Notifications';
import Account from '../screens/Account';
import Logout from '../screens/Logout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Icon} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Navigator from './homeStack';
const Drawer = createDrawerNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerContent={props => CustomDrawerContent(props)}
        options>
        <Drawer.Screen name="Feed" component={Navigator} />

        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Post" component={Post} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Account" component={Account} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewimg}>
        <Image
          style={styles.img}
          source={{
            uri:
              'https://www.tuktukdesign.com/wp-content/uploads/2020/01/profile-icon-vector.jpg',
          }}
        />
        <Text style={styles.txtName}>Christine Turner</Text>
        <Text style={styles.txtjob}>Fashion Designer</Text>
        <View />
        <View style={styles.ricon}>
          <Icon style={styles.icon} name="heart" size={10} />
          <Icon style={styles.icon} name="apps" size={10} />
        </View>
      </View>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Feed')}>
          <Icon name="paper" style={styles.icon} />
          <Text style={styles.txtitem}>Feed</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Events')}>
          <Icon type="MaterialIcons" name="event" style={styles.icon} />
          <Text style={styles.txtitem}>Events</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Post')}>
          <Icon name="camera" style={styles.icon} />
          <Text style={styles.txtitem}>Post</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Notificatons')}>
          <Icon type="Ionicons" name="ios-notifications" style={styles.icon} />
          <Text style={styles.txtitem}>Notificatons</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Account')}>
          <Icon
            type="MaterialCommunityIcons"
            name="account"
            style={styles.icon}
          />
          <Text style={styles.txtitem}>Account</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.viewscrool}>
        <TouchableOpacity
          style={styles.viewtou}
          onPress={() => props.navigation.navigate('Logout')}>
          <Icon type="AntDesign" name="logout" style={styles.icon} />
          <Text style={styles.txtitem}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  viewimg: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6c70',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  txtName: {
    fontSize: 18,
    fontStyle: 'normal',
    color: 'white',
    padding: 3,
  },
  txtjob: {
    fontSize: 12,
    color: '#ffc4c6',
  },
  ricon: {
    flexDirection: 'row',
  },
  icon: {
    padding: 3,
    fontSize: 25,
  },
  viewscrool: {
    marginLeft: 5,
  },
  viewtou: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtitem: {
    fontSize: 16,
    textAlignVertical: 'center',
    paddingLeft: 50,
  },
});
